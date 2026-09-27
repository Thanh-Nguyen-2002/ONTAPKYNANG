# 07. useRef Hook

## 1. Dùng để làm gì?
`useRef` giống như một "chiếc hộp" cho phép bạn cất giữ bất kỳ dữ liệu nào (ví dụ: một con số, một chuỗi, hoặc một thẻ HTML). Điểm đặc biệt của chiếc hộp này là: **Dữ liệu bên trong thay đổi sẽ KHÔNG làm Component bị re-render (vẽ lại).**
Ngoài ra, nó thường xuyên được dùng để lấy tham chiếu (reference) trực tiếp đến một thẻ HTML trên giao diện (DOM element).

## 2. So sánh với cái tương tự
- **So với `useState`:**
  - `useState`: Khi dữ liệu đổi -> Component re-render -> Cập nhật lên màn hình. Dùng cho những dữ liệu cần **hiển thị**.
  - `useRef`: Khi dữ liệu đổi -> Component **KHÔNG** re-render. Dùng cho những dữ liệu chạy ngầm, hoặc lưu trữ tạm thời mà không cần in ra màn hình.
- **So với `document.getElementById()`:** Cách cũ của JavaScript thuần để lấy DOM. Trong React, bạn không nên dùng cách này mà phải dùng `useRef` để React tự quản lý vòng đời của DOM đó.

## 3. Dùng trong hoàn cảnh nào?
- **Tương tác trực tiếp với DOM:** Bắt con trỏ chuột tự động nhấp nháy vào ô Input (focus) khi vừa vào trang web; kéo cuộn trang web (scroll); phát/tạm dừng một video (thẻ `<video>`).
- **Lưu trữ biến ngầm (Mutable values):** Lưu ID của `setInterval` hoặc `setTimeout` để lúc sau có thể `clearInterval`; đếm số lần Component re-render.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Hiệu năng rất tốt vì không gây re-render ứng dụng.
- Cứu cánh duy nhất khi bắt buộc phải can thiệp trực tiếp vào thẻ HTML (thứ mà React thường khuyên nên tránh).

**Nhược điểm:**
- Rất dễ bị lạm dụng. Nếu bạn dùng `useRef` để lấy giá trị ô input thay vì dùng `useState` (gọi là Uncontrolled Component), code của bạn sẽ rời xa chuẩn mực của React và khó quản lý logic form phức tạp.

## 5. Vì sao dùng nó?
Vì React che giấu DOM thực tế bằng Virtual DOM. Nên khi bạn cần nói chuyện trực tiếp với DOM thực tế (ví dụ: "Ê trình duyệt, focus vào ô input này cho tao"), bạn bắt buộc phải dùng một cầu nối, và đó chính là `useRef`.

## 6. Ví dụ minh họa

```jsx
import { useRef } from 'react';

export default function FocusInput() {
  // 1. Tạo một tham chiếu, giá trị khởi tạo là null
  const inputRef = useRef(null);

  const handleFocus = () => {
    // 3. Truy cập vào phần tử DOM thực tế thông qua .current và gọi hàm focus()
    inputRef.current.focus();
    
    // Bạn cũng có thể lấy value mà không cần useState:
    // console.log(inputRef.current.value);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* 2. Gắn ref vào thẻ input */}
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Bấm nút để focus vào đây..." 
      />
      <button onClick={handleFocus}>
        Focus vào ô Input
      </button>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo một component tên là `Stopwatch` (Đồng hồ bấm giờ).
1. Hiển thị số giây đã trôi qua (bạn vẫn cần dùng `useState` cho số giây vì nó in ra màn hình).
2. Có một nút "Start" và một nút "Stop".
3. Khi bấm Start, thời gian tăng mỗi giây (dùng `setInterval`). 
4. Khi bấm Stop, thời gian dừng lại.
**Gợi ý:** Để nút "Stop" biết phải dừng cái interval nào, bạn cần lưu cái ID của `setInterval` đó. Nhưng nếu lưu vào `useState` hay biến bình thường nó sẽ bị mất lúc re-render. Hãy lưu nó vào `useRef`! (ví dụ: `timerRef.current = setInterval(...)`).

**Thử làm và gửi code tôi chấm nhé!**
