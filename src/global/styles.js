import { StyleSheet } from 'react-native'


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
        margin: 10
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: colors.white
    },
    normalText: {
        color: colors.white,
        alignSelf: 'center'
    },
    roundCornerButtonGray: {
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});


  export { globalStyles, colors }