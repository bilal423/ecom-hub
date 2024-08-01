import React, { useEffect, useState } from "react";

import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

import { Skeleton, LinearGradient } from "@rneui/base";

import { useDispatch } from "react-redux";

import ProductCard from "@app/components/Products/Product-Card";

import { getProducts as getProductsApi } from "@app/store/products/saga";

import lightStyle from './lightStyle';



const CategoryTab = ({ navigation }) => {

    const styles = lightStyle;

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            title: "Shop",
        });

        getProducts();
    }, []);


    const getProducts = async () => {
        await (
            dispatch(
                getProductsApi({
                    onSuccess: (data) => {
                        setProducts(data);
                        setLoading(false);
                    },
                    onError: (error) => {
                        setLoading(false);
                    }
                })
            )
        )
    }

    return (
        <SafeAreaView style={styles.pageWrapper}>
            <ScrollView>
                <View style={styles.containerStyle}>
                    {
                        isLoading
                        ?
                            <View style={styles.prgressWrapper}>
                                {[...Array(10)].map((item, index) => {
                                    return (
                                       <View style={styles.productLoaderWrapper} key={index}> 
                                            <View style={styles.productLoader} >
                                                <Skeleton
                                                    LinearGradientComponent={LinearGradient}
                                                    animation="wave"
                                                    width={"100%"}
                                                    height={150}
                                                />
                                                <Skeleton
                                                    style={{
                                                        marginTop: 5
                                                    }}
                                                    LinearGradientComponent={LinearGradient}
                                                    animation="wave"
                                                    width={"100%"}
                                                    height={20}
                                                />
                                            </View>
                                       </View>
                                    )
                                })}
                            </View>
                        :
                        <View style={styles.productWrapper}>
                            {
                                (products || []).map((product, index) => {
                                    return (
                                        <View style={styles.product} key={index}>
                                            <ProductCard additionalStyles={{
                                                width: "100%",
                                                maxWidth: "100%",
                                                minHeight: 300
                                            }} imageResizeMode = {"contain"} product={product}/>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default CategoryTab;