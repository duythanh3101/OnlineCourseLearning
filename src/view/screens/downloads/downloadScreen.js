import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import { globalStyles } from '../../../global/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DownloadScreen = () => {
    return (
        <Layout style={[globalStyles.container, { alignItems: 'center', justifyContent: 'center' }]}>
            <MaterialCommunityIcons style={{ alignSelf: 'center' }} name="progress-download" size={100} color="gray" />
            <Text style={globalStyles.headerText}>No downloads</Text>
            <Text style={globalStyles.headerText}>Courses you download will appear hear</Text>

        </Layout>
    )
}

export default DownloadScreen

const styles = StyleSheet.create({


})
