import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import HomeScreen from '../screens/home/homeScreen';
import { navigationStyle } from '../../global/styles';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions} 
            
        >
            <Stack.Screen
                name={ScreenKey.HomeScreen}
                component={HomeScreen}
                options={{ title: 'Home' }} />
     
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})

