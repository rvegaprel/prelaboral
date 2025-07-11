import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase';
import { doc, setDoc, getDoc, DocumentReference } from 'firebase/firestore';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import BackButton from '../components/Others/BackButton.tsx';
import AdditionalInfoTabs from '../components/Others/AdditionalInfoTabs.tsx';
import LoadingSpinner from '../components/Others/LoadingSpinner.tsx';
import VideoTestSection from '../components/VideoSection/VideoTestSection.tsx';
import ModalsContainer from '../components/Modals/ModalsContainer';
import LearningPathSidebar from '../components/VideoSection/LearningPathSidebar.tsx';

// Definición de interfaces
interface Video {
  title: string;
  videoUrl: string;
  order: number;
  passingScore?: number;
  exitTestQuestions?: any[];
}

interface SelectedArea {
  id: string;
  name: string;
  videos: Video[];
  relacionados?: string[]; // Propiedad agregada
  relatorName?: string;
  relatorExperience?: string;
  linkedinUrl?: string;
  complementaryMaterials?: any[];
}

interface Area {
  id: string;
  name: string;
  videos: Video[];
  order: number;
}

interface UserResponse {
  approved: boolean;
  score?: number;
  attempts: number;
  lastResponses?: Record<string, any>;
  timestamp: string;
}

interface TestResult {
  approved: boolean;
  score: number;
  passingScore: number;
  isEvaluation: boolean;
}

