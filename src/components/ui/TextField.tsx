import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap}
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap};

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: NameIcon;
}


const TextField = ({label, errorText, icon, ...props} : Props ) => {

    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        {icon.lib === "MaterialIcons" && (
                        <MaterialIcons name={icon.name} size={20} color="#000252ff"/>
                        )}
                        {icon.lib === "FontAwesome6" && (
                        <FontAwesome6 name={icon.name} size={17} color="#000252ff"/>
                        )}
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