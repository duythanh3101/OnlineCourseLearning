import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'

const PathCourseItem = (props) => {
    return (
        <TouchableOpacity style={[styles.pathItem, props.container]} onPress={props.onPress}>
            <View style={styles.pathImageContainer}>
                <Image style={[styles.pathSmallImage,props.imageStyle]} source={{ uri: props.source }} />
            </View>
            <View style={styles.infoPath}>
                <Text style={[styles.pathTitle, props.titleStyle]}>{props.title}</Text>
                <Text style={[styles.pathCourseText, props.courseTextStyle]}>{props.course}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PathCourseItem

const styles = StyleSheet.create({
    pathItem: {
        flexDirection: 'column',
        backgroundColor: colors.darkgray,
        margin: 10
    },
    pathImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 100
    },
    pathTitle: {
        ...globalStyles.titleText,
        marginBottom: 5,
        maxWidth: 210,
        fontSize: 16
    },
    pathCourseText: {
        ...globalStyles.normalCenterText,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    pathSmallImage: {
        width: 60,
        height: 40
    },
})
