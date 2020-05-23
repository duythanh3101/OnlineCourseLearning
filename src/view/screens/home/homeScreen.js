import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
import Course from '../../components/home/course/course'
import { globalStyles } from '../../../global/styles'

const HomeScreen = (props) => {
    return (
        <Layout style={globalStyles.container}>
            <Course {...props}/>
        </Layout>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    
})
