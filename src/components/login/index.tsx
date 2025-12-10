import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import { useRouter } from "expo-router";

import AuthContainer from "../ui/AuthContainer"
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import { useMemo, useState } from "react";

function isValidEmail(email: string) {
    return /^[^\s@&='<>:"|?!*[,] @ [^\s@&='<>:"|?!*[,] . [^\s@&='<>:"|?!*[,]$/.test(email);
}

const RenderLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{email?: boolean; password?: boolean}>({});

    const errors = useMemo(() => {
        const error: Record<string, string> = {};
        if (touched.email && !email) error.email = "E-mail obrigatório";
        if (touched.password && !password) error.password = "Senha obrigatória";
        if (touched.password && password && password.length < 6) error.password = "Mínimo de 6 carateres para a senha";
        if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";

        return error;
    }, [email, password, touched]);

    const canSubmit = email && password && Object.keys(errors).length === 0 && !loading;


    const { width, height } = Dimensions.get("window");

    const handlerLogin = async () => {
        router.replace("/(tabs)/explorer")
    }

    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
            
            {/* children */}
            <TextField
                label="E-mail"
                icon={{lib: "MaterialIcons", name: "email"}}
                placeholder="user@email.com"
                value={email}
                onChangeText={(input) => setEmail(input)}
                errorText={errors.email}

                keyboardType="email-address">
            </TextField>

            <PasswordField
                label="Senha"
                icon={{lib: "MaterialIcons", name: "lock"}}
                placeholder="************"
                value={password}
                onChangeText={(input) => setEmail(input)}
                errorText={errors.password}
            />

            <TouchableOpacity onPress={handlerLogin} style={[global.primaryButton]} disabled={!canSubmit}>
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
            </View>

        </AuthContainer>
    )
}

export default RenderLogin;