import React, { useContext } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'

const SearchAuthorsScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { getCourseCountByAuthorId } = useContext(CourseDataContext);

    const searchResults = [
        {
            title: 'Authors',
            data: authorData
            
        },
    ]

    const renderItem = (item, index, ) => {
        let numCourses = getCourseCountByAuthorId(item.id);

        return <SearchAuthorItem
            source={item.image}
            authorName={item.name}
            course={numCourses}
            onPress={onPressPathItem}
            key={index}
        />
    }

    const renderSectionHeader = (section) => {
        return <View style={{ flex: 1, flexDirection: 'row', 
                                justifyContent: 'space-between',
                                backgroundColor: themes.background.mainColor }}>
            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>{section.title}</Text>

            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { Alert.alert('Đang cập nhật') }}>
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
                renderItem={({ item, index }) => renderItem(item, index)}
                renderSectionHeader={({ section }) => (
                    renderSectionHeader(section)
                )}
            />
        </View>
    )
}

export default SearchAuthorsScreen

const styles = StyleSheet.create({})