import React, { useState } from 'react';

import { View, Text, SafeAreaView, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Toast from 'react-native-toast-message';

import { Button } from '@rneui/base';

import { useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { Formik } from 'formik';

import { login } from '@app/store/users/saga';

import { setUser } from '@app/store/users/reducer';

import { storeData } from '@app/utils/stroage';

import googleIcon from '@app/assets/images/google-icon.jpg';

import InputField from '@app/components/Input';

import lightStyle from './lightStyle';




const LoginPage = ({ navigation }) => {

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(false);

    const style = lightStyle;

    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Required Field."),
        password: Yup.string()
            .required("Required Field.")
            .min(8, "Your password should be at least 8 characters long.")
    });


    return (
        <SafeAreaView style={style.pageWrapper}>
             { isLoading && <View style={style.loadingContainer}>
                <ActivityIndicator size={"large"} color="#db3022"/>
            </View> }
            <ScrollView>
                <View style={ style.container }>
                    <View style={ style.loginContainer}>
                        <View style={style.loginTitleWrapper}>
                            <Text style={style.loginTitle}>Login</Text>
                        </View>
                        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                            <View style={style.loginFormWrapper}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={ async (data) => {
                                        setLoading(true);
                                        dispatch(
                                            login({
                                                data: JSON.stringify({
                                                    ...data,
                                                    expiresInMins: 180
                                                }),
                                                onSuccess: async (data) => {
                                                    setLoading(false);

                                                    await dispatch(setUser(data));

                                                    await storeData("user", data);

                                                    setTimeout(() => {
                                                        navigation.navigate("home", { screen: "HomeTab"} );
                                                    }, 1000);

                                                },
                                                onError: (message) => {
                                                    setLoading(false);
                                                    Toast.show({
                                                        type: "error",
                                                        text1: message || "",
                                                        position: "top"
                                                    });
                                                }
                                            })
                                        )
                                    }}
                                >
                                    {({ handleChange, handleBlur, touched, handleSubmit, values, errors }) => (
                                        <>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("username")
                                                } onBlur = {
                                                    handleBlur("username")
                                                } type={"text"} name={"username"} value={values.username} touched={touched} errors={errors} placeholder={"Username"}/>
                                            </View>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("password")
                                                } onBlur = {
                                                    handleBlur("password")
                                                } type={"password"} name={"password"} value={values.password} touched={touched} errors={errors} isPasswordField = {true} placeholder={"Password"}/>
                                            </View>
                                            <View style={{...style.formGroup, ...style.formHelpBlock}}>
                                                <Pressable onPress={() => {
                                                    navigation.navigate("forgot-password");
                                                }}>
                                                    <Text style={style.helpLink}>Forgot Password?</Text>
                                                </Pressable>
                                            </View>
                                            <View style={style.buttonGroup}>
                                                <Button size={"md"} onPress={ handleSubmit } disabled={isLoading} loading={isLoading} disabledStyle={style.disabledButtonStyle} titleStyle={style.loginButtonText} buttonStyle={style.loginButton}>Login</Button>
                                            </View>

                                            <View style={style.helpBlockGroup}>
                                                <Text style={style.helpBlockText}>Don't have an account? 
                                                    {/* <Pressable style={style.helpLinkGroup}> */}
                                                        <Text onPress={() => {
                                                            navigation.navigate("sign-up");
                                                        }} style={style.helpLinkText}> Create account</Text>
                                                    {/* </Pressable> */}
                                                </Text>
                                            </View>

                                            <View style={style.dividerWrapper}>
                                                <Text style={style.dividerWrapperText}>OR</Text>
                                                {/* <Divider  orientation={"horizontal"} thickness={1}/> */}
                                                <Pressable style={style.socialButtonGroup}>
                                                    <Image style={style.socialButtonImage} resizeMode="cover" source={googleIcon} />
                                                    <Text style={style.socialButtonText}>Login with Google</Text>
                                                </Pressable>
                                            </View>
                                        </>
                                    )}
                                </Formik>   
                            </View>
                        </KeyboardAwareScrollView>    

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default LoginPage;