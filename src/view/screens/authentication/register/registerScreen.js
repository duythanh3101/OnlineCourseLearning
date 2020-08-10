import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { Icon, Input } from "@ui-kitten/components";
import RoundCornerButton from '../../../components/common/round-corner-button';
import { ImageKey, constants, ScreenKey } from '../../../../global/constants';
import { ThemeProvider, ThemeContext } from '../../../../provider/theme-provider';
import registerService from '../../../../core/service/register-service ';
import { checkEmail } from '../../../../global/utilConverter';

const RegisterScreen = (props) => {

    const { themes } = useContext(ThemeContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isHidingConfirmPassword, setIsHidingConfirmPassword] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('')

    const validateAccount = () => {
        if (username === "") {
            return "Tên đăng nhập không được để trống"
        }

        if (email === "") {
            return "Email không được để trống"
        }

        if (!checkEmail(email)) {
            return "Email không hợp lệ"
        }

        if (phone === "") {
            return "Số điện thoại không được để trống"
        }

        if (password === '' || confirmPassword === '') {
            return "Mật khẩu không được để trống"
        }

        if (password !== confirmPassword) {
            return "Mật khẩu xác nhận không hợp lệ"
        }


        return '';
    }

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );

    const signUp = () => {
        let error = validateAccount();
        if (error === '') {
            registerService.register(username, email, phone, password).
                //registerService.register('sads2sad', 'asdas2da', '0002', 'asd2asd').
                then(res => {
                    //console.log('register success', res.data)
                    setIsError(false);
                    setIsShow(true);
                    //Alert.alert('Đăng ký thành công. Vui lòng xác nhận qua Email')
                })
                .catch(err => {
                    //console.log('register error', err)
                    setIsError(true);
                    setIsShow(true);
                })
        } else {
            setErrorText(error);
            setIsError(true);
            setIsShow(true);

        }

    }

    const onHandlePressActiveAccount = () => {
        props.navigation.navigate(ScreenKey.ActiveAccountScreen);
    }

    const showError = () => {
        if (isShow) {
            if (isError === true) {
                return <Text style={[globalStyles.titleText,
                { color: 'red', alignSelf: 'center', marginTop: 10 }]}>
                    {errorText}</Text>
            }
            else {
                return <Text style={[globalStyles.titleText,
                { color: 'red', alignSelf: 'center', marginTop: 10 }]}>Đăng ký thành công. Vui lòng xác nhận qua Email</Text>
            }
        }
    }

    const loginClick = () => {
        props.navigation.replace(ScreenKey.LoginScreen);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[globalStyles.container, styles.container, { backgroundColor: themes.background.mainColor }]}>
                <View style={styles.imageContainer}>
                    <Image source={ImageKey.RedLogo} style={{ width: 250, height: 250 }} />

                </View>

                <View style={styles.textInputContainer}>
                    <Input
                        label="Username"
                        maxLength={100}
                        onChangeText={setUsername}
                        value={username}
                        placeholder='Username (or Email)'
                        style={styles.textInput}
                    />

                    <Input
                        label="Email"
                        maxLength={100}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Email'
                        style={styles.textInput}
                    />

                    <Input
                        label="Phone"
                        maxLength={100}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder='Phone'
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
                        onChangeText={setConfirmPassword}
                        onIconPress={() => setIsHidingConfirmPassword(!isHidingConfirmPassword)}
                        secureTextEntry={isHidingConfirmPassword}
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        style={styles.textInput}
                    />
                    {
                        showError()
                    }
                    <RoundCornerButton
                        title='SIGN UP'
                        backgroundStyle={{ marginTop: 20 }}
                        onPress={signUp}
                    />
                    <TouchableOpacity style={styles.forgot} onPress={loginClick}>
                        <Text style={styles.forgotText}>LOGIN WITH EXISTING ACCOUNT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgot} onPress={onHandlePressActiveAccount}>
                        <Text style={styles.forgotText}>HAVE NOT RECEIVED AN ACTIVATION EMAIL?</Text>
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
