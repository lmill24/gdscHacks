import { Text, View } from 'react-native';
import React from 'react';
import { SplashScreen, Stack } from "expo-router";

const layout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, title: "Back" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: true, title: "My Pages"}} />
        <Stack.Screen name="(auth)" options={{ headerShown: true, title: "Sign in"}} />
      </Stack>
  );
};

export default layout;
