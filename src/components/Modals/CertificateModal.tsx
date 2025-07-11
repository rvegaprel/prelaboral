import React from 'react';
import Modal from './Modal.tsx';

interface CertificateModalProps {
  onClose: () => void;
  navigate: (path: string) => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ onClose, navigate }) => {
  return (
    <Modal onClose={onClose}>
      <div className="p-6 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          ¡Felicidades! Has completado la Ruta Tecnológica.
        </h2>
        <p className="text-lg mb-4">Ya obtuviste tu certificado.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Ir a Logros
        </button>
      </div>
    </Modal>
  );
};

export default CertificateModal;