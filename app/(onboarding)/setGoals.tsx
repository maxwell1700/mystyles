import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, fontSizes } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

const goals = [
  'SHOP SMARTER',
  'TRY ON BEFORE I BUY',
  'ORGANISE MY WARDROBE',
  'BUILD BETTER OUTFITS',
];

export default function SetGoalsScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleGoal = (goal: string) => {
    setSelected((prev) =>
      prev.includes(goal)
        ? prev.filter((g) => g !== goal)
        : [...prev, goal]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/mystyles-logo.png')} style={styles.logo} resizeMode="contain" />
        </View>
        {/* Headline */}
        <Text style={styles.headline}>CHOOSE YOUR STYLE GOALS</Text>
        <Text style={styles.subheadline}>
          Your style. Your rules.{'\n'}
          Choose what matters and we’ll do the rest.
        </Text>
        {/* Goal Buttons */}
        <View style={styles.goalsGrid}>
          {goals.map((goal) => (
            <TouchableOpacity
              key={goal}
              style={[
                styles.goalButton,
                selected.includes(goal) && styles.goalButtonSelected,
              ]}
              onPress={() => toggleGoal(goal)}
              activeOpacity={0.8}
            >
              <Text style={styles.goalButtonText}>{goal}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={() => router.push('/gender')}>
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
  goalsGrid: {
    width: '100%',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  goalButton: {
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
  goalButtonSelected: {
    backgroundColor: colors.accent,
    borderColor: colors.primary,
  },
  goalButtonText: {
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