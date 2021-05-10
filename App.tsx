import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home'
import { useFonts, Inter_500Medium, Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter';
import { JosefinSans_700Bold, JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading'

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_300Light,
    JosefinSans_700Bold,
    JosefinSans_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar/>
      <Home />
    </>
  );
}


