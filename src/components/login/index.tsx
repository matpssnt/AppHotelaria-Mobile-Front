import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { useRouter } from "expo-router";

import AuthContainer from "../ui/AuthContainer"
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";

const RenderLogin = () => {
    const router = useRouter();

    const { width, height } = Dimensions.get("window");

    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
            
            {/* children */}
            <TextField
                label="E-mail"
                icon="email"
                placeholder="user@email.com"
                keyboardType="email-address">
            </TextField>

            <PasswordField
                label="Senha"
                icon="lock"
                placeholder="************"
            />

            <TouchableOpacity style={[global.primaryButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={{alignItems: "center", marginTop: height * 0.02}}>
                <View style={{backgroundColor: "#000", width: width * 0.5, height: height * 0.001, borderRadius: 10, marginTop: height * 0.015, marginBottom: height * 0.02}}></View>

                <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                    <Text style={{color: "#253241ff", fontSize: 17, marginBottom: 1, textDecorationLine: "underline"}}>Esqueci minha senha</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.push("/(auth)/register")} style={{ marginTop: height * 0.02}}>
                    <Text style={{color: "#253241ff", fontWeight: 600, fontSize: 17}}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>,

        </AuthContainer>
    )
}

export default RenderLogin;