import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../../global/styles'
import { ThemeContext } from '../../../../provider/theme-provider';

const SearchAuthorItem = (props) => {
    const { themes } = useContext(ThemeContext);

    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: themes.background.foreground}} onPress={props.onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.source }} style={styles.image} />
            </View>
            <View style={styles.infoPathContainer}>
                <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>{props.authorName}</Text>
                <Text style={[globalStyles.normalText,
                     { marginLeft: 10, color: themes.fontColor.mainColor }]}>{props.course} courses</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchAuthorItem

const styles = StyleSheet.create({
    infoPathContainer: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    imageContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        marginTop: 5
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80
    }
})

