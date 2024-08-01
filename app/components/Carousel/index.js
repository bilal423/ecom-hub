import React, { useState } from "react";

import { View, Dimensions, Image, Pressable } from "react-native";

import Carousel from 'react-native-reanimated-carousel';

import lightStyle from './lightStyle';

// import darkStye from './darkStyle';

const { width } = Dimensions.get('window');

const SLIDER_WIDTH = width - 30;

const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);


const CarouselComponent = ({ images }) => {

    const style = lightStyle;

    const [activeIndex, setActiveIndex] = useState(0)

    const carouselCardItem = ( {item, index}) => {
        return (
          <View style={style.container} key={index}>
            <Pressable
            >
                <Image
                    source={{ uri: item }}
                    style={style.image}
                    resizeMode={"cover"}
                />
            </Pressable>
          </View>
        )
    }

    return (
        <View>
            <Carousel
                // loop
                width={ITEM_WIDTH}
                height={width / 2}
                style={style.container}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                }}
                autoPlay={true}
                data={images || []}
                scrollAnimationDuration={1500}
                renderItem={carouselCardItem}
                showLength={true}
            />
            <View style={style.pagingWrapper}>
                { (images || []).map((item, index) => {
                    const backgroundColor = index === activeIndex ? "#db3022" : "#9b9b9b"
                    return (
                        <View key={index} style={{ ...style.pageItem, backgroundColor, borderColor: backgroundColor }}></View>
                    )
                })}
            </View>
        </View>
    )
}

export default CarouselComponent;