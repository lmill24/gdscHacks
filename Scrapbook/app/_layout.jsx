import { Text, View } from 'react-native';
import React from 'react';
import { SplashScreen, Stack } from "expo-router";

const layout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
};

export default layout;
