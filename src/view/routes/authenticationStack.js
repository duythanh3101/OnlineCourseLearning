import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenKey } from '../../global/constants';
import LoginScreen from '../screens/authentication/login/loginScreen';
import RegisterScreen from '../screens/authentication/register/registerScreen';
import ForgotPasswordScreen from '../screens/authentication/forgot-password/forgotPasswordScreen';

const AuthStack = createStackNavigator();

const AuthenticationStack = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name={ScreenKey.LoginScreen}
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name={ScreenKey.RegisterScreen}
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name={ScreenKey.ForgotPasswordScreen}
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthenticationStack

const styles = StyleSheet.create({})
