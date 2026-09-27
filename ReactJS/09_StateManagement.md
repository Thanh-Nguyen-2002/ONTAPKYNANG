# 09. State Management (Quản lý State toàn cục) - Redux vs Zustand

## 1. Dùng để làm gì?
Khi ứng dụng của bạn lớn lên, việc quản lý State bằng `useState` và `useContext` sẽ trở thành một mớ bòng bong. Bạn sẽ cần một "Thủ thư" chuyên nghiệp để đứng ra giữ toàn bộ dữ liệu của ứng dụng (được gọi là **Store**). Bất kỳ Component nào cần dữ liệu, hoặc muốn thay đổi dữ liệu, đều báo cho ông Thủ thư này.
Redux hoặc Zustand chính là những "Thủ thư" như vậy.

## 2. So sánh các thư viện phổ biến
- **Context API (Có sẵn của React):** Dễ dùng, nhưng hiệu năng kém khi state đổi liên tục (gây re-render toàn bộ các component dùng chung context).
- **Redux / Redux Toolkit:** Từng là tiêu chuẩn vàng. Cực kỳ mạnh, chặt chẽ, hệ sinh thái lớn. Nhược điểm là quá nhiều "boilerplate" (phải viết rất nhiều dòng code cấu hình rườm rà dù chỉ để làm việc đơn giản).
- **Zustand:** Ngôi sao mới nổi. Cực kì nhẹ, nhanh, cú pháp ngắn gọn tuyệt đối. Không cần bọc `<Provider>` như Redux hay Context. Đang được cộng đồng rất ưa chuộng.

## 3. Dùng trong hoàn cảnh nào?
- App thương mại điện tử: Giỏ hàng (Cart) cần hiển thị số lượng ở Header, cần tính tiền ở trang Thanh toán, cần sửa số lượng ở trang Chi tiết giỏ hàng.
- Trạng thái người dùng, token đăng nhập.
- Dữ liệu load từ API mà cần dùng chung ở nhiều trang khác nhau (ví dụ danh mục sản phẩm).

## 4. Ưu điểm và Nhược điểm (Tập trung vào Zustand)
**Ưu điểm của Zustand:**
- Code siêu ngắn, setup mất 1 phút.
- Hiệu năng xuất sắc (Component nào lấy trường dữ liệu nào thì chỉ re-render khi trường đó thay đổi, rất thông minh).
- Không cần thẻ bọc ngoài (Provider).

**Nhược điểm:**
- Vì quá tự do, nếu team đông người không có convention (luật viết code) chung thì dễ dẫn tới mỗi người viết một kiểu. Không ép khuôn chặt chẽ như Redux.

## 5. Vì sao dùng nó?
Vì đến một lúc nào đó, dữ liệu của bạn quá rối rắm và được chia sẻ cho hàng chục Component khắp mọi nơi. Bạn bắt buộc phải có một công cụ mạnh để chuẩn hóa cách luân chuyển dữ liệu này, tránh lỗi (bug).

## 6. Ví dụ minh họa (Dùng Zustand)

Cài đặt: `npm install zustand`

```jsx
import { create } from 'zustand';

// 1. TẠO STORE (Gồm cả dữ liệu và hàm thay đổi dữ liệu)
const useStore = create((set) => ({
  bears: 0, // State
  // Các hàm thay đổi state (Actions)
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// 2. Component A (Chỉ lấy dữ liệu bears)
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h2>Số gấu hiện tại: {bears}</h2>;
}

// 3. Component B (Chỉ lấy hàm để thay đổi state)
function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Thêm gấu</button>;
}

// 4. Component Gốc
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Công viên Gấu Zustand</h1>
      {/* Hai component này nằm hoàn toàn độc lập, không truyền props gì cả */}
      <BearCounter />
      <Controls />
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** (Bài này dùng khái niệm)
Nếu bạn có một trang E-commerce. Có một biến `cart` (mảng chứa các món hàng).
- Header component cần hiển thị `cart.length`.
- CartPage component cần lặp mảng `cart` in ra danh sách sản phẩm.
- ProductDetail component có nút "Add to Cart", bấm vào sẽ `push` sản phẩm vào mảng `cart`.

Hãy nêu **ý tưởng** của bạn: Nếu dùng Zustand (như ví dụ trên), bạn sẽ định nghĩa biến và hàm nào trong `useStore`? Sau đó các component Header và ProductDetail sẽ lấy cái gì ra từ store?
(Không cần viết code chạy được, chỉ cần viết luồng suy nghĩ).
