import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function LoadingIndicator() {
    return <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />
}
