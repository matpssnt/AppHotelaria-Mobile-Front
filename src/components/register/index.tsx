import { TouchableOpacity, Text, View, Dimensions } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles"
const RenderRegister = () => {
    const { width, height } = Dimensions.get("window");
    return (
        <AuthContainer
            title="Cadastro"
            subtitle="Faça seu cadastro!"
            icon="hotel">
          
            {/* children */}
            <TextField
                label="Nome"
                icon="supervised-user-circle"
                placeholder="Digite seu nome">
            </TextField>

            <TextField
                label="CPF"
                icon="badge"
                placeholder="000.000.000-00">
            </TextField>

            <TextField
                label="Telefone"
                icon="phone"
                placeholder="99 99999-9999">
            </TextField>

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

            <PasswordField
                label="Senha"
                icon="lock"
                placeholder="************"
            />
            <TouchableOpacity style={[global.primaryButton]}>
                <Text style={global.primaryButtonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={{alignItems: "center", marginTop: height * 0.02}}>
                <TouchableOpacity>
                    <Text style={{color: "#253241ff", fontSize: 17, marginBottom: 1, textDecorationLine: "underline"}}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>
        </AuthContainer>
    )
}

export default RenderRegister;