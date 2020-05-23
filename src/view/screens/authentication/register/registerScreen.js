import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { Icon, Input } from "@ui-kitten/components";
import RoundCornerButton from '../../../components/common/round-corner-button';
import { ImageKey, constants } from '../../../../global/constants';

const RegisterScreen = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[globalStyles.container, styles.container]}>
                <View style={styles.imageContainer}>
                    <Image source={ImageKey.RedLogo} style={{ width: 120, height: 120 }} />

                </View>

                <View style={styles.textInputContainer}>
                    <Input
                        label="Username (or Email)"
                        maxLength={100}
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Username (or Email)'
                        style={styles.textInput}
                    />

                    <Input
                        icon={showPasswordIcon}
                        label="Password"
                        maxLength={100}
                        onChangeText={setPassword}
                        onIconPress={() => setIsHidingPassword(!isHidingPassword)}
                        secureTextEntry={isHidingPassword}
                        value={password}
                        placeholder='Password'
                        style={styles.textInput}
                    />

                    <Input
                        icon={showPasswordIcon}
                        label="Confirm Password"
                        maxLength={100}
                        onChangeText={setPassword}
                        onIconPress={() => setIsHidingPassword(!isHidingPassword)}
                        secureTextEntry={isHidingPassword}
                        value={password}
                        placeholder='Confirm Password'
                        style={styles.textInput}
                    />
                    <RoundCornerButton
                        title='SIGN UP'
                        backgroundStyle={{ marginTop: 20 }}
                    />
                    <TouchableOpacity style={styles.forgot}>
                        <Text style={styles.forgotText}>LOGIN WITH EXISTING ACCOUNT</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </TouchableWithoutFeedback>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 2,
        marginTop: 20
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textInput: {
        fontSize: 24,
        color: colors.white,
        margin: 10,
        width: constants.screenWidth * 8 / 9,
        marginRight: '5%',
        marginLeft: '5%',
        justifyContent: 'center',
        height: 40,
        borderBottomWidth: 2,
        marginTop: 10
    },

    labelStyle: {
        color: colors.blue
    },
    inputStyle: {
        color: colors.white,
        paddingTop: 15
    },
    signInText: {
        fontSize: 22,
        color: colors.white,
        padding: 10
    },
    forgotText: {
        fontSize: 18,
        color: colors.blue
    },
    forgot: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
