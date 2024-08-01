import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { View, Text, Image, ScrollView } from "react-native";

import ProductLoadingCard from "@app/components/Products/Product-Card-Loading"; 

import ProductCard from '@app/components/Products/Product-Card';

import { getRecentProducts } from "@app/store/products/saga";

import lightStyle from './lightStyle';


const RecentProducts = () => {
    const styles = lightStyle;

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        getProducts();
    }, []);


    const getProducts = async () => {
        await dispatch(
            getRecentProducts({
                onSuccess: (data) => {
                    setProducts(data || []);
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
                                    <ProductCard product = { product } key = {index}/>
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
