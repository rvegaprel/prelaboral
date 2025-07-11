import React from 'react';

const jobOffers = [
  {
    title: "Nombre del cargo",
    company: "Universidad Federico Santa María",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
    location: "Ubicación: Lorem ipsum",
    type: "Remoto",
    logo: "/logo_universidad_ofertante.png", // Ruta de la imagen del logo
  },
  {
    title: "Nombre del cargo",
    company: "Universidad Federico Santa María",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
    location: "Ubicación: Lorem ipsum",
    type: "Híbrido",
    logo: "/logo_universidad_ofertante.png", // Ruta de la imagen del logo
  },
  {
    title: "Nombre del cargo",
    company: "Universidad Federico Santa María",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
    location: "Ubicación: Lorem ipsum",
    type: "Presencial",
    logo: "/logo_universidad_ofertante.png", // Ruta de la imagen del logo
  },
];

const JobOffers: React.FC = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Ofertas laborales</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {jobOffers.map((offer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col">
            {/* Logo, Cargo, Empresa y Modalidad en la misma línea */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img src={offer.logo} alt={`${offer.company} logo`} className="h-10 w-10 rounded object-cover" />
                <div className="text-left"> {/* Asegura alineación a la izquierda */}
                  <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
                  <p className="text-sm text-gray-500">{offer.company}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                offer.type === "Remoto" ? "bg-blue-100 text-blue-700" :
                offer.type === "Híbrido" ? "bg-green-100 text-green-700" :
                "bg-gray-100 text-gray-700"
              }`}>
                {offer.type}
              </span>
            </div>
            {/* Detalles de la oferta */}
            <div className="text-left flex-1">
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
            </div>
            {/* Ubicación y Botón */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-500">{offer.location}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700">
                Postular
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver más */}
      <button className="bg-teal-400 text-blue-800 px-6 py-3 mt-8 rounded-full font-semibold hover:bg-teal-300">
        Ver más
      </button>
    </section>
  );
};

export default JobOffers;
