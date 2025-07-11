import React from 'react';
import Modal from './Modal.tsx';
import RegisterForm from '../Forms/RegisterForm.tsx';

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <RegisterForm />
    </Modal>
  );
};

export default RegisterModal;