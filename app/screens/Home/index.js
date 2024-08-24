import React from 'react';

import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import imageIcons from '../../config/app-images';

import HomeTab from '@app/screens/Tabs/HomeTab';

import CategoryTab from '@app/screens/Tabs/CategoryTab';

import CartTab from '@app/screens/Tabs/CartTab';

import FavoriteTab from '@app/screens/Tabs/FavoriteTab';

import ProfileTab from '@app/screens/Tabs/ProfileTab';

import lightStyle from './lightStyle';
import { useSelector } from 'react-redux';



const Tab = createBottomTabNavigator();


const Home = () => {

    const styles = lightStyle;

    const { cart } = useSelector((state) => state.cart);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <View style={{flex: 1}}>
                <Tab.Navigator
                    initialRouteName="HomeTab"
                    onTabPress = {() => {
                        console.log('tab press')
                    }}
                    screenOptions={({ route }) => ({
                        tabBarShowLabel: true,
                        tabBarStyle:{...styles.tabBar},
                        tabBarItemStyle: {...styles.tabBarItemStyle},
                        tabBarLabelStyle: {...styles.tabBarLabelStyle},
                        tabBarIconStyle: {...styles.tabBarIconStyle},
                        tabBarActiveTintColor:"#db3022",
                        tabBarInactiveTintColor:"#9b9b9b"
                    })}
                    
                >
                    <Tab.Screen
                        name="HomeTab"
                        component={HomeTab}
                        options={{
                        tabBarLabel: 'Home',
                        headerShown: false,
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image source={ focused ? imageIcons.homeActiveIcon : imageIcons.homeInActiveIcon }  style={{ width: size, height: size }}></Image>
                            )
                        },
                        
                    }} />
                    <Tab.Screen
                        name="ShopTab"
                        component={CategoryTab}
                        options={{
                        tabBarLabel: 'Shop',
                        headerShown: true,
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image source={ focused ? imageIcons.shopActiveIcon : imageIcons.shopInActiveIcon }  style={{ width: size, height: size }}></Image>
                            )
                        },
                    }} />
                    <Tab.Screen
                        name="CartTab"
                        component={CartTab}
                        options={{
                        tabBarLabel: 'Cart',
                        headerShown: true,
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image source={ focused ? imageIcons.cartActiveIcon : imageIcons.cartInActiveIcon }  style={{ width: size, height: size }}></Image>
                            )
                        },
                        tabBarStyle: { display: "none"},
                        tabBarBadge: (cart || []).length,
                        tabBarBadgeStyle: {
                            backgroundColor: "#db3022"
                        }

                    }} />

                    <Tab.Screen
                        name="FavoritTab"
                        component={FavoriteTab}
                        options={{
                        tabBarLabel: 'Favorite',
                        headerShown: true,
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image source={ focused ? imageIcons.favoriteActiveIcon : imageIcons.favoriteInActiveIcon }  style={{ width: size, height: size }}></Image>
                            )
                        },
                    }} />

                    <Tab.Screen
                        name="ProfilTab"
                        component={ProfileTab}
                        options={{
                        tabBarLabel: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                                <Image source={ focused ? imageIcons.profileActiveIcon : imageIcons.profileInActiveIcon }  style={{ width: size, height: size }}></Image>
                            )
                        },
                    }} />
                </Tab.Navigator>    
            </View>
        </SafeAreaView>
    )
};

export default Home;