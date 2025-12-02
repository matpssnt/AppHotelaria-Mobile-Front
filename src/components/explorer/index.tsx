import { View, TouchableOpacity, Dimensions } from "react-native";
import { useState } from "react";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import RenderDatePicker from "../ui/DatePicker";
import RoomCard from "../ui/RoomCard";

const RenderExplorer = () => {

    const { width, height } = Dimensions.get('window');

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    // const [calendar, setCalendar] = useState<"checkin" | "checkout"> ();

    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);

    return (
        <AuthContainer>
                {/* children */}
                <View style={{display: 'flex', flexDirection: 'row', gap: width * 0.05, justifyContent: 'center', marginTop: width * -0.15, marginBottom: width * 0.1}}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <TouchableOpacity onPress={() => setShowCheckIn(true)}>
                            <View style={{width: width * 0.42}}>
                                <TextField
                                    label='Check-in'
                                    icon={{lib: 'MaterialIcons', name: 'calendar-month'}}
                                    placeholder="Selecione a data"
                                    value={checkIn}
                                    editable={false}
                                />
                            </View>
                        </TouchableOpacity>

                        
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column'}}>
                        <TouchableOpacity onPress={() => setShowCheckOut(true)}>
                            <View style={{width: width * 0.42}}>
                                <TextField
                                    label="Check-out"
                                    icon={{lib: 'MaterialIcons', name: 'calendar-month'}}
                                    placeholder="Selecione a data"
                                    value={checkOut}
                                    editable={false}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <RenderDatePicker
                    visible={showCheckIn}
                    onClose={() => setShowCheckIn(false)}
                    onDateChange={(date) => {
                        setCheckIn(date);
                    }}
                />

                <RenderDatePicker
                    visible={showCheckOut}
                    onClose={() => setShowCheckOut(false)}
                    onDateChange={(date) => {
                        setCheckOut(date);
                    }}
                />
            
            <RoomCard 
                image={require('../../../assets/images/slide-1.jpg')}
                label="Suíte Pixie"
                icon={{
                  lib: "MaterialIcons",
                  name: "king-bed"
                }}
                description={{
                  title: "Características do quarto",
                  text: "1 cama de casal\n2 camas de solteiro",
                  price: 200.00
                }}
            />

        </AuthContainer>
    );
}

export default RenderExplorer;


// {calendar === 'checkout' && (
//     <RenderDatePicker onDateChange={(date) => {
//         setCheckOut(date);
//     }}/>
// )}