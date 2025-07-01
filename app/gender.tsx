import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../theme/theme';

const { width } = Dimensions.get('window');

export default function GenderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Select Your Gender</Text>
      {/* <Image source={images.onboarding5} style={styles.image} resizeMode="contain" /> */}
      <Text style={styles.description}>Let us know your gender to help us tailor your style experience.</Text>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.mainButtonText}>Continue</Text>
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
  },
  mainButtonText: {
    color: colors.secondary,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
  },
});