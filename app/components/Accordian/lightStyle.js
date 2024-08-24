import { StyleSheet, Dimensions } from "react-native";

import colors from "@app/theme";

export default StyleSheet.create({
    listTitle: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 18,
        color: "#222",
        fontWeight: "500",
    },
    accordianWrapper: {
        padding: 20,
        backgroundColor: colors.secondaryBgColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(155,155, 155, 0.25)",
        width: "100%",
        flex: 1
    },
    listItemWrapper: {
        width: "100%",
        position: "relative"
    },
    expandedContetWrapper: {
        padding: 20,
        paddingTop: 10
    }
})