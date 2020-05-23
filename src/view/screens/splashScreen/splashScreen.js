import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles, colors } from '../../../global/styles';
import { ImageKey, ScreenKey } from '../../../global/constants';

export default function SplashScreen(props) {
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        // const interval = setInterval(() => {
        //     console.log('This will run every second!');
        //     setLoading(loading + 1);

        //   }, 100);
        //   return () => clearInterval(interval);
        setTimeout(() => {
            props.navigation.navigate(ScreenKey.AuthenticationStack);

        }, 1000)
    }, [])


    return (
        <View style={{ ...globalStyles.container, ...styles.viewStyles }}>
            <Image source={ImageKey.RedLogo} style={{ width: 120, height: 120 }} />

            <Text style={styles.textStyles}>
                SplashScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },

    viewStyles: {
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})