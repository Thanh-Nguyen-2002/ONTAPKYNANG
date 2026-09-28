# 03. useEffect Hook

## 1. Dùng để làm gì?
`useEffect` là một Hook giúp bạn thực hiện các **side effects** (tác dụng phụ) bên trong Functional Component. 
"Side effects" là những việc xảy ra bên ngoài phạm vi của hàm render, ví dụ: gọi API để lấy dữ liệu từ server, tương tác trực tiếp với DOM (ví dụ thay đổi tiêu đề trang web), thiết lập các bộ đếm thời gian (`setTimeout`, `setInterval`), hoặc đăng ký lắng nghe sự kiện (event listeners).

## 2. So sánh với cái tương tự
- **Các Lifecycle Methods trong Class Component (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`):** `useEffect` gom 3 hàm này lại thành một API duy nhất. 
- Thay vì phải nhớ logic nào nằm ở "lúc component vừa sinh ra", logic nào nằm ở "lúc update", `useEffect` cho phép bạn quản lý logic theo tính năng.

## 3. Dùng trong hoàn cảnh nào?
- **Gọi API:** Lấy danh sách sản phẩm từ backend ngay khi trang vừa load.
- **Đăng ký sự kiện (Event Listener):** Lắng nghe sự kiện scroll chuột để hiện/ẩn nút "Back to top".
- **Cập nhật dữ liệu bên ngoài DOM:** Đổi tên tab trình duyệt (`document.title`) theo state hiện tại của ứng dụng.
- **Bộ đếm thời gian:** Làm đồng hồ đếm ngược, slider tự chạy bằng `setInterval`.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Gom chung logic liên quan vào một chỗ (ví dụ: setup và dọn dẹp đi liền với nhau).
- Dễ dàng kiểm soát thời điểm chạy lại bằng mảng phụ thuộc (dependency array).

**Nhược điểm:**
- Khá khó hiểu với người mới, đặc biệt là khái niệm dependency array (mảng phụ thuộc - tham số thứ 2 của useEffect).
- Rất dễ gây lỗi lặp vô hạn (infinite loop) nếu gọi API và setState liên tục mà quên không truyền mảng phụ thuộc `[]`.

## 5. Vì sao dùng nó?
Trong React, hàm component chỉ nên là một hàm tính toán thuần túy (nhận props/state và trả ra giao diện). Nếu bạn gọi API trực tiếp trong thân hàm, API sẽ bị gọi lại vô tội vạ mỗi lần component render. `useEffect` là "khu vực an toàn" để React chạy các tác vụ liên quan đến thế giới bên ngoài một cách có kiểm soát.

## 6. Ví dụ minh họa

```jsx
import { useState, useEffect } from 'react';

export default function UserInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect này chỉ chạy MỘT LẦN DUY NHẤT sau khi component render lần đầu tiên
  // (nhờ vào mảng [] ở cuối)
  useEffect(() => {
    // Giả lập gọi API mất 2 giây
    const timer = setTimeout(() => {
      setUser({ name: 'Nguyễn Văn A', role: 'Admin' });
      setLoading(false);
    }, 2000);
    
    // Cleanup function: Dọn dẹp nếu component bị hủy trước khi timeout chạy
    return () => {
       clearTimeout(timer);
       console.log('Component sắp bị hủy, đã dọn dẹp xong');
    };
  }, []); // <-- Mảng phụ thuộc rỗng = chỉ chạy lúc mount

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p>Tên: {user.name}</p>
      <p>Vai trò: {user.role}</p>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo một Component tên là `WindowSize`.
1. Sử dụng state để lưu chiều rộng (width) của cửa sổ trình duyệt hiện tại.
2. Sử dụng `useEffect` để lắng nghe sự kiện `resize` của cửa sổ (`window.addEventListener('resize', ...)`). Mỗi khi người dùng kéo thay đổi kích thước cửa sổ, cập nhật lại state width.
3. Hiển thị chiều rộng hiện tại ra màn hình (Ví dụ: `Chiều rộng màn hình: 1024px`).
4. **Lưu ý cực kỳ quan trọng:** Đừng quên hàm `cleanup` (return trong useEffect) để remove event listener (`window.removeEventListener`) khi component bị hủy, tránh tràn bộ nhớ.

**Bạn hãy viết code và gửi cho tôi để review nhé!**

==== Ý hiểu 
- useEffect là hook dùng để thực hiện các tác nhân phụ bên trong component
- ví dụ : Call API, thiết lập bộ đếm, tương tác với DOM,... đăg ký sự kiện


