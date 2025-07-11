import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Hook para implementar debounce
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const NavbarDesktop: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  // Debounce para evitar múltiples consultas rápidas
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Verificar autenticación y manejar clics fuera de los dropdowns
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manejar cierre de sesión
  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/');
    });
  };

  // Alternar el dropdown de perfil
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Realizar la búsqueda en Firestore
  const performSearch = useCallback(async (queryText: string) => {
    if (!queryText.trim()) {
      setSearchResults([]);
      setShowSearchDropdown(false);
      return;
    }

    try {
      const keywords = queryText.split(' ').map((k) => k.trim().toLowerCase());
      const areasRef = collection(firestore, 'learningAreas');
      const q = query(areasRef, where('keywords', 'array-contains-any', keywords));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setSearchResults(results);
      setShowSearchDropdown(true);
    } catch (error) {
      console.error('Error al buscar videos:', error);
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  }, []);

  // Efecto para ejecutar la búsqueda cuando cambia el valor debounced
  useEffect(() => {
    performSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, performSearch]);

  // Actualizar el valor del campo de búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Navegar a la pantalla del video al seleccionar un área
  const handleSelectArea = (areaId: string) => {
    setShowSearchDropdown(false);
    navigate(`/video/${areaId}`);
  };

  return (
      <nav style={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.03)' }} className="bg-white p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
              src="/logos_prelaboral/Logo_PreLaboral_NegroPlayTransparente.png"
              alt="PreLaboral Logo"
              className="w-40 cursor-pointer"
              onClick={() => navigate('/')}
          />
        </div>

        {/* Buscador */}
        <div className="flex-1 max-w-xl mx-6 relative">
          <input
              type="text"
              placeholder="Buscar"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-blue-50 focus:outline-none"
              style={{ backgroundColor: '#EAEFF8' }}
              value={searchQuery}
              onChange={handleSearchChange}
          />

          {/* Dropdown flotante de resultados */}
          {showSearchDropdown && (
              <div
                  ref={searchDropdownRef}
                  className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto"
              >
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <div
                            key={result.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectArea(result.id)}
                        >
                          {result.name}
                        </div>
                    ))
                ) : (
                    <div className="px-4 py-2 text-gray-500">No se encontraron resultados</div>
                )}
              </div>
          )}
        </div>

        {/* Sección de usuario autenticado */}
        {isAuthenticated ? (
            <div className="flex items-center gap-4 relative">
              <div className="relative mr-5" ref={dropdownRef}>
                <button className="flex items-center gap-2 focus:outline-none" onClick={toggleDropdown}>
                  <img
                      src="/recursos_graficos/logo_universidad_ofertante.png"
                      alt="Perfil"
                      className="w-[46px] h-[46px] rounded-full border-2"
                      style={{ borderColor: '#00D5E8' }}
                  />
                  <span className="text-gray-800 text-[16px] font-medium ml-3">Mi perfil</span>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      <button
                          onClick={() => navigate('/home')}
                          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Home
                      </button>
                      <button
                          onClick={() => navigate('/profile')}
                          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Ver perfil
                      </button>
                      <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                )}
              </div>
            </div>
        ) : (
            <div className="flex gap-4">
              <button
                  className="px-4 py-2 rounded-full font-semibold text-white hover:opacity-90"
                  style={{ backgroundColor: '#170F49' }}
                  onClick={() => navigate('/login')}
              >
                Iniciar sesión
              </button>
              <button
                  className="px-4 py-2 rounded-full font-semibold text-black hover:opacity-90"
                  style={{ backgroundColor: '#00CFF1' }}
                  onClick={() => navigate('/register')}
              >
                Regístrate
              </button>
            </div>
        )}
      </nav>
  );
};

export default NavbarDesktop;