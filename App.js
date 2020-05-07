import React from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/view/components/authentication/login/login';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from '@react-navigation/native';
import { mapping, light } from "@eva-design/eva";
import { AppLoading } from "expo";
import { Provider as ReduxProvider, useSelector, useDispatch} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './src/redux/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <IconRegistry icons={EvaIconsPack}/>
          <ApplicationProvider mapping={mapping} theme={light}>
              <Login/>
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
