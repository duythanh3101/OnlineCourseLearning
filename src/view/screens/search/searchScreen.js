import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native'
// import { Text, Layout } from '@ui-kitten/components'
import { globalStyles } from '../../../global/styles'
import { TextInput } from 'react-native-paper';
import SearchTab from '../../routes/searchTab';
import { SearchBar } from 'react-native-elements';
import courseHomeService from '../../../core/service/courseHomeService';
import { CourseDataContext } from '../../../provider/course-data/course-data-provider';
import SearchAllSectionsScreen from './searchAllSectionsScreen';
import SearchCoursesScreen from './searchCoursesScreen';
import { useSelector } from 'react-redux';

const SearchScreen = (props) => {

    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    //const { setResults, results } = useContext(CourseDataContext);

    const [courses, setCourses] = useState([])
    const [authors, setAuthors] = useState([])
    const authReducer = useSelector(state => state.authReducer);
    const onChangeTextHandle = (text) => {
        setSearchText(text);
    }

    useEffect(() => {
        // courseHomeService.search(searchText, 10, 0)
        // .then(response => {
        //     setResults(response.data.payload.rows)
        //     console.log('search success', response.data.payload.count)

        // })
        // .catch(error => {
        //     console.log('searchs error');
        // })
       


    }, [])

    const onEndEditing = () => {
        console.log('onEndEditing', searchText)
        if (searchText !== '') {
            courseHomeService.searchV2(searchText, 10, 0)
                .then(response => {
                    setCourses(response.data.payload.courses.data)
                    setAuthors(response.data.payload.instructors.data)
                    console.log('a', response.data.payload.courses.data.length, response.data.payload.instructors.data.length)
                })
                .catch(error => {
                    console.log('searchs error');
                })
        }
    }

    return (
        <View style={globalStyles.container}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={onChangeTextHandle}
                value={searchText}
                lightTheme
                clearIcon={true}
                searchIcon={true}
                round={true}
                onEndEditing={onEndEditing}
            />

            <SearchTab courses={courses} authors={authors}/>
            {/* <SearchCoursesScreen datas={courses} navigation={props.navigation} /> */}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
