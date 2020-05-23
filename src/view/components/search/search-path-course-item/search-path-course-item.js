import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, globalStyles } from '../../../../global/styles'

const SearchPathCourseItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri:props.source}} style={styles.image} />
            </View>
            <View style={styles.infoPathContainer}>
                <Text style={globalStyles.titleText}>{props.title}</Text>
                <Text style={[globalStyles.normalText, {marginLeft: 10}]}>{props.course}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchPathCourseItem

const styles = StyleSheet.create({
    infoPathContainer: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    imageContainer: {
        backgroundColor: colors.gray,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        height: 80,
        width: 100,
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        marginTop: 5
    },
    image: {
        width: 50,
        height: 50,
        padding: 10
    }
})
