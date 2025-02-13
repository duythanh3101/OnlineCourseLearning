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
import LoadingIndicator from '../../components/loading/loading-indicator';

const FavoriteScreen = (props) => {
    const isFocused = useIsFocused();

    const { themes } = useContext(ThemeContext);
    const { authorData } = isFocused ? useContext(AuthorDataContext) : useContext(AuthorDataContext);
    const { courseData } = isFocused ? useContext(CourseDataContext) : useContext(CourseDataContext);

    const authReducer = useSelector(state => state.authReducer);

    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        //console.log(courseData.filter(x=>x.isFavorited).length)

        setCourses([]);
        courseHomeService.getFavoriteCourses(authReducer.token)
        .then(response => {
            //console.log('process success', response.data);
            //setCourses(response.data.payload);
            response.data.payload.map(a => {
                //console.log('ssss: ', a.id);
                
                courseHomeService.getCourseDetail(a.id)
                .then(res => {
                    //console.log('ooooo', res.data.payload);
                    setCourses(prev => [...prev, res.data.payload]);
                })
                .catch(er => {
                    console.log('process error');

                })                
            })
            setIsLoading(false);

        })
        .catch(error => {
            console.log('favorite courses error');
            setIsLoading(false);
        })

    }, [isFocused])
    const separator = () => <View style={styles.separator} />;

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const renderItem = (item, index) => {
        const author = authorData ? authorData.find(x => x.id === item.authorId) : null;
        //console.log('item: ', item)
        return <ListCourseItem
            id={item.id}
            source={item.imageUrl}
            courseName={item.title}
            authorName={item.instructorName}
            //level={item.level}
            date={item.createdAt.substring(0,10)}
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

    if (isLoading){
        return <LoadingIndicator/>
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            {
                courses && courses.length == 0 && !isLoading
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
                                 ]}>Your Favorite Courses will appear here</Text>
                        </View>
                    )
                    :
                    (
                        <View style={{marginTop: 20}}>
                            <View style={styles.headerDownContainer}>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>{courses.length} courses</Text>
                                {/* <Text style={[globalStyles.titleText, styles.removeText]}>REMOVE ALL</Text> */}
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
