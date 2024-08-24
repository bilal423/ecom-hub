import React, { useEffect } from "react";

import { View, Text, SafeAreaView, ScrollView } from "react-native";

import { useSelector } from "react-redux";

import lightStyle from './lightStyle';



const ProfileTab = ({ navigation }) => {
    const styles = lightStyle;

    const { user } = useSelector((state) => state.user);


    useEffect(() => {
        // redirectUser();
    }, [navigation]);


    const redirectUser = () => {
        if(!user) {
            navigation.navigate("login");
            return;
        }
    }




    return (
        <SafeAreaView style={styles.pageWrapper}>
            <ScrollView>
                <View style={styles.pageHeaderContainer}>
                    <Text style={styles.pageHeading}>
                        My Profile
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default ProfileTab;