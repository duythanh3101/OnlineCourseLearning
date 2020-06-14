import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { ThemeContext } from '../../../provider/theme-provider'

const RoundCornerButton = (props) => {
    const {themes} = useContext(ThemeContext)

    return (
        <TouchableOpacity style={[globalStyles.roundCornerButtonDefault, props.backgroundStyle]} onPress={props.onPress}>
                <Text style={[globalStyles.roundCornerButtonText, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundCornerButton

const styles = StyleSheet.create({})
