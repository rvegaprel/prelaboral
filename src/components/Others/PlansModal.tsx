import React from 'react';

interface PlansModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlansModal: React.FC<PlansModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold">
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">Conoce nuestros planes</h2>
        
        <div className="flex gap-4">
          {/* Plan Básico */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-1">
            <h3 className="text-lg font-semibold">Postulantes Basico</h3>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet doloroli stiol conse ctetur adipiscing elit.</p>
            <p className="text-2xl font-bold mt-4">$XXXXX <span className="text-sm">/mes</span></p>
            <p className="mt-4 font-semibold">Que incluye</p>
            <ul className="list-none mt-2 space-y-2">
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
            </ul>
            <button className="bg-teal-500 text-white px-4 py-2 mt-6 rounded-full font-semibold hover:bg-teal-600 w-full">
              Elegir este plan
            </button>
          </div>

          {/* Plan Pro */}
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex-1 relative">
            <h3 className="text-lg font-semibold">Postulantes Pro <span className="ml-2 bg-white text-blue-500 text-xs px-2 py-1 rounded-full">Popular</span></h3>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet doloroli stiol conse ctetur adipiscing elit.</p>
            <p className="text-2xl font-bold mt-4">$XXXXX <span className="text-sm">/mes</span></p>
            <p className="mt-4 font-semibold">Que incluye</p>
            <ul className="list-none mt-2 space-y-2">
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
              <li>✔️ Lorem ipsum dolor sit amet</li>
            </ul>
            <button className="bg-white text-blue-500 px-4 py-2 mt-6 rounded-full font-semibold hover:bg-gray-100 w-full">
              Elegir este plan
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlansModal;
