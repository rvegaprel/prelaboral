import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-5">
      {/* Contenedor principal con padding horizontal */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo */}
        <div className="flex flex-col md:col-span-1">
          <img 
            src="/logos_prelaboral/logo_prelaboral_blanco_nuevo.png" 
            alt="PreLaboral Logo" 
            className="w-60 md:w-auto" 
          />
        </div>

        {/* Texto descriptivo */}
        <div className="space-y-4 text-gray-400 text-sm leading-relaxed md:col-span-2 lg:mt-4">
          <p>
            En <strong>PreLaboral</strong> creemos en el potencial de todas las personas para desarrollarse 
            y encontrar nuevas oportunidades. Nuestra plataforma ofrece herramientas, formación y 
            vinculación con empresas, enfocadas en potenciar tu empleabilidad y ampliar tu horizonte laboral.
          </p>
        </div>

        {/* Acceso rápido */}
        <div className="space-y-2 md:col-span-1 lg:mt-4">
          <h3 className="font-semibold text-white">Acceso rápido</h3>
          <ul className="space-y-1">
            <li>
              <a href="/public" className="text-gray-400 hover:text-white text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 hover:text-white text-sm">
                {/* Otro enlace */}
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-2 md:col-span-1 lg:mt-4">
          <h3 className="font-semibold text-white">Contacto</h3>
          <ul className="space-y-1">
            <li>
              <a 
                href="mailto:contacto@prelaboral.com" 
                className="text-gray-400 hover:text-white text-sm"
              >
                contacto@prelaboral.com
              </a>
            </li>
            <li>
              <a 
                href="https://maps.google.com/?q=Av.+Nueva+Costanera+3698,+Of.+303,+7630428+Santiago,+Vitacura,+Región+Metropolitana"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white text-sm"
              >
                Av. Nueva Costanera 3698, Of. 303. Las Condes
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria y derechos reservados */}
      <div className="border-t border-gray-700 mt-12 pt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 PreLaboral. Todos los derechos reservados.</p>

          {/* Redes sociales (puedes agregar o modificar según tu proyecto) */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Ejemplos: 
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a> 
            */}
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
