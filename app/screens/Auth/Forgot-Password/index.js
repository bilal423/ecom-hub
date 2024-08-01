import React from 'react';

import { View, Text, SafeAreaView, ScrollView, StatusBar, Pressable } from 'react-native';

import { Button } from '@rneui/base';

import * as Yup from 'yup';

import { Formik } from 'formik';

import InputField from '@app/components/Input';

import lightStyle from './lightStyle';



const ForgotPasswordPage = ({ navigation }) => {

    const style = lightStyle;

    const initialValues = {
        email: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Required Field.")
    });


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <ScrollView>
                <View style={ style.container }>
                    <View style={ style.loginContainer}>
                        <View style={style.loginTitleWrapper}>
                            <Text style={style.loginTitle}>Forgot Password</Text>
                        </View>
                        
                        <View style={style.loginFormWrapper}>
                            <View style={style.loginTextWrapper}>
                                <Text style={style.loginText}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
                            </View>
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
                                        <View style={style.buttonGroup}>
                                            <Button size={"md"} _text={{
                                                color: "#fff",
                                                fontFamily: "Metropolis-Regular",
                                                fontSize: 16,
                                                fontWeight: 500,
                                                textTransform: "uppercase"
                                            }} onPress={ handleSubmit } titleStyle={style.loginButtonText} buttonStyle={style.loginButton}>Send</Button>
                                        </View>

                                        <View style={style.helpBlockGroup}>
                                            <Text style={style.helpBlockText}>Already have an account? 
                                                {/* <Pressable style={style.helpLinkGroup}> */}
                                                    <Text onPress={() => {
                                                        navigation.navigate("login");
                                                    }} style={style.helpLinkText}> Login</Text>
                                                {/* </Pressable> */}
                                            </Text>
                                        </View>
                                    </>
                                )}
                            </Formik>   
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default ForgotPasswordPage;