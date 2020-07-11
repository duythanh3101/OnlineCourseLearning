import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
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

    const {themes} = useContext(ThemeContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const authReducer = useSelector(state => state.authReducer);
    const authDispatch = useDispatch();

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );

    const onHandleSigninPress = async () => {
        authDispatch(loginRequest());
        const res = await AuthenticationService.login('duythanh3101@gmail.com', '123456');
        if (res && res.data.message && res.data.message === 'OK'){
            authDispatch(loginSuccessed(res.data.userInfo, res.data.token));

            props.navigation.navigate(ScreenKey.MainTab)
        }else{
            authDispatch(loginFailed());
        }
    }

    const onHandleForgotPasswordPress = () => {
        props.navigation.navigate(ScreenKey.ForgotPasswordScreen)
    }

    const onHandleSignUpPress = () => {
        props.navigation.navigate(ScreenKey.RegisterScreen)
    }

    // if (authReducer.isAuthenticating === true){
    //     return <ActivityIndicator/>
    // }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={[globalStyles.container, styles.container, {backgroundColor: themes.background.mainColor}]}>
                
                <View style={styles.imageContainer}>
                    <Image source={ImageKey.RedLogo} style={{ width: 300, height: 300 }} />

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

                    <TouchableOpacity style={styles.forgot} onPress={onHandleForgotPasswordPress}>
                        <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgot} onPress={onHandleSignUpPress}>
                        <Text style={styles.forgotText}>SIGN UP FREE</Text>
                    </TouchableOpacity>

                    {
                    authReducer.isAuthenticating === true 
                    ?
                    <ActivityIndicator style={{alignSelf : 'center', flex: 1}}/>
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
