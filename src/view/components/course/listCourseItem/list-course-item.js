import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { constants } from '../../../../global/constants'
import { ThemeContext } from '../../../../provider/theme-provider'
import StarRatingImage from '../../star-rating/star-rating-image'
import { AuthorDataContext } from '../../../../provider/author-data/author-data-provider'

const ListCourseItem = (props) => {
    const {themes} = useContext(ThemeContext)
    const {authorData} = useContext(AuthorDataContext)

    
    return (
        <TouchableOpacity>
            <View style={{...styles.container, backgroundColor: themes.background.foreground}}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.source }} />
                </View>

                <View style={{...styles.courseDetailContainer, backgroundColor: themes.background.foreground}}>
                    <Text style={[globalStyles.titleText, { margin: 5, marginLeft: 5, flexWrap: 'wrap',
                         color: themes.fontColor.mainColor }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, { marginTop: -5,
                         color: themes.fontColor.mainColor }]}>{props.authorName}</Text>
                    <View style={styles.inLine}>
                        <Text style={{...globalStyles.normalText, color: themes.fontColor.mainColor}}>{props.level} -</Text>
                        <Text style={{...globalStyles.normalText, color: themes.fontColor.mainColor}}>{props.date} -</Text>
                        <Text style={{...globalStyles.normalText, color: themes.fontColor.mainColor}}>{props.duration}</Text>
                    </View>

                    <View style={[styles.inLine, {marginLeft: 5}]}>
                        <StarRatingImage starCount={props.starCount}/>
                        <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>({props.boughtCount ? props.boughtCount : 0})</Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ListCourseItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginRight: '5%'
    },
    imageContainer: {
        alignItems: 'center',
        alignContent: 'center',
        height: 120,
        marginLeft: 10,
        marginTop: 10,

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
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
      }
})
