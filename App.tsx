/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import { Platform } from 'react-native';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';

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

// Stand alone practice in official react native site.

import ListViewComponentPractice from './components/ListViewComponentPractice';
import DrawerComponentPractice from './components/DrawerComponentPractice';
import PermissionComponentPractice from './components/PermissionComponentPractice';
import ToastComponentPractice from './components/ToastComponentPractice';
import ActivityIndicatorComponentPractice from './components/ActivityIndicatorComponentPractice';
import AnimationComponentPractice from './components/AnimationComponentPractice';
import KeyboardAvoidingViewComponent from './components/KeyboardAvoidingViewComponentPractice';
import TextInputComponentPractice from './components/TextInputComponentPractice';
import ModalComponentPractice from './components/ModalComponentPractice';
import RefreshControllComponentPractice from './components/RefreshControllComponentPractice';
import StatusBarComponentPractice from './components/StatusBarComponentPractice';
import BgComponent from './components/ImageComponent/BgComponent';
import PressableComponentPractice from './components/PressableComponent/PressableComponentPractice';
import TouchableHighlightComponentPractice from './components/TouchableComponent/TouchableHighlightComponentPractice';
import VirtualizedListComponent from './components/TouchableComponent/VirtualizedListComponentPractice';
import BadgeComponentPractice from './components/NativeElementBaseComponent/BadgeComponentPractice';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

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
      {/* <DrawerComponentPractice /> */}
      {/* <PermissionComponentPractice /> */}
      {/* <ToastComponentPractice /> */}
      {/* <ActivityIndicatorComponentPractice /> */}
      {/* <AnimationComponentPractice /> */}
      {/* <KeyboardAvoidingViewComponent /> */}
      {/* <TextInputComponentPractice /> */}
      {/* <ModalComponentPractice /> */}
      {/* <RefreshControllComponentPractice /> */}
      {/* <StatusBarsComponentPractice /> */}
      {/* <BgComponent /> */}
      {/* <PressableComponentPractice /> */}
      {/* <TouchableHighlightComponentPractice /> */}
      {/* <VirtualizedListComponent /> */}

    <ThemeProvider theme={theme}>
      {/* This button's color will now be the default iOS / Android blue. */}
        {/* <Button title="My Button" /> */}
        <BadgeComponentPractice />
    </ThemeProvider>
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
