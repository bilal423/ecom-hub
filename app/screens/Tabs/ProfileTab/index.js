import React, { useEffect } from "react";

import { View, Text, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";



const ProfileTab = ({ navigation }) => {
    // const { user } = useSelector("user");

    return (
        <SafeAreaView>
            <View>
                <Text>Profile Tab</Text>
            </View>
        </SafeAreaView>
    )
}


export default ProfileTab;