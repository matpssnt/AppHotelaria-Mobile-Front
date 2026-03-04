import React, { useState } from "react"
import { Modal, TouchableOpacity, View, Text, Platform, Dimensions } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { global } from "./styles";

type Props = {
    onSelectedChange: (date: string) => void;
    visible: boolean;
    onClose: () => void;
}

const RenderDatePicker = ({ onSelectedChange, visible, onClose }: Props) => {

    const { width, height } = Dimensions.get('window');

    const today = getToday();
    const [date, setDate] = useState('');

    const handleChange = (propDate: string) => {
        setDate(propDate);
        onSelectedChange?.(propDate);
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={global.centerView}>
                <View style={global.modalView}>
                    <DatePicker 
                        mode="calendar" 
                        options={{
                            backgroundColor: "#deeef5ff", 
                            textHeaderColor: "#000", 
                            textDefaultColor: "#000", 
                            selectedTextColor: "rgba(0, 0, 0, 1)",
                            mainColor: "#36a8ebff", 
                            textSecondaryColor: "#1485c7ff", 
                            borderColor: '#259ce0ff'
                        }}
                        isGregorian={true} 
                        minimumDate={today}
                        onDateChange={handleChange}
                        onSelectedChange={handleChange}
                        style={{ borderRadius: 15 }}
                    />
                    
                    <TouchableOpacity onPress={onClose} style={global.closeButton}>
                        <Text style={global.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default RenderDatePicker;