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
  };


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.mainColor
    },
    titleText: {
        fontSize: 18,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
    },
    paragraph: {
        lineHeight: 20,
        marginVertical: 8,
    },
    input: {
        borderWidth: 2,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        width: '80%'
    },
    buttonStyle: {
        backgroundColor: 'red',
        width: 100,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 10,
    },
    modalContent: {
        flex: 1,
    },
    modalContainer: {
        height: '30%',
        padding: 20,
        flex: 1

    }
});


  export { globalStyles, colors }