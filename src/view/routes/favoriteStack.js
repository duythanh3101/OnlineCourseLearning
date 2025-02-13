import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenKey } from '../../global/constants';
import { navigationStyle, colors } from '../../global/styles';
import DownloadScreen from '../screens/downloads/downloadScreen';
import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/profile/profileScreen';
import FavoriteScreen from '../screens/favorite/favoriteScreen';
import { Menu, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import SettingScreen from '../screens/setting/settingScreen';
import CourseDetailVideoScreen from '../screens/course/courseDetailVideoScreen';

const Stack = createStackNavigator();

const FavoriteStack = (props) => {
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
                name={ScreenKey.FavoriteScreen}
                component={FavoriteScreen}
                options={{
                    title: 'Favorite',
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
                }} />

            <Stack.Screen
                name={ScreenKey.CourseDetailVideoScreen}
                component={CourseDetailVideoScreen}
                options={{
                    title: 'Course Detail'
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

export default FavoriteStack

const styles = StyleSheet.create({})

