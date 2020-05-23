import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// import { Text, Layout } from '@ui-kitten/components'
import { globalStyles } from '../../../global/styles'
import { TextInput } from 'react-native-paper';
import SearchTab from '../../routes/searchTab';

const SearchScreen = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={globalStyles.container}>
            <TextInput placeholder='Search'/>
            <SearchTab/>
              
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
