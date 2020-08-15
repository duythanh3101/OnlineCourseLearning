import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { globalStyles } from '../../../../global/styles'
import CourseItemInfo from './course-item-info'
import { ThemeContext } from '../../../../provider/theme-provider';
import { ScreenKey } from '../../../../global/constants';
import courseHomeService from '../../../../core/service/courseHomeService';
import instructorService from '../../../../core/service/instructorService';

export default function Topic(props) {
    const { themes } = useContext(ThemeContext);

    const [isLoading, setIsLoading] = useState(false)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        setIsLoading(true);
        if (props.id && props.id !== null) {
            //console.log('cate id: ', props.id)
            courseHomeService.getCoursesByCategoryId(props.id, 10, 0)
                .then(response => {
                    //console.log('courses 2: ', response.data.payload.count);
                    if (response.data.payload.count > 0) {
                        setCourses(response.data.payload.rows)
                        setIsLoading(false);

                    }
                })
                .catch(error => {
                    console.log('courses error: ', error);

                })
        } else if (props.courseData !== null) {
            setCourses(props.courseData)
            setIsLoading(false);
        }

    }, [])

    const renderCourseItem = (item, index) => {
        //console.log('instructor id: ', props.id)
        let authorName = item.name

        return <CourseItemInfo
            id={item.id}
            courseName={item.title}
            authorName={authorName}
            instructorId={item.instructorId}
            date={item.updatedAt.substring(0, 10)}
            duration={item.totalHours}
            boughtCount={item.soldNumber}
            starCount={item.ratedNumber}
            key={index}
            image={item.imageUrl}
            style={styles.courseList}
            price={item.price}
            onPress={() => {
                props.onPressItem(item);
            }}
        />
    }

    if (courses.length === 0)
        return null;

    return (
        <View style={styles.course}>
            <View style={globalStyles.lineText}>
                <Text style={[globalStyles.titleText, {
                    color: themes.fontColor.mainColor
                }]}>{props.title}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={[globalStyles.normalCenterText, {
                        color: themes.fontColor.mainColor,
                        marginRight: 10
                    }]}>See all {'>'}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} style={styles.courseList}>
                {
                    courses.map((item, i) => renderCourseItem(item, i))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    course: {
        flexDirection: 'column',
        marginTop: 10,
    },
    courseList: {
        marginLeft: 10,
        marginRight: 10
    },

})
