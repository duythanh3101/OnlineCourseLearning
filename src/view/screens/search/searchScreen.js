import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, AsyncStorage, TouchableOpacity, Keyboard } from 'react-native'
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
import { render } from 'react-dom';
import { Icon } from '@ui-kitten/components';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const SearchScreen = (props) => {

    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    //const { setResults, results } = useContext(CourseDataContext);

    const [courses, setCourses] = useState([])
    const [authors, setAuthors] = useState([])
    const [searchs, setSearchs] = useState([])
    const [isShosHistory, setIsShosHistory] = useState(false)

    const authReducer = useSelector(state => state.authReducer);

    const onChangeTextHandle = (text) => {
        setSearchText(text);
    }

    useEffect(() => {
        courseHomeService.getSearchHistory(authReducer.token)
            .then(response => {
                if (response.data.message === 'OK') {
                    setSearchs(response.data.payload.data)
                }
                //console.log('searchs success', response.data.payload)
            })
            .catch(error => {
                console.log('searchs error');
            })
        setIsShosHistory(false);

        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, [])

    const _keyboardDidHide = () => {
        setIsShosHistory(false);
    };

    useEffect(() => {
        setIsShosHistory(true);
        console.log('searchs success', searchs.length)
    }, [searchText])

    const onEndEditing = () => {
        //console.log('onEndEditing', searchText)
        if (searchText !== '') {
            courseHomeService.searchV2(searchText, 10, 0)
                .then(response => {
                    setCourses(response.data.payload.courses.data)
                    setAuthors(response.data.payload.instructors.data)
                    //console.log('a', response.data.payload.courses.data.length, response.data.payload.instructors.data.length)
                })
                .catch(error => {
                    console.log('searchs error');
                })
        }
        setIsShosHistory(false);
    }

    const onHandleFocus = () => {
        setIsShosHistory(true);
        console.log('onHandleFocus')
    }

    const renderSearchHistory = (item, index) => {
        //console.log('searchs success 2', item.content)

        if (item.content === '')
            return null;
        return <HistoryLine
            content={item.content}
            key={index}
            id={item.id}
            onPress={() => {
                onPressSearchItem(item.content)
            }}
            onPressClear={() => {
                onPressClearSearchItem(item.id)
            }}
        />
    }

    const onPressSearchItem = (content) => {
        setSearchText(content);
        setIsShosHistory(true);
    }
    const onPressClearSearchItem = (id) => {
        setSearchText('');
        console.log('onPressClearSearchItem', id)
        courseHomeService.deleteSearchHistory(id, authReducer.token)
            .then(response => {
                if (response.data.message === 'OK'){
                    let newSearchs = searchs.filter(x => x.id !== id);
                    setSearchs(newSearchs);
                }
             
                
                //console.log('a', response.data.payload.courses.data.length, response.data.payload.instructors.data.length)
            })
            .catch(error => {
                console.log('deleteSearchHistory error');
            })


    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: 'white' }}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={onChangeTextHandle}
                value={searchText}
                lightTheme
                clearIcon={true}
                searchIcon={true}
                round={true}
                onEndEditing={onEndEditing}
                onFocus={onHandleFocus}
            />
            {
                isShosHistory === true
                    ?
                    (
                        searchs && searchs.length > 0
                            ?
                            searchs.map((item, index) => renderSearchHistory(item, index))
                            :
                            null
                    )
                    :
                    <SearchTab courses={courses} authors={authors} />
            }
            {/* <Text>aaaaaaaaaaaaaaaaaa</Text> */}
            {/* <SearchCoursesScreen datas={courses} navigation={props.navigation} /> */}
        </View>
    )
}

export default SearchScreen

const HistoryLine = (props) => {

    return <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <TouchableOpacity style={{ flex: 11, flexDirection: 'row', marginLeft: 15 }} onPress={props.onPress}>
            <FontAwesome name="history" size={18} color="black" />
            <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor, fontSize: 16, marginLeft: 10 }}>
                {props.content}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, marginRight: 15 }} onPress={props.onPressClear}>
            <AntDesign name="close" size={18} color="black" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

})
