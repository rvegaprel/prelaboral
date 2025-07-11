import React, { useState } from 'react';
import {Area} from './types.ts';

import { IoIosArrowDown, IoIosArrowUp, IoIosPlay } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiSolidCheckCircle } from "react-icons/bi";


interface LearningPathSidebarProps {
    learningPath: Area[];
    areaId: string;
    //selectedArea: SelectedArea | null;
    selectedVideoIndex: number;
    setSelectedVideoIndex: (index: number) => void;
    setShowTest: (show: boolean) => void;
    //sideButtons: SideButton[];
    //navigate: (path: string) => void;
    isCompleted: (areaId: string, videoTitle?: string) => boolean;
    //iconMap: Record<string, React.ReactNode>;
}

const LearningPathSidebar: React.FC<LearningPathSidebarProps> = ({
    learningPath,
    areaId,
    //selectedArea,
    selectedVideoIndex,
    setSelectedVideoIndex,
    setShowTest,
    //sideButtons,
    //navigate,
    isCompleted,
    //iconMap,
}) => {
    const [expandedAreaId, setExpandedAreaId] = useState<string | null>(areaId);

    {/* Definición la barra de progreso*/ }
    const getAreaProgress = (area: Area) => {
        const total = area.videos.length;
        const completed = area.videos.filter(video => isCompleted(area.id, video.title)).length;
        return Math.round((completed / total) * 100);
    };

    return (
        <section className="w-full md:w-1/3 flex flex-col space-y-4">
            {learningPath.length > 0 && (

                //*****  Titulo *****
                <div className="bg-white p-4 rounded-[20px] border-[1px]" style={{ borderColor: '#E9EAEB' }}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-[16px] md:text-[28px] font-semibold text-gray-900">
                            {learningPath[0]?.name || 'Ruta Tecnológica'}
                        </h3>
                        <span className="text-[14px] font-light text-gray-900"
                            style={{ color: "#5F6368" }}>
                            {learningPath.length} Módulos
                        </span>
                    </div>

                    {/* Barra de Progreso*/}
                    <div className="flex gap-2 mb-4">
                        {learningPath.map((area) => (
                            <div key={area.id} className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyan-400"
                                    style={{ width: `${getAreaProgress(area)}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 rounded-[20px]">
                        {/* Aqui se muestran todas las areas de estudios y sus videos correspondientes*/}
                        {learningPath.map((area, index) => (

                            <div key={area.id} className="relative">
                                {/* Linea que divide*/}
                                {index !== 0 && (
                                    <div className="border-[0.5px] mx-[1px] mb-4"
                                        style={{ borderColor: '#E9EAEB' }} ></div>)}

                                {/* Esto hace que se expanda*/}
                                <button className="w-full text-left py-3 flex items-center justify-between focus:outline-none"
                                    onClick={() => setExpandedAreaId(prev => (prev === area.id ? null : area.id))} >

                                    <div className="flex items-center text-[14px] md:text-[16px] font-semibold text-black">


                                        {area.name}
                                        {/* condiciona el comportamiento si el video esta completo*/}
                                        {isCompleted(area.id) && <BiSolidCheckCircle className="text-[40px] text-green-500" />}
                                    </div>
                                    {/* Icono que expande y retrae la lista*/}
                                    <span className="">{expandedAreaId === area.id ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </button>

                                {expandedAreaId === area.id && area.videos && (
                                    <div className="pb-3 space-y-4">
                                        {area.videos.map((video, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center justify-between py-1 rounded-md cursor-pointer ${selectedVideoIndex === index ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'} hover:bg-blue-100`}
                                                onClick={() => {
                                                    setSelectedVideoIndex(index);
                                                    setShowTest(false);
                                                }}
                                            >
                                                {/* Determina como luce la lista expandida*/}
                                                <div className="flex flex-col text-gray-800 font-light text-[16px]">
                                                    <div className="flex items-center">
                                                        {<div className="w-[50px] h-[40px] rounded-[8px] flex items-center justify-center mr-3"
                                                            style={{ backgroundColor: "#88E5F4" }}>
                                                            <IoIosPlay className="text-blue-500 text-[14px] md:text-[15px]" />
                                                        </div>}
                                                        {video.title}
                                                    </div>
                                                    {video.duration && <span className="text-xs text-gray-500 ml-6">{video.duration}</span>}
                                                </div>
                                                {isCompleted(area.id, video.title) ? (
                                                    <BiSolidCheckCircle className="text-[40px] text-green-500" />
                                                ) : (
                                                    <IoPlayCircleOutline className=" text-[40px]" style={{ color: "#00CFF1" }} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

           
        </section>
    );
};

export default LearningPathSidebar;
