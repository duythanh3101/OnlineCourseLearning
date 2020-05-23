import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle } from '../../global/styles';
import BrowseScreen from '../screens/browse/browseScreen';

const Stack = createStackNavigator();

const BrowseStack = () => {
    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions} 
            
        >
            <Stack.Screen
                name={ScreenKey.BrowseScreen}
                component={BrowseScreen}
                options={{ title: 'Download' }} />
     
        </Stack.Navigator>
    )
}

export default BrowseStack

const styles = StyleSheet.create({})

