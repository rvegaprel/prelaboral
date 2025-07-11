import React from 'react';

const videos = [
  {
    title: "Podcast Marketing Digital",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Podcast_mkt_digital.mp4",
    duration: "19:43",
  },
  {
    title: "3x3 Marketing Digital",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/3x3mkt_digital.mp4",
    duration: "01:41",
  },
  {
    title: "Podcast Turismo",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Podcast%20Turismo.mp4",
    duration: "16:37",
  },
  {
    title: "Capsula resumen Turismo",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Capsula%20resumen%20Turismo.mp4",
    duration: "5:19",
  },
  {
    title: "Superpoder: HEMACE",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Capsula%20HEMACE.mp4",
    duration: "10:52",
  }, 
  {
    title: "Podcast Ciencia de Datos - Versión 1",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Podcast%20Ciencia%20de%20Datos%20-%20V1.mp4", 
    duration: "17:41",
  },
  {
    title: "Podcast Ciencia de Datos - Versión 2",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Podcast%20Ciencia%20de%20Datos%20-%20V2.mp4", 
    duration: "10:22",
  },
  {
    title: "Resumen Ciencia de Datos",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Resumen%20Ciencia%20de%20Datos.mp4",
    duration: "2:23",
  },
  {
    title: "Podcast Transformacion Digital",
    url: "https://storage.googleapis.com/prelaboral-videos-ejemplo/Podcast%20Transformacion%20Digital.mp4",
    duration: "7:15",
  }
];

const MuestraVideos: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Videos | Muestra de contenido audiovisual</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <video controls className="w-full h-auto rounded-md">
              <source src={video.url} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
            <h2 className="text-lg font-semibold mt-4">{video.title}</h2>
            <p className="text-gray-600">Duración: {video.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuestraVideos;
