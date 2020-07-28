import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ScreenKey } from '../../../global/constants'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'

const SearchAllSectionsScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { pathData } = useContext(PathDataContext);
    const { getCourseCountByAuthorId } = useContext(CourseDataContext);
    const { courseData } = useContext(CourseDataContext);

    const searchResults = [
        {
            title: 'Courses',
            data: courseData,
            index: 0
        },
        {
            title: 'Paths',
            data: pathData,
            index: 1
        },
        {
            title: 'Authors',
            data: authorData,
            index: 2
        },
    ]

    const renderItem = (item, index, section) => {

        if (section.index == 0) {
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

        } else if (section.index == 1) {
            return <SearchPathCourseItem
                source={item.image}
                title={item.pathName}
                course={item.courses}
                onPress={onPressPathItem}
            />

        } else if (section.index == 2) {
            let numCourses = getCourseCountByAuthorId(item.id);

            return <SearchAuthorItem
                source={item.image}
                authorName={item.name}
                course={numCourses}
                onPress={onPressPathItem}
                key={index}
            />
        }
    }

    const onHandleTabPress = (index) => {
        if (index == 0) {
            props.navigation.navigate(ScreenKey.SearchCoursesScreen)

        } else if (index == 1) {
            props.navigation.navigate(ScreenKey.SearchPathsScreen)

        } else if (index == 2) {
            props.navigation.navigate(ScreenKey.SearchAuthorsScreen)

        }
    }

    const renderSectionHeader = (section) => {
        return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{...globalStyles.titleText, 
                color: themes.fontColor.mainColor}}>{section.title}</Text>

            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { onHandleTabPress(section.index) }}>
                <Text style={{...globalStyles.normalCenterText, 
                color: themes.fontColor.mainColor}}>{section.data.length} results {'>'}</Text>

            </TouchableOpacity>
        </View>
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <View style={{...globalStyles.container, backgroundColor: themes.background.mainColor}}>
            <SectionList
                sections={searchResults}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => renderItem(item, index, section)}
                renderSectionHeader={({ section }) => (
                    renderSectionHeader(section)
                )}
            />
        </View>
    )
}

export default SearchAllSectionsScreen

const styles = StyleSheet.create({})