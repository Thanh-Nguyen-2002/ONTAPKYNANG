import { createContext, ReactNode, useContext, useState } from 'react';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}
// 1. Khởi tạo Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

// 2. Tạo Component Provider bọc ngoài các component con
export function ThemeProvider({ children }: ThemeProviderProps) {
    // Trạng thái lưu trữ (sáng hoặc tối)
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Cung cấp dữ liệu (value) cho các Component con ở bên trong
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {/* 
        Đoạn div này giúp đổi màu nền toàn trang web 
        tùy theo giá trị isDarkMode 
      */}
            <div className={isDarkMode ? 'bg-gray-900 text-white min-h-screen transition-colors duration-300' : 'bg-gray-50 text-black min-h-screen transition-colors duration-300'}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

// 3. Tự viết luôn 1 Custom Hook để dùng Context này cho lẹ
// Thay vì các component khác phải import cả useContext và ThemeContext, 
// giờ chỉ cần gọi useTheme() là xong!
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme phải được dùng bên trong ThemeProvider');
    }
    return context;
}
