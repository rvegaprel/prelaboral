import React from 'react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Maneja el cierre al hacer clic fuera del contenido del modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8 flex flex-col relative">
        {/* Botón de cierre */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold">
          &times;
        </button>
        
        {/* Título */}
        <h2 className="text-2xl font-bold mb-6 text-center w-full">
          Mejora tu currículum como si lo hubiera escrito un experto de la industria
        </h2>
        
        <div className="flex">
          {/* Imagen */}
          <div className="flex items-center justify-center">
            <img src="/recursos_graficos/Mejora_tu_CV.gif" alt="CV Example" className="rounded-lg" />
          </div>
        </div>

        {/* Botón de Registro Centrado */}
        <div className="mt-6 flex justify-center">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 w-1/2">
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
