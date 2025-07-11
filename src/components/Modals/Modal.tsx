import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white w-11/12 md:w-1/2 lg:w-1/3 max-h-[90vh] p-6 rounded-lg shadow-lg relative overflow-y-auto"
      >
        {/* Botón de Cerrar */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>

        {/* Contenido del Modal */}
        <div className="max-h-[80vh] overflow-y-auto p-2">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
