# 16. SCSS (SASS) trong React

## 1. Dùng để làm gì?
SCSS là một **CSS Preprocessor (Tiền xử lý CSS)**. Hãy tưởng tượng CSS thông thường khá "ngu ngốc" vì bạn phải viết đi viết lại nhiều đoạn code. SCSS cấp cho CSS "sức mạnh của ngôn ngữ lập trình", cho phép bạn dùng **Biến (Variables)**, **Viết lồng nhau (Nesting)**, và **Hàm (Mixins)** để viết CSS gọn gàng, có tổ chức hơn trước khi nó được dịch ngược lại thành CSS thuần cho trình duyệt hiểu.

## 2. So sánh với cái tương tự
- **CSS thuần:** Phẳng, không lồng nhau. Mỗi lần đổi màu chủ đạo (ví dụ từ Xanh sang Đỏ), bạn phải Ctrl+F tìm và thay thế (Find & Replace) trên toàn bộ file.
- **SCSS:** Cho phép định nghĩa biến `$primary-color: blue;`. Cho phép viết CSS lồng nhau y như cấu trúc thẻ HTML.
- **Tailwind / Styled Components:** SCSS là hướng tiếp cận truyền thống (tách biệt file `.scss` và file `.js`), trong khi Tailwind/Styled Components là xu hướng hiện đại trộn lẫn giao diện và logic. Nhiều công ty lớn vẫn ưu tiên SCSS vì nó giữ cho code JS sạch sẽ.

## 3. Dùng trong hoàn cảnh nào?
Dự án có đội ngũ Designer chuyên nghiệp giao bản thiết kế UI/UX phức tạp. Dự án không sử dụng Tailwind CSS mà muốn xây dựng một bộ System Design CSS thủ công, chặt chẽ, dễ tùy biến giao diện sáng/tối (Dark/Light mode).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Cấu trúc `Nesting` (lồng nhau) giúp code dễ đọc hơn hàng nghìn lần so với CSS thường.
- Dễ dàng tạo các hàm Mixin để tái sử dụng hiệu ứng (như hiệu ứng shadow, animation).

**Nhược điểm:**
- Vẫn có khả năng bị trùng lặp tên class nếu không kết hợp với **CSS Modules** (`.module.scss`).
- Cần cài đặt thêm thư viện (`npm install sass`).

## 5. Vì sao dùng nó?
Vì viết CSS thuần ở năm 2026+ cho một dự án lớn là một "cực hình". SCSS là tiêu chuẩn tối thiểu nếu bạn quyết định đi theo con đường tách biệt CSS ra khỏi file JS.

## 6. Ví dụ minh họa

**Bước 1:** Cài đặt `npm install sass`
**Bước 2:** Tạo file `Button.scss`
```scss
// Khai báo biến
$primary-color: #3498db;
$hover-color: #2980b9;

// Khai báo Mixin (như một hàm) để tái sử dụng
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Cú pháp viết lồng nhau (Nesting)
.custom-button {
  @include flex-center; // Gọi Mixin
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: 0.3s;

  // Lồng phần tử con, & đại diện cho chính class .custom-button
  &:hover {
    background-color: $hover-color;
    cursor: pointer;
  }

  span { // Áp dụng cho thẻ span nằm TRONG .custom-button
    font-weight: bold;
    margin-left: 5px;
  }
}
```

**Bước 3:** Nhúng vào React Component (`Button.jsx`)
```jsx
import './Button.scss';

export default function Button() {
  return (
    <button className="custom-button">
      Bấm tôi <span>Ngay!</span>
    </button>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Dựa vào kiến thức "Nesting" (Lồng nhau) của SCSS trong ví dụ trên, hãy chuyển đổi đoạn CSS thuần rườm rà dưới đây thành SCSS lồng nhau gọn gàng:
```css
.card { padding: 20px; border: 1px solid #ccc; }
.card .card-title { font-size: 24px; color: black; }
.card .card-title:hover { color: blue; }
.card .card-description { font-size: 14px; color: gray; }
```
*(Hãy viết cấu trúc lồng nhau sao cho chữ `.card` chỉ xuất hiện đúng 1 lần thôi nhé!)*
