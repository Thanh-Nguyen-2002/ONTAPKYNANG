import { QueryClient } from '@tanstack/react-query';

// Khởi tạo QueryClient với các cấu hình mặc định cho toàn bộ dự án
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // Tùy chọn: không gọi lại API khi chuyển tab trình duyệt
            retry: 0, // Tùy chọn: gọi lại 1 lần nếu API bị lỗi tạm thời
            staleTime: 5 * 60 * 1000, // Dữ liệu được coi là "tươi" trong 5 phút, không cần gọi lại
        },
    },
});
