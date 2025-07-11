import React from 'react';

interface CVPreviewProps {
  data: any;
}

const CVPreview: React.FC<CVPreviewProps> = ({ data }) => {
  return (
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md h-full overflow-y-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 text-center">{data.nombre || 'No especificado'} {data.apellido || 'No especificado'}</h2>

      {/* Información Personal */}
      <div className="mb-6">
        <p className="text-sm md:text-base">
          {data.region?.label || 'No especificado'}, {data.comuna?.label || 'No especificado'}
        </p>
        <p className="text-sm md:text-base">
          Licencia de Conducir: {data.licenciaConducir?.label || 'No especificado'}
        </p>
        <p className="text-sm md:text-base">
          Disponibilidad Chile: {data.disponibilidadChile?.label || 'No especificado'}
        </p>
      </div>

      {/* Intereses */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Intereses</h3>
        <p className="text-sm md:text-base">
          <strong>Industrias:</strong> {data.industrias.map((i: any) => i.label).join(', ') || 'No especificado'}
        </p>
        <p className="text-sm md:text-base">
          <strong>Áreas:</strong> {data.areas.map((a: any) => a.label).join(', ') || 'No especificado'}
        </p>
      </div>

      {/* Formación Académica */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Formación Académica</h3>
        {data.estudios.map((estudio: any, index: number) => (
          <div key={index} className="ml-4 mb-2">
            <p className="text-sm md:text-base">
              <strong>{estudio.nivel?.label || 'No especificado'}:</strong> {estudio.institucion?.label || estudio.institucion || 'No especificado'} - {estudio.carrera?.label || estudio.carrera || 'No especificado'}
            </p>
            <p className="text-sm md:text-base text-gray-600">Estado: {estudio.estado?.label || 'No especificado'}, Fecha de Titulación: {estudio.fechaTitulacion || 'No especificado'}</p>
          </div>
        ))}
      </div>

      {/* Certificaciones */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Certificaciones</h3>
        {data.certificaciones.map((cert: any, index: number) => (
          <div key={index} className="ml-4 mb-2">
            <p className="text-sm md:text-base">
              <strong>{cert.titulo || 'No especificado'}:</strong> {cert.institucion || 'No especificado'}
            </p>
            <p className="text-sm md:text-base text-gray-600">Fecha: {cert.fecha || 'No especificado'}</p>
          </div>
        ))}
      </div>

      {/* Idiomas */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Idiomas</h3>
        {data.idiomas.map((idioma: any, index: number) => (
          <p key={index} className="text-sm md:text-base">
            {idioma.idioma?.label || 'No especificado'} - {idioma.nivel?.label || 'No especificado'}
          </p>
        ))}
      </div>

      {/* Experiencia Laboral */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Experiencia Laboral</h3>
        {data.experiencia.map((exp: any, index: number) => (
          <div key={index} className="ml-4 mb-2">
            <p className="text-sm md:text-base">
              <strong>{exp.empresa || 'No especificado'} - {exp.cargo || 'No especificado'}:</strong> {exp.ubicacion || 'No especificado'}
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Tipo: {exp.tipo?.label || 'No especificado'}, Inicio: {exp.fechaInicio || 'No especificado'}, Fin: {exp.fechaFin || 'No especificado' || (exp.actualmenteTrabajando ? 'Actualmente trabajando' : '')}
            </p>
            <p className="text-sm md:text-base text-gray-600">{exp.descripcion || 'No especificado'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVPreview;