import { Dimensions } from "react-native";

export const constants = {
    screenWidth: Math.round(Dimensions.get('window').width),
    screenHeight: Math.round(Dimensions.get('window').height),

}