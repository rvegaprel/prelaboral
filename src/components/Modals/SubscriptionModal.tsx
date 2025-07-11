import React from 'react';
import Modal from './Modal.tsx';

interface SubscriptionModalProps {
  onClose: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">¡Suscribirte tiene beneficios!</h2>
        <video className="w-full h-96 rounded-lg" controls>
          <source src="https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/suscripcion_demo.mp4" type="video/mp4" />
        </video>
        <button
          onClick={() => window.location.href = 'https://www.mercadopago.com'}
          className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
        >
          Suscribirme
        </button>
      </div>
    </Modal>
  );
};

export default SubscriptionModal;