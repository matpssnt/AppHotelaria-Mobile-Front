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
        backgroundColor: "#1c64cfff",
        alignItems: "center",
        borderRadius: "10",
        padding: width * 0.02,
        shadowColor: "#ff0000ff",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },
})