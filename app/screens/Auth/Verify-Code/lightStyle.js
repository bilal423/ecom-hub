import { moderateScale, verticalScale } from 'react-native-size-matters';

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
        height: 50
    },
    loginButtonText: {
        color: colors.textPrimaryColor,
        fontSize: 16,
        fontFamily: "Metropolis-Regular",   
        fontWeight: 500,
    },
    buttonGroup: {
        marginTop: verticalScale(50)
    },
    otpFieldWrapper: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: moderateScale(40),
        // marginBottom: moderateScale(40)
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
    }
});