import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { SearchBar } from 'react-native-elements'

const SearchScreen = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.headerCenterText}> SearchScreen </Text>
            {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <SearchBar
                  lightTheme round
                  value={searchText}
                  onClear={setSearchText('')}
                  onChangeText={setSearchText}
                />
            </TouchableWithoutFeedback> */}
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({

})
