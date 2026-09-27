# 13. Styling trong React (Tailwind CSS & Styled Components)

## 1. Dùng để làm gì?
Mặc dù bạn có thể dùng file `.css` bình thường cho React, nhưng khi dự án lớn, việc đặt tên class rất dễ bị trùng lặp, code CSS khó quản lý. 
Vì vậy, người ta sinh ra các thư viện để giải quyết vấn đề CSS. Nổi bật nhất hiện nay là **Tailwind CSS** (Utility-first CSS) và **Styled Components** (CSS-in-JS).

## 2. So sánh các cách viết CSS
- **CSS thuần / SCSS:** Phải tạo thêm 1 file `.css` bên cạnh, nghĩ ra tên class (vd: `.header-title`), dễ đụng độ tên class.
- **CSS Modules (`style.module.css`):** React tự băm tên class thành một chuỗi loằng ngoằng (vd: `.header-title_1x2yz`) để chống trùng lặp.
- **Styled Components:** Viết mã CSS **NGAY TRONG FILE JAVASCRIPT**. Nó tạo ra một Component mới mang theo style đó luôn.
- **Tailwind CSS:** Cung cấp hàng ngàn class có sẵn (ví dụ: `text-center`, `bg-red-500`, `p-4`). Bạn chỉ việc lắp ráp chúng ngay trên thẻ HTML mà không cần rời mắt khỏi file JS, không cần nghĩ tên class.

## 3. Dùng trong hoàn cảnh nào?
- **Styled Components:** Thích hợp khi làm các dự án có hệ thống Design System riêng biệt, phức tạp, cần đổi style dựa trên `props` linh hoạt.
- **Tailwind CSS:** Thích hợp cho **mọi dự án hiện nay** từ nhỏ tới cực lớn. Tốc độ gõ code nhanh gấp 5 lần so với viết CSS thuần. Đây đang là xu hướng số 1 thế giới.

## 4. Ưu điểm và Nhược điểm (Tập trung Tailwind CSS)
**Ưu điểm:**
- Cực kì nhanh. Không bao giờ phải đặt tên class hay chuyển tab qua lại giữa file JS và CSS.
- File CSS cuối cùng xuất ra rất nhẹ (vì nó tự động xóa những class không dùng đến).

**Nhược điểm:**
- Ban đầu nhìn code rất sợ vì thẻ HTML sẽ chứa một đoạn class dài loằng ngoằng, trông hơi bẩn (ugly code).
- Mất thời gian 1-2 tuần đầu để học thuộc tên class của nó.

## 5. Vì sao dùng nó?
Để tăng tốc độ phát triển (velocity) và dễ dàng bảo trì. Khi bạn xóa một component, CSS của nó cũng biến mất theo (với Tailwind), không sợ để lại CSS rác như cách truyền thống.

## 6. Ví dụ minh họa

```jsx
// --- CÁCH 1: DÙNG STYLED COMPONENTS ---
// Cài đặt: npm install styled-components
import styled from 'styled-components';

// Tạo ra một thẻ button có chứa sẵn CSS
const MuteButton = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

function App1() {
  return <MuteButton primary>Nút Bấm Styled</MuteButton>;
}

// ============================================
// --- CÁCH 2: DÙNG TAILWIND CSS (Xu hướng mới) ---
// Yêu cầu phải setup Tailwind trong dự án trước

function App2() {
  return (
    <button className="bg-blue-500 text-white px-5 py-2 rounded hover:opacity-80">
      Nút Bấm Tailwind
    </button>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Dựa vào kiến thức CSS của bạn và cách đọc tên class của Tailwind, hãy dịch đoạn class Tailwind sau ra CSS thuần:
`<div className="flex justify-center items-center h-screen bg-gray-100 text-red-500">`

*(Gợi ý: `flex` là `display: flex;`, `h-screen` là `height: 100vh;`...)*
Bạn hãy thử viết tiếp cho các class còn lại nhé!
