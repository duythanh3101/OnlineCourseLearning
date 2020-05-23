import { Dimensions } from "react-native";

export const constants = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),

}

export const ScreenKey = {
    HomeScreen: 'homeScreen',
    DownloadScreen: 'downloadScreen',
    ProfileScreen: 'profileScreen',
    LoginScreen: 'loginScreen',
    RegisterScreen: 'registerScreen',
    SettingScreen: 'settingScreen',
    SplashScreen: 'splashScreen',
    BrowseScreen: 'browseScreen',
    SearchScreen: 'searchScreen',
    MainTab: 'mainTab',


}

export const ImageKey = {
    RedLogo: require('../../assets/logo/red-online-course-learning.png'),
    BlueLogo: require('../../assets/logo/blue-online-course-learning.png'),
}