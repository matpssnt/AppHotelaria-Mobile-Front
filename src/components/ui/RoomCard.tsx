import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const RoomCard = () => {
    return (
        <View style={style.card}>
            <TouchableOpacity style={style.container}>
                <Image source={require('../../../assets/images/slide-1.jpg')} style={style.images}/>

                <View style={style.infoSection}>
                    <Text style={style.title}>Suíte de Luxo</Text>

                    <Text style={style.price}>
                        R$ 80 por 2 noites
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        maxWidth: 320, 
        margin: 10, 
        borderRadius: 20, 
        backgroundColor: '#d5fcfd62'
    },
    container: {
        borderRadius:20, 
        padding: 10
    },
    images: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    infoSection: {
        paddingHorizontal: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#36a8ebff"
    }
})

export default RoomCard;