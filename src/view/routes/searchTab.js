import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchAllSectionsScreen from '../screens/search/searchAllSectionsScreen';
import { ScreenKey } from '../../global/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchCoursesScreen from '../screens/search/searchCoursesScreen';
import SearchPathsScreen from '../screens/search/searchPathsScreen';
import SearchAuthorsScreen from '../screens/search/searchAuthorsScreen';

const Tab = createMaterialTopTabNavigator();

const SearchTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ScreenKey.SearchAllSectionsScreen}
                component={SearchAllSectionsScreen}
                options={{ title: 'All' }} />
            <Tab.Screen
                name={ScreenKey.SearchCoursesScreen}
                component={SearchCoursesScreen}
                options={{ title: 'COURSES' }} />
            <Tab.Screen
                name={ScreenKey.SearchPathsScreen}
                component={SearchPathsScreen}
                options={{ title: 'PATHS' }} />
            <Tab.Screen
                name={ScreenKey.SearchAuthorsScreen}
                component={SearchAuthorsScreen}
                options={{ title: 'AUTHORS' }} />

            {/* <Tab.Screen name={ScreenKey.} component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

export default SearchTab

const styles = StyleSheet.create({})
