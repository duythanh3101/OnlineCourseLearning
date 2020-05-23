import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle, colors } from '../../global/styles';
import BrowseScreen from '../screens/browse/browseScreen';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';

const Stack = createStackNavigator();

const BrowseStack = (props) => {

    const onHandleAccountPress = () => {
        props.navigation.navigate(ScreenKey.ProfileScreen);
    }


    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions} 
            
        >
            <Stack.Screen
                name={ScreenKey.BrowseScreen}
                component={BrowseScreen}
                options={{
                    title: 'Browse',
                    headerRight: () => (
                        <TouchableOpacity onPress={onHandleAccountPress}>
                            <MaterialIcons name="account-circle" size={24} color={colors.blue} />
                        </TouchableOpacity>

                    ),
                }} />
            <Stack.Screen
                name={ScreenKey.ProfileScreen}
                component={ProfileScreen}
                options={{
                    title: 'Profile'
                }}
            />
        </Stack.Navigator>
    )
}

export default BrowseStack

const styles = StyleSheet.create({})

