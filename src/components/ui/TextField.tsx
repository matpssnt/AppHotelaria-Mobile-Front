import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
    | {lib: "MaterialIcons"};

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    // lib?: IconLibrary,
    icon?: keyof typeof MaterialIcons.glyphMap;
}


const TextField = ({label, errorText, icon, ...props} : Props ) => {

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
                    /* const TextField = ({label, errorText, icon, ...props} : Props) = {
                        const style = props.style;
                        const value = props.value;
                        const onChangeText = props.onChangeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = props.autoCapitalize;
                        const KeyboardType = props.KeyboardType;
                       } */
                    {...props}
                />
            </View>
            {!! errorText &&
                <Text style={global.errorText}>{errorText}</Text>
            }
        </View>
    );
}

export default TextField;