import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { ThemeContext } from '../../../provider/theme-provider'
import AuthorVerticalItem from '../../components/author/author-vertical-item'
import RoundCornerButton from '../../components/common/round-corner-button'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import courseHomeService from '../../../core/service/courseHomeService'
import instructorService from '../../../core/service/instructorService'
import { ActivityIndicator } from 'react-native-paper'
import { ScreenKey } from '../../../global/constants'

export default function AuthorScreen(props) {
    const { themes } = useContext(ThemeContext)
    const { courseData } = useContext(CourseDataContext)
    const { authorData } = useContext(AuthorDataContext)
    let author = props.route.params.item;
    console.log('au', author)
    let id = author.id;

    const [info, setInfo] = useState(null)
    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //let datas = courseData ? courseData.filter(x => x.authorId === props.route.params.id) : [];

    const separator = () => <View style={styles.separator} />;


    useEffect(() => {
        setIsLoading(true);
        instructorService.getDetail(id)
            .then(response => {
                console.log('author success', response.data.payload)
                setInfo(response.data.payload);
                setCourses(response.data.payload.courses)
                setIsLoading(false);
            })
            .catch(error => {
                console.log('author error')
            })
    }, [])

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const renderItem = (item, index) => {
        //const author = authorData ? authorData.find(x => x.id === item.authorId) : null;

        return <ListCourseItem
            source={item.imageUrl}
            courseName={item.title}
            authorName={item['instructor.user.name']}
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


    if (isLoading) {
        return <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />
    }


    return (
        // <ScrollView>
            <View style={{
                ...globalStyles.container, backgroundColor: themes.background.mainColor,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
            }}>

                <View style={styles.authorContainer}>
                    <AuthorVerticalItem
                        image={author['user.avatar']}
                        name={author['user.name']}
                    />
                    <Text style={{
                        ...globalStyles.normalText, fontSize: 24,
                        color: themes.fontColor.mainColor
                    }}>Pluralsight Author</Text>
                </View>
                <RoundCornerButton
                    backgroundStyle={{
                        backgroundColor: 'red',

                    }}
                    titleStyle={{
                        color: themes.fontColor.mainColor
                    }}
                    title='FOLLOW'
                />
                <Text style={{
                    ...globalStyles.normalText, fontSize: 14,
                    color: themes.fontColor.mainColor,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 5
                }}>{author.major}</Text>

                {
                    info !== null || info
                        ?
                        <View>
                            <View style={styles.headerDownContainer}>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Sold number: {info.soldNumber} courses</Text>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Total Courses: {info.totalCourse} courses</Text>
                            </View>

                            <FlatList
                                data={courses}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item, index }) => renderItem(item, index)}
                                ItemSeparatorComponent={separator}
                            />
                        </View>
                        :
                        null
                }





            </View>
        // </ScrollView>

    )
}

const styles = StyleSheet.create({
    authorContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
