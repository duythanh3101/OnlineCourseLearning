import React, { useContext } from 'react'
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

const FavoriteScreen = (props) => {

    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { courseData } = useContext(CourseDataContext);
    const datas = courseData ? courseData.filter(x => x.isFavorited === true) : [];

    const data = [
        {
            id: '1',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            id: '2',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
        {
            id: '3',
            courseName: 'Java',
            author: 'John',
            level: 'Advanced',
            date: 'Feb 2019',
            duration: '9h 35mins'
        },
    ]

    const separator = () => <View style={styles.separator} />;

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
    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            {
                datas && datas.length == 0
                    ?
                    (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons style={{ alignSelf: 'center' }} name="progress-download" size={100} color="gray" />
                            <Text style={[globalStyles.headerCenterText, styles.noDownloadText]}>No downloads</Text>
                            <Text style={[globalStyles.headerCenterText, styles.appearHereText]}>Courses you download will appear here</Text>
                        </View>
                    )
                    :
                    (
                        <View>
                            <View style={styles.headerDownContainer}>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>{datas.length} courses</Text>
                                <Text style={[globalStyles.titleText, styles.removeText]}>REMOVE ALL</Text>
                            </View>

                            <FlatList
                                data={datas}
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
