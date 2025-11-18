import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import AuthContainer from "../ui/AuthContainer"
import TextField from "../ui/TextField";
import { global } from "../ui/styles";

const ResetPassword = () => {
    
    const router = useRouter();

    const { width, height } = Dimensions.get("window");

    const handleBack = () => {
        router.back();
    }

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={handleBack} style={{position: 'absolute', top: 60, left: 20, zIndex: 10, padding: 8}}>
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
                   keyboardType="email-address">
               </TextField>

               <TouchableOpacity style={[global.primaryButton]}>
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