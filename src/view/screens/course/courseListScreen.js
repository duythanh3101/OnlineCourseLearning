import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { globalStyles } from '../../../global/styles'
import CourseItem from '../../components/course-list/course-item'



const CourseListScreen = (props) => {
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
        },
        {
            id: '4',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
    ]


    const renderCourse = (item, index) => {
        return <CourseItem
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
            <Text style={[globalStyles.headerText, { marginBottom: 50 }]}>Course List Screen</Text>
            <FlatList
                data={courses}
                renderItem={({item, index}) => renderCourse(item, index)}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default CourseListScreen

const styles = StyleSheet.create({})
