import React, { useState } from 'react'
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


const CourseDetailScreen = () => {

    const [tabSelectedIndex, setTabSelectedIndex] = useState(0);


    const onPress = () => {

    }

    const onHandleBookmarkPress = () => {
        Alert.alert('Bookmark')
    }

    const onHandleAddToChannelPress = () => {
        Alert.alert('Add to channel')
    }

    const onHandleFavoritePress = () => {
        Alert.alert('Favorite')
    }
    return (
        <View style={[globalStyles.container, styles.container]}>
            {/* <View style={styles.imageContainer}> */}
            <Image source={ImageKey.CourseImage} style={styles.topImage} />
            {/* </View> */}

            <View styles={styles.mainContainer}>
                <Text style={[globalStyles.headerText, styles.titleText]}>Angular Fundamentals</Text>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <RoundCornerWithImageTag title='Joe Eames' />
                    <RoundCornerWithImageTag title='Joe Eames' />
                    <RoundCornerWithImageTag title='Joe Eames' />
                </View>

                <View style={styles.topInfoContainer}>
                    <Text style={globalStyles.normalText}>Intermediate -</Text>
                    <Text style={globalStyles.normalText}>Feb 2020 -</Text>
                    <Text style={globalStyles.normalText}>9.6h - </Text>

                    <StarRatingImage starCount={3} />
                    <Text style={globalStyles.normalText}> (818) </Text>

                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconItem} onPress={onHandleBookmarkPress}>
                        <View style={styles.icon}>
                            <Entypo name="bookmarks" size={24} color="white" />
                        </View>
                        <Text style={globalStyles.titleText}>Bookmark</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconItem} onPress={onHandleAddToChannelPress}>
                        <View style={styles.icon}>
                            <Entypo name="add-to-list" size={24} color="white" />
                        </View>
                        <Text style={globalStyles.titleText}>Add to Channel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconItem} onPress={onHandleFavoritePress}>
                        <View style={styles.icon}>
                            <Feather name="download" size={24} color="white" />
                        </View>
                        <Text style={globalStyles.titleText}>Favorite</Text>
                    </TouchableOpacity>
                </View>


                <TabView
                    onSelect={setTabSelectedIndex}
                    selectedIndex={tabSelectedIndex}
                    shouldLoadComponent={(index) => tabSelectedIndex === index}
                >
                    <Tab title='USERS'>
                        <Layout>
                            <LoginScreen/>
                        </Layout>
                    </Tab>
                    <Tab title='ORDERS'>
                        <Layout style={styles.tabContainer}>
                            <Text category='h5'>ORDERS</Text>
                        </Layout>
                    </Tab>
                    <Tab title='TRANSACTIONS'>
                        <Layout style={styles.tabContainer}>
                            <Text category='h5'>TRANSACTIONS</Text>
                        </Layout>
                    </Tab>
                </TabView>
                <Text style={{ color: 'white' }}>hshshshsh</Text>
            </View>


        </View>

    )
}

export default CourseDetailScreen

const styles = StyleSheet.create({
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
        marginTop: 10
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
