import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@app/screens/Home';

import Category from '@app/screens/Category';

import LoginPage from '@app/screens/Auth/Login';

import SignupPage from '@app/screens/Auth/SignUp';

import ForgotPasswordPage from '@app/screens/Auth/Forgot-Password';

import VerifyCodePage from '@app/screens/Auth/Verify-Code';

import ProductDetails from '@app/screens/Product-Details';

const Stack = createNativeStackNavigator();

const SCREEN_OPTIONS = {
    headerShown: false,
    headerBackTitle: "Back",
    headerTitleAlign: 'center',
    headerBackTitleVisible: false,
    headerTitleStyle: {
        color: '#222',
        fontWeight: 600,
        fontFamily: "Rubik-Bold"
    },
    headerTintColor: '#acacac',
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={SCREEN_OPTIONS}
                initialRouteName={"home"}
            >
                <Stack.Group>
                    <Stack.Screen name='login' component={LoginPage}/>
                    <Stack.Screen name='sign-up' component={SignupPage}/>
                    <Stack.Screen name='forgot-password' component={ForgotPasswordPage}/>
                    <Stack.Screen name='verify-code' component={VerifyCodePage}/>
                </Stack.Group>
                <Stack.Group>
                    <Stack.Screen name='home' component={Home}></Stack.Screen>
                    <Stack.Screen name='category' component={Category} options={{
                        headerShown: true                        
                    }}></Stack.Screen>
                    <Stack.Screen name='product-details' component={ProductDetails} options={{
                        headerShown: true,
                        title: "Product Details"                        
                    }}></Stack.Screen>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>    
    )
}

export default MainNavigation;