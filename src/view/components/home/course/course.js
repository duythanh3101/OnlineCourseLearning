import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import CourseItemInfo from './course-item-info'
import { globalStyles, colors } from '../../../../global/styles'
import { ScreenKey } from '../../../../global/constants'
import { CourseDataContext } from '../../../../provider/course-data/course-data-provider'
import { AuthorDataContext } from '../../../../provider/author-data/author-data-provider'
import { PathDataContext } from '../../../../provider/path-data/path-data-provider'
import Topic from './topic'
import { ThemeContext } from '../../../../provider/theme-provider'

const Course = (props) => {
    //console.log(props)
    const { courseData } = useContext(CourseDataContext);
    const { authorData } = useContext(AuthorDataContext);
    const { topicData } = useContext(PathDataContext);
    const { themes } = useContext(ThemeContext);

    const [courses, setCourses] = useState([
        {
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
    ])
    //console.log('topic', topicData)
    const renderCourseItem = (item, index) => {
        return <CourseItemInfo
            courseName={item.courseName}
            author={item.author}
            level={item.level}
            date={item.date}
            duration={item.duration}
            boughtCount={item.boughtCount}
            starCount={item.starCount}
            key={index}
            image={item.image}
            style={styles.courseList} />
    }

    // const onPressSeeAll = (title) => {
    //     //Alert.alert('Đang cập nhật')
    //     props.navigation.navigate(ScreenKey.CourseListByTopicScreen, {
    //         item: {
    //             title: title,
    //             courses: courses
    //         }
    //     })
    // }

    const onPressSeeAllTopic = (topic) => {
        console.log('aaaa', topic)

        props.navigation.navigate(ScreenKey.CourseListByTopicScreen, {
            item: {
                topic: topic
            }
        })
    }

    const renderTopicItem = (item) => {
        //console.log('topicaa', item.id)

        let courseFilter = courseData.filter(x => x.topicId === item.id)
        return <Topic
            title={item.name}
            courseData={courseFilter}
            onPress={() => onPressSeeAllTopic(item)}
            key={item.id}
        />
    }

    return (
        <ScrollView style={{...styles.courseContainer, backgroundColor: themes.background.mainColor}}>
            {
                topicData.map((item) => renderTopicItem(item))
            }
        </ScrollView>

    )
}

export default Course

const styles = StyleSheet.create({
    courseContainer: {
        flexDirection: 'column',
    },
    course: {
        flexDirection: 'column',
        marginTop: 20
    },
    courseList: {
        margin: 10
    },
    courseItemInfo: {
        margin: 5
    },
    normalCenterText: {
        color: colors.white,
        alignSelf: 'center'
    },
})
