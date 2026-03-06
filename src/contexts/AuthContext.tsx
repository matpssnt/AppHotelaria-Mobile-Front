import { API_URL } from "@/constants/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, use, useContext, useEffect, useMemo, useState } from "react";

type CartReservation = {
    roomId: number;
    nome: string;
    numero: string;
    qnt_cama_casal: number;
    qnt_cama_solteiro: number;
    preco: number;
    inicio: string;
    fim: string;
    quantidade: number;
}

type AuthContextProps = {
    token: string | null;
    isLoading: boolean;
    signIn: (email: string, senha: string) => Promise<void>;
    signUp: (nome: string, email: string, telefone: string, cpf: string, senha: string) => Promise<void>;
    signOut: () => Promise<void>;
    consultRooms: (inicio: string, fim: string, quantidade: number) => Promise<any[]>;

    cartReservations: CartReservation[];
    addReservation: (reservation: CartReservation) => void;
    //Remover um item específico do carrinho
    cleartCart: () => void;
    //Criar a ordem de pedido com as reservas => Forma de pagamento e adicional
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children } : { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [cartReservations, setCartReservations] = useState<CartReservation[]>([]);
    

    useEffect(() => {
        (async () => {
            
            try {
                const stored = await AsyncStorage.getItem("token");
                if (stored) setToken(stored);
            }

            finally {
                setIsLoading(false);
            }

        })();
    }, []);


    //  Login do usuário
    async function signIn(email: string, senha: string) {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, senha })
        });
        if (!res.ok) {
            const error = await res.json().catch(() => null);
            throw new Error(error?.erro || "Credenciais inválidas");
        }

        const tokenAPI: string = await res.json();

        await AsyncStorage.setItem("token", tokenAPI);
        setToken(tokenAPI);
    }

    // Cadastro de usuário
    async function signUp(nome: string, email: string, telefone: string, cpf: string, senha: string) {
        const res = await fetch(`${API_URL}/login/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome, cpf, telefone, email, senha })
        });

        if (!res.ok) {
            const error = await res.json().catch(() => null);
            throw new Error(error?.erro || "Falha ao cadastrar usuário");
        }

        const tokenAPI: string = await res.json();
        await AsyncStorage.setItem("token", tokenAPI);
        setToken(tokenAPI);
    }
    
    //  Logout do usuário
    async function signOut() {
        await AsyncStorage.removeItem("token");
        setToken(null);
    }

    //  Consulta de quartos disponíveis
    async function consultRooms(inicio: string, fim: string, quantidade: number) {
        const res = await fetch(`${API_URL}/roomsAvailable`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({inicio, fim, quantidade}),
        });

        if (!res.ok) {
            const error = await res.json().catch(() => null);
            throw new Error(error?.erro || "Falha na consulta de quartos!");
        }
        return await res.json();
    }

    //  Adicionar reserva ao carrinho
    const addReservation = (reservation: CartReservation) => {
        
    }

    const cleartCart = () => {

    }
    
    const value = useMemo(() => (
        {
            token,
            isLoading,
            signIn,
            signUp,
            signOut,
            consultRooms,
            cartReservations,
            addReservation,
            cleartCart
        }
    ), [token, isLoading]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth() deve ser usado dentro de AuthProvider");
    return ctx;
}

export default AuthProvider;
