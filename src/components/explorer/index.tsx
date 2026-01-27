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


    const [qntGuests, setQntGuests] = useState<number>(1);

    return (
        <AuthContainer>
            {/* children */}
            <View style={{display: 'flex', justifyContent: 'center'}}>
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

                <View style={{display: "flex", flexDirection: "column"}}>
                    <Text style={global.label}>Quantidade de hóspedes</Text>
                    <InputSpin
                        guests={(qntGuests)}
                        onSelectSpin={(guests) => {
                            setQntGuests(guests);
                        }}
                        minGuests={1}
                        maxGuests={6}
                        stepNumber={6}
                        onColorMax="#253241ff"
                        onColorMin="#253241ff"
                    />

                    <InputSpin
                        guests={(qntGuests)}
                        onSelectSpin={(guests) => {
                            setQntGuests(guests);
                        }}
                        minGuests={1}
                        maxGuests={6}
                        stepNumber={6}
                        onColorMax="rgb(36, 111, 197)"
                        onColorMin="rgb(19, 102, 197)"
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