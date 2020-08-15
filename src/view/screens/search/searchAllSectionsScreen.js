import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'
import { ScreenKey } from '../../../global/constants'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'
import { useIsFocused } from '@react-navigation/native'
import Separator from '../../components/separator/separator'
import { ScrollView } from 'react-native-gesture-handler'

const SearchAllSectionsScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { pathData } = useContext(PathDataContext);
    const { getCourseCountByAuthorId } = useContext(CourseDataContext);
    const { courseData } = useContext(CourseDataContext);
    const isFocused = useIsFocused();
    const [courses, setCourses] = useState([]);
    const [authors, setAuthors] = useState([]);

    const searchResults = [
        {
            title: 'Courses',
            data: courseData,
            index: 0
        },
        {
            title: 'Authors',
            data: authorData,
            index: 1
        },
    ]

    //console.log('aaa', props.courses.length)

    useEffect(() => {
        if (props.courses !== undefined && props.courses !== null) {
            setCourses(props.courses)
        }
        if (props.authors !== undefined && props.authors !== null) {
            setAuthors(props.authors)
        }
    }, [props.courses, props.authors])

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
            //onPress={onPressPathItem}
            />

        } else if (section.index == 2) {
            let numCourses = getCourseCountByAuthorId(item.id);

            return <SearchAuthorItem
                source={item.image}
                authorName={item.name}
                course={numCourses}
                // onPress={onPressPathItem}
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
            <Text style={{
                ...globalStyles.titleText,
                color: themes.fontColor.mainColor
            }}>{section.title}</Text>

            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => { onHandleTabPress(section.index) }}>
                <Text style={{
                    ...globalStyles.normalCenterText,
                    color: themes.fontColor.mainColor
                }}>{section.data.length} results {'>'}</Text>

            </TouchableOpacity>
        </View>
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const onPressAuthor = (item) => {
        props.navigation.navigate(ScreenKey.AuthorScreen, {
            item: item
        })
    }

    const renderCourse = (item, index) => {
        return <ListCourseItem
            source={item.imageUrl}
            courseName={item.title}
            authorName={item['instructor.user.name']}
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

    return (
        <ScrollView>
            <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
                {/* <SectionList
                sections={searchResults}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => renderItem(item, index, section)}
                renderSectionHeader={({ section }) => (
                    renderSectionHeader(section)
                )}
            /> */}
                {
                    courses && courses.length > 0
                        ?
                        <View>
                            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>Khóa học</Text>
                            {
                                courses.map(( item, index ) => renderCourse(item, index))
                            }
                            
                            {/* <FlatList
                                data={courses}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item, index }) => renderCourse(item, index)}
                                ItemSeparatorComponent={Separator}
                            /> */}
                        </View>
                        :
                        null
                }
                <Separator/>
                {
                    authors && authors.length > 0
                        ?
                        <View>
                            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>Tác giả</Text>
                            {
                                authors.map(( item, index ) => renderAuthor(item, index))
                            }
                            
                            {/* <FlatList
                                data={authors}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item, index }) => renderAuthor(item, index)}
                                ItemSeparatorComponent={Separator}
                            /> */}
                        </View>
                        :
                        null
                }

            </View>
        </ScrollView>

    )
}

export default SearchAllSectionsScreen

const styles = StyleSheet.create({})