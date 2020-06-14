import { Dimensions } from "react-native";

export const constants = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),

}

export const ScreenKey = {
    HomeScreen: 'homeScreen',
    DownloadScreen: 'downloadScreen',
    FavoriteScreen: 'favoriteScreen',
    ProfileScreen: 'profileScreen',
    CourseListScreen: 'courseListScreen',
    CourseDetailScreen: 'courseDetailScreen',
    CourseListByTopicScreen: 'courseListByTopicScreen',
    LoginScreen: 'loginScreen',
    ForgotPasswordScreen: 'forgotPasswordScreen',
    RegisterScreen: 'registerScreen',
    SettingScreen: 'settingScreen',
    SplashScreen: 'splashScreen',
    BrowseScreen: 'browseScreen',
    SearchScreen: 'searchScreen',
    SearchAllSectionsScreen: 'searchAllSectionsScreen',
    SearchCoursesScreen: 'searchCoursesScreen',
    SearchPathsScreen: 'searchPathsScreen',
    SearchAuthorsScreen: 'searchAuthorsScreen',

    MainTab: 'mainTab',

    AuthenticationStack: 'authenticationStack',
    HomeStack: 'homeStack',
    DownloadStack: 'downloadStack',
    BrowseStack: 'browseStack',
    FavoriteStack: 'favoriteStack',


}

export const ImageKey = {
    //RedLogo: require('../../assets/logo/red-online-course-learning.png'),
    RedLogo: require('../../assets/logo/LOGO_ITEDU.png'),
    BlueLogo: require('../../assets/logo/blue-online-course-learning.png'),
    CourseImage: require('../../assets/courses/courses.jpg'),
}