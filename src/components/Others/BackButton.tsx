import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-gray-800 text-[14px] font-normal md:mb-4 hover:text-black transition"
    >
      <IoChevronBack className="text-lg mr-1" />
      Volver
    </button>
  );
};

export default BackButton;
