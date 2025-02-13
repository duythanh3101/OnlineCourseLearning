import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, UIManager } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles';
import { Icon, Input } from "@ui-kitten/components";
import RoundCornerButton from '../../../components/common/round-corner-button';
import { ThemeContext } from '../../../../provider/theme-provider';
import userService from '../../../../core/service/userService';
import { checkEmail } from '../../../../global/utilConverter';

const screenWidth = Math.round(Dimensions.get('window').width);

const ActiveAccountScreen = (props) => {

    const { themes } = useContext(ThemeContext);
    const [email, setEmail] = useState('')

    const onPressSendEmail = () => {
        console.log('email: ', email.toLowerCase())
        // if (checkEmail(email)) {
        userService.sendActiveEmail(email)
            .then(response => {
                console.log('email: ', response.data.message);

                Alert.alert('Kiểm tra email để kích hoạt tài khoản');
            })
            .catch(error => {
                console.log('email error', error);
            })
        // }
        // else {
        //     Alert.alert('Email không hợp lệ');
        // }

    }

    const onPressCancel = () => {
        props.navigation.goBack();
    }
    return (
        <View style={[globalStyles.container, { justifyContent: 'center', backgroundColor: themes.background.mainColor }]}>
            <Text style={{ ...globalStyles.headerText, color: themes.fontColor.mainColor, marginLeft: 10 }}>
                ACTIVE ACCOUNT
            </Text>
            <Text style={[globalStyles.titleText, { marginTop: 10, marginLeft: 20, color: themes.fontColor.mainColor }]}>
                Enter your email address and we'll send you a link to active
                </Text>
            <Input
                label="Email"
                maxLength={100}
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
                labelStyle={{ fontSize: 16, marginTop: 5 }}
            />
            <RoundCornerButton
                title='ACTIVE ACCOUNT'
                backgroundStyle={{ backgroundColor: colors.blue, marginTop: 20 }}
                onPress={onPressSendEmail}
            />

            <RoundCornerButton
                title='Cancel'
                backgroundStyle={{ marginTop: 20 }}
                onPress={onPressCancel}
            />
        </View>
    )
}

export default ActiveAccountScreen

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
