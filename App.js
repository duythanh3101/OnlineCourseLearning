import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";
import { Provider as ReduxProvider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/redux/store';
import BrowseScreen from './src/view/screens/browse/browseScreen';
import HomeScreen from './src/view/screens/home/homeScreen';
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
import AuthenticationStack from './src/view/routes/authenticationStack';
import HomeStack from './src/view/routes/homeStack';
import SearchTab from './src/view/routes/searchTab';
import CourseDetailScreen from './src/view/screens/course/courseDetailScreen';
import { ThemeProvider } from './src/provider/theme-provider';
import { CourseDataProvider } from './src/provider/course-data/course-data-provider';
import { AuthorDataProvider } from './src/provider/author-data/author-data-provider';
import { PathDataProvider } from './src/provider/path-data/path-data-provider';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navigationStyle.defaultNavigationOptions} initialRouteName={ScreenKey.SplashScreen}>
      <Stack.Screen
        name={ScreenKey.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name={ScreenKey.AuthenticationStack}
        component={AuthenticationStack}
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
    <ThemeProvider>
      <CourseDataProvider>
        <AuthorDataProvider>
          <PathDataProvider>

            <ReduxProvider store={store}>
              <PersistGate loading={<AppLoading />} persistor={persistor}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider mapping={mapping} theme={light}>
                  <PaperProvider>
                    <NavigationContainer>
                      <AppStackNavigator />
                      {/* <CourseDetailScreen /> */}
                      {/* <BrowseScreen /> */}
                      {/* <HomeScreen /> */}
                    </NavigationContainer>
                  </PaperProvider>

                </ApplicationProvider>
              </PersistGate>
            </ReduxProvider>

          </PathDataProvider>
        </AuthorDataProvider>
      </CourseDataProvider>

    </ThemeProvider>

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