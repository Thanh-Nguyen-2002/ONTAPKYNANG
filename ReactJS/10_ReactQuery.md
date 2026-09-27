# 10. Fetching Data & Caching (React Query / TanStack Query)

## 1. Dùng để làm gì?
`React Query` (hiện tại gọi là `TanStack Query`) là một thư viện chuyên dụng để **gọi API (Data Fetching)** và quản lý dữ liệu lấy từ Server. Nó tự động xử lý các trạng thái phức tạp như `loading` (đang tải), `error` (lỗi), tự động lưu cache (bộ nhớ tạm), và tự động gọi lại API để làm mới dữ liệu khi cần.

## 2. So sánh với cái tương tự
- **Cách truyền thống (Dùng `useEffect` + `useState` + `fetch`/`axios`):** Bạn phải tự viết state cho `data`, state cho `isLoading`, state cho `isError`. Code rất dài, chưa kể vấn đề rò rỉ bộ nhớ (memory leak) hoặc gọi API thừa thãi nếu không rành về cleanup function.
- **React Query:** Xóa sổ 80% code dư thừa. Chỉ với 1 dòng code, bạn có ngay cả dữ liệu, trạng thái loading, và xử lý lỗi. Thêm vào đó là khả năng cache siêu việt (người dùng chuyển trang đi rồi quay lại sẽ thấy data ngay lập tức mà không phải chờ load lại từ đầu).

## 3. Dùng trong hoàn cảnh nào?
- Mọi dự án React cần tương tác mạnh với API (Backend). 
- Ứng dụng cần dữ liệu luôn được cập nhật theo thời gian thực (ví dụ tự động refresh data ngầm mỗi 5 giây).
- Ứng dụng có cơ chế cuộn vô tận (Infinite Scrolling) hoặc Phân trang (Pagination).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Trải nghiệm người dùng (UX) cực tốt vì dữ liệu được cache.
- Code ngắn đi đáng kể, dễ bảo trì.
- Công cụ Debug (Devtools) tuyệt vời đi kèm giúp theo dõi các luồng gọi API.

**Nhược điểm:**
- Thêm một khái niệm và thư viện mới phải học.
- Kích thước bundle web sẽ tăng lên một chút (tuy nhiên hoàn toàn xứng đáng).

## 5. Vì sao dùng nó?
React không có sẵn giải pháp tiêu chuẩn nào cho việc gọi API. React Query đã trở thành "tiêu chuẩn vàng" (Standard) trong ngành công nghiệp hiện nay để xử lý Server State (trạng thái trên máy chủ).

## 6. Ví dụ minh họa

```jsx
// Cài đặt: npm install @tanstack/react-query
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Hàm lấy dữ liệu bình thường
const fetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return data;
};

export default function TodoList() {
  // Chỉ 1 dòng code thần thánh!
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'], // Tên của bộ nhớ cache
    queryFn: fetchTodos  // Hàm gọi API
  });

  if (isLoading) return <h2>Đang tải dữ liệu... Đợi xíu!</h2>;
  if (isError) return <h2>Ôi hỏng rồi: {error.message}</h2>;

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Giả sử bạn đang làm màn hình xem thông tin chi tiết một User.
Bạn có hàm gọi API là `getUserById(userId)`.
Làm sao để dùng `useQuery` lấy dữ liệu User này? Điểm mấu chốt: Thuộc tính `queryKey` lúc này phải là gì để React Query phân biệt được User số 1 và User số 2 (tránh việc cache nhầm data của nhau)? 

*Gợi ý: `queryKey` là một mảng, bạn có thể truyền nhiều biến vào đó!*
