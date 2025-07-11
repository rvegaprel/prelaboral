import React from 'react';
import { SelectedArea } from './types.ts';


interface UserResponses {
  [areaId: string]: {
    [videoTitle: string]: {
      approved: boolean;
      score?: number;
    };
  };
}

interface VideoTestSectionProps {
  selectedArea: SelectedArea;
  selectedVideoIndex: number;
  userResponses: UserResponses;
  handleSubmitTest: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReplayVideo: () => void;
  goToNext: () => void;
}

const VideoTestSection: React.FC<VideoTestSectionProps> = ({
  selectedArea,
  selectedVideoIndex,
  userResponses,
  handleSubmitTest,
  handleReplayVideo,
  goToNext,
}) => {
  const videoTitle = selectedArea.videos[selectedVideoIndex].title;
  const testResult = userResponses?.[selectedArea.id]?.[videoTitle];

  return (
    <div className="w-full h-auto rounded-lg bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Responde las preguntas sobre {videoTitle}
      </h2>

      {testResult?.approved ? (
        <div className="text-center">
          <p className="text-lg">
            {['Podcast', 'Resumen', '10 Mandamientos', 'Lo bueno y lo malo'].includes(videoTitle)
              ? `Ya aprobaste este test con ${testResult.score || 'respuestas guardadas'} puntos.`
              : 'Ya respondiste este formulario.'}
          </p>
          <button onClick={goToNext} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Siguiente Video
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmitTest} className="space-y-4">
          {selectedArea.videos[selectedVideoIndex].exitTestQuestions?.map((q, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold mb-2">{q.question}</p>
              {q.type === 'checkbox'
                ? q.options.map((opt, optIdx) => (
                    <label key={optIdx} className="block text-gray-700">
                      <input type="checkbox" name={`question-${index}`} value={opt} className="mr-2 accent-blue-500" /> {opt}
                    </label>
                  ))
                : q.options.map((opt, optIdx) => (
                    <label key={optIdx} className="block text-gray-700">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={opt}
                        className="mr-2 accent-blue-500"
                        required={!!q.correct}
                      />{' '}
                      {opt}
                    </label>
                  ))}
            </div>
          ))}

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Enviar Respuestas
            </button>
            <button
              type="button"
              onClick={handleReplayVideo}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Volver a ver
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VideoTestSection;
