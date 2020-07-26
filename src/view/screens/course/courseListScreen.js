import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native'
import { globalStyles } from '../../../global/styles'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import courseHomeService from '../../../core/service/courseHomeService'
import { ThemeContext } from '../../../provider/theme-provider'
import { ActivityIndicator } from 'react-native-paper'
import { ScreenKey } from '../../../global/constants'

const CourseListScreen = (props) => {
    const { themes } = useContext(ThemeContext);

    const [courses, setCourses] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState('');

    useEffect(() => {
        let type = props.route.params.type;
        setIsLoading(true);
        switch (type) {
            case 0:
                setTitle('Top Sell');
                courseHomeService.getTopSellCourses(10, 1)
                    .then(response => {
                        setCourses(response.data.payload);
                    })
                    .catch(error => {
                        console.log('top error')
                    })
                break;
            case 1:
                setTitle('Top New');

                courseHomeService.getTopNewCourses(10, 1)
                    .then(response => {
                        setCourses(response.data.payload);
                    })
                    .catch(error => {
                        console.log('top error')
                    })
                break;
            case 2:
                setTitle('Top Rating');

                courseHomeService.getTopRateCourses(10, 1)
                    .then(response => {
                        setCourses(response.data.payload);
                    })
                    .catch(error => {
                        console.log('top error')
                    })
                break;
            default:
                break;



        }
        setIsLoading(false);



    }, [])

    const onPressCourse = (course) => {
        props.navigation.navigate(ScreenKey.CourseDetailScreen, {
            course: course
        })
    }

    const separator = () => <View style={styles.separator} />;

    const renderCourse = (item, index) => {
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
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            <Text style={[globalStyles.headerText, { marginTop: 20, marginLeft: 20, color: themes.fontColor.mainColor }]}>{title}</Text>
            <FlatList
                data={courses}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index }) => renderCourse(item, index)}
                ItemSeparatorComponent={separator}
            />
        </View>

    )
}

export default CourseListScreen

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
    }
})
