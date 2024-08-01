import React, { useRef } from "react";

import { View, Text, SafeAreaView, ScrollView } from "react-native";

import CarouselComponent from "@app/components/Carousel";

import RecentProducts from "@app/components/Products/Recent-Products";

import Categories from "@app/components/Products/Categories";

import lightStyle from './lightStyle';




const HomeTab = ({ navigation }) => {
    
    const style = lightStyle;

    const images = ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];


    return (
        <SafeAreaView style={style.pageWrapper}>
            <ScrollView contentContainerStyle={{
                marginBottom: 50
            }}>
                <View style={style.containerStyle}>
                    <View style={style.imageCarouselWapper}>
                        <CarouselComponent images={images || []}/>
                    </View>

                    <View style={style.categoryWrapper}>
                        <View style={style.categoryTitle}>
                            <Text style={style.categoryTitleText}>New In Trends</Text>
                        </View>
                        <View>
                            <RecentProducts/>
                        </View>
                    </View>
                    <View style={style.categoryWrapper}>
                        <View style={style.categoryTitle}>
                            <Text style={style.categoryTitleText}>Categories</Text>
                        </View>
                        <View>
                            <Categories navigation={navigation}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default HomeTab;