
import { StyleSheet, Dimensions } from "react-native";

import colors from "@app/theme";

export default StyleSheet.create({
    formField: {
        minHeight: 60,
        paddingVertical: 22,
        paddingHorizontal: 20,
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.textFlatColor,
        borderRadius: 4,
        fontFamily: "Metropolis-Regular",
        fontSize: 16,
        fontWeight: 500,
        color: colors.textPrimaryColor
    },
    errorWrapper: {
        marginTop: 10
    },
    errorText: {
        color: colors.dangerTextColor,
        fontSize: 14,
        fontFamily: "Metropolis-Medium",
        fontWeight: 500,
    },
    iconWrap: {
        position: "absolute",
        right: 10,
        top: 18
    },
    label: {
        marginBottom: 10,
        fontFamily: "Metropolis-Medium",
        fontSize: 16,
        fontWeight: 600,
        color: colors.textPrimaryColor,
        justifyContent: "center"
    },
    labelRequired: {
        justifyContent: "center",
        color: colors.dangerTextColor
    },
    labelWrapper: {
        flexDirection: "row",
        gap: 5
    }
})