import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors, globalStyles } from '../../../../global/styles'
import { ThemeContext } from '../../../../provider/theme-provider'
import StarRatingImage from '../../star-rating/star-rating-image'
import { AuthorDataContext } from '../../../../provider/author-data/author-data-provider'

const CourseItemInfo = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext)
    const author = authorData.find(x => x.id === props.authorId);
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[props.style, { width: 220 }]}>
                <Image style={{ width: 220, height: 120 }} source={{ uri: props.image }} />

                <View style={{...styles.courseDetailContainer, backgroundColor: themes.background.foreground }}>
                    <Text style={[globalStyles.titleText, { margin: 5,
                    color: themes.fontColor.mainColor
                     }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, {color: themes.fontColor.mainColor}]}>{author ? author.name : 'haha'}</Text>
                    <View style={styles.inLine}>
                        <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>{props.level} -</Text>
                        <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>{props.date} -</Text>
                        <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>{props.duration}</Text>
                    </View>

                    <View style={[styles.inLine, {marginLeft: 5}]}>
                        <StarRatingImage starCount={props.starCount}/>
                        <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>({props.boughtCount})</Text>
                    </View>

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
