import React, { useState } from 'react';
import CVModal from './CVModal.tsx';

const ProfileAdaptation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Nos adaptamos según tu perfil</h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Empresa Card */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col items-center">
          <img src="/recursos_graficos/Empresa.png" alt="Empresa" className="h-32 w-auto mb-6" />
          <h3 className="text-xl font-semibold mb-4">Empresa</h3>
          <p className="text-gray-700 mb-6">
            Encuentra los profesionales que necesitas
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside mb-8">
            <li>Seguimiento a ofertas publicadas</li>
            <li>Publicidad</li>
            <li>Publicidad Publicidad Publicidad</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600">
            Publicar ofertas
          </button>
        </div>

        {/* Postulantes Card */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-md flex flex-col items-center">
          <img src="/recursos_graficos/Postulantes.png" alt="Postulante" className="h-32 w-auto mb-6" />
          <h3 className="text-xl font-semibold mb-4">Postulantes</h3>
          <p className="text-gray-700 mb-6">
            Mejora tu CV y encuentra el trabajo que deseas
          </p>
          <ul className="text-gray-600 text-sm list-disc list-inside mb-8">
            <li>Potente generador de CV con excelentes plantillas</li>
            <li>Más fácil y rápido que un editor convencional</li>
            <li>¡Consejos de profesionales para ser contratado más rápido!</li>
          </ul>
          <button onClick={openModal} className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600">
            Mejorar CV
          </button>
        </div>
      </div>

      <CVModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ProfileAdaptation;
