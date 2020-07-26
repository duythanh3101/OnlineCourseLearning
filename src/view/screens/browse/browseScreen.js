import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Image } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import ImageButtonTwoLines from '../../components/common/image-button-two-lines'
import RoundCornerTag from '../../components/common/round-corner-tag'
import PathCourseItem from '../../components/browse/path-course-item/path-course-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { AuthorDataContext } from '../../../provider/author-data/author-data-provider'
import { CourseDataContext } from '../../../provider/course-data/course-data-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'
import AuthorVerticalItem from '../../components/author/author-vertical-item'
import { ScreenKey } from '../../../global/constants'
import instructorService from '../../../core/service/instructorService'

const BrowseScreen = (props) => {

    const { themes } = useContext(ThemeContext);
    const { authorData } = useContext(AuthorDataContext);
    const { pathData } = useContext(PathDataContext);

    const popularSkills = [
        {
            key: 1,
            skillName: 'Angular',
            isHasIcon: false
        },
        {
            key: 2,
            skillName: 'C#',
            isHasIcon: true
        },
        {
            key: 3,
            skillName: 'JavaScript',
            isHasIcon: false
        },
        {
            key: 4,
            skillName: 'Java',
            isHasIcon: true
        },
        {
            key: 5,
            skillName: 'Data Analysist',
            isHasIcon: false
        },
    ];

    const smallImages = [
        {
            key: 1,
            uri: 'https://pluralsight.imgix.net/course-images/gatsbyjs-getting-started-v1.png',
            firstText: 'FIRST',
            secondText: 'RELEASE'
        },
        {
            key: 2,
            uri: 'https://pluralsight.imgix.net/course-images/node-js-express-rest-web-services-update-v1.png',
            firstText: 'SECOND',
            secondText: 'RELEASE'
        },
        {
            key: 3,
            uri: 'https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png',
            firstText: 'FISRT',
            secondText: 'RELEASE'
        },
        {
            key: 4,
            uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg',
            firstText: 'THIRD',
            secondText: 'RELEASE'
        },
    ];
    

    const [instructors, setInstructors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        instructorService.getAll()
        .then(response => {
            //console.log('Instructor success', response.data)
            setInstructors(response.data.payload);
        })
        .catch(error => {
            console.log('Instructor errror')
        })
    }, [])

    const renderPopularItem = (item, index) => {
        return <RoundCornerTag
            isHasIcon={item.isHasIcon}
            title={item.skillName}
            key={index}
            style={styles.roundCornerTag}
            textStyle={styles.roundCornerTagText}
        />

    }

    const renderSmallImageButton = (item, index) => {
        return <ImageButtonTwoLines
            uri={item.uri}
            firstText={item.firstText}
            secondText={item.secondText}
            imageStyle={styles.smallImageStyle}
            key={index}
        />
    }

    const renderAuthorItem = (item, index) => {

        return <AuthorVerticalItem
            id={item.id}
            name={item['user.name']}
            image={item['user.avatar']}
            key={index}
            onPress={onPressAuthor}
        />
    }

    const onPressAuthor = (id) => {
        props.navigation.navigate(ScreenKey.AuthorScreen, {
            id: id
        })
    }

    const onPressSeeAll = () => {
        Alert.alert('Đang cập nhật')
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    const onPressTop = (type) =>{
        props.navigation.navigate(ScreenKey.CourseListScreen, {
            type: type
        })
    }

    const renderPathItem = (item, index) => {
        return <PathCourseItem
            source={item.image}
            title={item.pathName}
            course={item.courses}
            onPress={onPressPathItem}
            key={index}
        />
    }

    return (
        <ScrollView style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            <ImageButtonTwoLines
                uri='https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png'
                firstText='TOP'
                secondText='SELL'
                onPress={() => onPressTop(0)}
            />

            <ImageButtonTwoLines
                uri='https://pluralsight.imgix.net/course-images/web-development-executive-briefing-v2.png'
                firstText='TOP'
                secondText='NEW'
                imageStyle={styles.imageStyle}
                onPress={() => onPressTop(1)}

            />

            <ImageButtonTwoLines
                uri='https://pluralsight.imgix.net/course-images/node-js-express-rest-web-services-update-v1.png'
                firstText='TOP'
                secondText='RATING'
                imageStyle={styles.imageStyle}
                onPress={() => onPressTop(2)}

            />

            <ScrollView horizontal={true}>

                <View style={styles.containerGroupTwoLineSmallImages}>
                    <View style={styles.containerLineSmallImages}>
                        {
                            smallImages.map((item, i) => renderSmallImageButton(item, i))
                        }
                    </View>

                    <View style={styles.containerLineSmallImages}>
                        {
                            smallImages.map((item, i) => renderSmallImageButton(item, i))
                        }
                    </View>
                </View>
            </ScrollView>

            <View style={styles.containerPopularSkills}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Popular Skills</Text>
                <ScrollView horizontal={true} style={styles.containerLinePopularSkills}>
                    {
                        popularSkills.map((item, index) => renderPopularItem(item, index))
                    }
                </ScrollView>
            </View>

            <View style={styles.pathContainer}>
                <View style={styles.lineText}>
                    <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Paths</Text>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={{...globalStyles.normalCenterText,
                                    color: themes.fontColor.mainColor
                            }}>See all {'>'}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    {
                        pathData.map((item, index) => renderPathItem(item, index))
                    }

                </ScrollView>

            </View>

            <View style={styles.authorContainer}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Top authors</Text>

                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    <View style={styles.containerLineAuthors}>
                        {
                            instructors.map((item, index) => renderAuthorItem(item, index))
                        }
                    </View>

                </ScrollView>

            </View>
        </ScrollView>
    )
}

export default BrowseScreen

const styles = StyleSheet.create({
    authorName: {
        maxWidth: 80,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center',
        margin: 0,
        marginTop: 5,
    },
    authorItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    imageAuthor: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    authorContainer: {
        marginTop: 20
    },
    infoPath: {
        flexDirection: 'column',
        backgroundColor: colors.darkgray2,
        height: 80
    },
    pathImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 100
    },
    pathItem: {
        flexDirection: 'column',
        backgroundColor: colors.darkgray,
        margin: 10
    },
    pathContainer: {
        marginTop: 20
    },
    lineText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerPopularSkills: {
        marginTop: 10,
        marginBottom: 20
    },
    containerLinePopularSkills: {
        flex: 1,
        flexDirection: 'row'
    },
    imageStyle: {
        marginTop: 20,
    },
    smallImageStyle: {
        marginTop: 20,
        width: 200,
        marginLeft: 10,
        marginRight: 10
    },
    containerLineSmallImages: {
        flexDirection: 'row'
    },
    containerGroupTwoLineSmallImages: {
        flex: 1,
        flexDirection: 'column'
    },
    roundCornerTag: {
        marginLeft: 5
    },
    roundCornerTagText: {
        marginLeft: 5,
        marginRight: 5
    },
    smallImagePath: {
        width: 60,
        height: 40
    },
    containerLineAuthors: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pathTitle: {
        marginBottom: 5,
        maxWidth: 210,
        fontSize: 16
    },
    pathCourseText: {
        alignSelf: 'flex-start',
        marginLeft: 10
    }
})
