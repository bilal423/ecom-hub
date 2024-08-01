
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tabBar: {
        minHeight: 75,
        position: "absolute",
        bottom: 0,
        borderStyle: "solid",
        borderColor: "#fff",
        borderWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12
    },
    tabBarItemStyle:{
        paddingBottom: 20,
        paddingTop: 20,
    },
    tabBarIconStyle: {
        paddingBottom: 20
    },
    tabBarLabelStyle: {
        fontFamily: "Metropolis-Regular",
        fontSize: 12,
        fontWeight: 600
    }
})