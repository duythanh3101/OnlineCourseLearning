import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import HomeScreen from '../screens/home/homeScreen';
import { navigationStyle, colors } from '../../global/styles';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';
import CourseListByTopicScreen from '../screens/course/courseListByTopicScreen';
import { Menu, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import SettingScreen from '../screens/setting/settingScreen';
import CourseDetailScreen from '../screens/course/courseDetailScreen';
import CourseDetailVideoScreen from '../screens/course/courseDetailVideoScreen';
import CourseListScreen from '../screens/course/courseListScreen';

const Stack = createStackNavigator();

const HomeStack = (props) => {

    const [visible, setVisible] = useState(false)

    const onHandleAccountPress = () => {
        props.navigation.navigate(ScreenKey.ProfileScreen);
    }

    const onHanldeSettingPress = () => {
        _closeMenu();
        props.navigation.navigate(ScreenKey.SettingScreen);
    }

    const _openMenu = () => setVisible(true);

    const _closeMenu = () => setVisible(false);

    return (
        <Stack.Navigator
            screenOptions={navigationStyle.defaultNavigationOptions}

        >
            <Stack.Screen
                name={ScreenKey.HomeScreen}
                component={HomeScreen}
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <TouchableOpacity onPress={onHandleAccountPress} style={{ marginRight: 5 }}>
                                <MaterialIcons name="account-circle" size={24} color={colors.blue} />
                            </TouchableOpacity>
                            <Menu

                                visible={visible}
                                onDismiss={_closeMenu}
                                anchor={
                                    <TouchableOpacity onPress={_openMenu}>
                                        <Entypo name="dots-three-vertical" size={24} color="black" />

                                    </TouchableOpacity>
                                }
                            >
                                <Menu.Item onPress={onHanldeSettingPress} title="Settings" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Send feedback" />
                                <Divider />
                                <Menu.Item onPress={() => { }} title="Contact support" />
                            </Menu>

                        </View>

                    ),
                    title: 'Home'
                }}
            />

            <Stack.Screen
                name={ScreenKey.CourseListByTopicScreen}
                component={CourseListByTopicScreen}
                options={{
                    title: 'Course'
                }}
            />

            <Stack.Screen
                name={ScreenKey.CourseDetailScreen}
                component={CourseDetailScreen}
                options={{
                    title: 'Course Detail',
                    headerShown: false
                }}
            />

            <Stack.Screen
                name={ScreenKey.CourseListScreen}
                component={CourseListScreen}
                options={{
                    title: 'Khóa học của tôi'
                }}
            />

            <Stack.Screen
                name={ScreenKey.CourseDetailVideoScreen}
                component={CourseDetailVideoScreen}
                options={{
                    title: '',
                    headerShown: false
                    // headerTransparent: true,
                    // headerBackImage: () => <AntDesign name="arrowleft" size={24} color="black" />
                    
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
                name={ScreenKey.SettingScreen}
                component={SettingScreen}
                options={{
                    title: 'Setting'
                }}
            />


        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({
    myCourseText: {
        color: 'red',
        marginTop: 2
    }
})

