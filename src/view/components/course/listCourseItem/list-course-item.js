import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles, colors } from '../../../../global/styles'
import { constants } from '../../../../global/constants'
import { ThemeContext } from '../../../../provider/theme-provider'
import StarRatingImage from '../../star-rating/star-rating-image'
import { AuthorDataContext } from '../../../../provider/author-data/author-data-provider'
import { Menu, Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { CourseDataContext } from '../../../../provider/course-data/course-data-provider'

const ListCourseItem = (props) => {
    const { themes } = useContext(ThemeContext)
    const { authorData } = useContext(AuthorDataContext)
    const { removeFavoriteCourse } = useContext(CourseDataContext)
    
    const [visible, setVisible] = useState(false)

    const onHanldeSettingPress = () => {
        _closeMenu();
        removeFavoriteCourse(props.id)
    }

    const _openMenu = () => setVisible(true);

    const _closeMenu = () => setVisible(false);

    return (
        <TouchableOpacity>
            <View style={{ ...styles.container, backgroundColor: themes.background.foreground }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.source }} />
                </View>

                <View style={{ ...styles.courseDetailContainer, backgroundColor: themes.background.foreground }}>
                    <Text style={[globalStyles.titleText, {
                        margin: 5, marginLeft: 5, flexWrap: 'wrap',
                        color: themes.fontColor.mainColor
                    }]}>{props.courseName}</Text>
                    <Text style={[globalStyles.normalText, {
                        marginTop: -5,
                        color: themes.fontColor.mainColor
                    }]}>{props.authorName}</Text>
                    <View style={styles.inLine}>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{props.level} -</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{props.date} -</Text>
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>{props.duration}</Text>
                    </View>

                    <View style={[styles.inLine, { marginLeft: 5 }]}>
                        <StarRatingImage starCount={props.starCount} />
                        <Text style={{ ...globalStyles.normalText, color: themes.fontColor.mainColor }}>({props.boughtCount ? props.boughtCount : 0})</Text>
                    </View>

                </View>

                <Menu
                    visible={visible}
                    onDismiss={_closeMenu}
                    anchor={
                        <TouchableOpacity onPress={_openMenu} style={{
                            alignContent: 'center',
                            marginTop: 20
                        }}>
                            <Entypo name="dots-three-vertical" size={24} color="black" />
                        </TouchableOpacity>
                    }
                >
                    {
                        props.isFavorited
                            ?
                            <Menu.Item onPress={onHanldeSettingPress} title="Favorited" />

                            :
                            <Menu.Item onPress={onHanldeSettingPress} title="Unfavorited" />

                    }

                    <Divider />
                    <Menu.Item onPress={() => { }} title="Download" />
                </Menu>



            </View>
        </TouchableOpacity>
    )
}

export default ListCourseItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        width: constants.screenWidth
    },
    imageContainer: {
        alignItems: 'center',
        alignContent: 'center',
        height: 120,
        marginLeft: 10,
        marginTop: 10,

    },
    image: {
        height: 80,
        width: 100,
        alignSelf: 'center'
    },
    inLine: {
        flexDirection: 'row'
    },
    courseDetailContainer: {
        flexDirection: 'column',
        height: 120,
        width: constants.screenWidth - 150,
        marginLeft: 10

    },
    separator: {
        borderBottomColor: '#d1d0d4',
        borderBottomWidth: 1
    }
})
