import { View, Text, Dimensions, TouchableOpacity, Image, Alert, ScrollView, Modal } from "react-native";

import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import { useState } from "react";
import PasswordField from "../ui/PasswordField";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import MaskInput, {useMaskedInputProps, Masks} from 'react-native-mask-input';

const RenderAccount = () => {
    const { signOut } = useAuth();
    const router = useRouter();

    const { width, height } = Dimensions.get('window');

    const [modalPass, setModalPass] = useState(false);

    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");


    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    //Máscaras para Telefone e CPF
    const propsCpf = useMaskedInputProps({
        value: cpf,
        onChangeText: setCpf,
        mask: [
          /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/
        ],
    });

    const propsPhone = useMaskedInputProps({
        value: phone,
        onChangeText: setPhone,
        mask: Masks.BRL_PHONE,
    });


    //Dado de email para retornar no perfil
    const [userData, setUserData] = useState({
        email: 'possonato@email.com'
    });


    const handlerProfile = async (currentPass: string, newPass: string) => {
        console.log('Alterando senha: ', {
            currentPass, 
            newPass, 
            timestamp: new Date().toISOString()
        });

        if (currentPass === "123" && newPass.length >= 6) {
            Alert.alert("Sucesso!", 
                `Sua senha foi alterada\n\nSeus dados:\n\nSenha atual: ${currentPass.replace(/./g, '*')}\nNova senha: ${newPass.replace(/./g, '*')}`,
                [{ text: "OK", onPress: () => { 
                    setModalPass(false);
                    setCurrentPassword('');
                    setNewPassword('');
                    setConfirmPassword('');
                }}]

            );
            return true;
        }
        else if (currentPass !== '123') {
            Alert.alert('Erro,',
                "A sua senha está incorreta!",
                [{ text: "OK" }]
            );
            return false;
        }
        else {
            Alert.alert('Erro!',
                "A nova senha deve ter pelo menos 6 caractéres.",
                [{ text: "OK" }]
            );
            return false;
        }
    }

    const handlerSaveProfile = () => {
        if (!currentPassword.trim()) {
            Alert.alert('Atenção!', "Digite sua senha atual.");
            return;
        }

        if (!newPassword.trim()) {
            Alert.alert('Atenção!', "Digite sua nova senha.");
            return;
        }

        if (newPassword.length < 6) {
            Alert.alert('Atenção!', "Sua nova senha deve conter no mínimo 6 caractéres.");
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert('Atenção!', "As senha não coincidem, confirme sua nova senha");
            return;
        }

        handlerProfile(currentPassword, newPassword);
    }


    const handlerClose = () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setModalPass(false);
    }


    const logOut = async () => {
        await signOut();
        router.replace("/(auth)");
    }

    return (
        <AuthContainer
            title="Meu Perfil"
            subtitle="Gerencie suas informações pessoais"
            icon="user"
        >
                    <View style={global.content}>
                        
                            <TextField
                            label="Seu Email"
                            icon={{lib: 'MaterialIcons', name: 'email'}}
                            placeholder=""
                            value={userData.email}
                            editable={false}
                            />

                            <TextField
                            {...propsCpf}
                            label="Seu CPF"
                            icon={{lib: 'MaterialIcons', name: 'badge'}}
                            placeholder="000.000.000-00"
                            keyboardType="numeric"
                            />

                            <TextField
                            {...propsPhone}
                            label="Seu Telefone"
                            icon={{lib: 'MaterialIcons', name: 'phone'}}
                            placeholder="(00) 00000-0000"
                            keyboardType="phone-pad"
                            />
                    </View>
            
                <TouchableOpacity
                    onPress={() => setModalPass(true)}
                    style={{
                        backgroundColor: 'rgba(7, 4, 43, 0.94)',
                        height: height * 0.07,
                        padding: 18, 
                        borderRadius: 12, 
                        marginTop: 30, 
                        alignItems: 'center'
                    }}
                >
                    <Text style={global.primaryButtonText}>Alterar Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={logOut}
                    style={{
                        backgroundColor: 'rgba(255, 0, 0, 0.94)',
                        height: height * 0.07,
                        padding: 18, 
                        borderRadius: 12, 
                        marginTop: 30, 
                        alignItems: 'center'
                    }}
                >
                    <Text style={global.primaryButtonText}>Sair da Conta</Text>
                </TouchableOpacity>

                {/* MODAL PARA AS SENHAS */}
                    <Modal
                        visible={modalPass}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={handlerClose}
                    >
                        <View style={global.centerView}>
                            <View style={global.modalContent}>
                                <Text style={global.label}>Alterar Senha</Text>

                            {/* SENHA ATUAL */}
                                <PasswordField
                                    label="Senha atual"
                                    icon={{lib: 'MaterialCommunityIcons', name: 'lock'}}
                                    placeholder="Digite a senha atual"
                                    value={currentPassword}
                                    onChangeText={setCurrentPassword}
                                    secureTextEntry
                                />

                            {/* NOVA SENHA */}
                                <PasswordField
                                    label="Nova senha"
                                    icon={{lib: 'MaterialCommunityIcons', name: 'lock-alert'}}
                                    placeholder="Digite a nova senha"
                                    value={newPassword}
                                    onChangeText={setNewPassword}
                                />

                            {/* CONFIRMAR SENHA */}
                                <PasswordField
                                    label="Confirme sua senha"
                                    icon={{lib: 'MaterialCommunityIcons', name: 'lock-check'}}
                                    placeholder="Confirme a nova senha"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />

                            {/* BOTÕES DO MODAL */}
                                <View style={global.modalButtonsContainer}>
                                    <TouchableOpacity 
                                        style={[global.modalButton, global.modalSave]}
                                        onPress={handlerSaveProfile}
                                    >
                                        <Text style={global.primaryButtonText}>Salvar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity 
                                        style={[global.modalButton, global.modalCancel]}
                                        onPress={handlerClose}
                                    >
                                        <Text style={global.primaryButtonText}>Cancelar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
        </AuthContainer>
        
    );
}

export default RenderAccount;