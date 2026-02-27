/* Função: Definir o fluxo de navegação entre as telas disponiveis em Tab Navigator: Explorar, Reservas, Perfil, */
import { FontAwesome6 } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const TabLayout = () => {
    const { token, isLoading } = useAuth();

    if (isLoading) return null;
    {/* Componente de Loading */}

    if (!token) {
        return <Redirect href="/(auth)" />;
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#36a8ebff' }}>
            <Tabs.Screen name="reservations" options={{title: 'Reservas', tabBarIcon: ({ color }) => 
                <FontAwesome6 name='calendar-check' size={28} color={color} />
            }}/>

            <Tabs.Screen name="explorer" options={{title: 'Explorar', tabBarIcon: ({ color }) =>
                <FontAwesome6 name='compass' size={28} color={color} />
            }}/>

            <Tabs.Screen name="account" options={{title: 'Perfil', tabBarIcon: ({ color }) =>
                <FontAwesome6 name='user-pen' size={28} color={color} />
            }}/>
        </Tabs>
    );
}

export default TabLayout;