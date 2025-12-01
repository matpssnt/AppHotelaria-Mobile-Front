import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { global } from "./styles";

type Infos = { title?: string; text: string; price: number }

type NameIcons = 
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }

type Props = {
    // image?: ;
    label?: string;
    description?: Infos
    icon?: NameIcons;
}

const RoomCard = ({ label, description, icon } : Props) => {

    return (
        <View style={global.content}>
            <View>{/* Imagem */}</View>
            <View>
                {!!label && <Text style={global.title}>{label}</Text>}
                <View>
                    {!!icon && (
                        <View>
                            {icon.lib === 'MaterialIcons' && (
                                <MaterialIcons name={icon.name} size={23} color='#001f52ff' />
                            )}
                            {icon.lib === 'FontAwesome5' && (
                                <FontAwesome5 name={icon.name} size={23} color='#001f52ff' />
                            )}
                            {icon.lib === 'FontAwesome6' && (
                                <FontAwesome6 name={icon.name} size={23} color='#001f52ff' />
                            )}
                        </View>
                    )}
                    {!!description && (
                        <View>
                            <View style={style.description}>
                                <View>
                                {!!description.title && <Text>{description.title}</Text>}
                                    <Text>{description.text}</Text>
                                </View>
                                <View>
                                    <Text>R$ {description.price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    description: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#2cb4dd9c',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    }
})

export default RoomCard;