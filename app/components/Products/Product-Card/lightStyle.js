import { StyleSheet } from "react-native";

import colors from "@app/theme";

export default StyleSheet.create({
    productCard: {
        width: 225,
        maxWidth: 225,
        minHeight: 200,
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
        marginTop: 18
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
        left: 20,
        zIndex: 1000
    },
    addToCartWrapper: {
        position: "absolute",
        right: -15,
        width: 50,
        height: 50,
        backgroundColor: colors.primaryColor,
        borderRadius: 100,
        zIndex: 100,
        top: null,
        bottom: -10,
        justifyContent: "center",
        alignItems: "center"
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10
    },
    ratingText: {
        fontSize: 13,
        color: colors.textSecondaryColor,
        fontFamily: "Rubik-Regular",
        marginLeft: 5
    }

})