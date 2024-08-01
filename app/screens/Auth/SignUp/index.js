import React from 'react';

import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@rneui/base';

import * as Yup from 'yup';

import { Formik } from 'formik';

import InputField from '@app/components/Input';

import lightStyle from './lightStyle';



const SignupPage = () => {

    const style = lightStyle;

    const initialValues = {
        email: "",
        password: "",
        name: "",
        phoneNumber: ""
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Required Field."),
        phoneNumber: Yup.string().required("Required Field."),        
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
                            <Text style={style.loginTitle}>Sign Up</Text>
                        </View>
                        {/* <KeyboardAwareScrollView keyboardShouldPersistTaps="always"> */}
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
                                                    handleChange("name")
                                                } onBlur = {
                                                    handleBlur("name")
                                                } type={"text"} name={"name"} value={values.name} touched={touched} errors={errors} placeholder={"Name"}/>
                                            </View>
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
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("phoneNumber")
                                                } onBlur = {
                                                    handleBlur("phoneNumber")
                                                } type={"numeric"} name={"phoneNumber"} inputMode={"tel"} value={values.phoneNumber} touched={touched} errors={errors} placeholder={"Phone Number"}/>
                                            </View>
                                            <View style={style.buttonGroup}>
                                                <Button size={"md"} _text={{
                                                    color: "#fff",
                                                    fontFamily: "Metropolis-Regular",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    textTransform: "uppercase"
                                                }} onPress={ handleSubmit } titleStyle={style.loginButtonText} buttonStyle={style.loginButton}>Sign up</Button>
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
                        {/* </KeyboardAwareScrollView> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default SignupPage;