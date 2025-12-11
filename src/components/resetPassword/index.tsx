import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";

import AuthContainer from "../ui/AuthContainer"
import TextField from "../ui/TextField";
import { global } from "../ui/styles";

function isValidEmail(email: string) {
    return /^[^\s@&='<>:"|?!*[,] @ [^\s@&='<>:"|?!*[,] . [^\s@&='<>:"|?!*[,]$/.test(email);
}

const ResetPassword = () => {
    
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{email?: boolean; password?: boolean}>({});

    const errors = useMemo(() => {
        const error: Record<string, string> = {};
        if (touched.email && !email) error.email = "E-mail obrigatório";
        if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";

        return error;
    }, [email, touched]);
    
    const canSubmit = email && Object.keys(errors).length === 0 && !loading;
    

    const { width, height } = Dimensions.get("window");

    const handlerBack = () => {
        router.back();
    }

    const handlerAuth = () => {
        router.push("/(auth)")
    }

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={handlerBack} style={{position: 'absolute', top: 60, left: 20, zIndex: 10, padding: 8}}>
                <MaterialIcons name="arrow-back-ios-new" size={24} color='#000'/>
            </TouchableOpacity>

            <AuthContainer
               title="Redefinição de senha"
               subtitle="Informe seu e-mail para qual deseja redefinir a sua senha"
               icon="lock">    

               {/* children */}
               <TextField
                   label="E-mail"
                   icon={{lib: "MaterialIcons", name: "email"}}
                   placeholder="user@email.com"
                   keyboardType="email-address"
                   value={email}
                   onChangeText={(input) => setEmail(input)}
                   errorText={errors.email}
                   >
               </TextField>

               <TouchableOpacity style={[global.primaryButton]} onPress={handlerAuth} disabled={!canSubmit}>
                   <Text style={global.primaryButtonText}>Redefinir senha</Text>
               </TouchableOpacity>

               <View style={{alignItems: "center", marginTop: height * 0.02}}>
                   <TouchableOpacity onPress={() => router.push("/(auth)")}>
                       <Text style={{color: "#253241ff", fontSize: 17, marginBottom: 1, textDecorationLine: "underline"}}>Voltar ao Login</Text>
                   </TouchableOpacity>
               </View>

           </AuthContainer>
        </View>
    )
}

export default ResetPassword;