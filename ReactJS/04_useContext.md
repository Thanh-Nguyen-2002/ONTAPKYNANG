# 04. Context API & useContext Hook

## 1. Dùng để làm gì?
`Context API` (kết hợp với hook `useContext`) là một cách để chia sẻ dữ liệu giữa các Component trong React mà không cần phải truyền dữ liệu (props) qua từng lớp Component trung gian. Nó giống như việc bạn tạo ra một "biến toàn cục" cho một nhánh Component để chúng có thể truy cập bất cứ lúc nào.

## 2. So sánh với cái tương tự
- **Props thông thường:** Để truyền dữ liệu từ Component Ông nội xuống Component Cháu, bạn phải truyền qua Component Cha (Ông -> Cha -> Cháu). Hiện tượng này gọi là **Props Drilling** (khoan props), gây dài dòng và khó bảo trì nếu cấu trúc Component quá sâu.
- **Redux / Zustand (Thư viện quản lý State):** Context API là hàng "chính chủ" của React, dễ cài đặt cho các ứng dụng nhỏ và vừa. Redux/Zustand mạnh mẽ hơn, tối ưu hiệu năng tốt hơn cho các dự án lớn, trạng thái phức tạp.

## 3. Dùng trong hoàn cảnh nào?
Dùng cho những dữ liệu mang tính "toàn cầu" (global) của ứng dụng mà rất nhiều Component ở nhiều nơi khác nhau cần đọc, ví dụ:
- Trạng thái đăng nhập của người dùng (User Profile, Token).
- Giao diện sáng/tối (Theme: Light/Dark mode).
- Ngôn ngữ đang chọn (Đa ngôn ngữ - i18n).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Giải quyết triệt để vấn đề "Props Drilling". Code gọn gàng hơn nhiều.
- Dễ học, không cần cài đặt thêm thư viện bên ngoài vì nó có sẵn trong React.

**Nhược điểm:**
- **Vấn đề hiệu năng (Performance):** Bất cứ khi nào giá trị của Context thay đổi, TẤT CẢ các component đang sử dụng (consume) Context đó đều sẽ bị re-render, kể cả khi chúng chỉ dùng một phần rất nhỏ dữ liệu.
- Rất khó để tái sử dụng Component bên ngoài Context của nó.

## 5. Vì sao dùng nó?
Khi bạn cảm thấy mệt mỏi với việc phải truyền một prop như `isLoggedIn` hoặc `theme` qua 5-6 tầng component con cháu không hề sử dụng prop đó mà chỉ đóng vai trò truyền đi tiếp. 

## 6. Ví dụ minh họa

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Tạo Context
const ThemeContext = createContext();

// Component Con (Nằm rất sâu bên trong)
function ThemedButton() {
  // 3. Đọc dữ liệu từ Context mà không cần nhận props
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      style={{ 
        background: theme === 'light' ? '#fff' : '#333', 
        color: theme === 'light' ? '#000' : '#fff' 
      }}
    >
      Đổi giao diện (Đang ở mode {theme})
    </button>
  );
}

// Component App (Component Cao nhất)
export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    // 2. Bọc ứng dụng (hoặc một phần) bằng Provider và truyền value
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: '50px' }}>
        <h1>Ví dụ về Context</h1>
        {/* Không cần truyền props theme xuống ThemedButton */}
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
1. Tạo một `AuthContext` lưu trữ thông tin đăng nhập: `{ isAuth: boolean, login: function, logout: function }`.
2. Tạo Component `Navbar`: Nếu `isAuth` là `true` thì hiện chữ "Chào mừng User" và nút "Đăng xuất". Nếu `false` thì hiện nút "Đăng nhập".
3. Tạo Component `App` cung cấp (Provider) `AuthContext` bao bọc lấy `Navbar`.

**Hãy viết code và gửi tôi kiểm tra!**
