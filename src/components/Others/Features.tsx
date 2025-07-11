import React from 'react';

const features = [
  {
    title: "Potenciamos tu CV",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus sed orci efficitur tincidunt volutpat proin vitae.",
    image: "/recursos_graficos/2.png", // Reemplaza con la ruta de la imagen
  },
  {
    title: "Test mis habilidades",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus sed orci efficitur tincidunt volutpat proin vitae.",
    image: "/recursos_graficos/3.png", // Reemplaza con la ruta de la imagen
  },
  {
    title: "Tips para una entrevista",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus sed orci efficitur tincidunt volutpat proin vitae.",
    image: "/recursos_graficos/1.png", // Reemplaza con la ruta de la imagen
  },
];

const Features: React.FC = () => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">¿Listo para empezar?</h2>
      <p className="text-lg mb-8">
        Conoce las herramientas que ofrecemos y accede a una <span className="text-blue-500 font-semibold">muestra gratuita</span> para <br />aprender de profesionales cómo dar tus primeros pasos en el trabajo.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
            <img src={feature.image} alt={feature.title} className="rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
