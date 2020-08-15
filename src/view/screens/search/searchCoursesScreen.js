import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity, AsyncStorage } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { FlatList } from 'react-native-gesture-handler'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { ScreenKey } from '../../../global/constants'
import { useIsFocused } from '@react-navigation/native'

const SearchCoursesScreen = (props) => {

    const { themes } = useContext(ThemeContext);
    const { courseData } = useContext(CourseDataContext);
    const { authorData } = useContext(AuthorDataContext);
    const isFocus = useIsFocused();

    const [courses, setCourses] = useState([])
    //console.log('aaas', props)

    useEffect(() => {
        // const aaa = async () => {
        //     try {
        //         const value = await AsyncStorage.getItem('COURSES');
        //         if (value !== null) {
        //             setCourses(value);
        //             console.log(value);
        //         }
        //         else {
        //             console.log('error 2');
        //         }
        //     }
        //     catch (error) {
        //         console.log('error 3');

        //     }
        // }
        // aaa();
        console.log('aaas', props.courses.length)
        setCourses(props.courses)
        //console.log('aa', props.datas);
    }, [isFocus])

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }


    const renderItem = (item, index) => {
        const author = authorData ? authorData.find(x => x.id === item.authorId) : null;

        return <ListCourseItem
            source={item.imageUrl}
            courseName={item.title}
            authorName={item.name}
            //level={item.level}
            date={item.updatedAt.substring(0, 10)}
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

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
           
            <FlatList
                data={courses}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderItem(item, index)}
            />
        </View>
    )
}

export default SearchCoursesScreen

const styles = StyleSheet.create({})