import { View, TouchableOpacity, Dimensions } from "react-native";
import { useState } from "react";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import RenderDatePicker from "../ui/DatePicker";
import RoomCard from "../ui/RoomCard";

import { global } from "../ui/styles";

const RenderExplorer = () => {

    const { width, height } = Dimensions.get('window');

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const [calendar, setCalendar] = useState<"checkin" | "checkout"> ();

    return (
        <AuthContainer>
                {/* children */}
                <View style={global.container}>
                    <TouchableOpacity onPress={() => setCalendar('checkin')}>
                        <TextField
                            label='Check-in'
                            icon={{lib: 'MaterialIcons', name: 'calendar-month'}}
                            placeholder="Selecione a data"
                            value={checkIn}
                        />
                            
                            {/* <View style={{flex:1, flexDirection:"row", backgroundColor:"#d5fcfd62", borderRadius: 10}}>
                                <RenderDatePicker onDateChange={handleCheckinChange}/>
                                <RenderDatePicker onDateChange={handleCheckoutChange}/>
                            </View>
                            <ScrollView horizontal={true}>
                                <RoomCard />
                                <RoomCard />
                                <RoomCard />
                            </ScrollView> */}
                        
                    </TouchableOpacity>

                    {calendar === 'checkin' && (
                        <RenderDatePicker onDateChange={(date) => {
                            setCheckIn(date);
                        }}/>
                    )}

                    <TouchableOpacity onPress={() => setCalendar('checkout')}>
                        <TextField
                            label="Check-out"
                            icon={{lib: 'MaterialIcons', name: 'calendar-month'}}
                            placeholder="Selecione a data"
                            value={checkOut}
                        />
                    </TouchableOpacity>

                    {calendar === 'checkout' && (
                        <RenderDatePicker onDateChange={(date) => {
                            setCheckOut(date);
                        }}/>
                    )}

                </View>
        </AuthContainer>
    );
}

export default RenderExplorer;