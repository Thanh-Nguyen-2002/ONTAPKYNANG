# 08. React Router (Chuyển trang)

## 1. Dùng để làm gì?
React Router là một thư viện bên ngoài (không tích hợp sẵn trong nhân React) giúp bạn xây dựng tính năng **chuyển trang** (routing). Nó điều hướng người dùng giữa các màn hình (ví dụ: Trang chủ, Sản phẩm, Giới thiệu) dựa trên đường dẫn (URL) của trình duyệt.

## 2. So sánh với cái tương tự
- **Thẻ `<a>` trong HTML thuần:** Khi bấm vào thẻ `<a>`, trình duyệt sẽ tải lại (reload) TOÀN BỘ trang web. Chớp màn hình trắng, tải lại CSS, JS từ đầu. Rất chậm!
- **Component `<Link>` của React Router:** Khi bấm vào, nó chỉ thay thế phần ruột Component ở giữa màn hình, giữ nguyên Layout (như Header, Footer) và **KHÔNG** tải lại trang. Đây gọi là kiến trúc **SPA (Single Page Application - Ứng dụng trang đơn)**.

## 3. Dùng trong hoàn cảnh nào?
Dùng cho 99% các dự án React web. Chỉ trừ khi trang web của bạn chỉ có đúng một màn hình duy nhất (như một Landing page giới thiệu sự kiện), còn lại nếu có Menu chuyển trang, bạn cần React Router.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Mang lại trải nghiệm mượt mà, tốc độ chuyển trang tính bằng mili-giây (vì không tải lại trang).
- Cung cấp các công cụ mạnh mẽ: Lấy tham số từ URL (ví dụ: `/product/123`), bảo vệ trang (chỉ cho admin vào).

**Nhược điểm:**
- Cần cài đặt thư viện ngoài (`npm install react-router-dom`).
- Ở những lần update version lớn (như từ v5 lên v6), cú pháp thay đổi khá nhiều khiến lập trình viên phải học lại.

## 5. Vì sao dùng nó?
Vì React vốn chỉ là thư viện làm Giao diện (View). Nó không biết URL là gì. React Router là mảnh ghép bắt buộc phải có để biến các Component rời rạc thành một Website hoàn chỉnh có điều hướng.

## 6. Ví dụ minh họa

Cần cài đặt: `npm install react-router-dom`

```jsx
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Trang chủ
function Home() {
  return <h2>Trang chủ</h2>;
}

// Trang chi tiết sản phẩm
function ProductDetail() {
  // Hook lấy tham số từ URL
  const { id } = useParams();
  return <h2>Chi tiết Sản phẩm có ID là: {id}</h2>;
}

// Component Chính (App)
export default function App() {
  return (
    // 1. Phải bọc toàn bộ app bằng BrowserRouter
    <BrowserRouter>
      {/* Menu dùng <Link> thay vì <a> */}
      <nav style={{ padding: 10, background: '#eee' }}>
        <Link style={{ marginRight: 20 }} to="/">Trang chủ</Link>
        <Link to="/product/99">Sản phẩm số 99</Link>
      </nav>

      {/* Phần ruột sẽ thay đổi tùy theo URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* :id là tham số động */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo cấu trúc Routing cho một ứng dụng Blog nhỏ gồm 3 trang:
1. `Trang chủ (/):` Hiển thị danh sách 2 bài viết giả lập (chỉ cần in ra tiêu đề). Mỗi tiêu đề là một `<Link>` trỏ đến trang chi tiết.
2. `Trang Giới thiệu (/about):` Chỉ hiện chữ "Đây là blog của tôi".
3. `Trang Chi tiết bài viết (/post/:postId):` Lấy ID từ URL (dùng `useParams`) và hiển thị: "Bạn đang xem bài viết số: [ID]".
4. Ở Layout tổng, hãy làm một thanh điều hướng (Navbar) có link về Trang chủ và Giới thiệu.

**Bài này bạn có thể mường tượng cách làm, hoặc code và gửi tôi xem cấu trúc nhé!**
