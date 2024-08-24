import { StyleSheet, Dimensions } from "react-native";

import { verticalScale } from "react-native-size-matters";

import colors from "@app/theme";

const { height, width } = Dimensions.get("screen");

export default StyleSheet.create({
    pageWrapper: {
        width,
        minHeight: height,
        backgroundColor: colors.secondaryBgColor,
        marginBottom: height * 0.1   
    },
    pageHeaderContainer: {
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    pageHeading: {
        fontSize: 45,
        fontFamily: "Metropolis-Black",   
        fontWeight: "bold",
        color: colors.textPrimaryColor
    }
});