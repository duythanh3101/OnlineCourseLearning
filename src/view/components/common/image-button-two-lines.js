import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { colors } from '../../../global/styles'

const ImageButtonTwoLines = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <ImageBackground source={{ uri: props.uri }} style={[styles.image, props.imageStyle]}>
                <Text style={[styles.firstText, props.styleFirstText]}>{props.firstText ? props.firstText : ''}</Text>
                <Text style={[styles.secondText, props.styleSecondText]}>{props.secondText ? props.secondText : ''}</Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}

export default ImageButtonTwoLines

const styles = StyleSheet.create({
    image: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120
    },
    firstText: {
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: colors.white
    },
    secondText: {
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: colors.white
    },
})
