import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { Icon, Input } from "@ui-kitten/components";
import RoundCornerButton from '../../../components/common/round-corner-button';
import { ImageKey, ScreenKey } from '../../../../global/constants';
import { ThemeService } from '@ui-kitten/components/theme/theme/theme.service';
import { ThemeContext } from '../../../../provider/theme-provider';
import AuthenticationService from '../../../../core/service/authentication-service';
import { useDispatch, useSelector } from 'react-redux';
import authenticationService from '../../../../core/service/authentication-service';
import { loginSuccessed, loginFailed, loginRequest } from '../../../../redux/actions/authActions';
import { ActivityIndicator } from 'react-native-paper';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const LoginScreen = (props) => {

    const { themes } = useContext(ThemeContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('')

    const authReducer = useSelector(state => state.authReducer);
    const authDispatch = useDispatch();

    useEffect(() => {
        authDispatch(loginFailed());
    }, [])

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );

    const onHandleSigninPress = async () => {
        authDispatch(loginRequest());
        await AuthenticationService.login(username, password)
            .then(response => {
                if (response && response.data.message && response.data.message === 'OK') {
                    console.log('Login token: ', response.data.token);
                    authDispatch(loginSuccessed(response.data.userInfo, response.data.token));
                    setIsError(false);
                    props.navigation.navigate(ScreenKey.MainTab)
                } else {
                    setIsError(true);
                    setErrorText(response.message)
                    authDispatch(loginFailed());
                }
            })
            .catch(error => {
                setErrorText('Tài khoản hoặc mật khẩu không đúng')
                setIsError(true);
                authDispatch(loginFailed());
            })
    }

    const showError = () => {
        if (isError === true) {
            return <Text style={[globalStyles.titleText,
            { color: 'red', alignSelf: 'center', marginTop: 10 }]}>
                {errorText}</Text>
        }
    }

    const onHandleForgotPasswordPress = () => {
        props.navigation.navigate(ScreenKey.ForgotPasswordScreen)
    }

    const onHandleSignUpPress = () => {
        props.navigation.navigate(ScreenKey.RegisterScreen)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[globalStyles.container, styles.container, { backgroundColor: themes.background.mainColor }]}>

                <View style={styles.imageContainer}>
                    <Image source={ImageKey.RedLogo} style={{ width: 250, height: 250 }} />

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
                    <RoundCornerButton
                        title='SIGN IN'
                        backgroundStyle={{ marginTop: 20, backgroundColor: themes.buttonColor.mainColor }}
                        onPress={onHandleSigninPress}
                    />
                    {
                        showError()
                    }
                    <TouchableOpacity style={styles.forgot} onPress={onHandleForgotPasswordPress}>
                        <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgot} onPress={onHandleSignUpPress}>
                        <Text style={styles.forgotText}>SIGN UP FREE</Text>
                    </TouchableOpacity>

                    {
                        authReducer.isAuthenticating === true
                            ?
                            <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />
                            :
                            null
                    }

                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 2,
        marginTop: 20
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
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
