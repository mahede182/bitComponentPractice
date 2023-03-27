/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import { NativeBaseProvider, Text, Box, Button, VStack, Skeleton } from "native-base";

import BasicComponentPractice from './components/BasicComponentPractice';
import UserInterfacePractice from './components/UserInterfacePractice';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ListViewComponentPractice from './components/ListViewComponentPractice';
import DrawerComponentPractice from './components/DrawerComponentPractice';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  
  setTimeout(() => {
    setIsLoaded(true);
  }, 3000)
  
  return (
    <>
      {/* <BasicComponentPractice /> */}
      {/* <UserInterfacePractice /> */}
      {/* <ListViewComponentPractice /> */}
      <DrawerComponentPractice />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
