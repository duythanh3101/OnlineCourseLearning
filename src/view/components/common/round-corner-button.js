import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'

const RoundCornerButton = (props) => {
    return (
        <TouchableOpacity style={[globalStyles.roundCornerButtonGray, props.style]} onPress={props.onPress}>
            <Text style={[globalStyles.normalCenterText, props.style]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundCornerButton

