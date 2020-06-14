import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'

const CourseListByTopicScreen = (props) => {
    const topic = props.route.params.item.topic;

    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { courseData } = useContext(CourseDataContext);
    const displayedCourses = courseData ? courseData.filter(x => x.topicId == topic.id) : [];

    const separator = () => <View style={styles.separator} />;

    const renderCourse = (item, index) => {

        const author = authorData ? authorData.find(x => x.id === item.authorId) : null;

        return <ListCourseItem
            source={item.image}
            courseName={item.courseName}
            authorName={author ? author.name : ''}
            level={item.level}
            date={item.date}
            duration={item.duration}
            starCount={item.star}
            boughtCount={item.boughtCount}
            key={item.id}
            style={{ margin: 5 }} />
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>{topic ? topic.name : ''}</Text>
            <FlatList
                data={displayedCourses}
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
