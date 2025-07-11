import React, { useEffect, useState } from 'react';
import { auth, firestore } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Spinner from '../components/Others/Spinner.tsx';
import CVBuilderModal from '../components/Modals/CVBuilderModal';
import { FaFileAlt } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const [showCVBuilderModal, setShowCVBuilderModal] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>(''); // Nombre del usuario
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndFetchUserData = () => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userDocRef = doc(firestore, 'usuarios', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData.nombre || 'Usuario'); // Obtener el nombre del usuario
            if (userData.isFirstLogin) {
              setShowCVBuilderModal(true);
            } else {
              setShowContent(true);
            }
          } else {
            console.error('El documento del usuario no existe.');
            setShowContent(true);
          }
          setLoading(false);
        } else {
          navigate('/login');
          setLoading(false);
        }
      });
      return unsubscribe;
    };

    checkAuthAndFetchUserData();
  }, [navigate]);

  const handleCloseCVBuilderModal = async () => {
    setShowCVBuilderModal(false);
    if (auth.currentUser) {
      const userDocRef = doc(firestore, 'usuarios', auth.currentUser.uid);
      await updateDoc(userDocRef, { isFirstLogin: false });
    }
    setShowContent(true);
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
    );
  }

  return (
      <div className="font-sans">
        {/* Modal CVBuilder */}
        {showCVBuilderModal && (
            <CVBuilderModal onClose={handleCloseCVBuilderModal} />
        )}

        {/* Contenido principal */}
        {showContent && (
            <>
              {/* Sección de bienvenida y consejos */}
              <section className="flex flex-row gap-6 p-6 max-w-7xl mx-auto">
                {/* Tarjeta de bienvenida */}
                <div className="flex-1 bg-blue-600 text-white rounded-xl p-6 min-w-0">
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Hola {userName}, <br />
                    <span className="font-bold">Bienvenido</span> a potenciar tu conocimiento con Prelaboral
                  </h2>
                </div>

                {/* Tarjeta de consejos y herramientas */}
                <div className="flex-1 bg-gray-900 text-white rounded-xl p-6 flex flex-col justify-between border-2 border-blue-600 min-w-0">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">Nutre tu CV día a día</h3>
                    <p className="text-lg italic mt-2">Al ver este contenido tu CV crece, te posicionas y te haces elegible para empresas</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200"
                        onClick={() => setShowCVBuilderModal(true)} // Abrir el modal CVBuilder
                    >
                      <FaFileAlt className="text-lg" />
                      Ver y actualizar mi CV
                    </button>
                    <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                  +30 videos
                </span>
                  </div>
                </div>
              </section>

            </>
        )}
      </div>
  );
};

export default HomePage;