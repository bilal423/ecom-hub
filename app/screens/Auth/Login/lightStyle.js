import { verticalScale } from 'react-native-size-matters';

import { StyleSheet, Dimensions } from "react-native";

import colors from "@app/theme";


const { width, height } = Dimensions.get("window");


export default StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: colors.secondaryBgColor,
        paddingVertical: verticalScale(75),
        paddingHorizontal: 16,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    loginTitle: {
        fontSize: 34,
        color: colors.textPrimaryColor,
        fontFamily: "Metropolis-Black",
        fontWeight: "bold"
    },
    loginFormWrapper: {
        marginVertical: 100
    },
    formGroup: {
        marginBottom: 20
    },
    helpLink: {
        fontFamily: "Metropolis-Regular",   
        fontSize: 14,
        fontWeight: 700,
        color: colors.textPrimaryColor

    },
    loginButton: {
        width: "100%",
        backgroundColor: colors.primaryColor,
        height: 50,
     
    },
    loginButtonText: {
        color: colors.textFlatColor,
        fontSize: 16,
        fontFamily: "Metropolis-Regular",   
        fontWeight: 500,
        textTransform: "uppercase"
    },
    buttonGroup: {
        marginTop: 40
    },
    helpBlockGroup: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        alignContent: "center",
    },
    helpBlockText: {
        color: colors.textPrimaryColor,
        fontSize: 16,
        fontFamily: "Metropolis-Regular",   
        fontWeight: 500,
        verticalAlign: "middle",
        textAlign: "center",
        textAlignVertical: "center"

    },
    helpLinkText: {
        color: colors.primaryColor,
        fontSize: 16,
        fontFamily: "Metropolis-Regular",   
        fontWeight: 500,
        textAlign: "center",
        textTransform: "capitalize",
        textAlignVertical: "center"
    },
    dividerWrapper: {
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    dividerWrapperText: {
        color: colors.textPrimaryColor,
        fontFamily: "Metropolis-Bold",
        fontSize: 16,
        fontWeight: 700,
        textTransform: "uppercase"
    },
    socialButtonGroup: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.textFlatColor,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        paddingVertical: 10,
        marginTop: 20
    },
    socialButtonImage: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    socialButtonText: {
        color: colors.textPrimaryColor,
        fontFamily: "Metropolis-Medium",
        fontSize: 16,
        fontWeight: 500,
        textTransform: "capitalize"
    }
});