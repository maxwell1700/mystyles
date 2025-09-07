import { auth } from '@/src/config/firebaseConfig';
import { userService } from '@/src/services/userService';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { colors, fonts, fontSizes } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

const bodyTypes = ['Slim', 'Athletic', 'Curvy', 'Plus-Size'];

export default function BodyTypeScreen() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const heightOptions = [
    "4 ft 10 in", "5 ft 0 in", "5 ft 2 in", "5 ft 4 in",
    "5 ft 6 in", "5 ft 8 in", "5 ft 10 in", "6 ft 0 in"
  ];
  const weightOptions = [
    "50 kg", "55 kg", "60 kg", "65 kg", "70 kg", "75 kg", "80 kg", "85 kg", "90 kg"
  ];

  const [heightInput, setHeightInput] = useState<string>(heightOptions[4]); // default: 5 ft 6 in
  const [weightInput, setWeightInput] = useState<string>(weightOptions[4]); // default: 70 kg

  const handleContinue = async () => {
  if (!auth.currentUser) {
    alert('User not signed in');
    return;
  }

  const userId = auth.currentUser.uid;

  const data = {
    bodyType: selectedType,
    height: heightInput,
    weight: weightInput,
  };

  try {
    await userService.saveUserData(userId, data);
    router.push('/setGoals');
  } catch (error: any) {
    alert('Failed to save data: ' + error.message);
  }
};


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Headline */}
        <Text style={styles.headline}>SELECT YOUR BODY TYPE</Text>
        
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

        {/* HEIGHT */}
        <View style={styles.row}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonLabel}>HEIGHT</Text>
          </View>
          <View style={styles.scrollPickerContainer}>
            <ScrollPicker
              dataSource={heightOptions}
              selectedIndex={heightOptions.indexOf(heightInput)}
              renderItem={(data) => (
                <Text style={styles.scrollPickerText}>{data}</Text>
              )}
              onValueChange={(data) => setHeightInput(data ?? '')}
              wrapperBackground="#eaeaea"
              wrapperHeight={height * 0.07}
              itemHeight={height * 0.07}
              highlightColor="#ccc"
              highlightBorderWidth={1}
            />
          </View>
        </View>

        {/* WEIGHT */}
        <View style={styles.row}>
          <View style={styles.infoButton}>
            <Text style={styles.infoButtonLabel}>WEIGHT</Text>
          </View>
          <View style={styles.scrollPickerContainer}>
            <ScrollPicker
              dataSource={weightOptions}
              selectedIndex={weightOptions.indexOf(weightInput)}
              renderItem={(data) => (
                <Text style={styles.scrollPickerText}>{data}</Text>
              )}
              onValueChange={(data) => setWeightInput(data ?? '')}
              wrapperBackground="#eaeaea"
              wrapperHeight={height * 0.07}
              itemHeight={height * 0.07}
              highlightColor="#ccc"
              highlightBorderWidth={1}
            />
          </View>
        </View>

        {/* Skip */}
        <TouchableOpacity style={styles.skipRow} onPress={() => router.push('/setGoals')}>
          <Text style={styles.skipText}>SKIP <Text style={styles.arrow}>→</Text></Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={!selectedType}>
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
  scrollPickerContainer: {
    backgroundColor: '#eaeaea',
    borderRadius: 20,
    margin: width * 0.015,
    width: width * 0.42,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  scrollPickerText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.lg,
    color: colors.primary,
    textAlign: 'center',
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
