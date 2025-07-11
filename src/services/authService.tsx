// src/services/authService.ts
import { auth, firestore } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,           // 👈 nuevo
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export interface UserData {
  tipoUsuario: 'postulante' | 'empresa';
  carrera?: { id: string; nombre: string } | null;
  casaEstudio?: { id: string; nombre: string } | null;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  representante?: string;
  direccion?: string;
  rut?: string;
  razonSocial?: string;
  isFirstLogin?: boolean;
  password: string;        // ← sigue existiendo en el tipo para recibirla,
}                           //   pero NO se guardará en Firestore

export const registerUser = async (
  email: string,
  password: string,
  userData: UserData
) => {
  try {
    // 1️⃣ Alta en Firebase Auth
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    // 2️⃣ Actualizar perfil de Auth (solo displayName por ahora)
    await updateProfile(user, {
      displayName: `${userData.nombre} ${userData.apellido}`,
      // ⚠️ updateProfile NO acepta phoneNumber.
      //     Para asociar el teléfono tendrás que hacer
      //     signInWithPhoneNumber / linkWithCredential cuando habilites SMS.
    });

    // 3️⃣ Crear documento en Firestore SIN la contraseña
    const { password: _omit, ...publicData } = userData;  // descartar password

    const userDocRef = doc(firestore, 'usuarios', user.uid);
    await setDoc(userDocRef, {
      uid: user.uid,
      ...publicData,        // incluye telefono, que usarás después para SMS
    });

    return { success: true };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return { success: false, error: 'El correo electrónico ya está registrado.' };
    }
    return {
      success: false,
      error: error.message || 'Error en el registro. Inténtalo nuevamente.',
    };
  }
};
