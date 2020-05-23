import React from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light } from "@eva-design/eva";
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/redux/store';
import BrowseScreen from './src/view/screens/browse/browseScreen';
import HomeScreen from './src/view/screens/home/homeScreen';
import ForgotPassword from './src/view/screens/authentication/forgot-password/forgot-password';
import DownloadScreen from './src/view/screens/downloads/downloadScreen';
import ProfileScreen from './src/view/screens/profile/profileScreen';
import CourseListScreen from './src/view/screens/course/courseListScreen';
import SearchScreen from './src/view/screens/search/searchScreen';
import RegisterScreen from './src/view/screens/authentication/register/registerScreen';
import SplashScreen from './src/view/screens/splashScreen/splashScreen';
import LoginScreen from './src/view/screens/authentication/login/loginScreen'
import { ScreenKey } from './src/global/constants';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainBottomTab from './src/view/routes/mainBottomTab';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigationStyle.defaultNavigationOptions} initialRouteName={ScreenKey.SplashScreen}>
      <Stack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenKey.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenKey.MainTab}
        component={MainBottomTab}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={light}>
          <NavigationContainer>
            <AppStackNavigator/>
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </ReduxProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});

const navigationStyle = {
  defaultNavigationOptions: {
    headerStyle: {
      height: 80,
      backgroundColor: "#eee",
      borderBottomColor: "transparent",
      elevation: 0 // for android
    },
  }
}