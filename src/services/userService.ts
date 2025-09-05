import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { auth, db } from '../config/firebase';
import { UserPreferences } from '../types';

class UserService {
  async createUser(email: string, password: string): Promise<FirebaseAuthTypes.User | null> {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async signIn(email: string, password: string): Promise<FirebaseAuthTypes.User | null> {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }

  async saveUserPreferences(userId: string, preferences: UserPreferences): Promise<void> {
    try {
      await db().collection('users').doc(userId).set({
        preferences,
        updatedAt: new Date().toISOString(),
      }, { merge: true });
    } catch (error) {
      console.error('Error saving preferences:', error);
      throw error;
    }
  }

  async getUserPreferences(userId: string): Promise<UserPreferences | null> {
    try {
      const docSnapshot = await db().collection('users').doc(userId).get();
      const data = docSnapshot.data();
      return data?.preferences ?? null;
    } catch (error) {
      console.error('Error getting preferences:', error);
      throw error;
    }
  }

  // Method to save onboarding data
  async saveOnboardingData(userId: string, step: string, data: any): Promise<void> {
    try {
      await db().collection('users').doc(userId).set({
        onboarding: {
          [step]: data,
          updatedAt: new Date().toISOString(),
        }
      }, { merge: true });
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      throw error;
    }
  }
}

export const userService = new UserService();
