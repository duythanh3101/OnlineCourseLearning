import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import { Text, Layout } from '@ui-kitten/components'
import { globalStyles } from '../../../global/styles'
import { TextInput } from 'react-native-paper';
import SearchTab from '../../routes/searchTab';
import { SearchBar } from 'react-native-elements';
import courseHomeService from '../../../core/service/courseHomeService';
import { CourseDataContext } from '../../../provider/course-data/course-data-provider';
import SearchAllSectionsScreen from './searchAllSectionsScreen';
import SearchCoursesScreen from './searchCoursesScreen';

const SearchScreen = (props) => {

    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    //const { setResults, results } = useContext(CourseDataContext);


    const onChangeTextHandle = (text) => {
        setSearchText(text);
    }

    useEffect(() => {
        courseHomeService.search(searchText, 10, 1)
        .then(response => {
            setResults(response.data.payload.rows)
            console.log('search success', response.data.payload.count)

        })
        .catch(error => {
            console.log('searchs error');
        })

    }, [searchText])

    return (
        <View style={globalStyles.container}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={onChangeTextHandle}
                value={searchText}
                lightTheme
            />
            {/* <TextInput placeholder='Search' value={searchText}
                onChangeText={onChangeTextHandle} /> */}
            {/* <SearchTab/> */}
                <SearchCoursesScreen datas={results} navigation={props.navigation}/>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
