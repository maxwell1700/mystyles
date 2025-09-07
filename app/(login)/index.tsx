import { router } from 'expo-router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { auth } from '../../src/config/firebaseConfig';
import { colors, fonts, fontSizes } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(signout)');
    } catch (error: any) {
      alert('Sign in failed: ' + error.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(onboarding)');
    } catch (error: any) {
      alert('Sign up failed: ' + error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/mystyles-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Headline */}
        <Text style={styles.headline}>WELCOME BACK</Text>
        <Text style={styles.subheadline}>
          Sign in to continue your style journey.
        </Text>

        {/* Input Fields */}
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={colors.text}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor={colors.text}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton} onPress={signIn}>
          <Text style={styles.primaryButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={signUp}>
          <Text style={styles.secondaryButtonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: height * 0.04,
    paddingHorizontal: width * 0.04,
  },
  logoContainer: {
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.02,
  },
  logo: {
    width: width * 0.23,
    height: width * 0.23,
    marginBottom: 2,
    alignSelf: 'center',
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.xxl,
    color: colors.primary,
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: height * 0.01,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subheadline: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.md,
    color: colors.text,
    textAlign: 'center',
    marginBottom: height * 0.03,
    lineHeight: fontSizes.md * 1.5,
  },
  textInput: {
    width: '90%',
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.01,
    fontFamily: fonts.regular,
    fontSize: fontSizes.md,
    borderWidth: 1,
    borderColor: '#ccc',
    color: colors.text,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: height * 0.018,
    alignItems: 'center',
    width: '90%',
    marginTop: height * 0.02,
  },
  primaryButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
  secondaryButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: height * 0.018,
    alignItems: 'center',
    width: '90%',
    marginTop: height * 0.015,
    marginBottom: height * 0.02,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
});
