import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthContainer from "../ui/AuthContainer";
import RenderDatePicker from "../ui/DatePicker";
import RoomCard from "../ui/RoomCard";

import { global } from "../ui/styles";

const RenderExplorer = () => {

    const handleCheckinChange = (date: string) => {
        console.log('Check-in selecionado: ', date)
    }

    const handleCheckoutChange = (date: string) => {
        console.log('Check-out selecionado: ', date)
    }

    return (
        <ScrollView>
            <SafeAreaView style={global.safeArea}>
                {/* children */}
                <View style={global.container}>
                    <View style={{flex:1, flexDirection:"row", backgroundColor:"#d5fcfd62", borderRadius: 10}}>
                        <RenderDatePicker label="Data de check-in" onDateChange={handleCheckinChange}/>
                        <RenderDatePicker label="Data de check-out" onDateChange={handleCheckoutChange}/>
                    </View>
                    <ScrollView horizontal={true}>
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default RenderExplorer;