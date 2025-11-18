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
        paddingVertical: height * 0.07,
        flexGrow: 1
    },
    header:{
        alignItems: "center",
        marginBottom: height * 0.03
    },
    title: {
        fontSize: 28,
        fontWeight: "800"
    },
    subtitle: {
        fontSize: 17,
        color: "#02357ee5",
        marginTop: height * 0.01,
        textAlign: "center"
    },
    content: {
        backgroundColor: "#5dd9ff9c",
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
        fontSize: 17,
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
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 43,
    },
    inputError: {
        backgroundColor: "#458cffff",
        borderColor: "#010ec9ff",
    },
    input: {
        backgroundColor: "#green",
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    errorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },

    primaryButton: {
        backgroundColor: "#36a8ebff",
        borderRadius: 18,
        padding: width * 0.025,
        marginTop: width * 0.02,
        alignItems: "center"
    },
    primaryButtonDisable: {
        backgroundColor: "#253241ff",
         borderRadius: 10
    },
    primaryButtonText: {
        color: "#eef5faff",
        fontSize: 17,
        fontWeight: 600
    }
})