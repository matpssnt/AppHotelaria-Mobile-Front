// import React, { useState } from "react"
// import { Modal, TouchableOpacity, View, Text, Platform, Dimensions } from "react-native";
// import DatePicker, {getToday} from "react-native-modern-datepicker";

// import { global } from "./styles";

// type Props = {
//     onDateChange: (date: string) => void;
// }

// const RenderDatePicker = ({ onDateChange}: Props) => {

//     const { width, height } = Dimensions.get('window');

//     const today = getToday();
//     // const tomorrow = new Date(today);
//     // tomorrow.setDate(today.getDate() + 1);
//     // const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD h:m');

    
//     const [open, setOpen] = useState(false);
//     const [date, setDate] = useState('');

//     const handlePress = () => {
//         setOpen(!open);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     }

//     // const handleChange = (propDate: string) => {
//     //     console.log('Data selecionada:', propDate);
//     //     setDate(propDate);
//     //     onDateChange?.(propDate);
//     // };

//     return (
//         <View style={global.datePickerContainer}>
//             <TouchableOpacity onPress={handlePress} style={global.dateButton}>
//                 <Text style={global.dateText}>{date}</Text>
//             </TouchableOpacity>

//             <Modal animationType="slide" transparent={true} visible={open}>
//                 <View style={global.centerView}>
//                     <View style={global.modalView}>

//                         <DatePicker 
//                         mode="calendar" 
//                         options={{
//                             backgroundColor: "#e3f4fcff", 
//                             textHeaderColor: "#000", 
//                             textDefaultColor: "#000", 
//                             selectedTextColor: "rgba(0, 0, 0, 1)", 
//                             mainColor: "#36a8ebff", 
//                             textSecondaryColor: "#1485c7ff", 
//                             borderColor: '#259ce0ff'
//                         }}
//                         isGregorian={true} 
//                         minimumDate={today} 
//                         onSelectedChange={(date) => {
//                             onDateChange(date);
//                         }} 
//                         style={{borderRadius: 15}}
//                         />

                        
//                         <TouchableOpacity onPress={handleClose} style={global.closeButton}>
//                             <Text style={global.closeButtonText}>Close</Text>
//                         </TouchableOpacity>
                    
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );

// }

// export default RenderDatePicker;


import React, { useState } from "react"
import { Modal, TouchableOpacity, View, Text, Platform, Dimensions } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { global } from "./styles";

type Props = {
    onDateChange: (date: string) => void;
    visible: boolean;
    onClose: () => void;
}

const RenderDatePicker = ({ onDateChange, visible, onClose }: Props) => {

    const { width, height } = Dimensions.get('window');

    const today = getToday();
    const [date, setDate] = useState('');

    const handleChange = (propDate: string) => {
        setDate(propDate);
        onDateChange(propDate);
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
                            backgroundColor: "#e3f4fcff", 
                            textHeaderColor: "#000", 
                            textDefaultColor: "#000", 
                            selectedTextColor: "rgba(0, 0, 0, 1)",
                            mainColor: "#36a8ebff", 
                            textSecondaryColor: "#1485c7ff", 
                            borderColor: '#259ce0ff'
                        }}
                        isGregorian={true} 
                        minimumDate={today} 
                        onSelectedChange={handleChange}
                        style={{ borderRadius: 15 }}
                    />
                    
                    <TouchableOpacity onPress={onClose} style={global.closeButton}>
                        <Text style={global.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default RenderDatePicker;