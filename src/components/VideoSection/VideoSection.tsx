import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryMarquee from '../Home/CategoryMarquee';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import '../../styles/marquee.css';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase';
import Spinner from "../Others/Spinner.tsx";

interface Video {
    title: string;
    chipLabel: string;
    videoUrl: string;
    name: string;
    id: string;
}

const VideoSection: React.FC = () => {
    /* ---------- STATE ---------- */
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
    const [selectedCategory] = useState<string | null>(null);
    const navigate = useNavigate();

    // Lista de categorías para el marquee
    const allCategories = [
        'Marketing', 'Ventas', 'Recursos humanos', 'I+D', 'Control y Gestión',
        'Contabilidad', 'Negociación', 'Hábitos exitosos', 'Presentaciones eficientes',
        'Liderazgo', 'Entrevistas laborales', 'Minería', 'Finanzas', 'Sustentabilidad',
        'Tecnología', 'Superpoderes', 'Tips Entrevista Laboral',
    ];

    /* ---------- FETCH DE VIDEOS DESDE FIRESTORE ---------- */
    useEffect(() => {
        const fetchVideos = async () => {
            setIsLoading(true); // Activar el estado de carga al iniciar la solicitud
            try {
                const areasSnapshot = await getDocs(collection(firestore, 'learningAreas'));
                const videosArr: Video[] = [];

                // Extraer los videos de cada área
                areasSnapshot.forEach(docSnap => {
                    const data = docSnap.data();
                    const docId = docSnap.id;
                    const docName = data.name || 'General';

                    if (data.videos && Array.isArray(data.videos)) {
                        data.videos.forEach((video: any) => {
                            videosArr.push({
                                ...video,
                                chipLabel: docName,
                                id: docId,
                                name: docName,
                            });
                        });
                    }
                });
                setVideos(videosArr);
            } catch (error) {
                console.error('Error al obtener videos desde Firestore: ', error);
            } finally {
                setIsLoading(false); // Desactivar el estado de carga al finalizar (éxito o error)
            }
        };

        fetchVideos();
    }, []);

    // Filtrado por categoría si es que se selecciona alguna
    const filteredVideos = selectedCategory
        ? videos.filter(v => v.chipLabel === selectedCategory)
        : videos;

    /* ---------- CONFIGURACIÓN DEL SWIPER ---------- */
    const DESKTOP_TWO_ROWS = true;
    const minSlidesForLoop = DESKTOP_TWO_ROWS ? 10 : 5;
    const loopEnabled = filteredVideos.length >= minSlidesForLoop;

    /* ---------- RENDER ---------- */
    return (
        <section className="py-10 bg-white">
            <div className="max-w-8xl mx-auto px-4 md:px-10">
                <p className="text-center text-gray-700 text-lg md:text-xl mb-6">
                    Conoce más de <span className="font-bold">50 categorías </span>
                    que te entregarán herramientas para tu trabajo y tu día a día
                </p>
                <CategoryMarquee categories={allCategories} />
                {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                        <Spinner />
                    </div>
                ) : filteredVideos.length > 0 ? (
                    <Swiper
                        modules={[Grid, Navigation]}
                        navigation
                        loop={loopEnabled}
                        speed={600}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                slidesPerGroup: 4,
                                grid: { rows: 2, fill: 'row' },
                                spaceBetween: 12,
                            },
                            640: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                grid: { rows: 1 },
                                spaceBetween: 16,
                            },
                            1024: DESKTOP_TWO_ROWS
                                ? {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                    grid: { rows: 2, fill: 'row' },
                                    spaceBetween: 20,
                                }
                                : {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                    grid: { rows: 1 },
                                    spaceBetween: 20,
                                },
                        }}
                        className="pt-6"
                    >
                        {filteredVideos.map((video, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    className="group cursor-pointer relative rounded-lg shadow-md overflow-hidden bg-cover bg-center h-40 w-full sm:h-44 lg:h-48"
                                    style={{ backgroundImage: "url('/recursos_graficos/videos_bg.jpeg')" }}
                                    onClick={() => {
                                        const clean = video.id
                                            .normalize('NFD')
                                            .replace(/[\u0300-\u036f]/g, '');
                                        navigate(`/video/${clean}`);
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded">
                                        {video.chipLabel}
                                    </span>
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-2">
                                        <h4 className="font-bold text-sm text-center leading-tight mb-3 line-clamp-2">
                                            {video.title}
                                        </h4>
                                        <img src="/recursos_graficos/play_icon.png" alt="Play" className="w-7 h-7" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className="text-center text-gray-500">No hay videos disponibles</p>
                )}
            </div>
        </section>
    );
};

export default VideoSection;