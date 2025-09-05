import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { userService } from '../services/userService';
import { UserPreferences } from '../types';

export function useUser() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        try {
          const prefs = await userService.getUserPreferences(user.uid);
          setPreferences(prefs);
        } catch (error) {
          console.error('Error fetching user preferences:', error);
        }
      } else {
        setPreferences(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updatePreferences = async (newPreferences: Partial<UserPreferences>) => {
    if (!user) return;
    
    const updatedPreferences = {
      ...preferences,
      ...newPreferences,
    };
    
    await userService.saveUserPreferences(user.uid, updatedPreferences as UserPreferences);
    setPreferences(updatedPreferences as UserPreferences);
  };

  return {
    user,
    loading,
    preferences,
    updatePreferences,
  };
}
