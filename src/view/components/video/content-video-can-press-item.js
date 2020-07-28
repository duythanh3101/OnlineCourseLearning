import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ThemeContext } from '../../../provider/theme-provider'
import { globalStyles } from '../../../global/styles'
import { Menu, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

export default function ContentVideoCanPressItem(props) {
    const { themes } = useContext(ThemeContext)
    const[visible, setVisible] = useState(false)

    const onHandleBookmarkPress = () => {
        _closeMenu();
        //props.navigation.navigate(ScreenKey.SettingScreen);
    }

    const _openMenu = () => setVisible(true);

    const _closeMenu = () => setVisible(false);

    return (
        <TouchableOpacity style={{ ...styles.container, backgroundColor: themes.background.mainColor }} 
                            onPress={props.onPress}>
            <View style={{...styles.container, padding: 5}}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <View style={styles.textContainer}>
                    <Text style={{ ...globalStyles.titleText, 
                        color: themes.fontColor.mainColor,
                        marginLeft: 0,
                        maxWidth: 250
                    }}>{props.title}</Text>
                    <Text style={{ ...globalStyles.normalText, 
                        color: themes.fontColor.mainColor,
                        marginLeft: 0
                         }}>{props.duration} giờ</Text>
                </View>
            </View>

            <Menu
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
            </Menu>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'column',
        marginLeft: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        height: 80,
        width: 100,
        alignSelf: 'center'
    },
})
