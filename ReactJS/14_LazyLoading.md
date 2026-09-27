# 14. Code Splitting & Lazy Loading (Tối ưu tải trang)

## 1. Dùng để làm gì?
Khi bạn làm xong dự án (build), React gom **toàn bộ** code của bạn vào một file Javascript duy nhất cực kỳ to (có thể lên tới vài Megabyte). Nếu người dùng vào web, họ phải tải xong file khổng lồ này thì web mới hiện lên, gây ra hiện tượng tải trang rất lâu.
`Lazy Loading` (tải lười biếng) và `Code Splitting` (chia nhỏ code) kết hợp với thẻ `Suspense` giúp cắt file khổng lồ kia ra thành nhiều mảnh nhỏ. Màn hình nào cần thì mới tải mảnh code của màn hình đó.

## 2. So sánh với cái tương tự
- **Tải bình thường (Eager Loading):** Vào trang chủ, nhưng trình duyệt phải ngầm tải luôn cả code của trang "Chi tiết sản phẩm", trang "Admin", trang "Cài đặt"... Rất lãng phí băng thông và chậm!
- **Lazy Loading (`React.lazy`):** Vào trang chủ, CHỈ tải code trang chủ. Bấm sang trang Admin, lúc đó mới bắt đầu lên mạng tải code của trang Admin về.

## 3. Dùng trong hoàn cảnh nào?
- Áp dụng vào **React Router** (mỗi Route / mỗi Trang là một lần Lazy Load).
- Các Component rất nặng mà không hiện ra ngay lúc đầu: Giới thiệu 3D, Bản đồ Google Maps, Modal/Popup có chứa thư viện soạn thảo văn bản.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Giảm dung lượng file tải lần đầu cực mạnh (Initial Load Time). Web hiện lên tức thì.
- Tối ưu điểm Google PageSpeed Insights (chuẩn SEO).

**Nhược điểm:**
- Khi người dùng bấm chuyển trang lần đầu, họ sẽ phải đợi một tí xíu (vài mili-giây) để trình duyệt tải code của trang đó về, gây cảm giác hơi giật nếu mạng chậm.
- Bắt buộc phải dùng chung với `<Suspense>` để hiện hiệu ứng "Loading" trong lúc chờ tải code.

## 5. Vì sao dùng nó?
Đứng ở góc độ người dùng, không ai muốn chờ quá 3 giây để nhìn thấy một trang web. Lazy Loading là kỹ thuật quan trọng nhất để cải thiện Tốc độ web (Performance) trong React.

## 6. Ví dụ minh họa

```jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import bình thường (Code sẽ bị dính chung vào 1 cục)
import Home from './pages/Home';

// Import kiểu LAZY (Code được tách ra file riêng, khi nào gọi mới tải)
const HeavyDashboard = lazy(() => import('./pages/HeavyDashboard'));
const Settings = lazy(() => import('./pages/Settings'));

export default function App() {
  return (
    <BrowserRouter>
      <nav><Link to="/">Trang Chủ</Link> | <Link to="/dashboard">Bảng điều khiển</Link></nav>

      {/* 
        Bắt buộc phải bọc <Suspense> bên ngoài.
        fallback chính là giao diện Loading hiển thị trong lúc mạng tải file JS về 
      */}
      <Suspense fallback={<h2 style={{ color: 'blue' }}>Đang tải màn hình... Vui lòng đợi!</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<HeavyDashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

## 7. Bài tập thực hiện
**Câu hỏi tư duy:** 
Bạn có một cái Nút "Bấm để mở Popup Bản đồ". Bên trong Popup chứa component `<GoogleMap>` rất nặng.
Bạn có nên dùng `React.lazy` cho Component `<GoogleMap>` này không? Nếu có, thì khi người dùng bấm nút, điều gì sẽ xảy ra trên màn hình trước khi Bản đồ thực sự hiện lên?
