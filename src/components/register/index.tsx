import { TouchableOpacity, Text, View, Dimensions, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles"
const RenderRegister = () => {
    const router = useRouter();

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
                    placeholder="Digite seu nome">
                </TextField>

                <TextField
                    label="CPF"
                    icon={{lib: "MaterialIcons", name: "badge"}}
                    placeholder="000.000.000-00">
                </TextField>

                <TextField
                    label="Telefone"
                    icon={{lib: "MaterialIcons", name: "phone"}}
                    placeholder="99 99999-9999">
                </TextField>

                <TextField
                    label="E-mail"
                    icon={{lib: "MaterialIcons", name: "email"}}
                    placeholder="user@email.com"
                    keyboardType="email-address">
                </TextField>

                <PasswordField
                    label="Senha"
                    icon={{lib: "MaterialIcons", name: "lock"}}
                    placeholder="************"
                />

                <PasswordField
                    label="Confirme sua senha"
                    icon={{lib: "MaterialIcons", name: "lock"}}
                    placeholder="************"
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