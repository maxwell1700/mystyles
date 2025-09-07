import { auth } from '@/src/config/firebaseConfig';
import { userService } from '@/src/services/userService';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

const preferences = [
  'Vintage Street',
  'Techwear',
  'Sporty / Athleisure',
  'Designer / Luxury',
  'Urban Casual',
  'Minimalist',
  'Y2K / Retro',
  'Skater',
  'Not Sure Yet - Show Me A Mix',
];

export default function PreferenceScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const togglePreference = (pref: string) => {
    setSelected((prev) =>
      prev.includes(pref)
        ? prev.filter((p) => p !== pref)
        : [...prev, pref]
    );
  };

  const handleContinue = async () => {
      if (!auth.currentUser) {
        alert('User not signed in');
        return;
      }
    
      const userId = auth.currentUser.uid;
    
      const data = {
        preferenced: selected
      };
    
      try {
        await userService.saveUserData(userId, data);
        router.push('/');
      } catch (error: any) {
        alert('Failed to save data: ' + error.message);
      }
    };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/mystyles-logo.png')} style={styles.logo} resizeMode="contain" />
        </View>
        {/* Headline */}
        <Text style={styles.headline}>STYLE PREFERENCES</Text>
        <Text style={styles.subheadline}>Pick your streetwear vibe or{'\n'}combine a few</Text>
        {/* Preference Buttons */}
        <View style={styles.grid}>
          {preferences.map((pref) => (
            <TouchableOpacity
              key={pref}
              style={[
                styles.prefButton,
                selected.includes(pref) && styles.prefButtonSelected,
              ]}
              onPress={() => togglePreference(pref)}
              activeOpacity={0.8}
            >
              <Text style={styles.prefButtonText}>{pref}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/')}>
          <Text style={styles.continueButtonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',      // Center horizontally
    justifyContent: 'center',  // Center vertically if needed
    width: '100%',
    marginBottom: height * 0.02,
  },
  logo: {
    width: width * 0.23,       // Bigger logo
    height: width * 0.23,
    marginBottom: 2,
    alignSelf: 'center',
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.xxl,
    color: colors.primary,
    textAlign: 'center',
    marginTop: height * 0.01,
    letterSpacing: 2,
    marginBottom: height * 0.01,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subheadline: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.md,
    color: colors.text,
    textAlign: 'center',
    marginBottom: height * 0.02,
    lineHeight: fontSizes.md * 1.5,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: height * 0.03,
  },
  prefButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.03,
    margin: width * 0.015,
    width: width * 0.42,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  prefButtonSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
  },
  prefButtonText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.md,
    color: colors.primary,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: height * 0.018,
    alignItems: 'center',
    width: '90%',
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  continueButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
});