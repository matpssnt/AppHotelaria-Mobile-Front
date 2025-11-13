import { TouchableOpacity, Text } from "react-native";

import AuthContainer from "../ui/AuthContainer"
import TextField from "../ui/TextField";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";

const RenderLogin = () => {
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

        </AuthContainer>
    )
}

export default RenderLogin;