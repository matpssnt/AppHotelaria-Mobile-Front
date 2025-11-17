/* Função: Definir o fluxo de navegação entre as telas de autenticação: Login, Register, ReserPassword

Sobreposição de telas: Stack Navigator, 3 funções para manipular o empilhamento: 
push(): Empilha uma tela acima da outra 
back(): Volta para a tela anterior
replace(): Substitui a tela por outra
*/

import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{ title: "Login" }}/>
            <Stack.Screen name="register" options={{ title: "Cadastro" }}/>
            <Stack.Screen name="resetPassword" options={{ title: "Esqueci minha senha" }}/>
        </Stack>
    )
}

export default AuthLayout;