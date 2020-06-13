import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { globalStyles } from '../../../../global/styles'
import CourseItemInfo from './course-item-info'
import { ThemeContext } from '../../../../provider/theme-provider';

export default function Topic(props) {
    //console.log('sss', props);
    const { themes } = useContext(ThemeContext);

    const renderCourseItem = (item, index) => {
        return <CourseItemInfo
            courseName={item.courseName}
            authorId={item.authorId}
            level={item.level}
            date={item.date}
            duration={item.duration}
            boughtCount={item.boughtCount}
            starCount={item.star}
            key={index}
            image={item.image}
            style={styles.courseList} />
    }

    return (
        <View style={styles.course}>
            <View style={globalStyles.lineText}>
                <Text style={[globalStyles.titleText, {
                    color: themes.fontColor.mainColor
                }]}>{props.title}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={[globalStyles.normalCenterText,{
                        color: themes.fontColor.mainColor,
                        marginRight: 10
                    }]}>See all {'>'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.courseList}>
                {
                    props.courseData.map((item, i) => renderCourseItem(item, i))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    course: {
        flexDirection: 'column',
        marginTop: 10,
    },
    courseList: {
        marginLeft: 10,
        marginRight: 10
    },
    
})
