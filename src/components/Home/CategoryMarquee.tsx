// CategoryMarquee.tsx
import React from 'react';

interface CategoryMarqueeProps {
  categories: string[];
}

const CategoryMarquee: React.FC<CategoryMarqueeProps> = ({ categories }) => {
  // Duplicar categorías para que el scroll sea infinito
  const repeatedCategories = [...categories, ...categories];

  return (
    <div 
      className="relative overflow-hidden rounded-[40px] mx-auto my-8
                 bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-6"
      style={{ maxWidth: '100%' }} 
    >
      {/* Contenedor que se desplaza automáticamente con la clase "animate-scroll" */}
      <div className="flex gap-5 animate-scroll whitespace-nowrap">
        {repeatedCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center 
                       border border-white text-white 
                       px-4 py-2 rounded-full 
                       whitespace-nowrap 
                       cursor-pointer hover:opacity-80"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarquee;
