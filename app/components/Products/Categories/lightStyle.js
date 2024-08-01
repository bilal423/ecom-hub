import { StyleSheet } from "react-native";

import colors from "@app/theme";


export default StyleSheet.create({
    productLoader: {
        marginRight: 20
    },
    productContainer: {
        marginTop: 30
    },
    categoryCard: {
        width: 150,
        height: 150,
        backgroundColor: colors.textFlatColor,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: colors.textFlatColor,
        borderRadius: 10,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity:  0.7,
        shadowRadius: 3,
        elevation: 5,   
        marginRight: 15,
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryTitleText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        fontFamily: "Rubik-Regular",
        lineHeight: 22,
        textAlign: "center"
    },
    categoryImageWrapper: {
        width: 80,
        height: 80,
        backgroundColor: "#f5f5f5",
        borderRadius: 100,
        marginBottom: 8,
         justifyContent: "center",
        alignItems: "center"
    },
    categoryImage: {
        maxWidth: "100%",
        maxHeight: "100%",
        width: 50,
        height:50
    }
})