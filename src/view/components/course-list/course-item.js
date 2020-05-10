import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import { constants } from '../../../global/constants'

const CourseItem = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.source }} />
                </View>

                <View style={styles.courseDetailContainer}>
                    <Text style={[globalStyles.titleText, { margin: 5 }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, { marginTop: -5 }]}>{props.author}</Text>
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

export default CourseItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: '5%'
    },
    imageContainer: {
        alignItems: 'center',
        alignContent: 'center',
        height: 120
    },
    image: {
        height: 80,
        width: 100,
        alignSelf: 'center'
    },
    inLine: {
        flexDirection: 'row'
    },
    courseDetailContainer: {
        flexDirection: 'column',
        height: 120,
        width: constants.screenWidth - 100,
        marginLeft: 10

    },
})
