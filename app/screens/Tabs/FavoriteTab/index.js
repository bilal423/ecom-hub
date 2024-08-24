import React, { useEffect, useState } from "react";

import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";

import { Icon } from "@rneui/base";

import { useSelector } from "react-redux";

import lightStyle from './lightStyle';

const FavoriteTab = ({ navigation }) => {
    const styles = lightStyle;

    const favorites = useSelector((state) => state?.favorites);

    useEffect(() => {
        navigation.setOptions({
            title: "Favorites"
        })
    }, []);
    
    return (
        <SafeAreaView style={styles.pageWrap}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        (favorites || []).length === 0
                        ?
                        <Text style={styles.noData}>You don't have any items in your favorites. Start adding.</Text>
                        :
                        <></>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default FavoriteTab;