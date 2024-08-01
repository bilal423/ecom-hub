import React from 'react';

import { View, Text, Image, Pressable } from 'react-native';

import lightStyle from './lightStyle';
import { Icon } from '@rneui/base';

const ProductCard = ({ product, additionalStyles, imageResizeMode }) => {
    const styles = lightStyle;

    const { thumbnail, title, price } = product || {};


    return (
        <View style={{... styles.productCard, ...additionalStyles }}>
            <View style={styles.productFavoriteIcon}>
                <Pressable>
                    <Icon name='heart-outline' type={'ionicon'} color={"#dadada"}/>
                </Pressable>
            </View>
            <View style={styles.productImageCard}>
                <Image style={styles.productImage} resizeMode={imageResizeMode || 'cover' } source={{ uri: thumbnail }}/>
                <View style={styles.addToCartWrapper}>
                    <Pressable>
                        <Icon name='bag-outline' type={'ionicon'} color={"#fff"}/>
                    </Pressable>
                </View>
            </View>
           
            <View style={styles.productInfo}>
                <Pressable>
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

