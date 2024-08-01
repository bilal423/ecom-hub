import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { View, Text, Image, ScrollView, Pressable } from "react-native";

import ProductLoadingCard from "@app/components/Products/Product-Card-Loading"; 

import { getCategories as getCategoriesApi } from "@app/store/products/saga";

import lightStyle from './lightStyle';

import images from "./category-images";


const Categories = ({ navigation }) => {
    const styles = lightStyle;

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const [categories, setCategories] = useState([]);

    

    useEffect(() => {
        getCategories();
    }, []);


    const getCategories = async () => {
        await dispatch(
            getCategoriesApi({
                onSuccess: (data) => {
                    setCategories(data || []);
                    setLoading(false);
                },
                onError: (error) => {
                    console.log('message', {
                        error
                    });
                    setLoading(false);
                }
            })
        );    
    }


    return (
        <View style={styles.productContainer}>
            {
                isLoading 
                ?
                    <ProductLoadingCard/>  
                :
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                        { (categories || []).map((category, index) => {
                            const { name, slug } = category || {};

                            const categorySlug = slug.replace("-", "_");
                            return (
                                <View style={styles.categoryCard} key={index}>
                                    <View style={styles.categoryImageWrapper}>
                                        <Image style={styles.categoryImage} resizeMode="cover" source={images[categorySlug]}/>
                                    </View>
                                    <View style={styles.categoryTitle}>
                                        <Pressable onPress={() => {
                                            navigation.navigate("home", { screen: "ShopTab", params: { category: slug }})
                                        }}>
                                            <Text style={styles.categoryTitleText}>{ name || ""}</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>    
            }
        </View>
    )
}


export default Categories;
