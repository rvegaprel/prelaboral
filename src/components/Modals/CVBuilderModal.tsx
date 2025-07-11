import React, { useRef, useState } from "react";
import PlayIconButtonVideo from "../Others/PlayIconButtonVideo.tsx";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Select, { SingleValue, MultiValue } from "react-select";
import { useCVForm } from "./useCVForm";
import {
  Option,
  Study,
  Language,
  Experience,
  FormDataInterface,
  industryOptions,
  areaOptions,
  languageOptions,
} from "./types";
import ProgressBar from "../Others/ProgressBar.tsx";
import Spinner from "../Others/Spinner.tsx";

interface CVBuilderModalProps {
  onClose: () => void;
}

const CVBuilderModal: React.FC<CVBuilderModalProps> = ({ onClose }) => {
  const {
    formData,
    setFormData,
    regionOptions,
    comunaOptions,
    universidadOptions,
    carreraOptions,
    uploadProgress,
    loading,
    handleInputChange,
    handleSelectChange,
    handleAddEntry,
    handleRemoveEntry,
    handleFileUpload,
    handleSave,
  } = useCVForm();

  const [isPlaying, setIsPlaying] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{
    isOpen: boolean;
    success: boolean;
    message: string;
  }>({ isOpen: false, success: true, message: "" });
  const [confirmDelete, setConfirmDelete] = useState<{ isOpen: boolean; section: string; index: number }>({
    isOpen: false,
    section: "",
    index: -1,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const sizetext1 = "text-lg";
  const sizetext2 = "text-md";

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleSaveAndClose = async () => {
    try {
      await handleSave();
      onClose();
    } catch (err) {
      setSaveStatus({
        isOpen: true,
        success: false,
        message: err instanceof Error ? err.message : "Error al guardar el CV. Por favor, revisa los campos e intenta de nuevo.",
      });
    }
  };

  const closeSaveStatus = () => {
    setSaveStatus({ isOpen: false, success: true, message: "" });
  };

  const handleConfirmDelete = () => {
    if (confirmDelete.section && confirmDelete.index >= 0) {
      handleRemoveEntry(confirmDelete.section as keyof FormDataInterface, confirmDelete.index);
    }
    setConfirmDelete({ isOpen: false, section: "", index: -1 });
  };

  const openConfirmDelete = (section: string, index: number) => {
    setConfirmDelete({ isOpen: true, section, index });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-[40px] shadow-lg w-[120vw] h-[90vh] max-w-screen-xl max-h-screen-lg flex overflow-hidden font-sans">
        {/* Sección del formulario scrollable */}
        <div className="w-full md:w-2/3 h-full overflow-y-auto px-10 py-14 space-y-6">
          <div>
            <h1 className="text-xl font-semibold my-2">
              Empecemos a armar tu <span style={{ color: "#308FFF" }}>CV</span>
            </h1>
            <p className="text-md font-normal text-gray-600">
              En el transcurso de tu viaje por Prelaboral, iremos construyendo tu perfil descubriendo tus talentos y preferencias.
            </p>
          </div>

          {/* Caja azul */}
          <div
            className="bg-blue-100 border border-blue-300 rounded-[20px] px-4 flex flex-col md:flex-row items-center justify-between"
            style={{
              background: "linear-gradient(90deg, #2E93FE 0%, #03CDF2 100%)",
            }}
          >
            <section className="w-full md:w-1/2 md:pr-6 mb-4 md:mb-0">
              <div className="pl-4">
                <h3 className="font-medium text-white text-[28px]">
                  ¿Por qué crear tu CV en PreLaboral?
                </h3>
                <p className="text-[16px] text-white mt-1">
                  Un buen CV es clave para encontrar mejores oportunidades.
                </p>
              </div>
              <button
                onClick={handlePlay}
                className="mt-3 px-2 py-2 bg-white text-black text-[12px] font-bold rounded-[20px] hover:bg-white/90"
              >
                Mira el video y descubre cómo hacerlo en minutos
              </button>
            </section>
            <div className="relative w-full md:w-1/2 aspect-video m-3 overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full rounded-[10px] object-cover"
                controls={isPlaying}
                preload="metadata"
                src="https://storage.googleapis.com/prelaboral-435211.appspot.com/videos/por_que_armar_tu_cv.mp4"
                poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
              />
              {!isPlaying && (
                <PlayIconButtonVideo
                  onClick={handlePlay}
                  triangleFill="#FFFFFF"
                  fill="#00D5E8"
                  size={50}
                />
              )}
            </div>
          </div>

          <form className="p-2 bg-white rounded-lg">
            {/* Información Personal */}
            <h2 className={`${sizetext1} font-semibold mb-3`}>1. Información Personal</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${sizetext2}`}>
              <input
                name="nombre"
                type="text"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="border rounded px-4 py-2 w-full"
              />
              <input
                name="apellido"
                type="text"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                className="border rounded px-4 py-2 w-full"
              />
              <Select<Option, false>
                options={regionOptions}
                value={formData.region as SingleValue<Option>}
                onChange={(opt) => handleSelectChange(opt, "region")}
                placeholder="Región"
                className="text-md"
                classNamePrefix="react-select"
              />
              <Select<Option, false>
                options={comunaOptions}
                value={formData.comuna as SingleValue<Option>}
                onChange={(opt) => handleSelectChange(opt, "comuna")}
                placeholder="Comuna"
                className="text-md"
                classNamePrefix="react-select"
              />
              <Select<Option, false>
                options={[
                  { value: "no", label: "No tengo licencia" },
                  { value: "clase_a1", label: "Clase A1" },
                  { value: "clase_a2", label: "Clase A2" },
                  { value: "clase_a3", label: "Clase A3" },
                  { value: "clase_a4", label: "Clase A4" },
                  { value: "clase_a5", label: "Clase A5" },
                  { value: "clase_b", label: "Clase B" },
                  { value: "clase_c", label: "Clase C" },
                  { value: "clase_d", label: "Clase D" },
                  { value: "clase_e", label: "Clase E" },
                  { value: "clase_f", label: "Clase F" },
                ]}
                value={formData.licenciaConducir as SingleValue<Option>}
                onChange={(opt) => handleSelectChange(opt, "licenciaConducir")}
                placeholder="¿Tienes licencia de conducir?"
                className="text-md"
                classNamePrefix="react-select"
              />
              <Select<Option, false>
                options={[{ value: "si", label: "Sí" }, { value: "no", label: "No" }]}
                value={formData.disponibilidadChile as SingleValue<Option>}
                onChange={(opt) => handleSelectChange(opt, "disponibilidadChile")}
                placeholder="¿Disponibilidad en todo Chile?"
                className="text-md"
                classNamePrefix="react-select"
              />
            </div>

            {/* Intereses */}
            <section className="mt-6">
              <h2 className={`${sizetext1} font-semibold mb-3`}>2. Intereses</h2>
              <div className={`grid grid-cols-1 gap-4 ${sizetext2}`}>
                <Select<Option, true>
                  isMulti
                  options={industryOptions}
                  value={formData.industrias as MultiValue<Option>}
                  onChange={(opt) => handleSelectChange(opt, "industrias")}
                  placeholder="¿Qué industrias te interesan?"
                  className="text-md"
                  classNamePrefix="react-select"
                />
                <Select<Option, true>
                  isMulti
                  options={areaOptions}
                  value={formData.areas as MultiValue<Option>}
                  onChange={(opt) => handleSelectChange(opt, "areas")}
                  placeholder="¿En qué áreas te gustaría trabajar?"
                  className="text-md"
                  classNamePrefix="react-select"
                />
              </div>
            </section>

            {/* Estudios */}
            <section className="mt-6">
              <h2 className={`${sizetext1} font-semibold mb-3`}>3. Estudios</h2>
              <div className="space-y-4">
                {formData.estudios.map((estudio: Study, index: number) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm space-y-3">
                    <Select<Option, false>
                      options={[
                        { value: "basica", label: "Básica" },
                        { value: "secundaria", label: "Secundaria" },
                        { value: "tecnica", label: "Técnica Profesional" },
                        { value: "universitaria", label: "Universitaria Pregrado" },
                        { value: "diplomado", label: "Diplomado" },
                        { value: "magister", label: "Magíster" },
                        { value: "doctorado", label: "Doctorado" },
                        { value: "certificacion", label: "Certificación" },
                      ]}
                      value={estudio.nivel as SingleValue<Option>}
                      onChange={(opt) => handleSelectChange(opt, "nivel", "estudios", index)}
                      placeholder="Nivel de estudios"
                      className="text-md"
                      classNamePrefix="react-select"
                    />
                    {estudio.nivel?.value === "universitaria" ? (
                      <Select<Option, false>
                        options={universidadOptions}
                        value={estudio.institucion as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, "institucion", "estudios", index)}
                        placeholder="Institución"
                        className="text-md"
                        classNamePrefix="react-select"
                      />
                    ) : (
                      <input
                        name="institucion"
                        type="text"
                        placeholder="Nombre de la institución"
                        value={typeof estudio.institucion === "string" ? estudio.institucion : ""}
                        onChange={(e) => handleInputChange(e, "estudios", index)}
                        className="border rounded px-4 py-2 w-full"
                      />
                    )}
                    {estudio.nivel?.value === "universitaria" ? (
                      <Select<Option, false>
                        options={carreraOptions}
                        value={estudio.carrera as SingleValue<Option>}
                        onChange={(opt) => handleSelectChange(opt, "carrera", "estudios", index)}
                        placeholder="Carrera"
                        className="text-md"
                        classNamePrefix="react-select"
                      />
                    ) : (
                      <input
                        name="carrera"
                        type="text"
                        placeholder="Carrera o especialidad"
                        value={typeof estudio.carrera === "string" ? estudio.carrera : ""}
                        onChange={(e) => handleInputChange(e, "estudios", index)}
                        className="border rounded px-4 py-2 w-full"
                      />
                    )}
                    <Select<Option, false>
                      options={[
                        { value: "completada", label: "Completada" },
                        { value: "en_curso", label: "En Curso" },
                        { value: "incompleta", label: "Incompleta" },
                      ]}
                      value={estudio.estado as SingleValue<Option>}
                      onChange={(opt) => handleSelectChange(opt, "estado", "estudios", index)}
                      placeholder="Estado"
                      className="text-md"
                      classNamePrefix="react-select"
                    />
                    <input
                      name="fechaTitulacion"
                      type="date"
                      value={estudio.fechaTitulacion || ""}
                      onChange={(e) => handleInputChange(e, "estudios", index)}
                      className="border rounded px-4 py-2 w-full"
                    />
                    <div className="mt-2">
                      <label
                        htmlFor={`file-input-estudios-${index}`}
                        className="text-blue-500 cursor-pointer flex items-center gap-2"
                      >
                        <div className="w-full border border-dashed border-gray-400 rounded-md p-3 text-gray-600 text-md text-center cursor-pointer hover:bg-gray-50 transition">
                          Agregar Certificado
                        </div>
                      </label>
                      <input
                        id={`file-input-estudios-${index}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file, "estudios", index);
                        }}
                      />
                      {uploadProgress[`estudios-${index}`] > 0 && (
                        <ProgressBar progress={uploadProgress[`estudios-${index}`] || 0} />
                      )}
                      {estudio.certificado && (
                        <a
                          href={estudio.certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline block mt-2"
                        >
                          Ver certificado
                        </a>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openConfirmDelete("estudios", index);
                      }}
                      className="text-red-500 flex items-center gap-1"
                    >
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                ))}
                <div
                  onClick={() => handleAddEntry("estudios")}
                  className="flex items-center space-x-2 mt-2 cursor-pointer hover:underline text-sm"
                >
                  <BsFillPlusCircleFill className="text-[40px]" style={{ color: "#00CFF1" }} />
                  <span>Añadir educación</span>
                  <span className="text-gray-400">Podrás adjuntar tu certificado</span>
                </div>
              </div>
            </section>

            {/* Idiomas */}
            <section className="mt-6">
              <h2 className={`${sizetext1} font-semibold mb-3`}>4. Idiomas</h2>
              <div className="space-y-4">
                {formData.idiomas.map((idioma: Language, index: number) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm space-y-3">
                    <Select<Option, false>
                      options={languageOptions}
                      value={idioma.idioma as SingleValue<Option>}
                      onChange={(opt) => handleSelectChange(opt, "idioma", "idiomas", index)}
                      placeholder="Idioma"
                      className="text-md"
                      classNamePrefix="react-select"
                    />
                    <Select<Option, false>
                      options={[
                        { value: "Básico", label: "Básico" },
                        { value: "Intermedio", label: "Intermedio" },
                        { value: "Avanzado", label: "Avanzado" },
                        { value: "Nativo", label: "Nativo" },
                      ]}
                      value={idioma.nivel as SingleValue<Option>}
                      onChange={(opt) => handleSelectChange(opt, "nivel", "idiomas", index)}
                      placeholder="Nivel"
                      className="text-md"
                      classNamePrefix="react-select"
                    />
                    <div className="mt-2">
                      <label
                        htmlFor={`file-input-idiomas-${index}`}
                        className="text-blue-500 cursor-pointer flex items-center gap-2"
                      >
                        <div className="w-full border border-dashed border-gray-400 rounded-md p-3 text-gray-600 text-md text-center cursor-pointer hover:bg-gray-50 transition">
                          Agregar Certificado
                        </div>
                      </label>
                      <input
                        id={`file-input-idiomas-${index}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file, "idiomas", index);
                        }}
                      />
                      {uploadProgress[`idiomas-${index}`] > 0 && (
                        <ProgressBar progress={uploadProgress[`idiomas-${index}`] || 0} />
                      )}
                      {idioma.certificado && (
                        <a
                          href={idioma.certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline block mt-2"
                        >
                          Ver certificado
                        </a>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openConfirmDelete("idiomas", index);
                      }}
                      className="text-red-500 flex items-center gap-1"
                    >
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                ))}
                <div
                  onClick={() => handleAddEntry("idiomas")}
                  className="flex items-center space-x-2 mt-2 cursor-pointer hover:underline text-sm"
                >
                  <BsFillPlusCircleFill className="text-[40px]" style={{ color: "#00CFF1" }} />
                  <span>Añadir idioma</span>
                  <span className="text-gray-400">Podrás adjuntar tu certificado</span>
                </div>
              </div>
            </section>

            {/* Experiencia Laboral */}
            <section className="mt-6">
              <h2 className={`${sizetext1} font-semibold mb-3`}>5. Experiencia Laboral</h2>
              <div className="space-y-4">
                {formData.experiencia.map((exp: Experience, index: number) => (
                  <div key={index} className="border p-4 rounded-lg shadow-sm space-y-3">
                    <input
                      name="empresa"
                      type="text"
                      placeholder="Nombre de la empresa"
                      value={exp.empresa || ""}
                      onChange={(e) => handleInputChange(e, "experiencia", index)}
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      name="cargo"
                      type="text"
                      placeholder="Cargo"
                      value={exp.cargo || ""}
                      onChange={(e) => handleInputChange(e, "experiencia", index)}
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      name="ubicacion"
                      type="text"
                      placeholder="Ubicación"
                      value={exp.ubicacion || ""}
                      onChange={(e) => handleInputChange(e, "experiencia", index)}
                      className="border rounded px-4 py-2 w-full"
                    />
                    <Select<Option, false>
                      options={[
                        { value: "tiempo_completo", label: "Tiempo Completo" },
                        { value: "medio_tiempo", label: "Medio Tiempo" },
                        { value: "freelance", label: "Freelance" },
                        { value: "practica", label: "Práctica" },
                      ]}
                      value={exp.tipo as SingleValue<Option>}
                      onChange={(opt) => handleSelectChange(opt, "tipo", "experiencia", index)}
                      placeholder="Tipo de empleo"
                      className="text-md"
                      classNamePrefix="react-select"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        name="fechaInicio"
                        type="date"
                        value={exp.fechaInicio || ""}
                        onChange={(e) => handleInputChange(e, "experiencia", index)}
                        className="border rounded px-4 py-2 w-full"
                      />
                      <input
                        name="fechaFin"
                        type="date"
                        value={exp.fechaFin || ""}
                        disabled={exp.actualmenteTrabajando}
                        onChange={(e) => handleInputChange(e, "experiencia", index)}
                        className="border rounded px-4 py-2 w-full"
                      />
                    </div>
                    <textarea
                      name="descripcion"
                      placeholder="Descripción de responsabilidades"
                      value={exp.descripcion || ""}
                      onChange={(e) => handleInputChange(e, "experiencia", index)}
                      className="border rounded px-4 py-4 w-full"
                      rows={3}
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={exp.actualmenteTrabajando || false}
                        onChange={(e) => {
                          const updatedExp = [...formData.experiencia];
                          updatedExp[index] = {
                            ...updatedExp[index],
                            actualmenteTrabajando: e.target.checked,
                            fechaFin: e.target.checked ? null : exp.fechaFin,
                          };
                          setFormData({ ...formData, experiencia: updatedExp });
                        }}
                      />
                      <label>Actualmente trabajando aquí</label>
                    </div>
                    <div className="mt-2">
                      <label
                        htmlFor={`file-input-experiencia-${index}`}
                        className="text-blue-500 cursor-pointer flex items-center gap-2"
                      >
                        <div className="w-full border border-dashed border-gray-400 rounded-md p-3 text-gray-600 text-md text-center cursor-pointer hover:bg-gray-50 transition">
                          Agregar Carta de recomendación u otro certificado
                        </div>
                      </label>
                      <input
                        id={`file-input-experiencia-${index}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file, "experiencia", index);
                        }}
                      />
                      {uploadProgress[`experiencia-${index}`] > 0 && (
                        <ProgressBar progress={uploadProgress[`experiencia-${index}`] || 0} />
                      )}
                      {exp.certificado && (
                        <a
                          href={exp.certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline block mt-2"
                        >
                          Ver certificado
                        </a>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        openConfirmDelete("experiencia", index);
                      }}
                      className="text-red-500 flex items-center gap-1"
                    >
                      <FaTrash /> Eliminar
                    </button>
                  </div>
                ))}
                <div
                  onClick={() => handleAddEntry("experiencia")}
                  className="flex items-center space-x-2 mt-2 cursor-pointer hover:underline text-sm"
                >
                  <BsFillPlusCircleFill className="text-[40px]" style={{ color: "#00CFF1" }} />
                  <span>Añadir experiencia laboral</span>
                </div>
              </div>
            </section>
          </form>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleSaveAndClose}
              className="px-8 py-3 text-gray-800 rounded-[30px] hover:bg-gray-400"
              style={{ background: "#00D5E8" }}
            >
              Guardar y cerrar
            </button>
          </div>
        </div>

        {/* Vista previa del CV centrada */}
        <div className="w-1/3 min-w-[340px] bg-[#F2F6FE] border-l border-gray-200 p-6 flex justify-center items-center overflow-y-auto hidden md:flex">
          <div className="bg-white space-y-2 p-5 max-w-[400px] w-full">
            <h2 className="text-[20px] font-semibold text-gray-900">
              {formData.nombre || "Nombre"} {formData.apellido || "Apellido"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[14px] font-normal mb-1">
                  {typeof formData.estudios[0]?.carrera === 'string'
                    ? formData.estudios[0]?.carrera
                    : (formData.estudios[0]?.carrera as Option)?.label || "Carrera"}
                </p>
              </div>
              <div className="grid grid-cols-2 text-[12px] text-gray-600">
                <span className="font-normal">Región:</span>
                <span>{(formData.region as Option)?.label || ""}</span>
                <span className="font-normal">Teléfono:</span>
                <span>{"N/A"}</span>
                <span className="font-normal">Correo:</span>
                <span>{"N/A"}</span>
                <span className="font-normal">Licencia de Conducir:</span>
                <span>{(formData.licenciaConducir as Option)?.label || ""}</span>
              </div>
              <p className="mt-2 text-[10px]">
                Disponibilidad en todo Chile: {(formData.disponibilidadChile as Option)?.label || "-"}
              </p>
            </div>

            <hr className="my-8" />
            <div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 my-4">
                <p className="font-semibold text-[12px] mb-1">Intereses</p>
                <div className="grid grid-rows-2 text-sm text-gray-700">
                  <span className="font-medium text-[12px]">Industrias</span>
                  <span className="font-normal text-[10px]">
                    {formData.industrias.map((opt: Option) => opt.label).join("; ") || "N/A"}
                  </span>
                  <span className="font-medium text-[12px]">Áreas</span>
                  <span className="font-normal text-[10px]">
                    {formData.areas.map((opt: Option) => opt.label).join("; ") || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <hr className="my-3" />
            <div>
              <p className="font-semibold text-[12px] mb-1">Estudios</p>
              {formData.estudios.map((estudio: Study, index: number) => (
                <div key={index} className="grid grid-rows-2 text-sm text-gray-700 mb-2">
                  <span className="italic font-medium text-[11px]">
                    {typeof estudio.institucion === 'string'
                      ? estudio.institucion
                      : (estudio.institucion as Option)?.label || "Institución"} / ({(estudio.nivel as Option)?.label || "nivel"})
                  </span>
                  <span className="italic font-normal text-[10px]">
                    {typeof estudio.carrera === 'string'
                      ? estudio.carrera
                      : (estudio.carrera as Option)?.label || "Carrera"} - Estado: {(estudio.estado as Option)?.label || "No informado"}
                  </span>
                  <span className="italic font-light text-[10px]">
                    Fecha de titulación: {estudio.fechaTitulacion || "No informado"}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-3" />
            <div>
              <p className="font-semibold text-[12px] mb-1">Idiomas</p>
              {formData.idiomas.map((idioma: Language, index: number) => (
                <p key={index} className="text-[12px] text-gray-700 mb-1">
                  {(idioma.idioma as Option)?.label || "Idioma"} - {(idioma.nivel as Option)?.label || "Nivel"}
                </p>
              ))}
            </div>

            <hr className="my-3" />
            <div>
              <p className="font-semibold text-[12px] mb-1">Experiencia Laboral</p>
              {formData.experiencia.map((exp: Experience, index: number) => (
                <div key={index} className="grid grid-rows-2 text-sm text-gray-700 mb-2">
                  <span className="font-medium text-[12px]">{exp.cargo || "Cargo"}</span>
                  <span className="font-normal text-[10px]">{exp.empresa || "Empresa"}</span>
                  <span className="font-normal text-[10px]">{exp.descripcion || "Descripción"}</span>
                  <span className="italic font-light text-[10px]">
                    {exp.fechaInicio || "Inicio"} - {exp.actualmenteTrabajando ? "Presente" : exp.fechaFin || "Fin"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de error al guardar */}
      {saveStatus.isOpen && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-red-600">Error</h3>
            <p className="text-gray-600 mt-2">{saveStatus.message}</p>
            <button
              onClick={closeSaveStatus}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de confirmación de eliminación */}
      {confirmDelete.isOpen && (
        <div className="fixed inset-0 z-60 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900">¿Estás seguro?</h3>
            <p className="text-gray-600 mt-2">Esta acción eliminará la entrada seleccionada.</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setConfirmDelete({ isOpen: false, section: "", index: -1 })}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Seguir editando
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVBuilderModal;