import React from 'react';

import { View, Text, Image, Pressable } from 'react-native';

import { Icon } from '@rneui/base';

import userIcon from '@app/assets/images/user-icon.png';

import lightStyle from './lightStyle';

const HomeHeaderComponent = ( { user } ) => {
    const { firstName, lastName, image } = user || {};

    const styles = lightStyle;

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                {
                    image
                    ?
                    <Image style={styles.userImage} source={{ uri: image }} resizeMode="cover"/> 
                    :
                    <Icon size={40} name={ 'person-circle-outline' } type={'ionicon'} color={"#acacac"}/>
                }
                <Pressable style={styles.userNameWrapper}>
                    <Text ellipsizeMode={"tail"} numberOfLines={1} style={styles.userTitle}>Hello, { firstName ? `${firstName || ""}` : "Guest"}</Text>
                </Pressable>
            </View>
            <View style={styles.userActionWrapper}>
                <Pressable>
                    <Icon size={25}  name={ 'notifications-outline' } type={'ionicon'} color={"#acacac"}/>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeHeaderComponent;