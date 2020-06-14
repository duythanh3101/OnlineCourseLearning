import React, { useContext } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { FlatList } from 'react-native-gesture-handler'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'

const SearchCoursesScreen = (props) => {

    const { themes } = useContext(ThemeContext);
    const { courseData } = useContext(CourseDataContext);
    const { authorData } = useContext(AuthorDataContext);

    const renderItem = (item, index) => {
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

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <View style={{...globalStyles.container, backgroundColor: themes.background.mainColor}}>
            <FlatList
                data={courseData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderItem(item, index)}

            />
        </View>
    )
}

export default SearchCoursesScreen

const styles = StyleSheet.create({})