import React from 'react';

const News: React.FC = () => {
  const newsItems = [
    {
      title: "Tamaño del mercado",
      date: "30/10/2024",
      description: "Lorem ipsum odor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
      link: "#"
    },
    {
      title: "Bandas Salariales por familia de cargo",
      date: "30/10/2024",
      description: "Lorem ipsum odor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
      link: "#"
    },
    {
      title: "Bandas Salariales por familia de cargo",
      date: "30/10/2024",
      description: "Lorem ipsum odor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
      link: "#"
    },
    {
      title: "Sub especificaciones del rubro",
      date: "30/10/2024",
      description: "Lorem ipsum odor amet, consectetur adipiscing elit. Ad penatibus pretium nulla tristique non imperdiet velit.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Noticias y actualidad</h2>
      <div className="bg-blue-50 p-8 rounded-lg max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {newsItems.map((item, index) => (
          <div key={index} className="text-left">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <a href={item.link} className="text-blue-500 font-semibold text-sm hover:underline">Ver más</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
