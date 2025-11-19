import React, { useState } from "react"
import { Modal, TouchableOpacity, View, Text } from "react-native";
import DatePicker, {getFormatedDate} from "react-native-modern-datepicker";

import { global } from "./styles";

const RenderDatePicker = ({label}: {label: string}) => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("01-01-2024");

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

    const handlePress = () => {
        setOpen(!open);
    };

    const handleChange = (propDate: string) => {
        setDate(propDate);
    };

    return (
        <View style={global.container}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={global.subtitle}>{label}</Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={global.centerView}>
                    <View style={global.modalView}>

                        <DatePicker isGregorian={true} options={{backgroundColor: "#e3f4fcff", textHeaderColor: "#000", textDefaultColor: "#000", 
                        selectedTextColor: "rgba(0, 0, 0, 1)", mainColor: "#36a8ebff", textSecondaryColor: "#1485c7ff", borderColor: '#259ce0ff'}}
                            mode="calendar" selected={date} minimumDate={startDate} onSelectedChange={handleChange} minuteInterval={30} style={{borderRadius: 10}}
                        />

                        <TouchableOpacity onPress={handlePress}>
                            <Text>{label}</Text>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            </Modal>
        </View>
    );

}

export default RenderDatePicker;