import { View, Text, StyleSheet } from "react-native";

// import { global } from "@/components/ui/styles";

const Account = () => {
    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Account;