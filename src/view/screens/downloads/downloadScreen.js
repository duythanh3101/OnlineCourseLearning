import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../../global/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const DownloadScreen = () => {
    return (
        <View style={[globalStyles.container, { alignItems: 'center', justifyContent: 'center'}]}>
            <MaterialCommunityIcons style={{alignSelf: 'center'}} name="progress-download" size={100} color="gray" />
            <Text style={globalStyles.headerText}>No downloads</Text>
            <Text style={globalStyles.headerText}>Courses you download will appear hear</Text>
        
        </View>
    )
}

export default DownloadScreen

const styles = StyleSheet.create({})
