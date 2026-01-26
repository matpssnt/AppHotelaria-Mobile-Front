import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import { useState } from "react";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import RenderDatePicker from "../ui/DatePicker";
import RoomCard from "../ui/RoomCard";
import InputSpin from "../ui/inputSpin";
import { global } from "../ui/styles";

const RenderExplorer = () => {

    const { width, height } = Dimensions.get('window');

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);


    const [qntGuests, setQntGuests] = useState("");

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
                    
                        <RenderDatePicker
                            visible={showCheckIn}
                            onClose={() => setShowCheckIn(false)}
                            onDateChange={(date) => {
                                setCheckIn(date);
                            }}
                        />
                        
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

                        <RenderDatePicker
                            visible={showCheckOut}
                            onClose={() => setShowCheckOut(false)}
                            onDateChange={(date) => {
                                setCheckOut(date);
                            }}
                        />

                    </View>

                        <View style={global.label}>
                            <Text>Quantidade de hóspedes</Text>
                            <InputSpin 
                                onSelectSpin={(guests) => {
                                    setQntGuests(guests);
                                }}
                            />
                        </View>

                </View>
            
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