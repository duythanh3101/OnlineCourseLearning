import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { ScreenKey } from '../../../../global/constants'
import { CourseDataContext } from '../../../../provider/course-data/course-data-provider'
import { PathDataContext } from '../../../../provider/path-data/path-data-provider'
import Topic from './topic'
import { ThemeContext } from '../../../../provider/theme-provider'
import CourseHomeService from '../../../../core/service/courseHomeService'
import axios from 'axios'

const Course = (props) => {
    const { courseData } = useContext(CourseDataContext);
    const { topicData } = useContext(PathDataContext);
    const { themes } = useContext(ThemeContext);

    useEffect(() => {


    }, [])

    const onPressSeeAllTopic = async (topic) => {

        await CourseHomeService.getTopNewCourses(10, 1)
        .then(response => {
            console.log('Home: ', response.data)
        })
        .catch(error => {
            console.log('Home error: ', error)
        });
      

        // props.navigation.navigate(ScreenKey.CourseListByTopicScreen, {
        //     item: {
        //         topic: topic
        //     }
        // })
    }

    const onPressItem = (course) => {

        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }


    const renderTopicItem = (item) => {

        let courseFilter = courseData.filter(x => x.topicId === item.id)
        return <Topic
            title={item.name}
            courseData={courseFilter}
            onPress={() => onPressSeeAllTopic(item)}
            key={item.id}
            onPressItem={onPressItem}

        />
    }

    return (
        <ScrollView style={{ ...styles.courseContainer, backgroundColor: themes.background.mainColor }}>
            {/* <Topic
                title='Khóa học bán chạy'
                courseData={courseFilter}
                onPress={() => onPressSeeAllTopic(item)}
                key={item.id}
                onPressItem={onPressItem}

            /> */}
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
