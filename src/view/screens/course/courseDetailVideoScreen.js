import React, { useState, useContext, useEffect, useRef, useCallback } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, Share, SectionList, Linking } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import { ImageKey } from '../../../global/constants'
import RoundCornerTag from '../../components/common/round-corner-tag'
import RoundCornerWithImageTag from '../../components/common/round-corner-with-image-tag'
import StarRatingImage from '../../components/star-rating/star-rating-image'
import { Entypo, Feather } from '@expo/vector-icons';
import { Layout, TabView, Tab, Button } from "@ui-kitten/components";
import ProfileScreen from '../profile/profileScreen'
import LoginScreen from '../authentication/login/loginScreen'
import { ThemeContext } from '../../../provider/theme-provider'
import RoundCornerButton from '../../components/common/round-corner-button'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import ContentVideoItem from '../../components/video/content-video-item'
import { VideoDataContext } from '../../../provider/video-data/video-data-provider'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import courseHomeService from '../../../core/service/courseHomeService'
import { Video } from 'expo-av'
import { useSelector } from 'react-redux'
import { formatMoney, convertNumberCurrenry, isYoutubeURL, getYoutubeVideoId } from '../../../global/utilConverter'
import Separator from '../../components/separator/separator'
import LoadingIndicator from '../../components/loading/loading-indicator'
import ContentVideoCanPressItem from '../../components/video/content-video-can-press-item'
import YoutubePlayer from 'react-native-youtube-iframe';

const CourseDetailVideoScreen = (props) => {
    const { themes } = useContext(ThemeContext);

    const course = props.route.params.course;
    const [url, setUrl] = useState('https://storage.googleapis.com/itedu-bucket/Courses/856457a1-8008-4c35-956a-c9975cd8cc22/promo/2fc49c1c-e948-4bad-b8ab-50a1f7da0a1e.mp4');
    const authReducer = useSelector(state => state.authReducer);
    const [detailInfo, setDetailInfo] = useState(null);
    const [sectionCourses, setSectionCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [videoTitle, setVideoTitle] = useState('');

    useEffect(() => {
        setIsLoading(true);
        courseHomeService.getCourseDetailWithLesson(course.id, authReducer.token)
            .then(response => {
                //console.log('aaaa: ', response.data.payload.section);
                setDetailInfo(response.data.payload);
                setSectionCourses(response.data.payload.section);

                setIsLoading(false);

            })
            .catch(error => {
                console.log('get courses error');
                setIsLoading(false);

            })

        setVideoTitle(course.title)
    }, [])

    const onPressAttachment = (item) => {
        console.log('item: ', item);
        let resource = item.resource;
        if (resource && resource.length > 0){
            courseHomeService.getDocumentResource(course.id, item.id, resource[0].id,authReducer.token)
            .then(response => {
                handlePress(response.data.payload);
            })
            .catch(error => {
                console.log('onPressAttachment error');
            })
        }
       
    }

    const handlePress = useCallback(async (url) => {
        //console.log('url: ', url)
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          await Linking.openURL(url);
        } else {
          
        }
      }, [url]);

    const renderVideoContent = (item, index) => {
        //console.log('item: ', item);
        
        return <ContentVideoCanPressItem
            image={course.imageUrl}
            title={item.name}
            duration={item.hours}
            key={index}
            numberOrder={item.numberOrder}
            isHasAttachment={item.resource.length > 0}
            onPress={() => {
                courseHomeService.getLessonURL(course.id, item.id, authReducer.token)
                .then(response => {
                    //console.log('aaaa: ', response.data.payload);
                    setUrl(response.data.payload.videoUrl);
                    setVideoTitle('Lesson ' + item.numberOrder + '. ' + item.name)
                })
                .catch(error => {
                    console.log('onPressLessonVideo error');
                })
            }}
            onPreessAttachment={() => {onPressAttachment(item)}}
        />

    }

    const renderSectionVideo = (item, index) => {

        return <View style={{ flexDirection: 'column' }} key={index}>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Section {item.numberOrder}.{item.name}</Text>
            {
                item.lesson.map((item, i) => renderVideoContent(item, i))
            }
        </View>

    }

    const renderLearningWhat = (item, index) => {
        return <View style={{ flexDirection: 'row', marginLeft: 5 }} key={index}>
            <Entypo name="check" size={24} color="blue" />
            <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, fontSize: 16 }}>{item}</Text>
        </View>
    }

    if (isLoading || detailInfo === null) {
        return <LoadingIndicator />
    }

    return (
        <View style={[globalStyles.container, styles.container, { backgroundColor: themes.background.mainColor }]}>

            {
                isYoutubeURL(url)
                    ?
                    <YoutubePlayer
                        ref={playerRef}
                        height={'30%'}
                        videoId={getYoutubeVideoId(url)}
                        play={playing}
                        onChangeState={event => console.log(event)}
                        onReady={() => console.log("ready")}
                        onError={e => console.log(e)}
                        onPlaybackQualityChange={q => console.log(q)}
                        volume={50}
                        playbackRate={1}
                        initialPlayerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: true
                        }}
                    />
                    :
                    <Video
                        source={{ uri: url }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        //shouldPlay
                        isLooping
                        useNativeControls
                        style={{ height: '40%' }}
                    />
            }


            <ScrollView styles={styles.mainContainer}>
                <Text style={[globalStyles.headerText, styles.titleText, { color: themes.fontColor.mainColor }]}>{videoTitle}</Text>
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

                <Separator />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Bạn sẽ học được?</Text>
                    {
                        detailInfo.learnWhat.map((item, index) => renderLearningWhat(item, index))
                    }
                </View>
                <Separator />
                <View style={styles.tabContainer}>
                    {
                        detailInfo.videoNumber > 1
                            ?
                            <Text style={{
                                ...globalStyles.titleText,
                                color: themes.fontColor.mainColor,
                            }}>{detailInfo.videoNumber} videos ({detailInfo.totalHours} giờ)</Text>
                            :
                            <Text style={{
                                ...globalStyles.titleText,
                                color: themes.fontColor.mainColor,
                            }}>{detailInfo.videoNumber} video ({detailInfo.totalHours} giờ)</Text>

                    }

                    {
                        sectionCourses.map((item, index) => renderSectionVideo(item, index))
                    }

                </View>


            </ScrollView>

        </View >

    )
}

export default CourseDetailVideoScreen

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'column',
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
        height: '40%',
    }
})
