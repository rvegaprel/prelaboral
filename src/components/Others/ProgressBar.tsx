import React from 'react';

interface ProgressBarProps {
  progress: number; // Porcentaje de 0 a 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
        aria-label={`Progreso de subida: ${progress}%`}
      ></div>
      <p className="text-sm text-gray-600 text-center mt-1">{progress}%</p>
    </div>
  );
};

export default ProgressBar;