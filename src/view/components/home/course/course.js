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

    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        CourseHomeService.getAllCategory()
            .then(response => {
                if (response.data.message === 'OK') {
                    setTopics(response.data.payload);
                    setIsLoading(false);
                    //console.log('topic 2: ', response.data.payload)
                }
                //console.log('Home: ', response.data)
            })
            .catch(error => {
                console.log('Home error: ', error)
            });

    }, [])

    const onPressSeeAllTopic = (topic) => {
        props.navigation.navigate(ScreenKey.CourseListByTopicScreen, {
            item: {
                topic: topic
            }
        })
    }

    const onPressItem = (course) => {
        //console.log('Course Detail Screen ', course);
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }


    const renderTopicItem = (item) => {
        return <Topic
            title={item.name}
            //courseData={courseaaa}
            onPress={() => onPressSeeAllTopic(item)}
            key={item.id}
            id={item.id}
            onPressItem={onPressItem}
        />

        // return <Text key={item.id}>hahaha</Text>
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
                isLoading === false
                    ?
                    topics.map((item) => renderTopicItem(item))
                    :
                    null
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
