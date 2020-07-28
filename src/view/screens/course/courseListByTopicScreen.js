import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import courseHomeService from '../../../core/service/courseHomeService'
import { ActivityIndicator } from 'react-native-paper'
import { ScreenKey } from '../../../global/constants'

const CourseListByTopicScreen = (props) => {
    const topic = props.route.params.item.topic;

    const { themes } = useContext(ThemeContext);
    //const { authorData } = useContext(AuthorDataContext);
    //const { courseData } = useContext(CourseDataContext);
    //const displayedCourses = courseData ? courseData.filter(x => x.topicId == topic.id) : [];

    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        courseHomeService.getCoursesByCategoryId(topic.id, 10, 1)
        .then(response => {

            if (response.data.payload.count > 0){
                setCourses(response.data.payload.rows);
                setIsLoading(false);
            }
            
        })
        .catch(error => {
            console.log('List courses error');
        })
    }, [])

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const separator = () => <View style={styles.separator} />;

    const renderCourse = (item, index) => {
        return <ListCourseItem
            source={item.imageUrl}
            courseName={item.title}
            authorName={item.name}
            //level={item.level}
            date={item.updatedAt.substring(0,10)}
            duration={item.totalHours}
            starCount={item.ratedNumber}
            boughtCount={item.soldNumber}
            key={item.id}
            style={{ margin: 5 }}
            onPress={() => {
                onPressCourse(item)
            }}
            />
    }

    if (isLoading){
        return <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>{topic ? topic.name : ''}</Text>
            <FlatList
                data={courses}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderCourse(item, index)}
                ItemSeparatorComponent={separator}
            />
        </View>

    )
}

export default CourseListByTopicScreen

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
      }
})
