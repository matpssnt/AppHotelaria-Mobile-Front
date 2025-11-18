import { View, Text, StyleSheet } from "react-native";

// import { global } from "@/components/ui/styles";

export default function Explorer() {
    return (
        <View style={styles.container}>
            <Text>Explorar</Text>
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