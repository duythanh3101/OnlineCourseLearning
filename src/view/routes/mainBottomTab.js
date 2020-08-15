import React from 'react'
import { StyleSheet } from 'react-native'
import { ScreenKey } from '../../global/constants';
import HomeScreen from '../screens/home/homeScreen';
import DownloadScreen from '../screens/downloads/downloadScreen';
import BrowseScreen from '../screens/browse/browseScreen';
import SearchScreen from '../screens/search/searchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { SafeAreaView } from 'react-navigation'; 
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import DownloadStack from './downloadStack';
import BrowseStack from './browseStack';
import FavoriteStack from './favoriteStack';
import SearchStack from './searchStack';

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
                <BottomNavigationTab icon={(style) => tabIcon(style, "book-outline")} title="Favorite" />
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
                tabBar={props => <TabBarComponent {...props}/>} 
                >
                <MainTab.Screen
                    {...props}
                    name={ScreenKey.HomeStack}
                    component={HomeStack}
                    />
                <MainTab.Screen
                    {...props}
                    name={ScreenKey.FavoriteStack}
                    component={FavoriteStack}
                    options={{ title: 'Favorite' }} />
                <MainTab.Screen
                    {...props}
                    name={ScreenKey.BrowseStack}
                    component={BrowseStack}
                    />
                <MainTab.Screen
                    {...props}
                    name={ScreenKey.SearchStack}
                    component={SearchStack}
                    />
            </MainTab.Navigator>
        </SafeAreaView>

    )
}

export default MainBottomTab

const styles = StyleSheet.create({})

const navigationStyle = {
    defaultNavigationOptions: {
      headerStyle: {
        height: 80,
        backgroundColor: "#eee",
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
    }
  }