import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { colors, globalStyles } from '../../../../global/styles'
import { ThemeContext } from '../../../../provider/theme-provider';

const SearchPathCourseItem = (props) => {
    const { themes } = useContext(ThemeContext);

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: themes.background.foreground}}>
            <View style={styles.imageContainer}>
                <Image source={{uri:props.source}} style={styles.image} />
            </View>
            <View style={styles.infoPathContainer}>
                <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>{props.title}</Text>
                <Text style={[globalStyles.normalText,
                     {marginLeft: 10, color: themes.fontColor.mainColor}]}>{props.course} courses</Text>
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
