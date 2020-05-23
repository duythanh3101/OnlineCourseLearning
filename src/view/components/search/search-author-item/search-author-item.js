import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../../../../global/styles'

const SearchAuthorItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: props.source }} style={styles.image} />
            </View>
            <View style={styles.infoPathContainer}>
                <Text style={globalStyles.titleText}>{props.authorName}</Text>
                <Text style={[globalStyles.normalText, { marginLeft: 10 }]}>{props.course}</Text>
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

