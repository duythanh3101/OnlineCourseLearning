import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle } from '../../global/styles';
import DownloadScreen from '../screens/downloads/downloadScreen';

const Stack = createStackNavigator();

const DownloadStack = () => {
    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions} 
            
        >
            <Stack.Screen
                name={ScreenKey.DownloadScreen}
                component={DownloadScreen}
                options={{ title: 'Download' }} />
     
        </Stack.Navigator>
    )
}

export default DownloadStack

const styles = StyleSheet.create({})

