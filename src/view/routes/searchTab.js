import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchAllSectionsScreen from '../screens/search/searchAllSectionsScreen';
import { ScreenKey } from '../../global/constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchCoursesScreen from '../screens/search/searchCoursesScreen';
import SearchPathsScreen from '../screens/search/searchPathsScreen';
import SearchAuthorsScreen from '../screens/search/searchAuthorsScreen';

const Tab = createMaterialTopTabNavigator();

const SearchTab = (props) => {
    //console.log('props tab', props.courses.length)

    const courses = props.courses;
    const authors = props.authors;
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={ScreenKey.SearchAllSectionsScreen}
                options={{ title: 'All' }}
            >
                {props => <SearchAllSectionsScreen {...props}
                    courses={courses}
                    authors={authors}
                />
                }
            </Tab.Screen>
            <Tab.Screen
                name={ScreenKey.SearchCoursesScreen}
                options={{ title: 'COURSES' }}
            >
                {props => <SearchCoursesScreen {...props}
                    courses={courses}
                />}
            </Tab.Screen>

            <Tab.Screen
                name={ScreenKey.SearchAuthorsScreen}
                options={{ title: 'AUTHORS' }}
            >
                {props => <SearchAuthorsScreen {...props}
                    authors={authors}
                />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchTab

const styles = StyleSheet.create({})
