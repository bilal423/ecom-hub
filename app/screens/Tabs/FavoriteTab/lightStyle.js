
import { StyleSheet, Dimensions } from "react-native";

import { verticalScale } from "react-native-size-matters";

import colors from "@app/theme";

const { height } = Dimensions.get("screen");

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: colors.secondaryBgColor,
    },
    container: {
        padding: 20
    },
    noData: {
        textAlign: "center",
        fontFamily: "Rubik-Regular",
        fontSize: 13,
        fontWeight: "400",
        color: colors.textPrimaryColor,
    }
});    