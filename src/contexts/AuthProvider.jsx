import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        // Có thể lưu thông tin user vào localStorage để giữ trạng thái đăng nhập
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // Kiểm tra xem có user đã đăng nhập trong localStorage không
    useState(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
} 