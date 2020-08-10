import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Dimensions, Alert } from 'react-native'
import { globalStyles, colors } from '../../../global/styles'
import RoundCornerTag from '../../components/common/round-corner-tag';
import { ThemeContext } from '../../../provider/theme-provider';
import UserService from '../../../core/service/userService';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import Separator from '../../components/separator/separator';
import userService from '../../../core/service/userService';
import { Icon, Input } from "@ui-kitten/components";


var screenWidth = Dimensions.get('window').width;

const ProfileScreen = () => {

    const { themes } = useContext(ThemeContext);
    const authReducer = useSelector(state => state.authReducer);
    //const authDispatch = useDispatch();
    const userInfo = authReducer.userInfo;

    const [modalOpen, setModalOpen] = useState(false);
    const [modalPasswordOpen, setModalPasswordOpen] = useState(false);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [phone, setPhone] = useState('');

    // Data modal
    const [nameModal, setNameModal] = useState('');
    const [avatarModal, setAvatarModal] = useState('');
    const [phoneModal, setPhoneModal] = useState('');

    // Data modal password
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isHidingPassword, setIsHidingPassword] = useState(true);
    const [isHidingCurrentPassword, setIsHidingCurrentPassword] = useState(true);

    const [info, setInfo] = useState(null);
 

    const showPasswordIcon = style => (
        <Icon {...style} name={isHidingPassword ? "eye-off" : "eye"} />
    );


    useEffect(() => {
        //console.log('auth', authReducer)
        userService.getUserInfo(authReducer.token)
            .then(response => {
                setInfo(response.data.payload)
                //console.log('getUserInfo', response.data.payload);
                setAvatar(response.data.payload.avatar);
                setPhone(response.data.payload.phone);
                if (response.data.payload.name === null) {
                    setName(response.data.payload.email);

                } else {
                    setName(response.data.payload.name);
                }


                setAvatarModal(avatar);
                setPhoneModal(phone);
                setNameModal(name);

            })
            .catch(error => {
                console.log('getUserInfo error');
            })
    }, [])

    const UpdateInfo = () => {
        if (avatarModal === '' || phoneModal === '' || nameModal === '') {
            Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin');
            return;
        }
        setAvatar(avatarModal);
        setPhone(phoneModal);
        setName(nameModal);
        setModalOpen(false);

        userService.updateUserInfo(nameModal, phoneModal, avatarModal, authReducer.token)
            .then(response => {
                //console.log('updateUserInfo', response.data.payload);

                Alert.alert('Thông báo', 'Cập nhật thông tin thành công');

            })
            .catch(error => {
                console.log('updateUserInfo error');
            })


    }

    const ChangePassword = () => {
        if (newPassword !== confirmPassword){
            Alert.alert('Mật khẩu xác nhận không chính xác')
            return;
        }
        setModalOpen(false);
        userService.changePassword(info.id, oldPassword, newPassword, authReducer.token)
        .then(response => {
            //console.log('ChangePassword', response.data.payload);

            Alert.alert('Thông báo', 'Đổi mật khẩu thành công');

        })
        .catch(error => {
            console.log('ChangePassword error');
        })
        setModalOpen(false);
    }

    return (
        <View style={{ ...globalStyles.container, backgroundColor: themes.background.mainColor }}>

            <Modal isVisible={modalOpen} animationType='slide'
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={styles.modalContent}>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 20,
                            marginBottom: 10
                        }}
                    >Chỉnh sửa thông tin</Text>
                    <Separator />

                    <TextInput placeholder='Họ tên' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15
                    }}
                        value={nameModal}
                        onChangeText={text => setNameModal(text)}
                    />


                    <TextInput placeholder='Số điện thoại' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15
                    }}
                        value={phoneModal}
                        onChangeText={text => setPhoneModal(text)}
                    />

                    <TextInput placeholder='Avatar' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15
                    }}
                        value={avatarModal}
                        onChangeText={text => setAvatarModal(text)}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}

                            onPress={UpdateInfo}
                        >
                            <Text>Chỉnh sửa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'grey',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}
                            onPress={() => setModalOpen(false)}
                        >
                            <Text>Đóng</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <Modal isVisible={modalPasswordOpen} animationType='slide'
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={styles.modalPasswordContent}>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 20,
                            marginBottom: 10
                        }}
                    >Đổi mật khẩu</Text>
                    <Separator />

                    <Input placeholder='Mật khẩu hiện tại' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15,
                    }}
                        secureTextEntry={isHidingCurrentPassword}
                        icon={showPasswordIcon}
                        onIconPress={() => setIsHidingCurrentPassword(!isHidingCurrentPassword)}
                        value={oldPassword}
                        onChangeText={text => setOldPassword(text)}
                    />


                    <Input placeholder='Mật khẩu mới' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15,
                        marginTop: 20
                    }}
                        secureTextEntry={isHidingPassword}
                        icon={showPasswordIcon}
                        onIconPress={() => setIsHidingPassword(!isHidingPassword)}

                        value={newPassword}
                        onChangeText={text => setNewPassword(text)}
                    />

                    <Input placeholder='Xác nhận mật khẩu mới' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15,
                        marginTop: 20
                    }}
                        secureTextEntry={isHidingPassword}
                        icon={showPasswordIcon}
                        onIconPress={() => setIsHidingPassword(!isHidingPassword)}

                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10,
                                marginTop: 30
                            }}

                            onPress={ChangePassword}
                        >
                            <Text>Đổi mật khẩu</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'grey',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10,
                                marginTop: 30
                            }}
                            onPress={() => setModalPasswordOpen(false)}
                        >
                            <Text>Đóng</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.imageProfile} source={{ uri: avatar !== '' ? avatar : userInfo.avatar }} />

                <View style={{ flexDirection: 'column' }}>
                    <Text style={[globalStyles.titleText, styles.nameProfile, {
                        color: themes.fontColor.mainColor
                    }]}>{name}</Text>
                    <Text style={[globalStyles.normalText, styles.nameProfile, {
                        color: themes.fontColor.mainColor,
                        fontSize: 16
                    }]}>{phone}</Text>
                </View>


            </View>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
                <Text style={{ ...globalStyles.normalText, color: 'blue', marginLeft: 10 }}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalPasswordOpen(true)}>
                <Text style={{ ...globalStyles.normalText, color: 'blue', marginLeft: 10 }}>Đổi mật khẩu</Text>
            </TouchableOpacity>

            <View style={{}}>
                <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Interests</Text>

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

            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Activity Insights (last 30 days)</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>Total active days</Text>
            <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>10 days</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>MOST ACTIVE TIME OF DAY</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>MOST VIEW SUBJECT</Text>
            <Text style={{ ...globalStyles.titleText, color: themes.fontColor.mainColor }}>SOFTWARE DEVELOPMENT</Text>

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
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        width: screenWidth - 80,
        height: '30%',
        //justifyContent: 'center',
        backgroundColor: '#fff'
    },
    modalPasswordContent: {
        width: screenWidth - 80,
        height: '40%',
        //justifyContent: 'center',
        backgroundColor: '#fff'
    }

})
