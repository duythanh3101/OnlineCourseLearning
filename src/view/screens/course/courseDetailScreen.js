import React, { useState, useContext, useEffect, useRef, useCallback } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert, Share, SectionList, Linking } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import { ImageKey, ScreenKey } from '../../../global/constants'
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
import { formatMoney, convertNumberCurrenry } from '../../../global/utilConverter'
import Separator from '../../components/separator/separator'
import LoadingIndicator from '../../components/loading/loading-indicator'
import instructorService from '../../../core/service/instructorService'

const CourseDetailScreen = (props) => {
    const { themes } = useContext(ThemeContext);
    //const content = videoCourse.content;

    const [tabSelectedIndex, setTabSelectedIndex] = useState(0);

    const course = props.route.params.course;
    const [url, setUrl] = useState('https://storage.googleapis.com/itedu-bucket/Courses/856457a1-8008-4c35-956a-c9975cd8cc22/promo/2fc49c1c-e948-4bad-b8ab-50a1f7da0a1e.mp4');
    const authReducer = useSelector(state => state.authReducer);
    const [detailInfo, setDetailInfo] = useState(null);
    const [sectionCourses, setSectionCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [isOwnCourse, setIsOwnCourse] = useState(false);
    const [authorName, setAuthorName] = useState('');
    //console.log('course info: ', props.route.params.course)
    useEffect(() => {
        if (course.name){
            setAuthorName(course.name)
        }
        else if (course.instructorName){
            setAuthorName(course.instructorName)
        }
        else if(course['instructor.user.name']){
            setAuthorName(course['instructor.user.name'])
        }else if (course.instructorId){
            instructorService.getDetail(course.instructorId)
            .then(response => {
                setAuthorName(response.data.payload.name)
            })
            .catch(error => {
                console.log('error instructor')
            })
        }

        setIsLoading(true);
        courseHomeService.getCourseDetail(course.id)
            .then(response => {
                //console.log('aaaa: ', response.data.payload.subtitle);
                setDetailInfo(response.data.payload);
                setSectionCourses(response.data.payload.section);

                //setIsLoading(false);

            })
            .catch(error => {
                console.log('get courses error');
                setIsLoading(false);

            })

        courseHomeService.getLikeCourseStatus(course.id, authReducer.token)
            .then(response => {
                if (response.data.likeStatus === true) {
                    setIsFavorited(true);
                } else {
                    setIsFavorited(false);
                }

            })
            .catch(error => {
                console.log('getLikeCourseStatus error');
                setIsLoading(false);
            })

        courseHomeService.isOwnCourse(course.id, authReducer.token)
            .then(response => {
                if (response.data.payload.isUserOwnCourse === true) {
                    setIsOwnCourse(true);
                } else {
                    setIsOwnCourse(false);
                }
                setIsLoading(false);
            })
            .catch(error => {
                console.log('is own course error');
                setIsLoading(false);
            })
            setIsLoading(false);
        //console.log('lesson: ', lessons);
    }, [])


    //console.log('detail props: ', course)
    const onHandleShare = async () => {
        let msg = 'https://itedu.me/course-detail/' + course.id.toString();
        try {
            const result = await Share.share({
                message: msg
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            //alert(error.message);
        }
    };

    const onHandleAddToChannelPress = useCallback(async () => {
        if (isOwnCourse) {
            Alert.alert('Thông báo', 'Bạn đã đăng ký khóa học này trước đó rồi');
            return;
        }
        let url = "https://itedu.me/payment/" + course.id.toString();
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            //Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    const onHandleFavoritePress = () => {
        //addFavoriteCourse(course.id)
        courseHomeService.likeCourse(course.id, authReducer.token)
            .then(response => {
                console.log('like: ', response.data);
                if (response.data.likeStatus === true) {
                    Alert.alert('Thông báo', 'Đã thêm khóa học yêu thích thành công',
                        [
                            {
                                text: 'OK', onPress: () => setIsFavorited(true)
                            }
                        ]);
                }
                else {
                    Alert.alert('Thông báo', 'Đã xóa khỏi danh sách khóa học yêu thích',
                        [
                            {
                                text: 'OK', onPress: () => setIsFavorited(false)
                            }
                        ]);
                }
            })
            .catch(error => {
                //console.log('like courses error');
            })
    }

    const renderVideoContent = (item, index) => {

        return <ContentVideoItem
            image={course.imageUrl}
            title={item.name}
            duration={item.hours}
            key={index}
            numberOrder={item.numberOrder}
        />

        //  return <View></View>
    }

    const renderSectionVideo = (item, index) => {

        return <View style={{ flexDirection: 'column' }} key={index}>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Section {item.numberOrder}.{item.name}</Text>
            {
                item.lesson.map((item, i) => renderVideoContent(item, i))
            }
        </View>


        //  return <View></View>
    }

    const renderLearningWhat = (item, index) => {
        return <View style={{ flexDirection: 'row', marginLeft: 5 }} key={index}>
            <Entypo name="check" size={24} color="blue" />
            <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, fontSize: 16 }}>{item}</Text>
        </View>
    }

    const renderRequirement = (item, index) => {
        return <View style={{ flexDirection: 'row', marginLeft: 5 }} key={index}>
            <Entypo name="check" size={24} color="blue" />
            <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, fontSize: 16 }}>{item}</Text>
        </View>
    }

    const OnHandleLearnCourse = () => {
        props.navigation.navigate(ScreenKey.CourseDetailVideoScreen, {
            course: course
        })
    }

    if (isLoading || detailInfo === null) {
        return <LoadingIndicator />
    }
    //console.log('detail info', sectionCourses);
    return (
        <View style={[globalStyles.container, styles.container, { backgroundColor: themes.background.mainColor }]}>
            {
                detailInfo.promoVidUrl === null
                    ?
                    <Image source={{ uri: detailInfo.imageUrl }} style={styles.topImage} />
                    :
                    <Video
                        source={{ uri: detailInfo.promoVidUrl }}
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
                <Text style={[globalStyles.headerText, styles.titleText, { color: themes.fontColor.mainColor }]}>{course.title}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <RoundCornerWithImageTag
                        image={course.imageUrl}
                        title={authorName}
                    />
                </View>

                <View style={styles.topInfoContainer}>
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{course.updatedAt.substring(0, 10)} - {course.totalHours} hours - </Text>

                    <StarRatingImage starCount={course.ratedNumber} />
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}> ({course.soldNumber}) </Text>

                </View>
                <View style={styles.topInfoContainer}>
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, marginTop: 5 }}>Giá: </Text>

                    {
                        course.price === 0
                            ?
                            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.maroon }}> Miễn phí </Text>
                            :
                            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.maroon }}> {convertNumberCurrenry(course.price)} VNĐ</Text>

                    }

                </View>
                {
                    isOwnCourse === true
                        ?
                        <RoundCornerTag title='Xem Video khóa học' 
                                        style={{ marginLeft: 10 }}
                                        onPress={() => OnHandleLearnCourse()}
                                        />
                        :
                        null
                }
                <View style={styles.iconContainer}>
                    {
                        isFavorited === false
                            ?
                            <TouchableOpacity style={styles.iconItem} onPress={onHandleFavoritePress}>
                                <View style={styles.icon}>
                                    <Entypo name="heart-outlined" size={24} color="white" />
                                </View>
                                <Text style={{
                                    ...globalStyles.titleText,
                                    color: themes.fontColor.mainColor,
                                    marginLeft: 0
                                }}>Thích</Text>

                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.iconItem} onPress={onHandleFavoritePress}>
                                <View style={styles.icon}>
                                    <Entypo name="heart-outlined" size={24} color="red" />
                                </View>
                                <Text style={{
                                    ...globalStyles.titleText,
                                    color: 'red'
                                }}>Đã thích</Text>

                            </TouchableOpacity>
                    }


                    {
                        isOwnCourse === true
                            ?
                            <TouchableOpacity style={styles.iconItem} onPress={onHandleAddToChannelPress}>
                                <View style={styles.icon}>
                                    <Entypo name="add-to-list" size={24} color="red" />
                                </View>
                                <Text style={{ ...globalStyles.titleText, color: 'red', marginLeft: 0 }}>Đã đăng ký</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.iconItem} onPress={onHandleAddToChannelPress}>
                                <View style={styles.icon}>
                                    <Entypo name="add-to-list" size={24} color="white" />
                                </View>
                                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor, marginLeft: 0 }}>Mua ngay</Text>
                            </TouchableOpacity>
                    }




                    <TouchableOpacity style={styles.iconItem} onPress={onHandleShare}>
                        <View style={styles.icon}>
                            <Entypo name="share" size={24} color="white" />
                        </View>
                        <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor, marginLeft: 0 }}>Chia sẻ</Text>
                    </TouchableOpacity>
                </View>

                <Separator />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Bạn sẽ học được?</Text>
                    {
                        detailInfo.learnWhat.map((item, index) => renderLearningWhat(item, index))
                    }
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Mô tả</Text>
                    <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, fontSize: 16 }}>{detailInfo.description}</Text>
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Yêu cầu</Text>
                    {
                        detailInfo.requirement.map((item, index) => renderRequirement(item, index))
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

export default CourseDetailScreen

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
