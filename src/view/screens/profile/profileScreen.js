import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'react-native-svg';
import RoundCornerTag from '../../components/common/round-corner-tag';

const ProfileScreen = () => {
    return (
        <View style={globalStyles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.imageProfile} source={{ uri: 'http://getwallpapers.com/wallpaper/full/d/6/3/920567-vertical-beautiful-background-pics-1920x1200-for-iphone.jpg' }} />
                <Text style={[globalStyles.titleText, styles.nameProfile]}>Bich Chieu</Text>
            </View>
            <View style={{}}>
                <Text style={globalStyles.titleText}>Interests</Text>

                <View style={{ flexDirection: 'row' }}>
                    <RoundCornerTag
                        isHasIcon
                        title='Javascript'
                        style={{ margin: 3 }}
                        textStyle={styles.roundCornerTag}
                    />

                    <RoundCornerTag
                        isHasIcon
                        title='C#'
                        style={{ margin: 3 }}
                        textStyle={styles.roundCornerTag}
                    />
                </View>


            </View>

            <Text style={globalStyles.titleText}>Activity Insights (last 30 days)</Text>
            <Text style={globalStyles.titleText}>Total active days</Text>
            <Text style={globalStyles.normalText}>10 days</Text>
            <Text style={globalStyles.titleText}>MOST ACTIVE TIME OF DAY</Text>
            <Text style={globalStyles.titleText}>MOST VIEW SUBJECT</Text>
            <Text style={globalStyles.titleText}>SOFTWARE DEVELOPMENT</Text>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    nameProfile: {
        fontSize: 24
    },
    roundCornerTag: {
        marginLeft: 5
    }
})
