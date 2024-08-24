
import { StyleSheet, Dimensions } from "react-native";

import { verticalScale } from "react-native-size-matters";

import colors from "@app/theme";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: colors.secondaryBgColor,
        minHeight: height
    },
    container: {
        padding: 20,
        marginBottom: verticalScale(height * 0.3),
    },
    noData: {
        textAlign: "center",
        fontFamily: "Rubik-Regular",
        fontSize: 13,
        fontWeight: "400",
        color: colors.textPrimaryColor,
    },
    cartWrapper: {
        width: "100%",
        height: 180,
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderColor: colors.textFlatColor,
        borderStyle: "solid",
        marginBottom: 15,
        borderRadius: 8,
        justifyContent: "center",
        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 2,
        
    },
    cart: {
        flexDirection: "row",
        width: "100%",
        padding: 20,

    },
    productImageWrapper: {
        width: "35%",
    },
    productImage: {
        width: "100%",
        height: "100%",
    },
    cartInfo: {
        // alignItems: "center",
        justifyContent: "center",
        width: "65%",
        maxWidth: "70%",
        marginLeft: 10
    },
    cartHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartTitleText: {
        maxWidth: "100%",
        width: "100%",
        fontSize: 16,
        fontWeight: "500",
        color: colors.textPrimaryColor,
        fontFamily: "Rubik-Regular",
        lineHeight: 22
    },
    cartAction: {
        flexDirection: "row",
        justifyContent: "flex-end",
        textAlign: "right",
        flex: 1,
    },
    productPrice: {
        flexDirection: "row",
        marginTop: 8,
        justifyContent: "flex-start"
    },
    productPriceText: {
        width: "100%",
        fontSize: 16,
        fontWeight: "500",
        color: colors.textSecondaryColor,
        fontFamily: "Rubik-Bold",
        lineHeight: 22
    },
    productCounter: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 15,
        gap: 10,
        alignItems: "center"
    },
    counter: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        backgroundColor: colors.textFlatColor,
        borderStyle: 1,
        borderRadius: 100,
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    addToCartWrapper: {
        position: "absolute",
        width: "100%",
        height: 225,
        bottom: 120,
        zIndex: 1000,
        backgroundColor: colors.textFlatColor,
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: {
            width: 5,
            height: 1,
        },
        shadowOpacity:  0.4,
        shadowRadius: 3.05,
        elevation: 20,
        justifyContent: "center",
        // alignItems: "center"
    },
    cartButtonStyle: {
        width: "100%",
        backgroundColor: colors.primaryColor,
        height: 60,
        borderRadius: 30
    },
    cartButtonText: {
        color: colors.textFlatColor,
        fontSize: 18,
        fontFamily: "Metropolis-Regular",   
        fontWeight: 500,
        textTransform: "uppercase"
    },
    counterText: {
        fontSize: 16,
        color: colors.textSecondaryColor,
        fontFamily: "Metropolis-Regular",   
        fontWeight: "500",
        justifyContent: "center"
    },
    subTotalWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40
    },
    subTotalText: {
        fontSize: 18,
        textTransform: "uppercase",
        color: colors.textSecondaryColor,
        fontFamily: "Metropolis-Bold",   
        fontWeight: "500",
        justifyContent: "center"
    },
    subTotal: {
        fontSize: 18,
        textTransform: "uppercase",
        color: colors.textPrimaryColor,
        fontFamily: "Metropolis-Bold",   
        fontWeight: "500",
        justifyContent: "center"
    }

});    