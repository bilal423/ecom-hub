import React, { useState, useEffect } from 'react';

import { View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { Skeleton, LinearGradient, Icon } from '@rneui/base';

import { useDispatch } from "react-redux";

import ProductCard from "@app/components/Products/Product-Card";

import { getProductsByCategory as getProductsByCategoryApi } from "@app/store/products/saga";

import lightStyle from './lightStyle';


const Category = ({ navigation, route}) => {
    const styles = lightStyle;

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(true);

    const [products, setProducts] = useState([]);

    const { params } = route || {};

    const { catName, category } = params || {};

    useEffect(() => {
        navigation.setOptions({
            title: catName || "Shop By Category",
            headerRight: () => {
                return (
                    <TouchableOpacity style={{
                        marginRight: 5
                    }} onPress={() => {
                        // setToggleModal(!toggleModal);
                    }} >
                        <Icon name={"search-outline"} type={'ionicon'} color={ "#222"}/>
                    </TouchableOpacity>
                )
            }
        });

        getProductsByCategory();
    }, []);

    const getProductsByCategory = async () => {
        await (
            dispatch(
                getProductsByCategoryApi({
                    data: {
                        category
                    },
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
        <SafeAreaView>
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
                                (products || []).length === 0 
                                ?
                                <Text>{`No products found in ${catName || ""}`}</Text>
                                :
                                <>
                                    {
                                        (products || []).map((product, index) => {
                                            return (
                                                <View style={styles.product} key={index}>
                                                    <ProductCard navigation={navigation} additionalStyles={{
                                                        width: "100%",
                                                        maxWidth: "100%",
                                                        minHeight: 300
                                                    }} imageResizeMode = {"contain"} product={product}/>
                                                </View>
                                            )
                                        })
                                    }
                                </>
                            }
                            
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Category;