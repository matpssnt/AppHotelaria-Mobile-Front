import { TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles"
import { useMemo, useState } from "react";

function isValidEmail(email: string) {
    return /^[^\s@&='<>:"|?!*[,] @ [^\s@&='<>:"|?!*[,] . [^\s@&='<>:"|?!*[,]$/.test(email);
}

// function isValidPassword(password?: string, confPassword?: string) {
//     if (!password || !confPassword) return { validate: false, text: "Senha obrigatória" };
//     if (password !== confPassword) return { validate: false, text: "Senhas não correspondem!" };
//     return { validate: true, text: "" };
// }

const RenderRegister = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{name?: boolean; cpf?: boolean; phone?: boolean; email?: boolean; password?: boolean; confPassword?: boolean;}>({});

    const errors = useMemo(() => {
        const error: Record<string, string> = {};
        if (touched.name && !name) error.name = "Nome obrigatório";
        if (touched.cpf && !cpf) error.cpf = "CPF obrigatório";
        if (touched.phone && !phone) error.phone = "Telefone obrigatório";
        if (touched.email && !email) error.email = "E-mail obrigatório";
        if (touched.password && !password) error.password = "Senha obrigatória";
        if (touched.password && password && password.length < 6) error.password = "Mínimo de 6 carateres para a senha";
        if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";
        
        if (touched.confPassword) {
            if (!confPassword) { 
                error.confPassword = "Confirme sua senha";
            }
            else if (password !== confPassword) {
                error.confPassword = "Senhas não correspondem!"
            }
        }
        

        return error;
    }, [name, cpf, phone, email, password, confPassword, touched]);

    const canSubmit = name && cpf && phone && email && password && confPassword && Object.keys(errors).length === 0 && !loading;


    const { width, height } = Dimensions.get("window");

    return (
        <AuthContainer
            title="Cadastro"
            subtitle="Faça seu cadastro!"
            icon="hotel">
            
            <ScrollView
                contentContainerStyle={{flexGrow: 1, paddingBottom: 70, paddingTop: 10}}
                showsVerticalScrollIndicator={false}
            >
          
                {/* children */}
                <TextField
                    label="Nome"
                    icon={{lib: "FontAwesome6", name: "user-large"}}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={(input) => setName(input)}
                    errorText={errors.name}>
                </TextField>

                <TextField
                    label="CPF"
                    icon={{lib: "MaterialIcons", name: "badge"}}
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChangeText={(input) => setCpf(input)}
                    errorText={errors.cpf}>
                </TextField>

                <TextField
                    label="Telefone"
                    icon={{lib: "MaterialIcons", name: "phone"}}
                    placeholder="99 99999-9999"
                    value={phone}
                    onChangeText={(input) => setPhone(input)}
                    errorText={errors.phone}>
                </TextField>

                <TextField
                    label="E-mail"
                    icon={{lib: "MaterialIcons", name: "email"}}
                    placeholder="user@email.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(input) => setEmail(input)}
                    errorText={errors.email}>
                </TextField>

                <PasswordField
                    label="Senha"
                    icon={{lib: "MaterialIcons", name: "lock"}}
                    placeholder="************"
                    value={password}
                    onChangeText={(input) => setPassword(input)}
                    errorText={errors.password}
                />

                <PasswordField
                    label="Confirme sua senha"
                    icon={{lib: "MaterialIcons", name: "lock"}}
                    placeholder="************"
                    value={confPassword}
                    onChangeText={(input) => setConfPassword(input)}
                    errorText={errors.confPassword}                
                />


                <TouchableOpacity style={[global.primaryButton]}>
                    <Text style={global.primaryButtonText}>Criar conta</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', justifyContent: "center", alignItems: "center", marginTop: height * 0.02,  flexWrap: 'wrap'}}>
                    <Text style={{color: "#253241ff", fontWeight: 600, fontSize: 15}}>Já possui uma conta?{" "}</Text>
                    <TouchableOpacity onPress={() => router.push("/(auth)")} style={{marginLeft: 2, marginBottom: 9}}>
                        <Text style={{color: "#0059ffff", fontSize: 15, fontWeight: '600'}}>Faça login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </AuthContainer>
    )
}

export default RenderRegister;