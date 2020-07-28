import { StyleSheet, Dimensions } from 'react-native'
import { ThemeProvider } from '../provider/theme-provider';

const screenWidth = Math.round(Dimensions.get('window').width);

const colors = {
    mainColor: '#0E0F13',
    accent: "#2196f3",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#2F2F2F",
    white: "#FFFFFF",
    blue: '#2196f3',
    gray: "#2B2C30",
    gray2: "#1F242A",
    gray3: "#F0F0F0",
    gray4: "#F7F8FA",
    darkgray: '#181B20',
    darkgray2: '#21242B',
  };


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainColor
    },
    titleText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10
    },
    headerCenterText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: colors.white
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white
    },
    normalCenterText: {
        color: colors.white,
        alignSelf: 'center'
    },
    normalText: {
        color: colors.white,
        fontSize: 13,
        marginLeft: 5
    },
    roundCornerButtonGray: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    roundCornerButtonDefault: {
        backgroundColor: colors.gray,
        width: screenWidth * 8 / 9,
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    roundCornerButtonBlue: {
        backgroundColor: colors.blue,
        width: screenWidth * 8 / 9,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    
    roundCornerButtonText: {
        fontSize: 22,
        color: colors.white,
        padding: 10
    },
    roundCornerTagGray: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5, 
        borderRadius: 15
    },
    lineText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    imageTag: {
        width: 25,
        height: 25,
        borderRadius: 25,
        marginRight: 10
    },
});

const navigationStyle = {
    defaultNavigationOptions: {
      headerStyle: {
        height: 60,
        backgroundColor: "#eee",
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
    }
  }


export { globalStyles, colors, navigationStyle }