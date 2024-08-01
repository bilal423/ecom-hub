
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
        padding: 20,
        minHeight: height,
        marginBottom: verticalScale(50)
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

    productCard: {
        width: "100%",
        maxWidth: "100%",
        height: 300,
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.textFlatColor,
        borderRadius: 10,
        shadowColor: "#fff",
        // justifyContent: 'space-between',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity:  0.7,
        shadowRadius: 3,
        elevation: 5,   
        marginRight: 15,
        padding: 20
    },
    productInfo: {
        marginTop: 15
    },
    productImage: {
        width: "100%",
        height: 175
    },
    productTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.textPrimaryColor,
        fontFamily: "Rubik-Regular",
        lineHeight: 22
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.textSecondaryColor,
        fontFamily: "Rubik-Regular",
        lineHeight: 20,
        marginTop: 5
    },
    productFavoriteIcon: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1000
    }
});    