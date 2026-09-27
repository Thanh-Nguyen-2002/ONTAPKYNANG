# 02. useState Hook

## 1. Dùng để làm gì?
`useState` là một Hook trong React giúp bạn tạo và quản lý **trạng thái (state)** bên trong một Functional Component. State là những dữ liệu có thể thay đổi theo thời gian (ví dụ: người dùng nhập text, bấm nút đếm số, bật/tắt modal). Khi state thay đổi, React sẽ tự động vẽ lại (re-render) component để cập nhật giao diện hiển thị dữ liệu mới nhất.

## 2. So sánh với cái tương tự
- **Biến thông thường (Normal variables - `let`, `var`):** Khi giá trị của biến thông thường thay đổi, giao diện React **KHÔNG** cập nhật theo. `useState` là cách báo cho React biết rằng "Dữ liệu đổi rồi, hãy cập nhật màn hình đi!".
- **`this.state` trong Class Component:** Là cách cũ để làm việc tương tự, nhưng dài dòng và phức tạp hơn khi cập nhật. `useState` chia state thành các phần nhỏ độc lập thay vì gom vào một object lớn.

## 3. Dùng trong hoàn cảnh nào?
- Khi giao diện của bạn cần thay đổi dựa trên tương tác của người dùng.
- Ví dụ: Đếm số lần click, lưu nội dung đang gõ trong ô input (controlled component), lưu trạng thái mở/đóng của một menu hoặc popup, hiển thị lỗi form.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Cú pháp cực kì ngắn gọn: `const [count, setCount] = useState(0);`.
- Tự động trigger re-render UI khi dữ liệu thay đổi.
- Có thể dùng nhiều lần trong cùng một component cho các state khác nhau.

**Nhược điểm:**
- Dễ bị lỗi lặp vô hạn (infinite loop) nếu gọi hàm cập nhật (set state) sai cách trực tiếp trong phần render (ví dụ: viết nhầm `onClick={setCount(count + 1)}` thay vì `onClick={() => setCount(count + 1)}`).
- Cập nhật state là bất đồng bộ (asynchronous), đôi khi gây nhầm lẫn khi muốn lấy giá trị state ngay sau khi set.

## 5. Vì sao dùng nó?
Để làm cho trang web "sống động" (interactive). Không có state, trang web chỉ là một tờ giấy tĩnh không thay đổi được sau khi render. `useState` là cách tiêu chuẩn và phổ biến nhất trong React hiện đại để xử lý sự thay đổi này.

## 6. Ví dụ minh họa

```jsx
import { useState } from 'react';

export default function Counter() {
  // Khai báo một state tên là 'count', giá trị ban đầu là 0
  // 'setCount' là hàm dùng để thay đổi giá trị của 'count'
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Số lần bấm: {count}</h2>
      
      {/* Khi click, gọi hàm setCount để tăng giá trị */}
      <button onClick={() => setCount(count + 1)}>
        Bấm tôi!
      </button>

      {/* Nút reset, đưa về 0 */}
      <button onClick={() => setCount(0)}>
        Làm lại
      </button>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo một Component tên là `ToggleText`.
1. Component này có một đoạn văn bản: "Bí mật đã được bật mí!".
2. Ban đầu đoạn văn bản này bị ẩn đi.
3. Có một nút bấm. Khi bấm vào nút này, nếu văn bản đang ẩn thì hiện ra (và đổi tên nút thành "Ẩn đi"), nếu văn bản đang hiện thì ẩn đi (và đổi tên nút thành "Hiện ra").

**Gợi ý:** Dùng `useState(false)` để lưu trạng thái ẩn/hiện (`true` hoặc `false`). Dùng toán tử ba ngôi `? :` để điều kiện hiển thị nút và văn bản.

**Bạn hãy viết code giải quyết bài tập này và gửi lên đây nhé!**
