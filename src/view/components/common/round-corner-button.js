import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'

const RoundCornerButton = (props) => {
    return (
        <TouchableOpacity style={[globalStyles.roundCornerButtonDefault, props.backgroundStyle]}>
                <Text style={[globalStyles.roundCornerButtonText, props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundCornerButton

const styles = StyleSheet.create({})
