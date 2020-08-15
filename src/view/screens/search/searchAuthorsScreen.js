import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { ScreenKey } from '../../../global/constants'

const SearchAuthorsScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { getCourseCountByAuthorId } = useContext(CourseDataContext);
    const [authors, setAuthors] = useState([]);

    const searchResults = [
        {
            title: 'Authors',
            data: authorData
            
        },
    ]

    useEffect(() => {
        if (props.authors !== undefined && props.authors !== null) {
            setAuthors(props.authors)
        }
    }, [props.authors])

    const renderAuthor = (item, index) => {
        //console.log('author', item)
        return <SearchAuthorItem
            source={item.avatar}
            authorName={item.name}
            course={item.numcourses}
            onPress={() => {
                onPressAuthor(item)
            }}
            key={index}
        />
    }

    const onPressAuthor = (item) => {
        props.navigation.navigate(ScreenKey.AuthorScreen, {
            item: item
        })
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
            {/* <SectionList
                sections={searchResults}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderItem(item, index)}
                renderSectionHeader={({ section }) => (
                    renderSectionHeader(section)
                )}
            /> */}
             {
                    authors && authors.length > 0
                        ?
                        <View>
                            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>Tác giả</Text>
                            {
                                authors.map(( item, index ) => renderAuthor(item, index))
                            }
                        </View>
                        :
                        null
                }
        </View>
    )
}

export default SearchAuthorsScreen

const styles = StyleSheet.create({})