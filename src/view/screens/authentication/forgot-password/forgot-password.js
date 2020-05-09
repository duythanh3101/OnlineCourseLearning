import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles';
import { Icon, Input } from "@ui-kitten/components";
import RoundCornerButton from '../../../components/common/round-corner-button';

const screenWidth = Math.round(Dimensions.get('window').width);

const ForgotPassword = () => {
    return (
        <View style={[globalStyles.container, {justifyContent: 'center'}]}>
            <Text style={globalStyles.headerText}>
                FORGOT PASSWORD
            </Text>
            <Text style={[globalStyles.titleText, { marginTop: 10, marginLeft: 20 }]}>
                Enter your email address and we'll send you a link to reset your password
                </Text>
            <Input
                label="Email"
                maxLength={100}
                placeholder='Email'
                style={styles.textInput}
                labelStyle={{fontSize: 16, marginTop: 5}}
            />
            <RoundCornerButton
                title='SEND EMAIL'
                backgroundStyle={{backgroundColor: colors.blue, marginTop: 20}}
            />

        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    roundCornerButtonBlue: {
        backgroundColor: colors.blue,
        width: screenWidth * 8 / 9,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    signInText: {
        fontSize: 22,
        color: colors.white,
        padding: 10
    },
    textInput: {
        fontSize: 24,
        color: colors.white,
        margin: 10,
        width: screenWidth * 8 / 9,
        marginRight: '5%',
        marginLeft: '5%',
        justifyContent: 'center',
        height: 40,
        borderBottomWidth: 2,
        marginTop: 10
    },

})
