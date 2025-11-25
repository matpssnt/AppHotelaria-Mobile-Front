import React, { useState } from "react"
import { Modal, TouchableOpacity, View, Text, Platform } from "react-native";
import DatePicker, {getFormatedDate} from "react-native-modern-datepicker";

import { global } from "./styles";

type Props = {
    label?: string;
    onDateChange?: (date: string) => void;
}

const RenderDatePicker = ({label, onDateChange}: Props) => {

    const [open, setOpen] = useState(false);
    const [date, setDate] = useState("01-01-2024");

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

    const handlePress = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (propDate: string) => {
        console.log('Data selecionada:', propDate);
        setDate(propDate);
        onDateChange?.(propDate);
    };

    return (
        <View style={global.datePickerContainer}>
            <TouchableOpacity onPress={handlePress} style={global.dateButton}>
                <Text style={global.subtitle}>{label}</Text>
                <Text style={global.dateText}>{date}</Text>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={global.centerView}>
                    <View style={global.modalView}>

                        <DatePicker 
                        isGregorian={true} 
                        options={{
                            backgroundColor: "#e3f4fcff", 
                            textHeaderColor: "#000", 
                            textDefaultColor: "#000", 
                            selectedTextColor: "rgba(0, 0, 0, 1)", 
                            mainColor: "#36a8ebff", 
                            textSecondaryColor: "#1485c7ff", 
                            borderColor: '#259ce0ff'
                        }}
                        mode="calendar" 
                        selected={date} 
                        minimumDate={startDate} 
                        onSelectedChange={handleChange} 
                        minuteInterval={30} 
                        style={{borderRadius: 10}}
                        />

                        <TouchableOpacity onPress={handleClose} style={global.closeButton}>
                            <Text style={global.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            </Modal>
        </View>
    );

}

export default RenderDatePicker;