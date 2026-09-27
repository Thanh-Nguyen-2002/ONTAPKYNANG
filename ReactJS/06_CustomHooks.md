# 06. Custom Hooks

## 1. Dùng để làm gì?
`Custom Hook` đơn giản là một hàm JavaScript bình thường nhưng tên hàm bắt đầu bằng chữ `use` (ví dụ: `useWindowSize`, `useFetch`, `useAuth`) và bên trong nó có gọi các React Hooks khác (như `useState`, `useEffect`). 
Nó được dùng để **tái sử dụng Logic (Logic reuse)** giữa các component khác nhau.

## 2. So sánh với cái tương tự
- **Component (UI reuse):** Giúp bạn tái sử dụng giao diện (ví dụ: dùng lại nút Button ở 5 nơi khác nhau).
- **Custom Hook (Logic reuse):** Giúp bạn tái sử dụng phần logic xử lý ngầm (ví dụ: logic lấy dữ liệu API, logic lấy kích thước màn hình). Nếu 5 component đều cần lấy dữ liệu từ API tương tự nhau, bạn tách logic đó ra thành Custom Hook.

## 3. Dùng trong hoàn cảnh nào?
- Bất cứ khi nào bạn thấy mình đang copy-paste cùng một đoạn logic `useState` kèm theo `useEffect` từ Component này sang Component khác.
- Phổ biến nhất: Hook gọi API (`useFetch`), Hook lưu dữ liệu vào LocalStorage (`useLocalStorage`), Hook bắt sự kiện bên ngoài (`useOnClickOutside`).

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Component trở nên cực kỳ ngắn gọn và sạch sẽ, chỉ tập trung vào việc render Giao diện. Mọi logic phức tạp đã bị giấu đi vào trong Custom Hook.
- Dễ dàng test (kiểm thử) các logic một cách độc lập.

**Nhược điểm:**
- Không có nhược điểm đáng kể về mặt kĩ thuật, nhưng cần kinh nghiệm để biết lúc nào nên tách logic thành Custom Hook. Tách quá sớm hoặc quá nhiều có thể làm lãng phí thời gian.

## 5. Vì sao dùng nó?
Tuân thủ nguyên tắc DRY (Don't Repeat Yourself - Đừng lặp lại chính mình). Việc gom logic vào Custom Hook thể hiện tư duy lập trình chuyên nghiệp của một Lập trình viên React.

## 6. Ví dụ minh họa

Thay vì viết lại code "Lấy chiều rộng màn hình" ở bài tập 03 cho 10 component khác nhau, ta làm một Custom Hook:

```jsx
// 1. Tạo Custom Hook: file useWindowSize.js
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size; // Trả về data
}

// ==============================================
// 2. Sử dụng trong Component (Cực kỳ gọn)
import { useWindowSize } from './useWindowSize';

export default function App() {
  // Chỉ việc gọi Hook như gọi useState
  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>Kích thước màn hình hiện tại:</h1>
      <p>Chiều rộng: {width}px</p>
      <p>Chiều cao: {height}px</p>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo một Custom Hook tên là `useToggle(initialValue)`.
1. Hook này nhận vào một giá trị khởi tạo (mặc định là false).
2. Trả về một mảng gồm 2 phần tử (giống useState): `[value, toggleFunction]`.
3. Trong đó `value` là trạng thái hiện tại (true/false).
4. `toggleFunction` là một hàm để đảo ngược trạng thái (đang true thành false, đang false thành true) mà không cần truyền giá trị mới vào.

Sau đó tạo một Component sử dụng `useToggle` này để ẩn/hiện một đoạn chữ.

**Gợi ý:** Code Custom hook sẽ rất ngắn (khoảng 5-6 dòng). Bạn hãy thử làm và gửi tôi nhé!
