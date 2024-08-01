import { StyleSheet, Dimensions } from "react-native";

import colors from "@app/theme";

const { width } = Dimensions.get('window');

const SLIDER_WIDTH = width - 30;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

export default StyleSheet.create({
    container: {
      backgroundColor: colors.textFlatColor,
      borderRadius: 18,
      width: ITEM_WIDTH,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 15,
      elevation: 7,
    },
    image: {
      width: ITEM_WIDTH,
      maxHeight: 200,
      height: 200,
      borderRadius: 15
    },
    pageItem: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dadada",
        backgroundColor: "#dadada",
        borderRadius: 100,
        marginLeft: 5
    },
    pagingWrapper: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    }
})