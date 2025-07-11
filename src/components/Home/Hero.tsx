import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  // State to control video visibility
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(''); // Placeholder for GCP video URL

  const handlePlayVideo = (url: string) => {
    setVideoUrl(url); // Set the video URL from GCP storage
    setShowVideo(true);
  };

  return (
    <div className="font-sans">
      
      {/* SECCIÓN HERO */}
      <main>
        <section className="mx-auto px-10 py-10">
          {/* 2 columnas en escritorio: Columna izquierda (texto), Columna derecha (2 elementos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Prelaboral
              </h1>
              <p className="text-gray-700 text-lg md:text-xl mb-6">
                La plataforma que te ayuda a descubrir tus talentos, prepárate
                para tu primer empleo y destaca frente a la competencia.
              </p>

              {/* Botones */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={() => navigate('/register')}
                  className="inline-block bg-[#00CFF1] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#00B2E3] transition"
                >
                  Regístrate
                </button>
              </div>

              {/* Contadores (o texto explicativo) */}
              <div className="flex items-center space-x-5 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Descubre tus talentos</h2>
                  <p className="text-gray-700">
                    Test especializados que te ayudan a identificar tus fortalezas y áreas de mejora.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Prepárate para tu primer trabajo</h2>
                  <p className="text-gray-700">
                    Cápsulas formativas con información realista que muestran lo bueno, lo malo y lo esencial de cada área, para que elijas con precisión
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-5 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Adelántate a tu competencia</h2>
                  <p className="text-gray-700">
                    Construcción de un currículo personalizado que refleja tus talentos y preferencias.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Objetivo final</h2>
                  <p className="text-gray-700">
                    Presentarte a empresas y puestos de trabajo para un inicio laboral informado y alineado con tus talentos y preferencias.
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: 2 contenedores con BG image */}
            <div className="grid grid-cols-1 gap-4">
              {/* ¿Qué es Prelaboral? */}
              <div
                className="relative rounded-lg text-white p-6 flex justify-between items-center bg-cover bg-center"
                style={{ backgroundImage: "url('/recursos_graficos/hand_bg.jpeg')" }}
              >
                {/* Overlay para oscurecer la imagen y que el texto sea más legible */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
                
                {/* Contenido en primer plano */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">¿Qué es Prelaboral?</h3>
                  <p>
                    Entérate de cómo te ayudamos a prepararte <br />
                    y diferenciarte para tu primer empleo.
                  </p>
                </div>

                {/* Botón Play */}
                <img
                  src="/recursos_graficos/play_icon.png"
                  alt="Play Video"
                  className="w-12 h-12 cursor-pointer relative z-10"
                  onClick={() => handlePlayVideo('https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/que_es_prelaboral.mp4')}
                />
              </div>

              {/* ¿Por qué suscribirte? */}
              <div
                className="relative rounded-lg text-white p-6 flex justify-between items-center bg-cover bg-center"
                style={{ backgroundImage: "url('/recursos_graficos/stars_bg.jpeg')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-2">
                    ¿Por qué suscribirte?
                  </h3>
                  <p>
                    Define el rumbo de tu desarrollo profesional <br />
                    desde el inicio con las mejores decisiones.
                  </p>
                </div>

                <img
                  src="/recursos_graficos/play_icon.png"
                  alt="Play Video"
                  className="w-12 h-12 cursor-pointer relative z-10"
                  onClick={() => handlePlayVideo('https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/porque_suscribirse.mp4')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Player */}
        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <video
                controls
                autoPlay
                className="w-full max-w-2xl"
                src={videoUrl}
              >
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setShowVideo(false)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Hero;
