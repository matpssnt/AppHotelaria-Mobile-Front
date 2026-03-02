import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap}
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap}
    | {lib: "MaterialCommunityIcons"; name: keyof typeof MaterialCommunityIcons.glyphMap};


type MaskProps = (inputProps: TextInputProps) => React.ReactNode;

type Props = TextInputProps & {
    label: string;
    errorText?: string;
    icon?: NameIcon;
    renderInput?: MaskProps;
}


const TextField = ({label, errorText, icon, style, renderInput, ...props} : Props ) => {

    const inputProps: TextInputProps = {
        keyboardAppearance: "dark",
        placeholderTextColor: "#9ca3af",
        style: [global.input, style],
        ...props
    }

    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        {icon.lib === "MaterialIcons" ? (
                        <MaterialIcons name={icon.name} size={20} color="#000252ff"/>
                        ) : icon.lib === "FontAwesome6" ? (
                        <FontAwesome6 name={icon.name} size={20} color="#000252ff"/>
                        ) : icon.lib === "MaterialCommunityIcons" ? (
                        <MaterialCommunityIcons name={icon.name} size={20} color={"#000252ff"}/>
                        ) : null}
                    </View>
                )}

                {renderInput ? (
                    renderInput(inputProps)
                ) : (
                    <TextInput {...inputProps}/>
                )}
                
            </View>
            {!! errorText &&
                <Text style={global.errorText}>{errorText}</Text>
            }
        </View>
    );
}

export default TextField;