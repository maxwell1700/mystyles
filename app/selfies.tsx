import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../theme/theme';

const { width, height } = Dimensions.get('window');

export default function SelfieScreen() {
  const router = useRouter();

  // Open camera or library
  const handleTakeSelfie = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // <-- updated
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    // Handle result if needed
  };

  const handleUploadGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // <-- updated
      allowsMultipleSelection: true,
      quality: 0.8,
    });
    // Handle result if needed
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/mystyles-logo.png')} style={styles.logo} resizeMode="contain" />
        </View>
        {/* Headline */}
        <Text style={styles.headline}>UPLOAD A SELFIE</Text>
        <Text style={styles.subheadline}>
          We’ll never post without your permission.{'\n'}
          This is just for outfit magic.
        </Text>
        {/* Options */}
        <View style={styles.optionsGrid}>
          <TouchableOpacity style={styles.optionButton} onPress={handleTakeSelfie}>
            <Text style={styles.optionButtonText}>TAKE A SELFIE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleUploadGallery}>
            <Text style={styles.optionButtonText}>UPLOAD A GALLERY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => router.push('/preference')}>
            <Text style={styles.optionButtonText}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>
        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/preference')}>
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
  optionButtonText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
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