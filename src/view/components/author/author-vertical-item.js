import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'
import { globalStyles } from '../../../global/styles';

export default function AuthorVerticalItem(props) {

    const {themes} = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.authorItem} onPress={() => {
            props.onPress(props.id)
        }}>
            <Image style={styles.imageAuthor} source={{ uri: props.image }} />
            <Text style={[globalStyles.titleText, styles.authorName, { color: themes.fontColor.mainColor }]}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    authorName: {
        maxWidth: 80,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 0,
        marginTop: 5,
    },
    authorItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    imageAuthor: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },

})
