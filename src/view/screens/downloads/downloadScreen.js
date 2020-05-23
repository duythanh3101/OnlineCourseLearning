import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { globalStyles } from '../../../global/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalActionTypes } from '../../../redux/actions/actionTypes';
import { FlatList } from 'react-native-gesture-handler';
import ListCourseItem from '../../components/course/listCourseItem/list-course-item';

const DownloadScreen = (props) => {

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

    const renderItem = (item, index) => {
        return < ListCourseItem
            source='http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg'
            courseName={item.courseName}
            author={item.author}
            level={item.level}
            date={item.date}
            duration={item.duration}
            //key={index}
            style={{ margin: 5 }
            } />
    }
    return (
        <View style={globalStyles.container}>

            {
                data.length == 0
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
                                <Text style={globalStyles.titleText}>{data.length} courses</Text>
                                <Text style={globalStyles.titleText}>REMOVE ALL</Text>
                            </View>

                            <FlatList
                                data={data}
                                renderItem={({item, index}) => renderItem(item, index)}
                            />
                        </View>
                    )
            }


        </View>
    )

}

export default DownloadScreen

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
    }
})
