import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../theme/theme';

const { width } = Dimensions.get('window');

export default function SelfieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Take a Selfie</Text>
      {/* <Image source={images.onboarding2} style={styles.image} resizeMode="contain" /> */}
      <Text style={styles.description}>Snap a quick selfie so we can personalize your style recommendations.</Text>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Take Selfie</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.skipButton}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  headline: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.xl,
    color: colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    marginBottom: 24,
    borderRadius: 12,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.md,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 24,
  },
  mainButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 12,
  },
  mainButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
  },
  skipButton: {
    color: colors.primary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
});