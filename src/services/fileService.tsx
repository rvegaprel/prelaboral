import { storage, auth } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Sube un archivo a Firebase Storage y retorna su URL.
 * @param file El archivo a subir.
 * @param path La subruta dentro del bucket de storage.
 * @returns URL del archivo subido.
 */
export const uploadFile = async (file: File, path: string): Promise<string> => {
    try {
        if (!auth.currentUser) {
            throw new Error('El usuario no está autenticado.');
        }

        const sanitizedFileName = file.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9._-]/g, '');
        
        // Garantizar que path no tenga duplicación de rutas
        const storagePath = path.startsWith('usuarios/')
            ? `${path}/${sanitizedFileName}`
            : `usuarios/${auth.currentUser.uid}/${path}/${sanitizedFileName}`;
        
        console.log('Ruta de subida:', storagePath);
        
        const storageRef = ref(storage, storagePath);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        console.log('Archivo subido correctamente:', downloadURL);
        return downloadURL;
    } catch (error: any) {
        console.error('Error al subir archivo:', error.message || error.code);
        throw error;
    }
};
