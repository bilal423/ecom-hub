
import { StyleSheet, Dimensions } from "react-native";

import colors from "@app/theme";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        width,
        backgroundColor: colors.textFlatColor,
        shadowColor: colors.textFlatColor,
        // justifyContent: 'space-between',
        shadowOffset: {
            width: 5,
            height: 1,
        },
        shadowOpacity:  0.3,
        shadowRadius: 3,
        elevation: 15,   
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"        
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "transparent",
        overflow: "hidden",
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: "100%",
        maxWidth: "90%"
    },
    userTitle: {
        fontSize: 22,
        fontFamily: "Rubik-Regular",
        letterSpacing: 2,
        color: colors.textPrimaryColor,
        width: "90%"
    },
    userNameWrapper: {
        width: "100%",
    }

})