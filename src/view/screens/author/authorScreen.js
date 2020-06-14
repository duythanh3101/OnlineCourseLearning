import React, { useContext } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { ThemeContext } from '../../../provider/theme-provider'
import AuthorVerticalItem from '../../components/author/author-vertical-item'
import RoundCornerButton from '../../components/common/round-corner-button'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import ListCourseItem from '../../components/course/listCourseItem/list-course-item'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'

export default function AuthorScreen(props) {
    const { themes } = useContext(ThemeContext)
    const { courseData } = useContext(CourseDataContext)
    const { authorData } = useContext(AuthorDataContext)
    let author = authorData.find(x => x.id == props.route.params.id)
    let datas = courseData ? courseData.filter(x => x.authorId === props.route.params.id) : [];

    const separator = () => <View style={styles.separator} />;

    const renderItem = (item, index) => {
        const author = authorData ? authorData.find(x => x.id === item.authorId) : null;

        return <ListCourseItem
            id={item.id}
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
        <ScrollView>
              <View style={{
            ...globalStyles.container, backgroundColor: themes.background.mainColor,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>

            <View style={styles.authorContainer}>
                <AuthorVerticalItem
                    image={author.image}
                    name={author.name}
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
            }}>{author.description}</Text>

            <View>
                <View style={styles.headerDownContainer}>
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>{datas.length} courses</Text>
                </View>

                <FlatList
                    data={datas}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    ItemSeparatorComponent={separator}
                />
            </View>

        </View>
        </ScrollView>
      
    )
}

const styles = StyleSheet.create({
    authorContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})
