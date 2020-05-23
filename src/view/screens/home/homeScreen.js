import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
import Course from '../../components/home/course/course'
import { globalStyles } from '../../../global/styles'

const HomeScreen = () => {
    return (
        <Layout style={globalStyles.container}>
            <Course/>
        </Layout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
