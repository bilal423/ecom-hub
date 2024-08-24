import React, { useState } from 'react';

import { View, TextInput, Text, Pressable } from "react-native";

import { Icon } from '@rneui/base';

import lightStyle from './lightStyle';

import darkStyle from './darkStyle';


const InputField = ({ type, name, label, showLabel, isRequired, inputMode, placeholder, isPasswordField, touched, errors, value, onInputChange, onBlurChange }) => {
    const style = lightStyle

    const [showTextInput, setTextInput] = useState(false);


    return (
        <View>
            { 
                showLabel && 
                <View style={style.labelWrapper}>
                    <Text style={style.label}>
                        { label || "" }
                    </Text>
                    {
                        isRequired 
                        && 
                        <Text style={style.labelRequired}>*</Text>
                    }
                </View>
            }
            <View>
                <TextInput
                    type={ showTextInput ? "text" : type || "text"}
                    onChangeText={onInputChange}
                    onBlur={onBlurChange}
                    name={name || ""}
                    value={value || ""}
                    inputMode={ inputMode || "text"}
                    placeholder={ placeholder || ""}
                    style={{
                        ...style.formField,
                        borderColor: (touched[name] && errors[name]) ? "#f01f0e" : "#fff"
                    }}
                    placeholderTextColor={"#9b9b9b"}
                    secureTextEntry={ showTextInput ? false : isPasswordField || false}
                />
                {
                    (touched[name] && errors[name])
                    &&
                    <View style={style.iconWrap}>
                        <Icon name={ 'close-outline' } type={'ionicon'} color={"#f01f0e"}/>
                    </View>
                }
                {
                    (type === "password" && !((touched[name] && errors[name]))) && 
                    <View style={style.iconWrap}>
                        <Pressable onPress={ () => {
                            setTextInput(!showTextInput);
                        }}>
                            <Icon name={ showTextInput ? "eye-off-outline" : 'eye-outline' } type={'ionicon'} color={"#acacac"}/>
                        </Pressable>
                    </View>
                }
            </View>
            {
                (touched[name] && errors[name])
                && 
                <View style={style.errorWrapper}>
                    <Text style={style.errorText}>{ errors[name] }</Text>
                </View>
            }
            
        </View>
    )
}

export default InputField;