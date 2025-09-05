import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// No need to initialize app explicitly with @react-native-firebase
// it's done automatically when you import the modules

export { auth, firestore as db };
