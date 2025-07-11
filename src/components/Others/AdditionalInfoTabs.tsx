import React, { useState } from 'react';
import {SelectedArea} from '../VideoSection/types.ts';

interface AdditionalInfoTabsProps {
  selectedArea: SelectedArea;
}

const AdditionalInfoTabs: React.FC<AdditionalInfoTabsProps> = ({ selectedArea }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'relator' | 'faq' | 'ask&asw'>('info');

  if (!selectedArea) return null;

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex border-b mb-4">
        <button
          onClick={() => setActiveTab('relator')}
          className={`flex-1 text-center text-[14px] lg:text-left lg:text-[16px] pb-2 font-medium ${
            activeTab === 'relator' ? 'text-black border-b-2 border-blue-400' : 'text-gray-500'
          }`}
        >
          Relator
        </button>
        <button
          onClick={() => setActiveTab('info')}
          className={`flex-1 text-center text-[14px] lg:text-left lg:text-[16px] pb-2 font-medium ${
            activeTab === 'info' ? 'text-black border-b-2 border-blue-400' : 'text-gray-500'
          }`}
        >
          Información Adicional
        </button>
        <button
          onClick={() => setActiveTab('faq')}
          className={`flex-1 text-center text-[14px] lg:text-left lg:text-[16px] pb-2 font-medium ${
            activeTab === 'faq' ? 'text-black border-b-2 border-blue-400' : 'text-gray-500'
          }`}
        >
          Material Adicional
        </button>
        {/*<button
                onClick={() => setActiveTab('ask&asw')}
                className={`pb-2 text-sm font-medium ${activeTab === 'ask&asw' ? 'text-black border-b-2 border-blue-400' : 'text-gray-500'}`}
              >
                Preguntas y Respuestas
              </button>*/}
      </div>

      {activeTab === 'info' && (
        <p className="text-[14px] text-gray-500 leading-snug">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Taciti sit tempus conubia ante, porta himenaeos torquent. Per magnis aenean amet facilisis...
          <span className="font-semibold text-black underline ml-1 cursor-pointer">Revisar más</span>
        </p>
      )}

      {activeTab === 'relator' && (
        <div className="text-[14px] text-gray-800 space-y-1">
          <p><strong>Relator:</strong> {selectedArea.relatorName || 'Relator no especificado'}</p>
          <p><strong>Experiencia:</strong> {selectedArea.relatorExperience || 'Experiencia no disponible'}</p>
          {selectedArea.linkedinUrl && (
            <a
              href={selectedArea.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 block"
            >
              Conectar en LinkedIn
            </a>
          )}
        </div>
      )}

      {activeTab === 'faq' && (
        <div>
          <p className="text-[14px] text-gray-500">Aquí irían material adicional que el relator quiera compartir ...</p>

          {selectedArea.complementaryMaterials && selectedArea.complementaryMaterials.length > 0 && (
            <div className="mt-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Materiales Complementarios:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedArea.complementaryMaterials.map((material: string, index: number) => (
                  <li key={index}>
                    <a
                      href={material}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      {material.split('/').pop() || `Material ${index + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdditionalInfoTabs;
