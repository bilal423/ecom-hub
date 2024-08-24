import React, { useState } from 'react';

import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@rneui/base';

import * as Yup from 'yup';

import { Formik } from 'formik';

import { createAccount } from '@app/store/users/saga';

import InputField from '@app/components/Input';

import lightStyle from './lightStyle';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';



const SignupPage = ({ navigation }) => {

    const dispatch = useDispatch();

    const [isLoading, setLoading] = useState(false);

    const style = lightStyle;

    const initialValues = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        username: ""
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required Field."),
        lastName: Yup.string().required("Required Field."),        
        email: Yup.string().required("Required Field.").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email format'),
        username: Yup.string().required("Required Field."),        
        password: Yup.string().required("Required Field.").min(8, "Your password should be at least 8 characters long.")
    });


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
            { isLoading && <View style={style.loadingContainer}>
                <ActivityIndicator size={"large"} color="#db3022"/>
            </View> }
            <ScrollView>
                <View style={ style.container }>
                    <View style={ style.loginContainer}>
                        <View style={style.loginTitleWrapper}>
                            <Text style={style.loginTitle}>Sign Up</Text>
                        </View>
                        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                            <View style={style.loginFormWrapper}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={ async (data) => {
                                        setLoading(!isLoading);

                                        await dispatch(
                                            createAccount({
                                                data: JSON.stringify(data),
                                                onSuccess: () => {
                                                    setLoading(false);

                                                    Toast.show({
                                                        text1: "Success, your account has been created.",
                                                        type: "success",
                                                        position: "top"
                                                    });

                                                    setTimeout(() => {
                                                        navigation.navigate("login");
                                                    }, 2000);
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
                                                    handleChange("firstName")
                                                } onBlur = {
                                                    handleBlur("firstName")
                                                } type={"text"} name={"firstName"} label={"First Name"} showLabel={true} isRequired={true} value={values.firstName} touched={touched} errors={errors} placeholder={"First Name"}/>
                                            </View>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("lastName")
                                                } onBlur = {
                                                    handleBlur("lastName")
                                                } type={"text"} name={"lastName"} label={"Last Name"} showLabel={true} isRequired={true} value={values.lastName} touched={touched} errors={errors} placeholder={"Last Name"}/>
                                            </View>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("username")
                                                } onBlur = {
                                                    handleBlur("username")
                                                } type={"text"} name={"username"} label={"Username"} showLabel={true} isRequired={true} value={values.username} touched={touched} errors={errors} placeholder={"Username"}/>
                                            </View>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("email")
                                                } onBlur = {
                                                    handleBlur("email")
                                                } type={"text"} name={"email"} label={"Email Address"} showLabel={true} isRequired={true} value={values.email} touched={touched} errors={errors} placeholder={"Email Address"}/>
                                            </View>
                                            <View style={style.formGroup}>
                                                <InputField onInputChange={
                                                    handleChange("password")
                                                } onBlur = {
                                                    handleBlur("password")
                                                } type={"password"} name={"password"} label={"Password"} showLabel={true} isRequired={true} value={values.password} touched={touched} errors={errors} isPasswordField = {true} placeholder={"Password"}/>
                                            </View>
                                            <View style={style.buttonGroup}>
                                                <Button size={"md"} _text={{
                                                    color: "#fff",
                                                    fontFamily: "Metropolis-Regular",
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    textTransform: "uppercase"
                                                }} onPress={ handleSubmit } disabledStyle={style.disabledButtonStyle} disabled={isLoading} loading={isLoading} titleStyle={style.loginButtonText} buttonStyle={style.loginButton}>Sign up</Button>
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
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default SignupPage;