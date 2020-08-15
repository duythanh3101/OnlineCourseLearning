import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle, colors } from '../../global/styles';
import BrowseScreen from '../screens/browse/browseScreen';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';
import { Menu, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import SettingScreen from '../screens/setting/settingScreen';
import AuthorScreen from '../screens/author/authorScreen';
import CourseListScreen from '../screens/course/courseListScreen';
import CourseDetailScreen from '../screens/course/courseDetailScreen';
import SearchScreen from '../screens/search/searchScreen';
import CourseDetailVideoScreen from '../screens/course/courseDetailVideoScreen';

const Stack = createStackNavigator();

const SearchStack = (props) => {
    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions}
        >
            <Stack.Screen
                name={ScreenKey.SearchScreen}
                component={SearchScreen}
                options={{
                    title: 'SearchScreen',
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={ScreenKey.CourseDetailScreen}
                component={CourseDetailScreen}
                options={{
                    title: 'CourseDetail'
                }}
            />
            <Stack.Screen
                name={ScreenKey.CourseDetailVideoScreen}
                component={CourseDetailVideoScreen}
                options={{
                    title: 'CourseDetail'
                }}
            />
            <Stack.Screen
                name={ScreenKey.AuthorScreen}
                component={AuthorScreen}
                options={{
                    title: 'Author'
                }}
            />
        </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({})

