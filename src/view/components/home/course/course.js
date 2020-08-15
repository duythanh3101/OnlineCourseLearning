import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { ScreenKey } from '../../../../global/constants'
import { CourseDataContext } from '../../../../provider/course-data/course-data-provider'
import { PathDataContext } from '../../../../provider/path-data/path-data-provider'
import Topic from './topic'
import { ThemeContext } from '../../../../provider/theme-provider'
import CourseHomeService from '../../../../core/service/courseHomeService'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

const Course = (props) => {
    const { courseData } = useContext(CourseDataContext);
    const { topicData } = useContext(PathDataContext);
    const { themes } = useContext(ThemeContext);
    const isFocused = useIsFocused();

    const [topics, setTopics] = useState([]);
    const [recommendCourses, setRecommendCourses] = useState([]);
    const [processCourses, setProcessCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMyCourse, setIsLoadingMyCourse] = useState(false);
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        setIsLoading(true);
        setIsLoadingMyCourse(true);
        CourseHomeService.getAllCategory()
            .then(response => {
                console.log('tops co', response.data.payload.length)
                if (response.data.message === 'OK') {
                    setTopics(response.data.payload);
                }
            })
            .catch(error => {
                console.log('Home error: ', error)
            });

        let userId = authReducer.userInfo.id;
        CourseHomeService.getRecommendCourses(userId, 10, 1)
            .then(response => {
                if (response.data.message === 'OK') {
                    setRecommendCourses(response.data.payload)
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.log('getRecommendCourses error: ', error)
                setIsLoading(false);
            });
        setProcessCourses([])
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
    }

    return (
        <ScrollView style={{ ...styles.courseContainer, backgroundColor: themes.background.mainColor }}>
            {/* {
                isLoadingMyCourse == false
                    ?
                    <Topic
                        aaa='sss'
                        title='Khóa học của tôi'
                        courseData={processCourses}
                        //onPress={(item) => onPressSeeAllTopic(item)}
                        onPressItem={onPressItem}
                    />
                    :
                    null
            } */}
            {
                isLoading == false
                    ?
                    <Topic
                        title='Khóa học nổi bật'
                        courseData={recommendCourses}
                        //onPress={(item) => onPressSeeAllTopic(item)}
                        //key={item.id}
                        onPressItem={onPressItem}

                    />
                    :
                    null
            }
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
