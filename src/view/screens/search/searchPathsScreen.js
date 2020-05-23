import React from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import SearchAuthorItem from '../../components/search/search-author-item/search-author-item'

const SearchPathsScreen = () => {
    const searchResults = [
       
        {
            title: 'Paths',
            data: [
                {
                    image: '',
                    title: 'Javascript Core Language',
                    course: '9 courses'
                },
                {
                    image: '',
                    title: 'Javascript Core Language',
                    course: '9 courses'
                }
            ],
            index: 1
        },
        
    ]

    const renderItem = (item, index, section) => {
        console.log(section);

        if (section.index == 0) {
            return <ListCourseItem
                source='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
                courseName={item.courseName}
                author={item.author}
                level={item.level}
                date={item.date}
                duration={item.duration}
                //key={index}
                style={{ margin: 5 }} />

        } else if (section.index == 1) {
            return <SearchPathCourseItem
                source='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
                title={item.title}
                course={item.course}
                onPress={onPressPathItem}
            />

        } else if (section.index == 2) {
            return <SearchAuthorItem
                source='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
                authorName={item.authorName}
                course={item.course}
                onPress={onPressPathItem}
            />
        }
    }

    const renderSectionHeader = (section) => {
        return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={globalStyles.titleText}>{section.title}</Text>

            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => { Alert.alert('Đang cập nhật') }}>
                <Text style={globalStyles.normalCenterText}>{section.data.length} results ></Text>

            </TouchableOpacity>
        </View>
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <View style={globalStyles.container}>
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

export default SearchPathsScreen

const styles = StyleSheet.create({})