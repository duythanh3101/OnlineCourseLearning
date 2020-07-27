import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { globalStyles, colors } from '../../../global/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalActionTypes } from '../../../redux/actions/actionTypes';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from '../../components/course/listCourseItem/list-course-item';
import { ThemeContext } from '../../../provider/theme-provider';
import { CourseDataContext } from '../../../provider/course-data/course-data-provider';
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import courseHomeService from '../../../core/service/courseHomeService';
import { ScreenKey } from '../../../global/constants';

const FavoriteScreen = (props) => {
    const isFocused = useIsFocused();

    const { themes } = useContext(ThemeContext);
    const { authorData } = isFocused ? useContext(AuthorDataContext) : useContext(AuthorDataContext);
    const { courseData } = isFocused ? useContext(CourseDataContext) : useContext(CourseDataContext);
    let datas = courseData ? courseData.filter(x => x.isFavorited === true) : [];


    const authReducer = useSelector(state => state.authReducer);

    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        //console.log(courseData.filter(x=>x.isFavorited).length)
        datas = courseData ? courseData.filter(x => x.isFavorited === true) : [];

        courseHomeService.getFavoriteCourses(authReducer.token)
        .then(response => {
            //console.log('favorite success', response.data);
            setCourses(response.data.payload);
            setIsLoading(false);

        })
        .catch(error => {
            console.log('favorite courses error');
            setIsLoading(false);

        })

    })
    const separator = () => <View style={styles.separator} />;

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const renderItem = (item, index) => {
        const author = authorData ? authorData.find(x => x.id === item.authorId) : null;

        return <ListCourseItem
            id={item.id}
            source={item.courseImage}
            courseName={item.courseTitle}
            authorName={item.instructorName}
            //level={item.level}
            date={''}
            duration={item.duration}
            starCount={item.courseContentPoint}
            boughtCount={item.courseSoldNumber}
            key={item.id}
            style={{ margin: 5 }} 
            onPress={() => {
                onPressCourse(item)
            }}
            />
    }
    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            {
                courses && courses.length == 0
                    ?
                    (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons style={{ alignSelf: 'center' }} name="progress-download" size={100} color="gray" />
                            <Text style={[globalStyles.headerCenterText,
                                 styles.noDownloadText,
                                 {color: themes.fontColor.mainColor}
                                 ]}>No downloads</Text>
                            <Text style={[globalStyles.headerCenterText,
                                 styles.appearHereText,
                                 {color: themes.fontColor.mainColor}
                                 ]}>Courses you download will appear here</Text>
                        </View>
                    )
                    :
                    (
                        <View>
                            <View style={styles.headerDownContainer}>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>{courses.length} courses</Text>
                                <Text style={[globalStyles.titleText, styles.removeText]}>REMOVE ALL</Text>
                            </View>

                            <FlatList
                                data={courses}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item, index }) => renderItem(item, index)}
                                ItemSeparatorComponent={separator}
                            />
                        </View>
                    )
            }


        </View>
    )

}

export default FavoriteScreen

const styles = StyleSheet.create({
    noDownloadText: {
        marginTop: 5,
        padding: 10
    },
    appearHereText: {
        marginTop: 5,
        padding: 10
    },

    headerDownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    removeText: {
        color: colors.blue
    },
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
    }
})
