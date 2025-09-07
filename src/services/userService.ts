// services.ts
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../config/firebaseConfig';

export const userService = {
  saveUserData: async (userId: string, data: Record<string, any>) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      await setDoc(
        userDocRef,
        {
          ...data,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  },

  getUserData: async (userId: string) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const docSnapshot = await getDoc(userDocRef);
      return docSnapshot.exists() ? docSnapshot.data() : null;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },


  /**
   * Upload an image to Firebase Storage and save its URL to Firestore
   * @param userId - Firebase UID
   * @param uri - local file URI
   * @param field - Firestore field name to save the URL (e.g., 'selfie')
   */
  async uploadImage(userId: string, uri: string, field: string): Promise<void> {
    try {
      // Convert local file URI to Blob
      const response = await fetch(uri);
      const blob = await response.blob();

      // Create a storage reference
      const storageRef = ref(storage, `users/${userId}/${field}.jpg`);

      // Upload the file
      await uploadBytes(storageRef, blob);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Save URL to Firestore
      await this.saveUserData(userId, { [field]: downloadURL });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }}
};
