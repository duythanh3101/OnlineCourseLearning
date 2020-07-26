import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import RoundCornerTag from '../../components/common/round-corner-tag';
import { ThemeContext } from '../../../provider/theme-provider';
import UserService from '../../../core/service/userService';
import { useDispatch, useSelector } from 'react-redux';

const ProfileScreen = () => {

    const { themes } = useContext(ThemeContext);
    const authReducer = useSelector(state => state.authReducer);
    //const authDispatch = useDispatch();
    const userInfo = authReducer.userInfo;

    useEffect(() => {
        //console.log('auth', authReducer)

    }, [])
    return (
        <View style={{...globalStyles.container, backgroundColor: themes.background.mainColor}}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.imageProfile} source={{ uri: userInfo.avatar }} />
                <Text style={[globalStyles.titleText, styles.nameProfile, {
                    color: themes.fontColor.mainColor
                }]}>{userInfo.email}</Text>
            </View>
            <View style={{}}>
                <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>Interests</Text>

                <View style={{ flexDirection: 'row' }}>
                    <RoundCornerTag
                        isHasIcon
                        title='Javascript'
                        style={{ margin: 3 }}
                        textStyle={styles.roundCornerTag}
                    />

                    <RoundCornerTag
                        isHasIcon
                        title='C#'
                        style={{ margin: 3 }}
                        textStyle={styles.roundCornerTag}
                    />
                </View>


            </View>

            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>Activity Insights (last 30 days)</Text>
            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>Total active days</Text>
            <Text style={{...globalStyles.normalText, color: themes.fontColor.mainColor}}>10 days</Text>
            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>MOST ACTIVE TIME OF DAY</Text>
            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>MOST VIEW SUBJECT</Text>
            <Text style={{...globalStyles.titleText, color: themes.fontColor.mainColor}}>SOFTWARE DEVELOPMENT</Text>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    nameProfile: {
        fontSize: 24
    },
    roundCornerTag: {
        marginLeft: 5
    }
})
