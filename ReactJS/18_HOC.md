# 18. Higher-Order Components (HOC)

## 1. Dùng để làm gì?
HOC không phải là một API của React, nó là một **Design Pattern (Mẫu thiết kế)** trong Javascript.
HOC là một **Hàm** nhận vào một **Component** và trả về một **Component MỚI** đã được "độ" (nâng cấp) thêm tính năng.
Nó dùng để chia sẻ, tái sử dụng logic giao diện giữa nhiều component khác nhau.

## 2. So sánh với cái tương tự
- **Custom Hooks (Ví dụ: `useAuth`):** Cách hiện đại để tái sử dụng logic. Custom hooks xử lý data/logic bên trong component.
- **HOC (Ví dụ: `withAuth`):** Bọc Component lại TỪ BÊN NGOÀI để kiểm soát nó. HOC thường can thiệp vào quá trình Render (ví dụ: Quyết định xem có nên cho Component hiển thị hay không dựa vào quyền user).

## 3. Dùng trong hoàn cảnh nào?
- **Phân quyền (Authorization):** Bọc màn hình Admin bằng HOC `withAdminProtection`. Nếu chưa đăng nhập, đá văng ra trang Login, nếu đăng nhập rồi mới render màn hình Admin.
- Tự động truyền thêm props cho Component (như thư viện Redux phiên bản cũ dùng `connect()`).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Tách biệt logic và giao diện cực kỳ triệt để.
- Có thể kết hợp (compose) nhiều HOC vào cùng 1 Component.

**Nhược điểm:**
- **Wrapper Hell:** Lạm dụng HOC sẽ làm cây Component (React DevTools) hiển thị hàng đống thẻ bọc ngoài vô dụng (vd: `<WithTheme><WithAuth><WithRouter><MyComponent/></WithRouter></WithAuth></WithTheme>`). Rất khó debug.
- Trùng lặp tên Props (Tên props từ HOC truyền vào có thể đè lên tên props có sẵn của Component gốc).

## 5. Vì sao dùng nó?
Mặc dù **Custom Hooks đã thay thế 90% các trường hợp sử dụng của HOC**, bạn vẫn **bắt buộc phải biết HOC**. Vì khi đi làm, bạn sẽ bảo trì các dự án React cũ, và HOC vẫn còn tồn tại rất nhiều trong các codebase đó. Hơn nữa, `React.memo` hay `forwardRef` về bản chất cũng là một dạng HOC.

## 6. Ví dụ minh họa

```jsx
import { useEffect, useState } from 'react';

// 1. ĐÂY LÀ MỘT HOC (Hàm nhận vào Component và trả ra Component)
// Tên HOC thường bắt đầu bằng chữ "with"
function withLoading(WrappedComponent) {
  // Trả về một Component mới bọc ngoài
  return function EnhancedComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Giả lập sau 2 giây thì load xong
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    // Logic can thiệp Render: Nếu đang tải thì hiện chữ Loading, chưa cho hiện Component thật
    if (isLoading) {
      return <div style={{ color: 'red' }}>Đang tải dữ liệu. Xin chờ...</div>;
    }

    // Nếu tải xong, Render Component gốc và truyền lại toàn bộ Props cũ {...props}
    return <WrappedComponent {...props} />;
  };
}

// 2. Một Component bình thường, ngây thơ không biết gì về Loading
function UserProfile({ name }) {
  return <h2>Xin chào người dùng: {name}</h2>;
}

// 3. Sử dụng HOC để "độ" lại Component UserProfile
const UserProfileWithLoading = withLoading(UserProfile);

// 4. Sử dụng
export default function App() {
  return (
    <div>
      <h1>Ví dụ về HOC</h1>
      {/* Component này đã được bọc HOC, nó sẽ tự hiện chữ Loading 2 giây trước khi hiện tên */}
      <UserProfileWithLoading name="Nguyễn Văn A" />
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:**
Tạo một HOC tên là `withAuth(WrappedComponent)`.
1. Bên trong HOC, giả lập một biến `const isLogin = false;`
2. Nếu `isLogin === false`, Component trả về đoạn text: `"Bạn chưa đăng nhập! Hãy đi ra ngoài."`
3. Nếu `isLogin === true`, Component trả về `WrappedComponent` bình thường.

Sau đó, áp dụng HOC đó bọc một component `AdminDashboard` xem kết quả thế nào. (Gửi code HOC của bạn lên đây nhé).
