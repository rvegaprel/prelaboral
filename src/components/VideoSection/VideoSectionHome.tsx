import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import CategoryMarquee from '../Home/CategoryMarquee';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import '../../styles/marquee.css';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firestore, auth } from '../../../firebase';
import Spinner from "../Others/Spinner.tsx";
import { onAuthStateChanged } from 'firebase/auth';

interface Video {
    title: string;
    chipLabel: string;
    videoUrl: string;
    name: string;
    id: string;
    viewed?: boolean;
}

const VideoSectionHome: React.FC = () => {
    /* ---------- STATE ---------- */
    const [videos, setVideos] = useState<Video[]>([]);
    const [categories, setCategories] = useState<string[]>([]); // Estado para categorías dinámicas
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    /* ---------- AUTENTICACIÓN ---------- */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    /* ---------- FETCH DE VIDEOS Y CATEGORÍAS DESDE FIRESTORE ---------- */
    useEffect(() => {
        const fetchVideosAndCategories = async () => {
            setIsLoading(true);
            try {
                const areasSnapshot = await getDocs(collection(firestore, 'learningAreas'));
                const videosArr: Video[] = [];
                const categoriesSet = new Set<string>(); // Set para categorías únicas

                areasSnapshot.forEach(docSnap => {
                    const data = docSnap.data();
                    const docId = docSnap.id;
                    const docName = data.name || 'General';

                    // Agregar categoría al Set
                    categoriesSet.add(docName);

                    // Procesar videos
                    if (data.videos && Array.isArray(data.videos)) {
                        data.videos.forEach((video: any) => {
                            videosArr.push({
                                ...video,
                                chipLabel: docName,
                                id: docId,
                                name: docName,
                                viewed: false,
                            });
                        });
                    }
                });

                // Verificar videos vistos si el usuario está autenticado
                if (user) {
                    const userResponsesRef = collection(firestore, 'userResponses');
                    const userDoc = await getDoc(doc(userResponsesRef, user.uid));
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        videosArr.forEach(video => {
                            if (userData.tests?.[video.id]?.[video.title]?.approved) {
                                video.viewed = true;
                            }
                        });
                    }
                }

                setVideos(videosArr);
                setCategories(Array.from(categoriesSet)); // Convertir Set a Array
            } catch (error) {
                console.error('Error al obtener datos desde Firestore: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideosAndCategories();
    }, [user]);

    // Filtrado por categoría
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
                {/* <CategoryMarquee categories={categories} /> */}

                <p className="text-center text-gray-700 text-lg md:text-xl mb-6">
                    Descubrete, preparate y adelantate <span className="font-bold">con Prelaboral </span>
                    navegando por el contenido que hemos preparado para ti
                </p>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${
                                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                            selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        Todas
                    </button>
                </div>

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
                                    {video.viewed && (
                                        <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-semibold px-2 py-1 rounded">
                                            Ver de nuevo
                                        </span>
                                    )}
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

export default VideoSectionHome;