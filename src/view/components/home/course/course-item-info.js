import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors, globalStyles } from '../../../../global/styles'

const CourseItemInfo = (props) => {
    return (
        <TouchableOpacity>
            <View style={[props.style, { width: 220 }]}>
                <Image style={{ width: 220, height: 120 }} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />

                <View style={styles.courseDetailContainer}>
                    <Text style={[globalStyles.titleText, { margin: 5 }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, {marginTop: -5}]}>{props.author}</Text>
                    <View style={styles.inLine}>
                        <Text style={globalStyles.normalText}>{props.level} -</Text>
                        <Text style={globalStyles.normalText}>{props.date} -</Text>
                        <Text style={globalStyles.normalText}>{props.duration}</Text>
                    </View>

                    <Text style={globalStyles.normalText}>Rating</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CourseItemInfo

const styles = StyleSheet.create({
    inLine: {
        flexDirection: 'row'
    },
    courseDetailContainer: {
        flexDirection: 'column',
        backgroundColor: colors.darkgray,
        height: 120
    },
})
