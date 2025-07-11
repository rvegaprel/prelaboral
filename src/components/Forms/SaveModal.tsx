import React from 'react';

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  success: boolean;
  message: string;
}

const SaveModal: React.FC<SaveModalProps> = ({ isOpen, onClose, success, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-96 max-w-full text-center">
        <h3 className={`text-xl font-bold mb-4 ${success ? 'text-green-500' : 'text-red-500'}`}>
          {success ? '¡Éxito!' : '¡Error!'}
        </h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
            success ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {success ? 'Continuar' : 'Cerrar'}
        </button>
      </div>
    </div>
  );
};

export default SaveModal;