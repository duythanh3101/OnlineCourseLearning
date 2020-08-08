import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Separator() {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
      }
})
