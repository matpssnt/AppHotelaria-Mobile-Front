import { TouchableOpacity, Text, View, Dimensions, ScrollView, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import MaskInput, {Masks, useMaskedInputProps} from "react-native-mask-input";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { useAuth } from "../../contexts/AuthContext";
import { global } from "../ui/styles"

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function cleanCamps(value: string) {
    return value.replace(/\D/g, '');
}

const RenderRegister = () => {
    const router = useRouter();
    const { signUp } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cpf, setCpf] = useState("");    
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{name?: boolean; cpf?: boolean; phone?: boolean; email?: boolean; password?: boolean; confPassword?: boolean;}>({});

    const errors = useMemo(() => {
        const error: Record<string, string> = {};
        const cleanCpf = cleanCamps(cpf);
        const cleanPhone = cleanCamps(phone);

        if (touched.name && !name) error.name = "Nome obrigatório!";
        if (touched.email && !email) error.email = "E-mail obrigatório!";
        if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido!";
        if (touched.phone && !phone) error.phone = "Telefone obrigatório!";
        if (touched.phone && phone && cleanPhone.length < 10) error.phone = "Digite um telefone válido!";
        if (touched.cpf && !cpf) error.cpf = "CPF obrigatório!";
        if (touched.cpf && cpf && cleanCpf.length !== 11) error.cpf = "Digite um CPF válido!";
        if (touched.password && !password) error.password = "Senha obrigatória!";
        if (touched.password && password && password.length < 6) error.password = "Mínimo de 6 carateres para a senha!";
        if (touched.confPassword && confPassword && password && confPassword !== password) error.confPassword = "As senhas não correspondem!";
        

        return error;
    }, [name, email, phone, cpf, password, confPassword, touched]);


    const propsPhone = useMaskedInputProps({
        value: phone,
        onChangeText: (masked, unmasked) => setPhone(unmasked),
        mask: Masks.BRL_PHONE
    });

    const propsCpf = useMaskedInputProps({
        value: cpf,
        onChangeText: (masked, unmasked) => setCpf(unmasked),
        mask: Masks.BRL_CPF
    });

    const canSubmit = 
        name.trim() && 
        email &&
        cleanCamps(phone) &&
        cleanCamps(cpf) && 
        password && 
        confPassword && 
        Object.keys(errors).length === 0 && 
        !loading;

    const handlerRegister = async () => {
        try {
            setLoading(true);
            const cleanCpf = cleanCamps(cpf);
            const cleanPhone = cleanCamps(phone);

            await signUp(name, email, cleanPhone, cleanCpf, password);

            Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
            router.replace("/(tabs)/explorer");
        }
        catch (error: any) {
            Alert.alert("Erro", error.message || "Falha ao tentar realizar o cadastro!");
        }
        finally {
            setLoading(false);
        }
    }

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
                    label="E-mail"
                    icon={{lib: "MaterialIcons", name: "email"}}
                    placeholder="user@email.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(input) => setEmail(input)}
                    errorText={errors.email}>
                </TextField>

                <TextField
                    label="Telefone"
                    icon={{lib: "MaterialIcons", name: "phone"}}
                    placeholder="99 99999-9999"
                    errorText={errors.phone}
                    renderInput={(inputProps) => (
                        <MaskInput
                            {...inputProps}
                            {...propsPhone}
                            keyboardType="phone-pad"
                        />
                    )}
                >
                </TextField>
                
                <TextField
                    {...propsCpf}
                    label="CPF"
                    icon={{lib: "MaterialIcons", name: "badge"}}
                    placeholder="000.000.000-00"
                    errorText={errors.cpf}
                    renderInput={(inputProps) => (
                        <MaskInput
                            {...inputProps}
                            {...propsCpf}
                            keyboardType="numeric"
                        />
                    )}
                >
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


                <TouchableOpacity style={[global.primaryButton]} onPress={handlerRegister} disabled={!canSubmit}>
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