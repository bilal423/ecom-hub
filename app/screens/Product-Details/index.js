import React, { useEffect, useState } from 'react';

import { View, Text, SafeAreaView, ScrollView, Pressable, Image, Dimensions } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { Icon, Button, Skeleton, LinearProgress, LinearGradient } from '@rneui/base';

import { Rating } from 'react-native-ratings';

import { useDispatch } from "react-redux";

import AccordianComponent from "@app/components/Accordian";

import { getProductById } from "@app/store/products/saga";

import lightStyle from './lightStyle';



const { width } = Dimensions.get('window');

const SLIDER_WIDTH = width - 30;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);


const ProductDetails = ({ navigation, route }) => {
    
    const styles = lightStyle;

    const dispatch = useDispatch();

    const [data, setData] = useState({});

    const [isLoading, setLoading] = useState(true);

    const { params } = route || {};

    const { id } = params || {};

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = () => {
        dispatch(
            getProductById({
                data: {
                    id
                },
                onSuccess: (product) => {
                    setLoading(false);
                    setData(product || {});
                },
                onError: (error) => {
                    setLoading(false);
                }

            })
        )
    }

    const carouselCardItem = ( {item, index}) => {
        return (
          <View style={styles.container} key={index}>
            <Pressable
            >
                <Image
                    source={{ uri: item }}
                    style={styles.image}
                    resizeMode={"contain"}
                />
            </Pressable>
          </View>
        )
    }

    const { id: productId, brand, description, title, images, price, sku, reviews,  rating, shippingInformation, warrantyInformation } = data || {};

    return (
        <SafeAreaView style={styles.pageWrapper}>
            {
                isLoading && <LinearProgress/>
            }
            {
                isLoading
                ?
                <View style={styles.progressWrapper}>

                    <Skeleton
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={"100%"}
                        height={250}
                    />
                    <Skeleton
                        style={{
                            marginTop: 10
                        }}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={"100%"}
                        height={30}
                    />
                    <Skeleton
                        style={{
                            marginTop: 10
                        }}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={"100%"}
                        height={25}
                    />
                    <Skeleton
                        style={{
                            marginTop: 10
                        }}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={"100%"}
                        height={30}
                    />
                    <Skeleton
                        style={{
                            marginTop: 10
                        }}
                        LinearGradientComponent={LinearGradient}
                        animation="wave"
                        width={"100%"}
                        height={25}
                    />
                </View>
                :
                <ScrollView>
                    <View style={styles.containerStyle}>
                        <View style={styles.productDetailsWrapper}>
                            <View style={styles.imageCarouselWapper}>
                                <Carousel
                                    width={ITEM_WIDTH}
                                    height={250}
                                    style={styles.container}
                                    data={images || []}
                                    scrollAnimationDuration={1500}
                                    renderItem={carouselCardItem}
                                    showLength={true}
                                />
                            </View>
                            <View style={styles.productInfoWrapper}>
                                <View style={styles.productInfo}>
                                    <View style={styles.productTitleWrapper}>
                                        <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.productTitle}>{ title || ""}</Text>
                                        {/* <Text style={styles.category}>
                                            {brand || ""}
                                        </Text> */}
                                    </View>
                                    <View style={styles.favoriteIconWrap}>
                                        <Pressable>
                                            <Icon name='heart-outline' type={'ionicon'} color={"#dadada"}/>
                                        </Pressable>
                                    </View>
                                </View>

                                <View style={styles.ratingContainer}>
                                    <Rating showRating={false} type='star' readonly={true} imageSize={15} fractions={2} minValue={rating} startingValue={rating} ratingCount={5}/>
                                    <Text style={styles.ratingText}>{`(${rating || 0})`}</Text>
                                </View>

                                <View style={styles.productPrice}>
                                    <Text style={styles.productPriceText}>
                                        {`$${price || 0}`}
                                    </Text>
                                </View>

                                <View style={styles.descriptionWrapper}>
                                    <Text style={styles.descriptionText}>{ description || ""}</Text>
                                </View>
                            </View>
                            <View style={styles.productAdditionalTabs}>
                                <AccordianComponent content={
                                    <>
                                        <Text style={styles.accordianBody}>{ shippingInformation || ""}</Text>
                                    </>
                                } title={"Shipping Information"}/>
                                <AccordianComponent content={
                                    <>
                                        <Text style={styles.accordianBody}>{ warrantyInformation || ""}</Text>
                                    </>
                                } title={"Warranty Information"}/>
                                <AccordianComponent content = {
                                    <>
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemTitle}>SKU</Text>
                                            <Text style={styles.listItemText}>{ sku || ""}</Text>
                                        </View>
                                        <View style={styles.listItem}>
                                            <Text style={styles.listItemTitle}>Brand</Text>
                                            <Text style={styles.listItemText}>{ brand || ""}</Text>
                                        </View>
                                    </>
                                } title={"Additional Details"}/>
                                <AccordianComponent content={
                                    <>
                                        { (reviews || []).map((review, index) => {
                                            const { reviewerName, reviewerEmail, rating, comment } = review || {};
                                            return (
                                                <View style={styles.reviewWrapper} key={index}>
                                                    <View style={styles.reviewContainer}>
                                                        <View style={styles.reviewTitleWrapper}>
                                                            <Text style={styles.reviewTitle}>
                                                                { reviewerName || ""}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.reviewRating}>
                                                            <Rating showRating={false} type='star' readonly={true} imageSize={20} fractions={2} minValue={rating} startingValue={rating} ratingCount={5}/>
                                                        </View>
                                                        <View style={styles.reviewComment}>
                                                            <Text style={styles.reviewCommentText}>{ comment || ""}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })}
                                    </>
                                } title={"Reviews"}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            }    

            { !isLoading && <View style={styles.addToCartWrapper}>
                <Button buttonStyle={styles.cartButtonStyle} titleStyle={styles.cartButtonText}>Add to Cart</Button>
            </View> }
        </SafeAreaView>
    )
}

export default ProductDetails;