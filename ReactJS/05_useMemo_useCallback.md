# 05. useMemo & useCallback

## 1. Dùng để làm gì?
Cả hai Hook này đều dùng để **tối ưu hoá hiệu năng (Performance Optimization)** trong React.
- **`useMemo`**: Ghi nhớ lại (cache) **kết quả** của một hàm tính toán nặng.
- **`useCallback`**: Ghi nhớ lại **chính cái hàm đó** (địa chỉ bộ nhớ của hàm).

## 2. So sánh với cái tương tự
- **Không dùng:** Mỗi khi Component re-render, mọi biến, mọi hàm bên trong component đó đều được tính toán lại và khởi tạo lại một vùng nhớ mới. Điều này bình thường không sao, nhưng nếu tính toán quá phức tạp hoặc truyền hàm xuống Component con (dùng React.memo) sẽ gây chậm ứng dụng.
- **useMemo vs useCallback:** 
  - `useMemo` trả về một **giá trị** (VD: một mảng đã được lọc, một số đã được tính).
  - `useCallback` trả về một **hàm** (VD: hàm `handleClick`).

## 3. Dùng trong hoàn cảnh nào?
- **useMemo:** Khi bạn có một hàm chạy rất lâu (ví dụ: vòng lặp duyệt mảng 10,000 phần tử, filter danh sách). Bạn không muốn nó chạy lại ở những lần re-render không liên quan.
- **useCallback:** Khi bạn truyền một hàm (như `onClick`) từ Component Cha xuống Component Con, và Component Con được bọc bởi `React.memo` (để tránh render lại). Nếu không dùng useCallback, Component Cha render lại sẽ tạo ra hàm mới, làm Component Con render lại theo (dù không cần thiết).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Cứu rỗi ứng dụng khỏi tình trạng giật lag khi xử lý dữ liệu lớn hoặc cấu trúc cây Component quá phức tạp.

**Nhược điểm:**
- **Lạm dụng:** Bản thân `useMemo` và `useCallback` cũng tốn tài nguyên bộ nhớ để chạy và "nhớ" kết quả. Nếu dùng nó cho những phép tính quá đơn giản (như cộng 2 số) hoặc hàm đơn giản, nó làm ứng dụng của bạn **chậm hơn** thay vì nhanh hơn, code cũng khó đọc hơn.

## 5. Vì sao dùng nó?
Vì cơ chế mặc định của React là re-render mọi thứ (con cháu) khi Cha re-render. Đôi khi bạn muốn can thiệp để nhắc React: "Khoan, dữ liệu/hàm này không đổi, lấy đồ cũ dùng lại đi, đừng tạo mới tốn công".

## 6. Ví dụ minh họa

```jsx
import { useState, useMemo, useCallback, memo } from 'react';

// Component con (Chỉ render lại khi props 'onClick' thực sự thay đổi địa chỉ)
const ChildButton = memo(({ onClick }) => {
  console.log("ChildButton Rendered!");
  return <button onClick={onClick}>Nút con</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Ví dụ useMemo: Chỉ tính lại khi 'count' đổi.
  // Nếu gõ vào ô input (text đổi), khối này KHÔNG chạy lại.
  const expensiveCalculation = useMemo(() => {
    console.log("Đang chạy tính toán nặng...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) result += i;
    return result + count;
  }, [count]); // Mảng phụ thuộc

  // Ví dụ useCallback: Ghi nhớ hàm này. 
  // Nếu gõ vào input, hàm này không bị tạo mới, nên ChildButton KHÔNG bị re-render.
  const handleChildClick = useCallback(() => {
    console.log("Child clicked");
  }, []); // Hàm không phụ thuộc ai, nhớ mãi mãi

  return (
    <div style={{ padding: 20 }}>
      <h3>Kết quả tính toán: {expensiveCalculation}</h3>
      <p>Số lần bấm: {count}</p>
      <button onClick={() => setCount(count + 1)}>Bấm tăng (Làm chạy lại tính toán)</button>
      <br/><br/>
      
      {/* Đổi text làm component re-render, nhưng hàm tính toán + ChildButton được an toàn */}
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Nhập text..." />
      
      <br/><br/>
      <ChildButton onClick={handleChildClick} />
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu: Đọc hiểu và phân tích**
Trong ví dụ mục số 6, bạn hãy tự tay gõ lại (hoặc copy) vào dự án React.
Thử xóa `useCallback` bao quanh `handleChildClick` (chỉ dùng hàm mũi tên bình thường).
Mở Console (F12) lên và thử gõ chữ vào ô Input. Bạn có thấy "ChildButton Rendered!" hiện ra không? Giải thích cho tôi tại sao lại xảy ra hiện tượng đó!
