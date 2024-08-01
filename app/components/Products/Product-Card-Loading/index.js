import React from 'react';

import { View, ScrollView } from 'react-native';

import { Skeleton, LinearGradient } from '@rneui/base';

import lightStyle from './lightStyle';

const ProductLoadingCard = () => {
    const styles = lightStyle;

    return (
        <View style={styles.productLoaderWrapper}>
            <ScrollView horizontal={true}>
                {[...Array(4)].map((item, index) => {
                    return (
                        <View style={styles.productLoader} key={index}>
                            <Skeleton
                                LinearGradientComponent={LinearGradient}
                                animation="wave"
                                width={150}
                                height={150}
                            />
                            <Skeleton
                                style={{
                                    marginTop: 5
                                }}
                                LinearGradientComponent={LinearGradient}
                                animation="wave"
                                width={150}
                                height={20}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        </View>    
    )
}

export default ProductLoadingCard;