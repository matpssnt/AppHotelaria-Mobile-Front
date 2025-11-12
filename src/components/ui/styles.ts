import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },
    keyboardAvoinding: {
        flex: 1,
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingTop: height * 0.08,
        paddingBottom: height * 0.07
    },
    header:{
        alignItems: "center",
        paddingBottom: 32
    },
    title: {
        fontSize: 28,
        fontWeight: "800"
    },
    subtitle: {
        fontSize: 17,
        color: "#02357ee5",
        marginTop: height * 0.007
    },
    content: {
        backgroundColor: "#80dffcff",
        alignItems: "center",
        borderRadius: "10",
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    // Inputs
    inputGroup: {
        marginBottom: height * 0.02,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#374151",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#fff",
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#001f52ff",
        borderRadius: 10
    },
    inputError: {
        backgroundColor: "#458cffff",
        borderColor: "#010ec9ff",
    },
    input: {
        backgroundColor: "#green",
        flex: 1,
        fontSize: 16,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    errorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 13,
        marginTop: height * 0.01
    }
})