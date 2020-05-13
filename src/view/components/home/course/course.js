import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import CourseItemInfo from './course-item-info'
import { globalStyles } from '../../../../global/styles'

const Course = (props) => {
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

    const renderItem = (item, index) => {
        return <CourseItemInfo
            courseName={item.courseName}
            author={item.author}
            level={item.level}
            date={item.date}
            duration={item.duration}
            key={index}
            style={styles.courseList} />
    }

    const onPressSeeAll = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <ScrollView style={styles.courseContainer}>
            <View style={styles.course}>
                <View style={globalStyles.lineText}>
                    <Text style={globalStyles.titleText}>Software development</Text>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={globalStyles.normalCenterText}>See all ></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.courseList}>
                    {
                        courses.map((item, i) => renderItem(item, i))
                    }
                </ScrollView>
            </View>

            <View style={styles.course}>
                <View style={globalStyles.lineText}>
                    <Text style={globalStyles.titleText}>IT development</Text>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={globalStyles.normalCenterText}>See all ></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.courseList}>
                    {
                        courses.map((item, i) => renderItem(item, i))
                    }
                </ScrollView>
            </View>

            <View style={styles.course}>
                <View style={globalStyles.lineText}>
                    <Text style={globalStyles.titleText}>Soft skills</Text>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={globalStyles.normalCenterText}>See all ></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.courseList}>
                    {
                        courses.map((item, i) => renderItem(item, i))
                    }
                </ScrollView>
            </View>
        </ScrollView>

    )
}

export default Course

const styles = StyleSheet.create({
    courseContainer: {
        flexDirection: 'column',
        marginTop: 30
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
    }
})
