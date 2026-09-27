# 17. forwardRef & useImperativeHandle (Advanced)

## 1. Dùng để làm gì?
- **`forwardRef`:** Trong React, `ref` là một thuộc tính đặc biệt, bạn **KHÔNG THỂ** truyền `ref` từ Cha xuống Con như truyền `props` bình thường được. Component Con phải được bọc bởi `forwardRef` thì nó mới nhận được `ref` từ Cha.
- **`useImperativeHandle`:** Dùng chung với `forwardRef`. Nó cho phép Component Con **chọn lọc** những hàm hoặc dữ liệu nào để "mở cửa" cho Component Cha gọi (thay vì đưa hết toàn bộ thẻ HTML cho Cha).

## 2. So sánh với cái tương tự
- **Truyền sự kiện ngược lên bằng Props:** Bình thường, Con giao tiếp với Cha bằng cách gọi các hàm truyền qua props (vd: `onClick`).
- **useImperativeHandle:** Đi theo hướng ngược lại, Cha "bấm nút" để kích hoạt một hàm nằm bên trong Con (Ví dụ: Cha muốn tự tay ra lệnh mở một Popup Modal nằm ở Component Con). Đây gọi là lập trình mệnh lệnh (Imperative), trái ngược với tính Tuyên ngôn (Declarative) của React.

## 3. Dùng trong hoàn cảnh nào?
- Khi bạn làm các bộ thư viện UI (UI Libraries) cho người khác dùng (như thẻ `<Input>` custom), bạn phải hỗ trợ `forwardRef` để người dùng có thể `.focus()` từ bên ngoài.
- Khi một Component Con có một tính năng phức tạp (như Form validation nội bộ, chạy Animation), và Cha muốn trực tiếp ra lệnh "Này Con, chạy animation đi!".

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Cung cấp quyền kiểm soát cực mạnh từ Cha xuống Con mà không cần phải đẩy logic state cồng kềnh lên Component Cha.

**Nhược điểm:**
- Đi ngược lại triết lý "Dòng dữ liệu một chiều" (One-way data binding) của React. Lạm dụng nó sẽ làm code rất rối và khó dò lỗi. React khuyên dùng nó như giải pháp cuối cùng.

## 5. Vì sao dùng nó?
Vì có những lúc việc quản lý trạng thái (state) bằng `useState` trở nên quá phức tạp hoặc gây re-render không cần thiết. Đôi khi, việc Cha "ra lệnh" cho Con trực tiếp bằng một cái `ref` lại sạch sẽ và dễ dàng hơn.

## 6. Ví dụ minh họa

```jsx
import { useRef, forwardRef, useImperativeHandle } from 'react';

// Component CON: Cần bọc bởi forwardRef
// Nhận vào 2 tham số: props và ref
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Mở cửa (expose) những hàm nhất định cho Component Cha sử dụng
  useImperativeHandle(ref, () => {
    return {
      // Cha có thể gọi hàm này để focus
      focusAndSayHi: () => {
        inputRef.current.focus();
        inputRef.current.value = "Cha vừa gọi con!";
      },
      // Cha có thể gọi hàm này để xóa trắng ô input
      clearInput: () => {
        inputRef.current.value = "";
      }
    };
  });

  return <input ref={inputRef} style={{ border: '2px solid red' }} placeholder="Nhập chữ..." />;
});

// Component CHA
export default function App() {
  const childRef = useRef(null); // Tạo ref để móc vào con

  return (
    <div style={{ padding: 20 }}>
      <h3>Sử dụng forwardRef và useImperativeHandle</h3>
      
      {/* Gắn ref vào Component Con */}
      <CustomInput ref={childRef} />
      
      <br/><br/>
      {/* Cha gọi hàm NẰM BÊN TRONG component Con */}
      <button onClick={() => childRef.current.focusAndSayHi()}>
        Ra lệnh cho Con: Focus và Ghi chữ
      </button>
      <button onClick={() => childRef.current.clearInput()}>
        Ra lệnh cho Con: Xóa trắng
      </button>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Suy nghĩ:**
Bình thường, dữ liệu (state) luôn chảy từ Cha truyền xuống Con thông qua `props`. 
Tuy nhiên, trong ví dụ trên, hàm `clearInput` hoàn toàn chứa logic thay đổi dữ liệu bên trong Component Con, nhưng lại được Component Cha điều khiển. 
Theo bạn, nếu chúng ta KHÔNG DÙNG `useImperativeHandle` và `forwardRef`, thì làm thế nào để component Cha có thể yêu cầu component Con xóa trắng ô input thông qua phương pháp `props` và `useState` bình thường?
