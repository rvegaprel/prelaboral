import React, { useState } from 'react';
import PlansModal from './PlansModal';

const Plans: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Texto y botón */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Planes</h2>
          <p className="text-gray-700 text-sm mb-6">
            Accede a una muestra gratuita y aprende de profesionales cómo dar tus primeros pasos en el trabajo.
          </p>
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600"
          >
            Revisar planes
          </button>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="/recursos_graficos/Planes.png" alt="Planes" className="w-full max-w-md" />
        </div>
      </div>

      <PlansModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Plans;
