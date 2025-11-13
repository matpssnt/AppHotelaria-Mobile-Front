import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TextField from "./TextField";
import { global } from "./styles";



type Props = React.ComponentProps<typeof TextField>;


const PasswordField = (props: Props) => {
    /*React.useState*/
    const [show, setShow] = useState(false);


    return (
        <View>
            <TextField
                {...props}
                secureTextEntry={!show}
                autoCapitalize="none"
                autoCorrect={false}

            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((shTr) => !shTr)}>
                <Ionicons name={show ? "eye" : "eye-off"} size={20}/>
            </TouchableOpacity>

        </View>
    );
}
export default PasswordField;
