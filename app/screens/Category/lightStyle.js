
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
        backgroundColor: colors.secondaryBgColor
    },
    prgressWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        rowGap: 10
    },
    productLoaderWrapper: {
        width: "48%",
    },
    productWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        rowGap: 10   
    },
    product: {
        width: "48%",
    },
});    