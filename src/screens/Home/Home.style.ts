import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import fonts from "../../../assets/fonts/fonts";

export const s = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:'#0A091E'
    },
    ellipse1: {
        width: moderateScale(196),
        height: moderateScale(196),
     
    },
    ellipse2: {
        position: "absolute",
        top:verticalScale(176),
        left:scale(326),
        width: moderateScale(196),
        height: moderateScale(196),
    },
    titleContainer: {
        marginTop: verticalScale(100),
        alignSelf: "center",
        flexDirection: "row",
    },
    boldTitle: {
        fontFamily:fonts.Poppins600SemiBold,
        fontSize: moderateScale(32),
        color: "white",
    },
    title: {
        fontFamily:fonts.Poppins300Light,
        fontSize: moderateScale(32),
        color: "white",
    },
    imageContainer: {
        marginTop: verticalScale(31),
        gap: moderateScale(16),
        alignSelf: "center",
        flexDirection: "row",
    },
    verticalImg: {
        width: moderateScale(173),
        height: moderateScale(192),
        borderRadius: moderateScale(5),
    },
    horizontalImg: {
        marginTop: verticalScale(28),
        alignSelf: "center",
        width: moderateScale(364),
        height: moderateScale(206),
        borderRadius: moderateScale(5),
    },
    subTitle: {
        marginTop: verticalScale(31),
        alignSelf: "center",
        width: moderateScale(315),
        fontFamily:fonts.Poppins300Light,
        fontSize: moderateScale(16),
        color: "white",
        textAlign: "center",
    },

})