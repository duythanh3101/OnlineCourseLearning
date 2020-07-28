import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { FontAwesome } from '@expo/vector-icons';
import { ImageKey } from '../../../global/constants';

const RoundCornerWithImageTag = (props) => {
    return (
        <TouchableOpacity style={[globalStyles.roundCornerTagGray, props.style]} onPress={props.onPress}>
            <Image source={{uri: props.image}} style={globalStyles.imageTag} />
            <Text style={[globalStyles.normalCenterText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default RoundCornerWithImageTag

