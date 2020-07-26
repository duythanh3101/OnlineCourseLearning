import React, { useState, useContext } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import { ImageKey } from '../../../global/constants'
import RoundCornerTag from '../../components/common/round-corner-tag'
import RoundCornerWithImageTag from '../../components/common/round-corner-with-image-tag'
import StarRatingImage from '../../components/star-rating/star-rating-image'
import { Entypo, Feather } from '@expo/vector-icons';
import { Layout, TabView, Tab } from "@ui-kitten/components";
import ProfileScreen from '../profile/profileScreen'
import LoginScreen from '../authentication/login/loginScreen'
import { ThemeContext } from '../../../provider/theme-provider'
import RoundCornerButton from '../../components/common/round-corner-button'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import ContentVideoItem from '../../components/video/content-video-item'
import { VideoDataContext } from '../../../provider/video-data/video-data-provider'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'


const CourseDetailScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    const { getAuthorById } = useContext(AuthorDataContext);
    const { videoContentData } = useContext(VideoDataContext);
    const { getVideoContentById } = useContext(VideoDataContext);
    const { addFavoriteCourse } = useContext(CourseDataContext);
    const { courseData } = useContext(CourseDataContext);
    const videoCourse = getVideoContentById(1);
    //const content = videoCourse.content;

    const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
    const course = props.route.params.course;
    //const author = getAuthorById(course.authorId);
    //console.log('detail props: ', props)
    const onHandleBookmarkPress = () => {
        //Alert.alert('Bookmark')
    }

    const onHandleAddToChannelPress = () => {
        //Alert.alert('Add to channel')
    }

    const onHandleFavoritePress = () => {
        //Alert.alert('Favorite')
        //addFavoriteCourse(course.id)
        //onsole.log('course', courseData)
    }

    const renderVideoContent = (item, index) => {

        // return <ContentVideoItem
        //     image={videoCourse.image}
        //     title={item.title}
        //     duration={item.duration}
        //     key={index}
        // />

        return <View></View>
    }

    return (
        <View style={[globalStyles.container, styles.container, { backgroundColor: themes.background.mainColor }]}>
            {/* <View style={styles.imageContainer}> */}
            <Image source={{ uri: course.imageUrl }} style={styles.topImage} />
            {/* </View> */}

            <ScrollView styles={styles.mainContainer}>
                <Text style={[globalStyles.headerText, styles.titleText, { color: themes.fontColor.mainColor }]}>{course.title}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <RoundCornerWithImageTag
                        image={course.imageUrl}
                        title={course.name ? course.name : course['instructor.user.name']}
                    />
                </View>

                <View style={styles.topInfoContainer}>
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{course.updatedAt.substring(0, 10)} - {course.totalHours} hours - </Text>

                    <StarRatingImage starCount={course.ratedNumber} />
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}> ({course.soldNumber}) </Text>

                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconItem} onPress={onHandleBookmarkPress}>
                        <View style={styles.icon}>
                            <Entypo name="bookmarks" size={24} color="white" />
                        </View>
                        <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Bookmark</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>Bookmark</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconItem} onPress={onHandleAddToChannelPress}>
                        <View style={styles.icon}>
                            <Entypo name="add-to-list" size={24} color="white" />
                        </View>
                        <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Add to Channel</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>Bookmark</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconItem} onPress={onHandleFavoritePress}>
                        <View style={styles.icon}>
                            <Feather name="download" size={24} color="white" />
                        </View>
                        <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Favorite</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>Bookmark</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <RoundCornerButton
                        backgroundStyle={{
                            marginTop: 10,
                            marginBottom: 10
                        }}
                        titleStyle={{
                            fontSize: 18
                        }}
                        title='View related paths & courses'
                    />

                </View>
                <TabView
                    // style={{flex: 1}}
                    onSelect={setTabSelectedIndex}
                    selectedIndex={tabSelectedIndex}
                    shouldLoadComponent={(index) => tabSelectedIndex === index}
                >
                    <Tab title='CONTENTS'>
                        <View style={styles.tabContainer}>
                            {
                                //videoCourse.content.map((item, index) => renderVideoContent(item, index))
                            }
                        </View>
                    </Tab>
                    <Tab title='TRANSCRIPTIONS'>
                        <View style={styles.tabContainer}>
                            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Course Overview</Text>
                            {/* <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{videoCourse.transcriptions}</Text> */}
                        </View>
                    </Tab>
                </TabView>
            </ScrollView>
        </View>

    )
}

export default CourseDetailScreen

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: 'white'
    },
    iconItem: {
        alignItems: 'center'
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: colors.gray,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },
    topInfoContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    imageTag: {
        width: 25,
        height: 25,
        borderRadius: 25,
        marginRight: 10
    },
    titleText: {
        marginLeft: 20,
        marginTop: 20,
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',

    },
    imageContainer: {
        justifyContent: 'flex-start',

    },
    topImage: {
        width: '100%',
        height: '25%',
    }
})
