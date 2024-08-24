import { Dimensions, StyleSheet } from "react-native";

import { verticalScale } from "react-native-size-matters";

import colors from "@app/theme";

const { height, width } = Dimensions.get("screen");

const SLIDER_WIDTH = width - 20;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

export default StyleSheet.create({
    pageWrapper: {
        backgroundColor: colors.secondaryBgColor,
        minHeight: height
    },
    containerStyle: {
        paddingVertical: 20,
        backgroundColor: colors.secondaryBgColor,
        marginBottom: verticalScale(height * 0.3),
        minHeight: height
    },
    container: {
        backgroundColor: colors.textFlatColor,
        borderRadius: 12,
        width: ITEM_WIDTH,
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 12,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        maxHeight: 250,
        height: 250,
        borderRadius: 12
    },

    imageCarouselWapper: {
        paddingLeft: 10
    },
    productInfoWrapper: {
        marginTop: 5,
        padding: 20
    },
    productTitle: {
        color: colors.textPrimaryColor,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "Metropolis-Regular",
        lineHeight: 30,

    },
    productTitleWrapper: {
        width: "85%",
        maxWidth: "85%"
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 15
    },
    ratingText: {
        fontSize: 13,
        color: colors.textSecondaryColor,
        fontFamily: "Rubik-Regular",
        marginLeft: 5
    },

    productPriceText: {
        color: colors.textPrimaryColor,
        fontSize: 28,
        fontWeight: "600",
        textAlign: "left",
        fontFamily: "Metropolis-Regular",
        lineHeight: 30
    },
    favoriteIconWrap: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 100,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    productInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        alignItems: "center"
    },
    descriptionWrapper: {
        marginTop: 18
    },
    descriptionText: {
        color: colors.textSecondaryColor,
        fontSize: 18,
        fontWeight: "300",
        textAlign: "left",
        fontFamily: "Rubik-Regular",
        lineHeight: 26
    },
    category: {
        color: colors.textSecondaryColor,
        fontSize: 14,
        fontWeight: "400",
        textAlign: "left",
        fontFamily: "Metropolis-Regular",
        marginTop: 5
    },
    addToCartWrapper: {
        position: "absolute",
        width: "100%",
        height: 180,
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

    productAdditionalTabs: {
       marginTop: 15
    },
    accordianBody: {
        color: colors.textSecondaryColor,
        fontSize: 16,
        fontFamily: "Rubik-Regular",  
    },
    listItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    listItemTitle: {
        color: colors.textPrimaryColor,
        fontSize: 16,
        opacity: 0.7,
        fontWeight: "500",
        fontFamily: "Rubik-Regular", 
    },

    listItemText: {
        color: colors.textSecondaryColor,
        fontSize: 16,
        fontFamily: "Rubik-Regular", 
    },
    reviewContainer: {
        width: "100%",
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderColor: colors.textFlatColor,
        borderRadius: 8,
        marginBottom: 10,
        padding: 20
    },
    reviewTitle: {
        color: colors.textPrimaryColor,
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Metropolis-Bold", 
    },
    reviewRating: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 10
    },
    reviewComment: {
        marginTop: 20
    },
    reviewCommentText: {
        color: colors.textSecondaryColor,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
        fontFamily: "Metropolis-Regular", 
    }


});
