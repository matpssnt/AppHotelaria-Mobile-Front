import { View, Text, StyleSheet } from "react-native";

import RenderDatePicker from "@/components/ui/DatePicker";
// import { global } from "@/components/ui/styles";

const Explorer = () => {
    return (
        <View style={styles.container}>
            <RenderDatePicker label="Data de check-in"/>
            <RenderDatePicker label="Data de check-out"/>
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

export default Explorer;