const VideoPage = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedArea, setSelectedArea] = useState<SelectedArea | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [learningPath, setLearningPath] = useState<Area[]>([]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [testResult, setTestResult] = useState<TestResult>({
    approved: false,
    score: 0,
    passingScore: 0,
    isEvaluation: false,
  });
  const [userResponses, setUserResponses] = useState<Record<string, Record<string, UserResponse>>>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchAreaAndRelated = async () => {
      setIsLoading(true);
      const areaDocRef = doc(firestore, 'learningAreas', areaId || '') as DocumentReference<SelectedArea>;
      const areaDoc = await getDoc(areaDocRef);
      if (areaDoc.exists()) {
        const areaData = areaDoc.data();
        const rootArea: Area = {
          ...areaData,
          id: areaDoc.id,
          videos: (areaData.videos || []).map((video) => ({
            ...video,
            passingScore: video.passingScore || (video.exitTestQuestions?.length || 0),
          })).sort((a, b) => a.order - b.order),
          order: 0,
        };

        const relatedAreasPromises: Promise<Area | null>[] = (areaData.relacionados || []).map(async (relatedId: string) => {
          const relatedDocRef = doc(firestore, 'learningAreas', relatedId) as DocumentReference<SelectedArea>;
          const relatedDoc = await getDoc(relatedDocRef);
          if (relatedDoc.exists()) {
            const relatedData = relatedDoc.data();
            return {
              ...relatedData,
              id: relatedDoc.id,
              videos: (relatedData.videos || []).map((video) => ({
                ...video,
                passingScore: video.passingScore || (video.exitTestQuestions?.length || 0),
              })).sort((a, b) => a.order - b.order),
              order: 1 + (areaData.relacionados || []).indexOf(relatedId),
            } as Area;
          }
          return null;
        });

        const relatedAreas = (await Promise.all(relatedAreasPromises)).filter((area): area is Area => area !== null);

        const areas = [rootArea, ...relatedAreas];
        areas.sort((a, b) => a.order - b.order);

        setLearningPath(areas);
        setSelectedArea(rootArea);
      } else {
        setSelectedArea(null);
        console.error(`No se encontró el área con ID: ${areaId}`);
      }
      setIsLoading(false);
    };
    fetchAreaAndRelated();
  }, [areaId]);

  useEffect(() => {
    if (selectedArea && selectedVideoIndex >= selectedArea.videos.length) {
      setSelectedVideoIndex(0);
    }
  }, [selectedArea, selectedVideoIndex]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        const userDocRef = doc(firestore, 'userResponses', user.uid) as DocumentReference<{ tests: Record<string, Record<string, UserResponse>> }>;
        const userDoc = await getDoc(userDocRef);
        setUserResponses(userDoc.exists() ? (userDoc.data().tests as Record<string, Record<string, UserResponse>>) || {} : {});
      } else {
        setUserResponses({});
      }
    });
    return () => unsubscribe();
  }, []);

  const handlePlay = () => {
    if (!isAuthenticated) {
      setShowRegisterModal(true);
      if (videoRef.current) videoRef.current.pause();
    }
  };

  const handleVideoEnd = () => {
    if (isAuthenticated) setShowTest(true);
  };

  const handleSubmitTest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedArea) return;

    const formData = new FormData(e.currentTarget);
    const currentVideo = selectedArea.videos[selectedVideoIndex];
    const user = auth.currentUser;
    if (!user) return;

    const responses: Record<string, any> = {};
    let score: number | undefined = undefined;
    const isEvaluation = ['Podcast', 'Lo bueno y lo malo'].includes(currentVideo.title);
    const isCompletion = ['Resumen', '10 Mandamientos'].includes(currentVideo.title);

    currentVideo.exitTestQuestions?.forEach((q: any, index: number) => {
      if (q.type === 'checkbox') {
        const selected = formData.getAll(`question-${index}`);
        responses[q.question] = selected;
        if (isEvaluation) {
          score = (score || 0) + (selected.length > 0 ? 1 : 0);
        } else if (isCompletion) {
          if (selected.length > 0) responses[q.question] = selected;
        }
      } else if (q.correct && isEvaluation) {
        const answer = formData.get(`question-${index}`);
        responses[q.question] = answer;
        if (answer === q.correct) {
          score = (score || 0) + 1;
        }
      } else if (isCompletion) {
        const answer = formData.get(`question-${index}`);
        if (answer) responses[q.question] = answer;
      } else {
        responses[q.question] = formData.get(`question-${index}`);
      }
    });

    const passingScore = currentVideo.passingScore || (currentVideo.exitTestQuestions?.length || 0);
    const approved = isEvaluation
        ? score !== undefined && score >= passingScore
        : isCompletion
            ? Object.keys(responses).length > 0
            : true;

    const updatedResponses: Record<string, Record<string, UserResponse>> = {
      ...userResponses,
      [selectedArea.id]: {
        ...userResponses[selectedArea.id],
        [currentVideo.title]: {
          approved,
          ...(isEvaluation ? { score } : {}),
          attempts: (userResponses?.[selectedArea.id]?.[currentVideo.title]?.attempts || 0) + 1,
          lastResponses: responses,
          timestamp: new Date().toISOString(),
        },
      },
    };

    try {
      const userDocRef = doc(firestore, 'userResponses', user.uid) as DocumentReference<{ email: string; tests: Record<string, Record<string, UserResponse>> }>;
      await setDoc(userDocRef, { email: user.email || '', tests: updatedResponses }, { merge: true });
      setUserResponses(updatedResponses);
      setTestResult({
        approved,
        score: isEvaluation && score !== undefined ? score : 0,
        passingScore: isEvaluation ? passingScore : 0,
        isEvaluation,
      });
      setShowTest(false);
      setShowResultModal(true);
    } catch (error: any) {
      console.error('Error al guardar en Firestore:', error);
      setTestResult({
        approved: false,
        score: 0,
        passingScore: 0,
        isEvaluation: false,
      });
      setShowResultModal(true);
    }
  };

  const goToNext = () => {
    if (!selectedArea) return;

    const sortedVideos = [...selectedArea.videos].sort((a, b) => a.order - b.order);
    const currentVideo = sortedVideos[selectedVideoIndex];
    const nextVideo = sortedVideos.find((video) => video.order > currentVideo.order);

    if (nextVideo) {
      const nextIndex = sortedVideos.findIndex((v) => v.order === nextVideo.order);
      setSelectedVideoIndex(nextIndex);
      setShowResultModal(false);
    } else {
      const currentAreaIndex = learningPath.findIndex((area) => area.id === selectedArea.id);
      const nextArea = learningPath[currentAreaIndex + 1];
      if (nextArea) {
        navigate(`/video/${nextArea.id}`);
      } else {
        setShowResultModal(false);
        setShowCertificateModal(true);
      }
    }
  };

  const handleReplayVideo = () => {
    setShowTest(false);
    setShowResultModal(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const isCompleted = (areaId: string, videoTitle: string | null = null): boolean => {
    if (videoTitle) {
      const response = userResponses?.[areaId]?.[videoTitle];
      return response && response.approved === true;
    } else {
      const area = learningPath.find((a) => a.id === areaId);
      const areaVideos = area?.videos || [];
      return areaVideos.every((video) => {
        const response = userResponses?.[areaId]?.[video.title];
        return response && response.approved === true;
      });
    }
  };

  return (
      <section className="flex flex-col px-6 py-3 space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-start">
        <div className="flex-1">
          <BackButton />
          <div className="lg:mr-3">
            {isLoading ? (
                <LoadingSpinner />
            ) : selectedArea ? (
                <>
                  <h2 className="text-[19px] lg:text-[28px] font-semibold my-3 lg:my-4">{selectedArea.name}</h2>
                  {!showTest ? (
                      selectedArea.videos[selectedVideoIndex] ? (
                          <VideoPlayer
                              videoUrl={selectedArea.videos[selectedVideoIndex].videoUrl}
                              videoKey={selectedVideoIndex}
                              videoRef={videoRef}
                              onPlay={handlePlay}
                              onEnded={handleVideoEnd}
                              label={selectedArea.videos[selectedVideoIndex].title}
                          />
                      ) : (
                          <div className="text-center text-gray-500">Cargando video...</div>
                      )
                  ) : (
                      selectedArea.videos[selectedVideoIndex] ? (
                          <VideoTestSection
                              selectedArea={selectedArea}
                              selectedVideoIndex={selectedVideoIndex}
                              userResponses={userResponses}
                              handleSubmitTest={handleSubmitTest}
                              handleReplayVideo={handleReplayVideo}
                              goToNext={goToNext}
                          />
                      ) : (
                          <div className="text-center text-gray-500">Cargando test...</div>
                      )
                  )}
                </>
            ) : (
                <div className="text-center p-6">
                  <h2 className="text-2xl font-bold text-gray-600 mb-4">No hay contenido disponible</h2>
                  <p className="text-lg text-gray-500">Parece que el área solicitada no tiene datos cargados en este momento.</p>
                </div>
            )}
          </div>
          {selectedArea && <AdditionalInfoTabs selectedArea={selectedArea} />}
        </div>
        {areaId && (
            <LearningPathSidebar
                learningPath={learningPath}
                areaId={areaId}
                selectedVideoIndex={selectedVideoIndex}
                setSelectedVideoIndex={setSelectedVideoIndex}
                setShowTest={setShowTest}
                isCompleted={isCompleted}
            />
        )}
        <ModalsContainer
            showRegisterModal={showRegisterModal}
            showSubscriptionModal={showSubscriptionModal}
            showResultModal={showResultModal}
            showCertificateModal={showCertificateModal}
            setShowRegisterModal={setShowRegisterModal}
            setShowSubscriptionModal={setShowSubscriptionModal}
            setShowResultModal={setShowResultModal}
            setShowCertificateModal={setShowCertificateModal}
            testResult={testResult}
            goToNext={goToNext}
            handleReplayVideo={handleReplayVideo}
            navigate={navigate}
        />
      </section>
  );
};

export default VideoPage;