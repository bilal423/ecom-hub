import React from 'react';

import { View, Text, SafeAreaView, ScrollView, Pressable, Image } from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@rneui/base';

import * as Yup from 'yup';

import { Formik } from 'formik';

import googleIcon from '../../../assets/images/google-icon.jpg';

import InputField from '@app/components/Input';

import lightStyle from './lightStyle';



const LoginPage = ({ navigation }) => {

    const style = lightStyle;

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Required Field."),
        password: Yup.string()
            .required("Required Field.")
            .min(8, "Your password should be at least 8 characters long.")
    });


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
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
                                        console.log({
                                            data
                                        });
                                    }}
                                >
                                    {({ handleChange, handleBlur, touched, handleSubmit, values, errors }) => (
                                        <>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("email")
                                                } onBlur = {
                                                    handleBlur("email")
                                                } type={"text"} name={"email"} value={values.email} touched={touched} errors={errors} placeholder={"Email Address"}/>
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
                                                <Button size={"md"} onPress={ handleSubmit } titleStyle={style.loginButtonText} buttonStyle={style.loginButton}>Login</Button>
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