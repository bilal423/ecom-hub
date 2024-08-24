import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { View, Text, Image, ScrollView } from "react-native";

import ProductLoadingCard from "@app/components/Products/Product-Card-Loading"; 

import ProductCard from '@app/components/Products/Product-Card';

import { getRecentProducts } from "@app/store/products/saga";

import { setRecentProducts as setRecentProductsReducer } from "@app/store/products/reducer";

import lightStyle from './lightStyle';


const RecentProducts = ({ navigation }) => {
    const styles = lightStyle;

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const { recentProducts: products } = useSelector((state) => state?.products);

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = async () => {
        if((products || []).length > 0) {
            setLoading(false);
            return;
        }

        await dispatch(
            getRecentProducts({
                onSuccess: (data) => {
                    dispatch(setRecentProductsReducer(data || []));
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
                        {
                            (products || []).map((product, index) => {
                                return (
                                    <ProductCard productType={"recent-products"} navigation={navigation} product = { product } key = {index}/>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            }
        </View>
    )
}


export default RecentProducts;
