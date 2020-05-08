import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { Icon, Input } from "@ui-kitten/components";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );

    return (
        <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()}>
            <View style={[globalStyles.container, styles.container]}>
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
                <TouchableOpacity style={styles.roundCornerButtonGray}>
                    <Text style={styles.signInText}>SIGN IN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgot}>
                    <Text style={styles.forgotText}>SIGN UP FREE</Text>
                </TouchableOpacity>
            </View>

        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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

    labelStyle: {
        color: colors.blue
    },
    inputStyle: {
        color: colors.white,
        paddingTop: 15
    },
    signInText: {
        fontSize: 22,
        color: colors.white
    },
    forgotText: {
        fontSize: 18,
        color: colors.blue
    },
    roundCornerButtonGray: {
        backgroundColor: colors.gray,
        width: screenWidth * 8 / 9,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    forgot: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
