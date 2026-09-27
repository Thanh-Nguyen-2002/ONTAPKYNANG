# 15. React Portals (Xuyên thủng không gian)

## 1. Dùng để làm gì?
`React Portals` (cổng dịch chuyển) cung cấp một cách tuyệt vời để render (hiển thị) một component con ở một vị trí **hoàn toàn khác** trên cây HTML (DOM tree) thay vì nằm chết trong thẻ cha của nó. 
Nó thường xuyên được dùng để làm Modal (hộp thoại nổi lên), Tooltip (chữ nổi khi di chuột), Notification Toast (thông báo nhảy góc màn hình).

## 2. So sánh với cái tương tự
- **Không dùng Portal:** Component `<Modal>` của bạn nằm sâu tít bên trong 5-6 lớp thẻ `<div>`. Nếu một trong số các thẻ div cha đó có thuộc tính CSS `overflow: hidden;` (cắt đi phần thừa) hoặc `z-index` thấp, cái Modal của bạn sẽ bị cắt xén, bị đè lên, hoặc méo mó không hiển thị toàn màn hình được. Rất đau đầu về CSS!
- **Dùng Portal (`createPortal`):** Cho phép bạn vứt cái Modal đó ra thẳng thẻ gốc `<body>` của HTML. Lúc này Modal nằm độc lập trên cùng, hoàn toàn thoát khỏi sự kìm kẹp CSS của các thẻ cha cũ, nhưng về mặt Logic (nhận Props, truy cập Context) thì nó vẫn thuộc về cha cũ.

## 3. Dùng trong hoàn cảnh nào?
- Tất cả các hộp thoại (Modal, Popup) che toàn màn hình.
- Dropdown Menu (menu thả xuống) hoặc Tooltip khi bạn không muốn bị thẻ cha cắt mất phần thò ra ngoài.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Giải quyết 100% các vấn đề "đau đầu" liên quan đến `z-index` và `overflow` trong CSS khi làm hiệu ứng nổi.
- Giữ nguyên được vòng đời sự kiện (Event Bubbling) của React. Tức là dù DOM thực tế bay ra `<body>`, click vào Modal vẫn truyền sự kiện lên Component cha trong React Tree.

**Nhược điểm:**
- Cần setup thêm một chút thẻ `<div>` gốc trong file `index.html`.

## 5. Vì sao dùng nó?
Vì đây là cách "chính ngạch" của React khuyên dùng để tạo ra Modal hoàn hảo mà không phải dùng các mẹo (hack) CSS dơ bẩn.

## 6. Ví dụ minh họa

Bước 1: Trong file `public/index.html`, tạo thêm 1 khe cắm riêng cho Portal bên cạnh thẻ gốc `#root`:
```html
  <body>
    <div id="root"></div> <!-- Ứng dụng React chạy ở đây -->
    <div id="modal-root"></div> <!-- Khe cắm riêng cho các Portal -->
  </body>
```

Bước 2: Sử dụng `createPortal` trong code Component:
```jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';

// Component Modal sử dụng Portal
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Dịch chuyển khối HTML này ra khỏi cha, bay thẳng vào #modal-root
  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.5)', // Phủ mờ đen toàn màn hình
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{ background: 'white', padding: 30, borderRadius: 10 }}>
        <h2>Tôi là Modal lơ lửng!</h2>
        <button onClick={onClose}>Đóng lại</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Đích đến của cổng dịch chuyển
  );
}

// Component Gốc (Cha)
export default function App() {
  const [show, setShow] = useState(false);

  return (
    // Dù thẻ div cha này có overflow: hidden đi chăng nữa
    <div style={{ overflow: 'hidden', padding: 50, border: '5px solid red' }}>
      <h1>Trang chủ ứng dụng</h1>
      <button onClick={() => setShow(true)}>Mở Modal</button>
      
      {/* Modal nằm ở đây trong code, nhưng trên HTML thật nó sẽ bay ra chỗ khác */}
      <Modal isOpen={show} onClose={() => setShow(false)} />
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Theo bạn, tại sao khi sử dụng `createPortal` để đưa Modal ra ngoài `<body>`, mà khi người dùng truyền hàm đóng Modal `onClose={...}` từ Component Cha (App) vào Component Con (Modal), hàm đó vẫn hoạt động và thay đổi được `state` bên trong App?
(Gợi ý: Tìm hiểu về mối quan hệ giữa React Tree và DOM Tree).
