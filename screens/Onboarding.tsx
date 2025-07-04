import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '../theme/images';
import { colors, fonts, fontSizes } from '../theme/theme';

const { width } = Dimensions.get('window');

type OnboardingProps = {
    navigation: any; // Replace 'any' with your navigation prop type if available
};

const Onboarding: React.FC = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Logo and App Name */}
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/mystyles-logo.png')} style={styles.logo} resizeMode="contain" />
            </View>

            {/* Headline */}
            <Text style={styles.headline}>STEP INTO YOUR STYLE</Text>
            <Text style={styles.subheadline}>With My Styles</Text>

            {/* Main Image */}
            <Image source={images.onboarding1} style={styles.image} resizeMode="contain" />

            {/* Tagline and Description */}
            <Text style={styles.tagline}>YOUR AI STYLIST FOR COLD LOOKS, CERTI FITS, & REAL DRIP.</Text>
            <Text style={styles.description}>TRY ON OUTFITS. CURATE YOUR CLOSET. OWN YOUR VIBE.</Text>

            {/* Main Action Button */}
            <TouchableOpacity style={styles.mainButton} onPress={() => {router.push('/bodyType');}}>
                <Text style={styles.mainButtonText}>Let’s Build Your Fit →</Text>
            </TouchableOpacity>

            {/* Bottom Buttons */}
            <View style={styles.bottomRow}>
                <TouchableOpacity onPress={() => {/* navigation logic */}}>
                    <Text style={styles.bottomButton}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {/* navigation logic */}}>
                    <Text style={styles.bottomButton}>Skip Setup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 8,
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 2,
    },
    appName: {
        fontFamily: fonts.bold,
        fontSize: fontSizes.md,
        letterSpacing: 2,
        color: colors.primary,
        marginBottom: 8,
    },
    headline: {
        fontFamily: fonts.bold,
        fontSize: fontSizes.xxl,
        color: colors.primary,
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1,
    },
    subheadline: {
        fontFamily: fonts.bold,
        fontSize: fontSizes.xl,
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 12,
    },
    image: {
        width: width * 0.9,
        height: width * 0.6,
        marginVertical: 12,
        borderRadius: 12,
    },
    tagline: {
        fontFamily: fonts.bold,
        fontSize: fontSizes.lg,
        color: colors.primary,
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 2,
    },
    description: {
        fontFamily: fonts.regular,
        fontSize: fontSizes.md,
        color: colors.text,
        textAlign: 'center',
        marginBottom: 18,
    },
    mainButton: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginVertical: 10,
        alignItems: 'center',
        width: '100%',
    },
    mainButtonText: {
        color: colors.secondary,
        fontFamily: fonts.bold,
        fontSize: fontSizes.lg,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 32,
        left: 0,
        paddingHorizontal: 24,
    },
    bottomButton: {
        color: colors.primary,
        fontFamily: fonts.bold,
        fontSize: fontSizes.md,
    },
});
