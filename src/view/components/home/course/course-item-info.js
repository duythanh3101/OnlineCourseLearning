import React, { useEffect, useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors, globalStyles } from '../../../../global/styles'
import { ThemeContext } from '../../../../provider/theme-provider'
import StarRatingImage from '../../star-rating/star-rating-image'
import { AuthorDataContext } from '../../../../provider/author-data/author-data-provider'
import InstructorService from '../../../../core/service/instructorService'
import { convertNumberCurrenry } from '../../../../global/utilConverter'

const CourseItemInfo = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext)
    //const author = authorData.find(x => x.id === props.authorId);
    const [authorName, setAuthorName] = useState('')
    //const authorName = props.authorName;

    useEffect(() => {
        if (props.authorName) {
            setAuthorName(props.authorName)
        } else {
            InstructorService.getDetail(props.instructorId)
                .then(response => {
                    setAuthorName(response.data.payload.name)
                    console.log('instructor', response.data.payload.name)

                })
                .catch(error => {
                    console.log('instructor error')
                })
        }

    }, [])

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={[props.style, { width: 220 }]}>
                <Image style={{ width: 220, height: 120 }} source={{ uri: props.image }} />

                <View style={{ ...styles.courseDetailContainer, backgroundColor: themes.background.foreground }}>
                    <Text style={[globalStyles.titleText, {
                        margin: 5,
                        color: themes.fontColor.mainColor
                    }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, { color: themes.fontColor.mainColor }]}>{authorName ? authorName : ''}</Text>
                    <View style={styles.inLine}>
                        {/* <Text style={{...globalStyles.normalText,color: themes.fontColor.mainColor}}>{props.level} -</Text> */}
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{props.date} -</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{props.duration} giờ</Text>
                    </View>

                    <View style={[styles.inLine, { marginLeft: 5 }]}>
                        <StarRatingImage starCount={props.starCount} />
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>({props.boughtCount}) học viên</Text>
                    </View>
                    {
                        parseInt(props.price) === 0
                            ?
                            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.maroon }}>Miễn phí</Text>
                            :
                            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.maroon }}>{convertNumberCurrenry(props.price)} VND</Text>
                    }

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
        height: 150
    },
})
