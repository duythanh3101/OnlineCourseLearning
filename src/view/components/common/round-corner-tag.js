import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { FontAwesome } from '@expo/vector-icons';

const RoundCornerTag = (props) => {
    return (
        <TouchableOpacity style={[globalStyles.roundCornerTagGray, props.style]} onPress={props.onPress}>
            {
                props.isHasIcon ?
                  <FontAwesome name="check-circle" size={24} color='red'/> 
                : null
            }
            <Text style={[globalStyles.normalCenterText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundCornerTag

