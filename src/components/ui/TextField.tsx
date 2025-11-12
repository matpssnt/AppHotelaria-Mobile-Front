import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInputProps, Text, View, TextInput } from "react-native";
import { global } from "./styles";

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
}


const TextField = ({label, errorText, icon, ...restInputProps} : Props ) => {

    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        <MaterialIcons name={icon} size={20} color="#000252ff"/>
                    </View>
                )}
                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor="#9ca3af"
                    style={[global.input]}
                    /* const TextField = ({label, errorText, icon, ...restInputProps} : Props) = {
                        const style = props.style;
                        const value = props.value;
                        const onChangeText = props.onChangeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = props.autoCapitalize;
                        const KeyboardType = props.KeyboardType;
                       } */
                    {...restInputProps}
                />
            </View>
            {!! errorText &&
                <Text style={global.errorText}>{errorText}</Text>
            }
        </View>
    )
}

export default TextField;