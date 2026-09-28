import { createContext, ReactNode, useContext, useState } from "react";

// tạo interface định nghĩa type
interface AuthContextType {
    user: string | null;
    login: (usename: string) => void;
    logout: () => void;
}

// Khởi tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tạo provider
interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => setUser(username);

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


// Tạo custom hook
export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth bắt buộc phauir dùng trong AuthProvider')
    }

    return context;
}
