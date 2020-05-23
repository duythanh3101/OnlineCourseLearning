import React from 'react'
import { StyleSheet, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import HomeScreen from '../screens/home/homeScreen';
import { navigationStyle, colors } from '../../global/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';
import CourseListByTopicScreen from '../screens/course/courseListByTopicScreen';

const Stack = createStackNavigator();

const HomeStack = (props) => {

    const onHandleAccountPress = () => {
        props.navigation.navigate(ScreenKey.ProfileScreen);
    }

    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions}

        >
            <Stack.Screen
                name={ScreenKey.HomeScreen}
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={onHandleAccountPress}>
                            <MaterialIcons name="account-circle" size={24} color={colors.blue} />
                        </TouchableOpacity>

                    ),
                    title: 'Home'
                }}
            />

            <Stack.Screen
                name={ScreenKey.ProfileScreen}
                component={ProfileScreen}
                options={{
                    title: 'Profile'
                }}
            />
              <Stack.Screen
                name={ScreenKey.CourseListByTopicScreen}
                component={CourseListByTopicScreen}
                options={{
                    title: 'Course'
                }}
            />

        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})

