
import { StyleSheet, Dimensions } from "react-native";

import { verticalScale } from "react-native-size-matters";

import colors from "@app/theme";

const { height } = Dimensions.get("screen");

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: colors.secondaryBgColor,
    },
    containerStyle: {
        padding: 20,
        backgroundColor: colors.secondaryBgColor,
        minHeight: height,
        marginBottom: verticalScale(25)
    },
    imageCarouselWapper: {
        marginBottom: 40
    },
    categoryWrapper: {
        marginBottom: 40
    } ,
    categoryTitleText: {
        fontSize: 24,
        color: colors.textPrimaryColor,
        fontWeight: 700,
        fontFamily: "Metropolis-Black",
    } 
})