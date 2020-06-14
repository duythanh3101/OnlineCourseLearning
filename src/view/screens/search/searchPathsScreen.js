import React, { useContext } from 'react'
import { StyleSheet, Text, View, SectionList, Alert, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../../global/styles'
import SearchPathCourseItem from '../../components/search/search-path-course-item/search-path-course-item'
import { ThemeContext } from '../../../provider/theme-provider'
import { PathDataContext } from '../../../provider/path-data/path-data-provider'
import { FlatList } from 'react-native-gesture-handler'

const SearchPathsScreen = () => {

    const { themes } = useContext(ThemeContext);
    const { pathData } = useContext(PathDataContext);

    const renderItem = (item, index) => {

        return <SearchPathCourseItem
            source={item.image}
            title={item.pathName}
            course={item.courses}
            onPress={onPressPathItem}
        />
    }

    const onPressPathItem = () => {
        Alert.alert('Đang cập nhật')
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>
            <FlatList
                data={pathData}
                keyExtractor={(item, index) => item + index}
                renderItem={({item, index }) => renderItem(item, index)}

            />
        </View>
    )
}

export default SearchPathsScreen

const styles = StyleSheet.create({})