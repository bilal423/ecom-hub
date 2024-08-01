import React from 'react';

import { View, TextInput, Text } from "react-native";

import lightStyle from './lightStyle';

import darkStyle from './darkStyle';


const InputField = ({ type, name, inputMode, placeholder, isPasswordField, touched, errors, value, onInputChange, onBlurChange }) => {
    const style = lightStyle

    return (
        <View>
            <TextInput
                type={type || "text"}
                onChangeText={onInputChange}
                onBlur={onBlurChange}
                name={name || ""}
                value={value || ""}
                inputMode={ inputMode || "text"}
                placeholder={ placeholder || ""}
                style={style.formField}
                placeholderTextColor={"#9b9b9b"}
                secureTextEntry={isPasswordField || false}
            />
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