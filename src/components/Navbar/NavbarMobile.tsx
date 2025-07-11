import React, { useState, useEffect, useRef } from 'react';
import { Menu } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

const NavbarMobile: React.FC = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false); // si el usuario está logueado  
    const [dropdownOpen, setDropdownOpen] = useState(false); // si el menú está abierto  
    const dropdownRef = useRef<HTMLDivElement>(null); // para detectar clics fuera del menú  

    useEffect(() => {
        // Verificar si el usuario está autenticado
        auth.onAuthStateChanged((user) => {
            setIsAuthenticated(!!user);
        });

        // Cerrar el dropdown si se hace clic fuera de él
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Cerrar sesion
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/'); // Redirige a la página de inicio de sesión al cerrar sesión
        });
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Aqui comienza el código
    return (
        // Define el navbarMobile
        <nav className="bg-white pl-4 py-2 pr-2 flex justify-between items-center"
        style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.03)' }}>     

            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="/logos_prelaboral/Logo_PreLaboral_NegroPlayTransparente.png"
                    alt="PreLaboral Logo"
                    className="h-14 cursor-pointer"
                    onClick={() => navigate('/')}
                />
            </div>

            {/* si esta autenticado */}
            {isAuthenticated ? (
                // Perfil
                <div className="flex items-center gap-2 relative">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="flex items-center gap-2 focus:outline-none"
                        >
                            <img
                                src="/recursos_graficos/logo_universidad_ofertante.png"
                                alt="Perfil"
                                className="w-[50px] h-[50px] rounded-full border-2"
                                style={{ borderColor: '#00D5E8' }}
                            />
                            {/* Menú hamburguesa solo en mobile */}
                            <button className="md:hidden"
                                onClick={toggleDropdown}>
                                <Menu className="w-6 h-6" />

                            </button>

                        </button>
                        {/* Menu Perfil */}
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
                // TODO: Verificar iniciar sesión
                <div className="flex gap-4">
                    {/* Botón "Iniciar sesión" */}
                    <button
                        className="px-4 py-2 rounded-full font-semibold text-white hover:opacity-90"
                        style={{ backgroundColor: '#170F49' }}
                        onClick={() => navigate('/login')}
                    >
                        Iniciar sesión
                    </button>
                    {/* Botón "Regístrate" 
          <button
            className="px-4 py-2 rounded-full font-semibold text-black hover:opacity-90"
            style={{ backgroundColor: '#00CFF1' }}
            onClick={() => navigate('/register')}
          >
            Regístrate
          </button>
          */}
                </div>

            )}
        </nav>
    );
};

export default NavbarMobile;
