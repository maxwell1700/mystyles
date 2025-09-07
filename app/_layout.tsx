import { Stack } from "expo-router";
import React from 'react';

export default function RootLayout(): React.JSX.Element {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(login)" />
      <Stack.Screen name="(signout)" />
      {/* <Stack.Screen name="(main)" />
      <Stack.Screen name="(auth)" /> */}
    </Stack>
  );
}
