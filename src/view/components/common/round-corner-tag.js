import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../../../provider/theme-provider';

const RoundCornerTag = (props) => {

    const {themes} = useContext(ThemeContext);

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

