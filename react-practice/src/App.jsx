import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { queryClient } from './utils/queryClient';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" richColors />
            {/* Bọc ThemeProvider để nó cung cấp giao diện sáng/tối cho toàn web */}
            <ThemeProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
