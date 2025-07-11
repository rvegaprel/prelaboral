import React from 'react';
import Modal from './Modal.tsx';

interface ResultModalProps {
  onClose: () => void;
  testResult: {
    isEvaluation: boolean;
    approved: boolean;
    score?: number;
    passingScore?: number;
  };
  goToNext: () => void;
  handleReplayVideo: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({
  onClose,
  testResult,
  goToNext,
  handleReplayVideo,
}) => {
  return (
    <Modal onClose={onClose}>
      <div className="p-6 text-center max-w-md mx-auto">
        {testResult.isEvaluation ? (
          <>
            <h2 className={`text-2xl font-bold mb-4 ${testResult.approved ? 'text-green-600' : 'text-red-600'}`}>
              {testResult.approved ? '¡Felicidades!' : '¡No te rindas!'}
            </h2>
            <p className="text-lg mb-4">
              {testResult.score === 0
                ? 'Hubo un error al guardar tus respuestas. Intenta de nuevo.'
                : `Obtuviste ${testResult.score} de ${testResult.passingScore} puntos necesarios para aprobar.`}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">¡Gracias por tu respuesta!</h2>
            <p className="text-lg mb-4">Hemos registrado tus respuestas correctamente.</p>
          </>
        )}
        <div className="flex justify-center space-x-4">
          {testResult.approved ? (
            <button
              onClick={goToNext}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Siguiente Video
            </button>
          ) : (
            <button
              onClick={handleReplayVideo}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Volver a ver
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;