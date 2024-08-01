import React from 'react';

import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Button } from '@rneui/base';

import OTPInputView from '@twotalltotems/react-native-otp-input'

import lightStyle from './lightStyle';



const VerifyCodePage = ({ navigation }) => {

    const style = lightStyle;



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <ScrollView>
                <View style={ style.container }>
                    <View style={ style.loginContainer}>
                        <View style={style.loginTitleWrapper}>
                            <Text style={style.loginTitle}>Verify Code</Text>
                        </View>
                        <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
                            <View style={style.loginFormWrapper}>
                                <View style={style.loginTextWrapper}>
                                    <Text style={style.loginText}>Please, enter your one time password received on your email.</Text>
                                </View>
                                <View style={style.otpFieldWrapper}>
                                    <OTPInputView
                                        style={style.otpInput}
                                        pinCount={4}
                                        autoFocusOnLoad
                                        keyboardType={'number-pad'}
                                        codeInputFieldStyle={{
                                            borderColor: '#acacac',
                                            borderRadius: 8,
                                            color: '#070707',
                                            fontFamily: 'Poppins-Regular'
                                        }}
                                        codeInputHighlightStyle={style.underlineStyleHighLighted}
                                        onCodeFilled = {(code => {
                                            console.log(`Code is ${code}, you are good to go!`)
                                        })}
                                        editable={true}
                                    />
                                </View>
                                <View style={style.buttonGroup}>
                                    <Button size={"md"} _text={{
                                        color: "#fff",
                                        fontFamily: "Metropolis-Regular",
                                        fontSize: 16,
                                        fontWeight: 500,
                                        textTransform: "uppercase"
                                    }}  style={style.loginButton}>Verify</Button>
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
                                
                            </View>
                            
                        </KeyboardAwareScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

export default VerifyCodePage;