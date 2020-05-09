import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Course from '../../components/home/course/course'
import { globalStyles } from '../../../global/styles'

const HomeScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Course/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
