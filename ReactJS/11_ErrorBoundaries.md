# 11. Error Boundaries (Xử lý lỗi toàn cục)

## 1. Dùng để làm gì?
Trong React, nếu một phần nhỏ trên giao diện bị lỗi Javascript (ví dụ: truy cập vào một thuộc tính của biến `null`), toàn bộ ứng dụng của bạn sẽ bị sập và hiển thị một **"Màn hình trắng" (White screen of death)** cho người dùng. 
`Error Boundary` là một Component đặc biệt giúp "bắt" (catch) các lỗi này, ngăn không cho nó làm sập toàn bộ app, và cho phép bạn hiển thị một giao diện báo lỗi thân thiện thay thế.

## 2. So sánh với cái tương tự
- **`try...catch` thông thường:** Chỉ dùng để bắt lỗi trong các thao tác bất đồng bộ (như gọi API) hoặc logic bình thường. Nó KHÔNG THỂ bắt lỗi xảy ra bên trong quá trình `render` (vẽ giao diện) của React.
- **Error Boundary:** Sinh ra chuyên để bắt lỗi trong quá trình Render, trong Lifecycle methods, và trong Constructors của tất cả các Component con nằm dưới nó.

## 3. Dùng trong hoàn cảnh nào?
- Ở tầng cao nhất của ứng dụng (bọc ngoài `App`) để đảm bảo không bao giờ có chuyện web sập trắng tinh.
- Bọc quanh các Widget hoặc Component độc lập. Ví dụ: Nếu phần "Quảng cáo" bị lỗi code hiển thị, chỉ hiển thị thông báo "Không tải được quảng cáo", còn phần "Nội dung chính" của trang web vẫn hoạt động bình thường.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Bảo vệ trải nghiệm người dùng tối đa. Web thà hỏng một góc chứ không chết toàn bộ.
- Có thể kết hợp để gửi log lỗi ngầm về máy chủ (thông qua dịch vụ như Sentry) để lập trình viên fix.

**Nhược điểm:**
- (Tạm thời) Error Boundary **phải** được viết bằng Class Component. Functional Component với Hooks chưa hỗ trợ tạo Error Boundary trực tiếp (phải dùng thư viện như `react-error-boundary`).

## 5. Vì sao dùng nó?
Đó là biện pháp phòng thủ cuối cùng (Fallback) của một ứng dụng chuyên nghiệp. Người dùng sẽ rất bực mình nếu trang web tự nhiên biến thành màu trắng mà không có lời giải thích nào.

## 6. Ví dụ minh họa (Dùng thư viện phổ biến `react-error-boundary`)

Cài đặt: `npm install react-error-boundary`

```jsx
import { ErrorBoundary } from 'react-error-boundary';

// Giao diện sẽ hiển thị khi có lỗi
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ color: 'red', padding: 20, border: '1px solid red' }}>
      <h2>Ối, có lỗi xảy ra ở khu vực này!</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Thử tải lại lại</button>
    </div>
  );
}

// Component cố tình gây lỗi
function BuggyComponent() {
  // Biến user chưa được định nghĩa
  // Việc gọi biến không tồn tại sẽ làm React ném ra lỗi trong quá trình Render
  return <p>{user.name}</p>; 
}

export default function App() {
  return (
    <div>
      <h1>Trang chủ Facebook (Giả lập)</h1>
      <p>Khu vực Bảng tin vẫn hoạt động bình thường...</p>

      {/* Bọc khu vực dễ lỗi vào ErrorBoundary */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
      </ErrorBoundary>
      
      <p>Khu vực Chat vẫn hoạt động bình thường...</p>
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Câu hỏi lý thuyết:**
Giả sử bạn không dùng thư viện `react-error-boundary` mà muốn tự viết bằng Class Component. React cung cấp 2 hàm Lifecycle nào dành riêng cho Class Component để bắt lỗi?
(Gợi ý: Cả 2 hàm này đều có chữ `Error` trong tên). Bạn có thể tra Google để tìm câu trả lời!
