import React, { useState } from 'react';

import { View, Text, Image, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Rating } from 'react-native-ratings';

import Toast from 'react-native-toast-message';

import * as _ from 'lodash';

import { Icon } from '@rneui/base';

import { addCartItem } from '@app/store/cart/reducer';

import { addFavorites, removeFavorite } from '@app/store/products/reducer';


import lightStyle from './lightStyle';

const ProductCard = ({ product, additionalStyles, imageResizeMode, navigation, productType }) => {    
    const styles = lightStyle;

    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.cart);

    const { favorites } = useSelector((state) => state.products);

    const { thumbnail, title, price, rating, id, isFavorite } = product || {};

    const isAdded =  _.find(cart, {id});



    return (
        <View style={{... styles.productCard, ...additionalStyles }}>
            <View style={styles.productFavoriteIcon}>
                <Pressable onPress={() => {
                    if(isFavorite || (favorites || []).indexOf(id) !== -1) {
                        dispatch(removeFavorite({
                            product,
                            productType
                        }));
                        return;
                    }
                    dispatch(addFavorites({
                        product, 
                        productType
                    }));
                }}>
                    <Icon name={ (isFavorite || (favorites || []).indexOf(id) !== -1) ? 'heart' : 'heart-outline' }  type={'ionicon'} color={"#dadada"}/>
                </Pressable>
            </View>
            <View style={styles.productImageCard}>
                <Image style={styles.productImage} resizeMode={imageResizeMode || 'cover' } source={{ uri: thumbnail }}/>
                <View style={styles.addToCartWrapper}>
                    <Pressable onPress={() => {
                        dispatch(addCartItem(product));
                        Toast.show({
                            type: "success",
                            text1: "Success, Item have been added into your cart.",
                            position: "top"
                        })
                        // navigation.navigate("home", { screen: "CartTab"});
                    }}>
                        <Icon name={ isAdded ? 'checkmark-outline' : 'bag-outline' } type={'ionicon'} color={"#fff"}/>
                    </Pressable>
                </View>
            </View>
           
            <View style={styles.productInfo}>
                <View style={styles.ratingContainer}>
                    <Rating showRating={false} type='star' readonly={true} imageSize={15} fractions={2} minValue={rating} startingValue={rating} ratingCount={5}/>
                    <Text style={styles.ratingText}>{`(${rating || 0})`}</Text>
                </View>
                <Pressable onPress={() => {
                    navigation.navigate("product-details", { id })
                }}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.productTitle}>
                        { title || ""}
                    </Text>
                </Pressable>
                <Text style={styles.productPrice}>
                    ${ price ||  0}
                </Text>
             
            </View>
        </View>
    )
}


export default ProductCard;

