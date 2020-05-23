import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle, colors } from '../../global/styles';
import DownloadScreen from '../screens/downloads/downloadScreen';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';

const Stack = createStackNavigator();

const DownloadStack = (props) => {
    const onHandleAccountPress = () => {
        props.navigation.navigate(ScreenKey.ProfileScreen);
    }

    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions}

        >
            <Stack.Screen
                name={ScreenKey.DownloadScreen}
                component={DownloadScreen}
                options={{
                    title: 'Download',
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

export default DownloadStack

const styles = StyleSheet.create({})

