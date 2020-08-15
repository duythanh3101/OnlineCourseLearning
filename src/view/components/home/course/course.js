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
import { useSelector } from 'react-redux'
import ImageButtonTwoLines from '../../common/image-button-two-lines'

const Course = (props) => {
    const { courseData } = useContext(CourseDataContext);
    const { topicData } = useContext(PathDataContext);
    const { themes } = useContext(ThemeContext);

    const [topics, setTopics] = useState([]);
    const [recommendCourses, setRecommendCourses] = useState([]);
    const [processCourses, setProcessCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const authReducer = useSelector(state => state.authReducer);

    useEffect(() => {
        setIsLoading(true);
        CourseHomeService.getAllCategory()
            .then(response => {
                if (response.data.message === 'OK') {
                    setTopics(response.data.payload);
                    //console.log('topic 2: ', response.data.payload)
                }
                //console.log('Home: ', response.data)
            })
            .catch(error => {
                console.log('Home error: ', error)
            });

        let userId = authReducer.userInfo.id;
        CourseHomeService.getRecommendCourses(userId, 10, 1)
            .then(response => {
                if (response.data.message === 'OK') {
                    setRecommendCourses(response.data.payload)
                    //console.log('getRecommendCourses 2: ', response.data.payload.length)
                }
            })
            .catch(error => {
                console.log('getRecommendCourses error: ', error)
            });
        CourseHomeService.getProcessCourses(authReducer.token)
            .then(response => {
                if (response.data.message === 'OK') {
                    setProcessCourses([])
                    //console.log('getProcessCourses 2: ', response.data.payload.length)
                    response.data.payload.map(a => {
                        CourseHomeService.getCourseDetailWithLesson(a.id, authReducer.token)
                            .then(res => {
                                setProcessCourses(prev => [...prev, res.data.payload]);
                                //console.log('getProcessCourses 2: ',  processCourses.length)
                            })
                            .catch(er => {
                                console.log('getProcessCourses error');
                            })
                    })
                    setIsLoading(false);

                }
                //console.log('getProcessCourses: ', processCourses)
            })
            .catch(error => {
                console.log('getProcessCourses error: ', error)
                setIsLoading(false);
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

    const onPressMyCourses = () => {
        // props.navigation.navigate(ScreenKey.CourseListScreen, {
        //     courses: processCourses
        // })
    }

    return (
        <ScrollView style={{ ...styles.courseContainer, backgroundColor: themes.background.mainColor }}>
            {
                isLoading == false && processCourses.length > 0
                    ?
                    <Topic
                        title='Khóa học của tôi'
                        courseData={processCourses}
                        //onPress={(item) => onPressSeeAllTopic(item)}
                        //key={item.id}
                        onPressItem={onPressItem}
                    />
                    :
                    null
            }
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
                // isLoading === false
                //     ?

                //     topics.map((item) => renderTopicItem(item))
                //     :
                //     null
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
