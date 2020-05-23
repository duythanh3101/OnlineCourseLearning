import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'

const CourseListByTopicScreen = (props) => {
    const courses = [
        {
            id: '1',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            id: '2',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            id: '3',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        }
    ]



    const renderCourse = (item, index) => {
        return <ListCourseItem
            source='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
            courseName={item.courseName}
            author={item.author}
            level={item.level}
            date={item.date}
            duration={item.duration}
            key={index}
            style={{ margin: 5 }} />
    }

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headerCenterText, { marginTop: 50, marginLeft: 20 }]}>{props.route.params.item.title}</Text>
            <FlatList
                data={props.route.params.item.courses}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderCourse(item, index)}

            />
        </View>
    )
}

export default CourseListByTopicScreen

const styles = StyleSheet.create({})
