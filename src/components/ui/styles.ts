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
        width: width * 0.96,
        backgroundColor: "#5dd9ff9c",
        borderRadius: 10,
        alignSelf: 'center',
        padding: width * 0.03,
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
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.01
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
        fontWeight: '600'
    },

    // DatePicker
    centerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: "#97abc5ff",
        borderRadius: 20,
        width: width * 0.9,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000000ff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    datePickerContainer: {
        flex: 1,
        margin: 5
    },
    dateButton: {
        padding: 15,
        backgroundColor: '#f0f0f0ff',
        borderRadius: 8,
        margin: 5
    },
    dateText: {
        fontSize: 16,
        color: '#333333ff',
        marginTop: 5
    },
    closeButton: {
        backgroundColor: '#36a8ebff',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        width: '100%'
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});