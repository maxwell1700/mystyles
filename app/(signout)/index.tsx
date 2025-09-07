import { router } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../src/config/firebaseConfig';

export default function SignOutScreen() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace('/(login)'); // send them back to login
    } catch (error: any) {
      alert('Error signing out: ' + error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>You are signed in 🎉</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={{ marginTop: 20, color: 'blue' }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
