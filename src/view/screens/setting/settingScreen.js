import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import RoundCornerTag from '../../components/common/round-corner-tag';
import { ThemeContext } from '../../../provider/theme-provider';
import { Button } from '@ui-kitten/components';
import RoundCornerButton from '../../components/common/round-corner-button';
import { ScreenKey } from '../../../global/constants';


const ToggleLine = (props) => {
    const { themes } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(false);
s
    return (
        <View style={styles.toggleLine}>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>{props.title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.onValueChange}
                value={isEnabled}
            />
        </View>
    )
}


export default function SettingScreen(props) {

    const { themes } = useContext(ThemeContext);
    const { togleButton } = useContext(ThemeContext);

    const [isEnabledStreaming, setIsEnabledThemStreaming] = useState(false);
    const [isEnabledDownloading, setIsEnabledDownloading] = useState(false);
    const [isEnabledTheme, setIsEnabledTheme] = useState(false);

    const toggleSwitchTheme = () => {
        setIsEnabledTheme(previousState => !previousState);
        togleButton();
    }

    const toggleSwitchStreaming = () => {
        setIsEnabledThemStreaming(previousState => !previousState);
        //togleButton();
    }

    const toggleSwitchDownloading = () => {
        setIsEnabledDownloading(previousState => !previousState);
        //togleButton();
    }

    const onHandleSignoutPress = () => {
        props.navigation.navigate(ScreenKey.LoginScreen);
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Image style={styles.imageProfile} source={{ uri: 'https://user-images.githubusercontent.com/4683221/34775011-89bb46c2-f609-11e7-8bd1-d7a70d2277fd.jpg?w=200' }} />
                <View style={styles.nameContainer}>
                    <Text style={[globalStyles.titleText, styles.nameProfile, {
                        color: themes.fontColor.mainColor
                    }]}>Duy Thanh</Text>
                    <Text style={[globalStyles.normalText, styles.tagProfile, {
                        color: themes.fontColor.mainColor
                    }]}>thanh-pham-44</Text>
                </View>

            </View>
            <View style={styles.separator} />

            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Account</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Communication Preferences</Text>
            <View style={styles.separator} />
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Default caption laguage</Text>
            <Text style={{
                ...globalStyles.normalText,
                color: themes.fontColor.mainColor,
                marginLeft: 10,
                marginTop: -5
            }}>English</Text>


            <View style={styles.toggleLine}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Require for Wi-fi for streaming</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchStreaming}
                    value={isEnabledStreaming}
                />
            </View>

            <View style={styles.toggleLine}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Require for Wi-fi for downloading</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchDownloading}
                    value={isEnabledDownloading}
                />
            </View>

            <View style={styles.toggleLine}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Change theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchTheme}
                    value={isEnabledTheme}
                />
            </View>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Notifications</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Advanced Options</Text>

            <RoundCornerButton
                        title='SIGN OUT'
                        titleStyle={{
                            color: themes.buttonColor.mainColor
                        }}
                        backgroundStyle={{ marginTop: 20, 
                            backgroundColor: themes.background.mainColor,
                            borderColor:  themes.buttonColor.mainColor,
                            borderWidth: 1
                         }}
                        onPress={onHandleSignoutPress}
                    />
        </View>
    )
}

const styles = StyleSheet.create({
    toggleLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameContainer: {
        flexDirection: 'column'
    },
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    nameProfile: {
        fontSize: 24
    },
    tagProfile: {
        fontSize: 16,
        marginLeft: 10
    },
    roundCornerTag: {
        marginLeft: 5
    },
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
    }
})
