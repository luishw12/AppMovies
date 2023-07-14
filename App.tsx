import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { useFonts } from 'expo-font';
import { loadFonts } from './assets/fonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    ...loadFonts
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
