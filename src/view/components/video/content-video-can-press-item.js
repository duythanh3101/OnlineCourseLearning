import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'
import { globalStyles } from '../../../global/styles'
import { Menu, Divider } from 'react-native-paper';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { hoursToFormatTime } from '../../../global/utilConverter';

export default function ContentVideoCanPressItem(props) {
    const { themes } = useContext(ThemeContext)
    const [visible, setVisible] = useState(false)

    const onHandleBookmarkPress = () => {
        _closeMenu();
        //props.navigation.navigate(ScreenKey.SettingScreen);
    }

    const _openMenu = () => setVisible(true);

    const _closeMenu = () => setVisible(false);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: themes.background.mainColor
        }}>
            <TouchableOpacity style={{ ...styles.container, flex: 1 }}
                onPress={props.onPress}>
                <View style={{ ...styles.contentContainer, padding: 5 }}>
                    <Image style={styles.image} source={{ uri: props.image }} />
                    <View style={styles.textContainer}>
                        <Text style={{
                            ...globalStyles.normalText,
                            color: themes.fontColor.mainColor,
                            marginLeft: 0,
                            fontWeight: 'bold',
                            maxWidth: 230
                        }}>{props.numberOrder}. {props.title}</Text>
                        <Text style={{
                            ...globalStyles.normalText,
                            color: themes.fontColor.mainColor,
                            marginLeft: 0
                        }}>{hoursToFormatTime(props.duration)}</Text>
                    </View>


                </View>


                {/* <Menu
                style={{marginRight: 10}}
                visible={visible}
                onDismiss={_closeMenu}
                anchor={
                    <TouchableOpacity onPress={_openMenu}>
                        <Entypo name="dots-three-vertical" size={18} color="black" />
                    </TouchableOpacity>
                }
            >
                <Menu.Item onPress={onHandleBookmarkPress} title="Bookmark" />
                <Divider />
                <Menu.Item onPress={() => { }} title="Remove download" />
            </Menu> */}
            </TouchableOpacity>

            {
                props.isHasAttachment === true
                    ?
                    <TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }}
                        onPress={props.onPreessAttachment}>
                        <MaterialIcons name="attach-file"
                            size={24} color="red" />
                    </TouchableOpacity>
                    :
                    null
            }


        </View>

    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10
    },
    container: {
        flexDirection: 'column',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between'
    },
    image: {
        height: 80,
        width: 100,
        alignSelf: 'center'
    },
})
