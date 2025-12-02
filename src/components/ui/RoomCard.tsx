import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { View, Image, Text, StyleSheet, Dimensions, ImageSourcePropType } from "react-native";
import { global } from "./styles";

type Infos = { title?: string; text: string; price: number }

type NameIcons = 
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }

type Props = {
    image?: ImageSourcePropType;
    label?: string;
    description?: Infos
    icon?: NameIcons;
}

const { width, height } = Dimensions.get('window');

const RoomCard = ({ image, label, description, icon } : Props) => {

    return (
        <View style={global.content}>
            {!!image &&
            <View> <Image style={style.image} source={image} resizeMode="cover" /> </View>}
            <View>
                {!!label && <Text style={{fontSize: 23, fontWeight: '600', marginTop: height * 0.01, color: '#374151'}}>{label}</Text>}
                <View style={style.container}>
                    {!!description && (
                        <View>
                            {!!description.title && (
                                <Text style={global.label}>{description.title}</Text>
                            )}
                        </View>
                    )}
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
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
                            <View style={style.description}>
                                <View>
                                    <Text style={style.text}>{description.text}</Text>
                                </View>
                                <View>
                                    <Text style={style.price}>R$ {description.price}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    image: {
        height: height * 0.27,
        width: 'auto',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    container: {
        padding: width * 0.02,
        marginTop: height * 0.02,
        backgroundColor: '#93e6ff9c',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    description: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,  
    },
    price: {
        fontSize: 17,
        fontWeight: '500',
        color: '#020155ff'
    }
})

export default RoomCard;