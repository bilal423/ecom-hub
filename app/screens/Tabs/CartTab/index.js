import React, { useEffect, useState } from "react";

import { View, Text, SafeAreaView, Pressable, ScrollView, Image } from "react-native";

import { Icon, Button } from "@rneui/base";

import { useDispatch, useSelector } from "react-redux";

import { clearCart, updateCartItems } from "@app/store/cart/reducer";

import lightStyle from './lightStyle';

import Toast from "react-native-toast-message";



const CartTab = ({ navigation }) => {

    const dispatch = useDispatch();

    const styles = lightStyle;

    const { cart } = useSelector((state) => state?.cart);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Pressable onPress={() => {
                        navigation.navigate("home", {screen: "HomeTab"})
                    }} style={{
                        marginLeft: 10
                    }}>
                        <Icon name={"chevron-back-outline"} type={'ionicon'} color={ "#acacac"}/>
                    </Pressable>
                )
            },
            title: "Cart",
            headerRight: () => {
                return (
                    <Pressable onPress={() => {
                        dispatch(clearCart());
                        Toast.show({
                            type: "success",
                            text1: "Success, items have been removed from your cart."
                        });
                    }} style={{
                        marginRight: 15
                    }}>
                        <Icon name={"trash-outline"} type={'ionicon'} color={ "#222"}/>
                    </Pressable>
                )
            }
        })
    }, []);


    const subTotal = () => {
        let total = 0;

        (cart || []).forEach((item) => {
            const { price, quantity } = item || {};
            
            total = total + (price * quantity);
        })

        return total.toFixed(2);
    }
    
    return (
        <SafeAreaView style={styles.pageWrapper}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        (cart || []).length === 0
                        ?
                        <Text style={styles.noData}>You don't have any items in your cart. Start adding.</Text>
                        :
                        <View style={styles.cartItem}>
                            {
                                (cart || []).map((item, index) => {
                                    const { title, price, quantity, thumbnail } = item || {};

                                    return (
                                        <View key={`cart-${index}`} style={styles.cartWrapper}>
                                            <View style={styles.cart}>
                                                <View style={styles.productImageWrapper}>
                                                    <Image style={styles.productImage} source={{ uri: thumbnail}} resizeMethod="cover"/>
                                                </View>
                                                <View style={styles.cartInfo}>
                                                    <View style={styles.cartHeader}>
                                                        <Text ellipsizeMode="tail" numberOfLines={2} style={styles.cartTitleText}>{ title || ""}</Text>
                                                    </View>
                                                    <View style={styles.productPrice}>
                                                        <Text style={styles.productPriceText}>{ `$${price || 0}` }</Text>
                                                    </View>
                                                    <View style={styles.productCounter}>
                                                        <Pressable onPress={() => {
                                                            dispatch(
                                                                updateCartItems({
                                                                    product: item,
                                                                    actionType: "decrement"
                                                                })
                                                            )
                                                        }} style={styles.counter}>
                                                            <Icon name="remove-outline" type={'ionicon'} color={ "#9b9b9b"}/>
                                                        </Pressable>
                                                        <Text style={styles.counterText}>{ quantity || 0 }</Text>
                                                        <Pressable onPress={() => {
                                                             dispatch(
                                                                updateCartItems({
                                                                    product: item,
                                                                    actionType: "increment"
                                                                })
                                                            )
                                                        }} style={styles.counter}>
                                                            <Icon name="add-outline" type={'ionicon'} color={ "#9b9b9b"}/>
                                                        </Pressable>
                                                    </View>
                                                </View>
                                                
                                            </View>
                                        </View>
                                    )
                                })  
                            }
                        </View>
                    }
                </View>
            </ScrollView>
            <View style={styles.addToCartWrapper}>
                <View style={styles.subTotalWrap}>
                    <Text style={styles.subTotalText}>Subtotal</Text>
                    <Text style={styles.subTotal}>{ `$${subTotal()}` }</Text>
                </View>
                <Button buttonStyle={styles.cartButtonStyle} titleStyle={styles.cartButtonText}>Checkout</Button>
            </View>
        </SafeAreaView>
    )
}


export default CartTab;