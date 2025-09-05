import { Stack } from 'expo-router';
import React from 'react';
import { useUser } from '../../src/hooks/useUser';

export default function OnboardingLayout() {
  const { user, loading } = useUser();

  // If the user is already logged in and has completed onboarding,
  // redirect them to the main app
  if (!loading && user) {
    // router.replace('/(main)');
    // Uncomment above line when ready to implement redirect
  }

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="gender" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="bodyType" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="preference" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="selfies" 
        options={{ 
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="setGoals" 
        options={{ 
          headerShown: false,
        }} 
      />
    </Stack>
  );
}
