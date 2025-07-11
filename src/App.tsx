import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Home/Hero.tsx';
//import News from './components/News';
import Home from './pages/HomePage';
//import Plans from './components/Plans';
import Login from './components/Forms/Login.tsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer.tsx';
//import Features from './components/Features';
import JobOffers from './components/Others/JobOffers';
import RegisterForm from './components/Forms/RegisterForm.tsx';
import ProtectedRoute from './components/ProtectedRoute';
import VideoSection from './components/VideoSection/VideoSection.tsx';
//import ProfileAdaptation from './components/ProfileAdaptation';
import VideoPage from './pages/VideoPage'; // Importar la nueva página de destino
import ProfilePage from './pages/ProfilePage';
import ArmaCV from './pages/ArmaCVPage';
//import VideoSectionPostCV from './pages/VideoSectionPostCV';
import MuestraVideos from './pages/demos/MuestraVideos.tsx';
import VideoSectionHome from './components/VideoSection/VideoSectionHome.tsx';
import CoeficientePage from './pages/demos/CoeficientePage.tsx';

const MainPage: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <Hero />
    <VideoSection />
    <Footer />
  </div>
);

const RegisterPage: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <RegisterForm />
    <Footer />
  </div>
);

const MuestraVideosPage: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <MuestraVideos />
    <Footer />
  </div>
);

const OfertasLaborales: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <JobOffers />
    <Footer />
  </div>
);

// Nueva página de destino con Navbar y Footer
const VideoPageLayout: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <VideoPage />
    <Footer />
  </div>
);

const ProfilePageLayout: React.FC = () => (
  <div className="font-sans">
    <Navbar />
    <ProfilePage />
    <Footer />
  </div>
);

const HomePage: React.FC = () => (
  <div className="font-sans">
    <Navbar />
      <Home />
    <VideoSectionHome />
    <Footer />
  </div>
);

const ArmaCVPage: React.FC = () => (
  <div className="font-sans">
    <Navbar />
      <ArmaCV />
    <Footer />
  </div>
);

const CoeficientePageLayout: React.FC = () => (
  <div className="font-sans">
    <Navbar />
      <CoeficientePage />
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"                   element={<MainPage />} />
        <Route path="/register"           element={<RegisterPage />} />
        <Route path="/login"              element={<Login />} />
        <Route path="/muestra-videos"     element={<MuestraVideosPage/>} />
        <Route path="/home"               element={<ProtectedRoute> <HomePage /> </ProtectedRoute> } />
        <Route path="/profile"            element={<ProtectedRoute> <ProfilePageLayout /> </ProtectedRoute>} />
        <Route path="/ofertas-laborales"  element={<ProtectedRoute> <OfertasLaborales /> </ProtectedRoute>} />
        <Route path="/arma-tu-cv"         element={<ProtectedRoute> <ArmaCVPage /> </ProtectedRoute>} />
        <Route path="/coeficiente"        element={<CoeficientePageLayout />} />
        
        {/* Nueva ruta para la página de destino del video */}
        <Route path="/video/:areaId" element={<VideoPageLayout />} />

      </Routes>
    </Router>
  );
};

export default App;
