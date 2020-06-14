import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Course from '../../components/home/course/course'
import { globalStyles } from '../../../global/styles'
import { ThemeContext } from '../../../provider/theme-provider'

const HomeScreen = (props) => {

    const { themes } = useContext(ThemeContext)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            //backgroundColor: themes.background.mainColor
            backgroundColor: themes.background.mainColor
        }
    })

    return (
        <View style={styles.container}>
            <Course {...props}/>
        </View>
    )
}

export default HomeScreen

