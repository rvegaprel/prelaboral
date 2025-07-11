import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, firestore } from '../../../firebase.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const [isPostulante, setIsPostulante] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (!isPostulante) {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.rut !== rut) {
            throw new Error('El RUT ingresado no coincide con nuestros registros.');
          }
        } else {
          throw new Error('Usuario no encontrado en Firestore.');
        }
      }

      navigate('/home');
    } catch (error: any) {
      setError(error.message || 'Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 flex items-center justify-center bg-cover bg-center md:bg-none" 
        style={{ backgroundImage: "url('/recursos_graficos/landing-background.png')" }}>
        <div className="p-8 md:p-0">
          <img onClick={() => navigate('/')} src="/logos_prelaboral/logo_prelaboral_blanco_nuevo.png" alt="PreLaboral Logo" className="mx-auto mb-8 md:mb-0 w-48 md:w-auto" />
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-white">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Bienvenido a Prelaboral</h1>
          <p className="text-center mb-6">Por favor selecciona tu perfil</p>

          {/* Selector de Perfil */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsPostulante(true)}
              className={`px-4 py-2 mx-2 font-semibold text-gray-700 border-b-2 ${
                isPostulante ? 'border-black' : 'border-transparent hover:border-gray-300'
              }`}
            >
              Postulantes
            </button>
            <button
              onClick={() => setIsPostulante(false)}
              className={`px-4 py-2 mx-2 font-semibold text-gray-700 border-b-2 ${
                !isPostulante ? 'border-black' : 'border-transparent hover:border-gray-300'
              }`}
            >
              Empresa
            </button>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <input
            type="email"
            placeholder="Email de usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {!isPostulante && (
            <input
              type="text"
              placeholder="RUT de la Empresa"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-teal-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-teal-300"
          >
            Iniciar sesión
          </button>

          <p className="text-center mt-4">
            ¿Aún no tienes cuenta?{' '}
            <Link to="/register" className="text-blue-500 font-semibold">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
