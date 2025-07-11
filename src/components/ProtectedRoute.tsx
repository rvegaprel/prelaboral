import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase';
import Spinner from './Others/Spinner.tsx';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [user, setUser] = useState(auth.currentUser); // Inicialmente puede ser null
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Actualiza el estado del usuario
      setLoading(false); // Finaliza la carga
    });

    return () => unsubscribe(); // Limpia el observador
  }, []);

  if (loading) {
    // Mientras se verifica el estado, mostramos un loader
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    // Si no hay usuario después de cargar, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderiza los hijos
  return <>{children}</>;
};

export default ProtectedRoute;
