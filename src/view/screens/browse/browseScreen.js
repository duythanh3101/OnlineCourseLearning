import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Image } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import ImageButtonTwoLines from '../../components/common/image-button-two-lines'
import RoundCornerTag from '../../components/common/round-corner-tag'

const BrowseScreen = () => {

    const popularSkills = [
        {
            key: 1,
            skillName: 'Angular'
        },
        {
            key: 2,
            skillName: 'C#'
        },
        {
            key: 3,
            skillName: 'JavaScript'
        },
        {
            key: 4,
            skillName: 'Java'
        },
        {
            key: 5,
            skillName: 'Data Analysist'
        },
    ];

    const smallImages = [
        {
            key: 1,
            uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg',
            firstText: 'FIRST',
            secondText: 'RELEASE'
        },
        {
            key: 2,
            uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg',
            firstText: 'SECOND',
            secondText: 'RELEASE'
        },
        {
            key: 3,
            uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg',
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

    const renderPopularItem = (item, index) => {
        return <RoundCornerTag
            title={item.skillName}
            key={index}
            style={{ padding: 12, height: 30, margin: 5, marginBottom: 10 }}
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

    const onPressSeeAll = () => {
        Alert.alert('Đang cập nhật')
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <ScrollView style={globalStyles.container}>
            <ImageButtonTwoLines
                uri='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
                firstText='NEW'
                secondText='RELEASE'
            />

            <ImageButtonTwoLines
                uri='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
                firstText='RECOMMENDED'
                secondText='FOR YOU'
                imageStyle={styles.imageStyle}
            />

            <ScrollView horizontal={true}>

                <View style={styles.containerSrollView}>
                    <View style={styles.scrollView}>
                        {
                            smallImages.map((item, i) => renderSmallImageButton(item, i))
                        }
                    </View>

                    <View style={styles.scrollView}>
                        {
                            smallImages.map((item, i) => renderSmallImageButton(item, i))
                        }
                    </View>
                </View>
            </ScrollView>

            <View style={styles.containerPopularSkills}>
                <Text style={globalStyles.titleText}>Popular Skills</Text>
                <ScrollView horizontal={true} style={{ flex: 1, flexDirection: 'row' }}>
                    {
                        popularSkills.map((item, index) => renderPopularItem(item, index))
                    }
                </ScrollView>
            </View>

            <View style={styles.pathContainer}>
                <View style={styles.lineText}>
                    <Text style={globalStyles.titleText}>Paths</Text>
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text style={globalStyles.normalCenterText}>See all ></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.pathItem} onPress={onPressPathItem}>
                        <View style={styles.imagePathItem}>
                            <Image style={{ width: 60, height: 40 }} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                        </View>
                        <View style={styles.infoPath}>
                            <Text style={[globalStyles.titleText, { marginBottom: 5, maxWidth: 210, fontSize: 16 }]}>Building Web Applications with Blazor</Text>
                            <Text style={[globalStyles.normalCenterText, { alignSelf: 'flex-start', marginLeft: 10 }]}>6 courses</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.pathItem} onPress={onPressPathItem}>
                        <View style={styles.imagePathItem}>
                            <Image style={{ width: 60, height: 40 }} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                        </View>
                        <View style={styles.infoPath}>
                            <Text style={[globalStyles.titleText, { marginBottom: 5, maxWidth: 210, fontSize: 16 }]}>Building WPF with Blazor</Text>
                            <Text style={[globalStyles.normalCenterText, { alignSelf: 'flex-start', marginLeft: 10 }]}>5 courses</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>

            </View>

            <View style={styles.authorContainer}>
                <Text style={globalStyles.titleText}>Top authors</Text>

                <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
                    <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.authorItem} onPress={onPressPathItem}>
                            <Image style={styles.imageAuthor} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                            <Text style={[globalStyles.titleText, styles.authorName]}>Deborah Kurata</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.authorItem} onPress={onPressPathItem}>
                            <Image style={styles.imageAuthor} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                            <Text style={[globalStyles.titleText, styles.authorName]}>John</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.authorItem} onPress={onPressPathItem}>
                            <Image style={styles.imageAuthor} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                            <Text style={[globalStyles.titleText, styles.authorName]}>Andy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.authorItem} onPress={onPressPathItem}>
                            <Image style={styles.imageAuthor} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                            <Text style={[globalStyles.titleText, styles.authorName]}>Deborah Kurata</Text>
                        </TouchableOpacity>
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
    imagePathItem: {
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
        marginBottom: 10
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
    scrollView: {
        flexDirection: 'row'
    },
    containerSrollView: {
        flex: 1,
        flexDirection: 'column'
    }
})
