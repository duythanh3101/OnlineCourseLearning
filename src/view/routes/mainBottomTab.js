import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ScreenKey } from '../../global/constants';
import HomeScreen from '../screens/home/homeScreen';
import DownloadScreen from '../screens/downloads/downloadScreen';
import BrowseScreen from '../screens/browse/browseScreen';
import SearchScreen from '../screens/search/searchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { SafeAreaView } from 'react-navigation'; 

const MainTab = createBottomTabNavigator();

const TabBarComponent = ({ navigation, state }) => {

    const onSelect = (index) => {
        const screenName = state.routeNames[index];
        navigation.navigate(screenName);
    };

    const tabIcon = (style, name) => (
        <Icon {...style} name={name} />
    );

    return (
        <SafeAreaView>
            <BottomNavigation
                appearance="noIndicator"
                selectedIndex={state.index}
                onSelect={onSelect}
                style={{ borderTopColor: "#e6e6e6", borderTopWidth: 0.5 }}
                
            >
                <BottomNavigationTab icon={(style) => tabIcon(style, "map-outline")} title="Home" />
                <BottomNavigationTab icon={(style) => tabIcon(style, "book-outline")} title="Download" />
                <BottomNavigationTab icon={(style) => tabIcon(style, "recording-outline")} title="Browse" />
                <BottomNavigationTab icon={(style) => tabIcon(style, "settings-2-outline")} title="Search" />
            </BottomNavigation>
        </SafeAreaView>
    );
};

const MainBottomTab = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MainTab.Navigator 
                tabBar={props => <TabBarComponent {...props} 
                />}>
                <MainTab.Screen
                    name={ScreenKey.HomeScreen}
                    component={HomeScreen}
                    options={{ headerShown: true }}/>
                <MainTab.Screen
                    name={ScreenKey.DownloadScreen}
                    component={DownloadScreen}
                    options={{ headerShown: true }} />
                <MainTab.Screen
                    name={ScreenKey.BrowseScreen}
                    component={BrowseScreen}
                    options={{ headerShown: false }} />
                <MainTab.Screen
                    name={ScreenKey.SearchScreen}
                    component={SearchScreen}
                    options={{ headerShown: false }} />
            </MainTab.Navigator>
        </SafeAreaView>

    )
}

export default MainBottomTab

const styles = StyleSheet.create({})
