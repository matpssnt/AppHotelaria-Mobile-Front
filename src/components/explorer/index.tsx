import { View, TouchableOpacity, Dimensions, Text, Alert, ActivityIndicator, ScrollView } from "react-native";
import { useState } from "react";

import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import RenderDatePicker from "../ui/DatePicker";
import RoomCard from "../ui/RoomCard";
import InputSpin from "../ui/inputSpin";
import { global } from "../ui/styles";
import { API_URL } from "@/constants/api";
import { useAuth } from "@/contexts/AuthContext";

const RenderExplorer = () => {

    const { consultRooms, addReservation } = useAuth();

    const { width, height } = Dimensions.get('window');

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [qntGuests, setQntGuests] = useState<number>(1);

    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);

    const [roomsAvailable, setRoomsAvailable] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<any>(null);

    const handleOpenReserve = (room: any) => {
        addReservation({
            roomId: room.id,
            nome: room.nome,
            numero: room.numero,
            qnt_cama_casal: room.qnt_cama_casal,
            qnt_cama_solteiro: room.qnt_cama_solteiro,
            preco: Number(room.preco),
            inicio: checkIn,
            fim: checkOut,
            quantidade: qntGuests
        });
        Alert.alert("Sucesso!", "Quarto adicionado ao carrinho.");
    };

    const handleSearchRooms = async () => {
        if (!checkIn || !checkOut) {
            Alert.alert("Selecione as datas de check-in e check-out.");
            return;
        }

        setIsLoading(true);
        setRoomsAvailable([]);

        try {
            const room = await consultRooms(checkIn, checkOut, qntGuests);
            setRoomsAvailable(room || []);
            console.log(room);
        }
        catch (error: any) {
            if (!error?.message.includes("Encontrado")) {
                Alert.alert(error?.message || "Não foi possível consultar os quartos.");
            }
            setRoomsAvailable([]);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthContainer>
            {/* children */}
            <View style={{flex: 1, paddingHorizontal: width * 0.01}}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: height * 0.03,
                    gap: width * 0.02
                }}
                >
// Check-in
                <View style={{ flex: 0 }}>
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
                        onSelectedChange={(date) => {
                            setCheckIn(date);
                        }}
                    />
                    
                </View>
// Check-out
                <View style={{ flex: 1}}>
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
                        onSelectedChange={(date) => {
                            setCheckOut(date);
                        }}
                    />
                </View>
                </View>

// InputSpin
                <View style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    <Text style={global.label}>Quantidade de hóspedes</Text>
                    <View style={{alignItems: 'center', marginTop: 10}}>
                        <InputSpin
                            guests={(qntGuests)}
                            onSelectSpin={(guests) => {
                                setQntGuests(guests);
                            }}
                            minGuests={1}
                            maxGuests={6}
                            stepNumber={1}
                            onColorMax="rgba(7, 4, 43, 0.94)"
                            onColorMin="rgba(7, 4, 43, 0.94)"
                        />
                    </View>
                </View>

// Botão de consulta
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(7, 4, 43, 0.94)',
                        height: height * 0.07,
                        padding: 18,
                        borderRadius: 12,
                        marginTop: 25,
                        alignItems: 'center'
                    }}
                    onPress={handleSearchRooms}
                    disabled={isLoading}
                >

                    {isLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Consultar quartos</Text>
                    )}

                </TouchableOpacity>
                
// RoomCard
                {roomsAvailable.length > 0 ? (
                    <View style={{marginBottom: 25, width: '100%'}}>
                        <Text style={[global.label, { marginTop: height * 0.05, textAlign: 'center' }]}>Opções encontradas:</Text>
                        <ScrollView 
                            horizontal showsHorizontalScrollIndicator={false} 
                            snapToInterval={width * 0.05}
                        >
                            {roomsAvailable.map((room) => (

                                <RoomCard
                                    key={room.id}
                                    image={room.imagens?.length > 0 
                                        ? { uri: room.imagens[0].url } 
                                        : require('../../../assets/images/slide-1.jpg')
                                    }
                                    label={room.nome}
                                    icon={{ 
                                        lib: 'MaterialIcons', 
                                        name: 'king-bed' 
                                    }}
                                    description={{
                                        title: "Descrição do quarto",
                                        text: ` ${room.qnt_cama_casal} cama(s) de casal\n ${room.qnt_cama_solteiro} cama(s) de solteiro \n`,
                                        price: Number(room.preco),
                                    }}
                                    onPressReserve={() => handleOpenReserve(room)}
                                />

                            ))}

                        </ScrollView>
                    </View>

                ) : (

                    <View style={{marginBottom: 25, width: '100%'}}>
                        <Text style={[global.label, { marginTop: height * 0.05, textAlign: 'center' }]}>Nenhuma opção encontrada!</Text>
                    
                        

                    </View>
                )}

                {roomsAvailable.length === 0 && !isLoading && (
                    <Text style={{textAlign: 'center', color: 'rgb(255, 36, 36)', marginTop: 20, fontSize: 16}}>Realize a busca para consultar os quartos disponíveis</Text>
                )}

            </View>

            
            

            {/* <TouchableOpacity
            style={{ 
                  backgroundColor: 'rgba(7, 4, 43, 0.94)',
                  height: height * 0.07,
                  padding: 18, 
                  borderRadius: 12, 
                  marginTop: 25, 
                  alignItems: 'center' 
                }}
                onPress={() => {
                  // Lógica para confirmar a reserva pode ser adicionada aqui
                  setIsReserveModalOpen(false);
                }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Confirmar Pedido</Text>
                
            </TouchableOpacity> */}

        </AuthContainer>
    );
}

export default RenderExplorer;
