import { auth } from '@/src/config/firebaseConfig';
import { userService } from '@/src/services/userService';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

const genderOptions = [
  {
    label: 'MALE',
    description: "I usually shop in the men's section",
  },
  {
    label: 'FEMALE',
    description: "I usually shop in the women's section",
  },
  {
    label: 'NON-BINARY / OTHER',
    description: "Show me all styles - I’ll choose what fits me",
  },
];

export default function GenderScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleContinue = async () => {
    if (!auth.currentUser) {
      alert('User not signed in');
      return;
    }
  
    const userId = auth.currentUser.uid;
  
    const data = {
      gender: selected
    };
  
    try {
      await userService.saveUserData(userId, data);
      router.push('/selfies');
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
        <Text style={styles.headline}>SELECT YOUR GENDER</Text>
        <Text style={styles.subheadline}>
          For the best recommendations,{'\n'}tell us how you shop
        </Text>
        {/* Gender Options */}
        <View style={styles.optionsGrid}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={[
                styles.optionButton,
                selected === option.label && styles.optionButtonSelected,
              ]}
              onPress={() => setSelected(option.label)}
              activeOpacity={0.8}
            >
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          disabled={!selected}
        >
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
    fontFamily: fonts.bold,
    fontSize: fontSizes.md,
    color: colors.text,
    textAlign: 'center',
    marginBottom: height * 0.02,
    lineHeight: fontSizes.md * 1.5,
  },
  optionsGrid: {
    width: '100%',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  optionButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.01,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionButtonSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
  },
  optionLabel: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  optionDescription: {
    fontFamily: fonts.regular,
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
    opacity: 1,
  },
  continueButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    letterSpacing: 1,
  },
});