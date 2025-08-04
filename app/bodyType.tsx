import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../theme/theme';

const { width, height } = Dimensions.get('window');

const bodyTypes = ['Slim', 'Athletic', 'Curvy', 'Plus-Size'];

export default function BodyTypeScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [heightInput, setHeightInput] = useState<string>('5 ft 10 in');
  const [weightInput, setWeightInput] = useState<string>('70 kg');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          {/* Replace with your logo image if needed */}
        </View>
        {/* Headline */}
        <Text style={styles.headline}>SELECT YOUR BODY TYPE</Text>
        <Text style={styles.subheadline}>
          Be honest. Pick what’s real.{'\n'}No judgment round here.
        </Text>
        {/* Body Type Buttons */}
        <View style={styles.grid}>
          {bodyTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                selectedType === type && styles.typeButtonSelected,
              ]}
              onPress={() => setSelectedType(type)}
              activeOpacity={0.8}
            >
              <Text style={styles.typeButtonText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Height & Weight Inputs */}
        <View style={styles.row}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonLabel}>HEIGHT</Text>
          </View>
          <TextInput
            style={styles.input}
            value={heightInput}
            onChangeText={setHeightInput}
            placeholder="5 ft 10 in"
            placeholderTextColor="#888"
            keyboardType="default"
          />
        </View>
        <View style={styles.row}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonLabel}>WEIGHT</Text>
          </View>
          <TextInput
            style={styles.input}
            value={weightInput}
            onChangeText={setWeightInput}
            placeholder="70 kg"
            placeholderTextColor="#888"
            keyboardType="default"
          />
        </View>
        {/* Skip */}
        <TouchableOpacity style={styles.skipRow} onPress={() => router.push('/setGoals')}>
          <Text style={styles.skipText}>SKIP <Text style={styles.arrow}>→</Text></Text>
        </TouchableOpacity>
        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/setGoals')}>
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
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: height * 0.01,
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
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: height * 0.03,
  },
  typeButton: {
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
  typeButtonSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
  },
  typeButtonText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: height * 0.015,
  },
  infoButton: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.03,
    margin: width * 0.015,
    width: width * 0.42,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  infoButtonLabel: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.03,
    margin: width * 0.015,
    width: width * 0.42,
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  skipRow: {
    alignSelf: 'flex-end',
    marginRight: width * 0.06,
    marginBottom: height * 0.01,
  },
  skipText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  arrow: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
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