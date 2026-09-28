# 01. React Components (Functional vs Class)

## 1. Dùng để làm gì?
Component trong React giống như những viên gạch để xây dựng nên một ngôi nhà (Giao diện người dùng - UI). Thay vì viết toàn bộ UI trong một file khổng lồ, ta chia nhỏ UI thành các phần độc lập, có thể tái sử dụng (như Header, Sidebar, Footer, Button...).

## 2. So sánh với cái tương tự
- **So với HTML thuần:** HTML thuần là các thẻ tĩnh. Component trong React có thể chứa logic (JavaScript) và dữ liệu động, tự cập nhật khi dữ liệu thay đổi.
- **Functional Component vs Class Component:** 
  - *Class Component:* Cú pháp cũ, dùng `class` của ES6, phức tạp hơn, cần quan tâm đến `this`.
  - *Functional Component:* Cú pháp mới, là các hàm JavaScript đơn giản. Kết hợp với Hooks, nó có thể làm mọi thứ mà Class Component làm được nhưng ngắn gọn và dễ hiểu hơn. Ngày nay, mọi người đều viết theo cách này.

## 3. Dùng trong hoàn cảnh nào?
- Khi bạn có một đoạn UI lặp đi lặp lại nhiều lần (ví dụ: nút bấm, thẻ sản phẩm).
- Khi bạn muốn tách một trang web phức tạp thành các phần nhỏ để dễ quản lý, dễ sửa lỗi, và dễ chia việc cho nhiều người cùng làm.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Dễ dàng tái sử dụng code.
- Dễ bảo trì: Lỗi ở đâu sửa ở Component đó, không ảnh hưởng phần khác.
- Dễ đọc: Nhìn vào tên Component (ví dụ `<NavigationBar />`) là biết nó làm gì.

**Nhược điểm:**
- Nếu chia quá nhỏ, số lượng file sẽ rất nhiều, người mới có thể bị "ngợp" khi theo dõi luồng dữ liệu (props) giữa các Component.

## 5. Vì sao dùng nó?
Bắt buộc phải dùng. React được thiết kế dựa trên kiến trúc Component-based. Không dùng Component thì không phải là viết React.

## 6. Ví dụ minh họa

```jsx
// 1. Khai báo một Component đơn giản (Functional Component)
function UserProfile({ name, age }) {
  return (
    <div className="profile">
      <h3>Tên: {name}</h3>
      <p>Tuổi: {age}</p>
    </div>
  );
}

// 2. Tái sử dụng Component trong một Component khác
export default function App() {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      {/* Tái sử dụng 2 lần với dữ liệu truyền vào (props) khác nhau */}
      <UserProfile name="Nguyễn Văn A" age={20} />
      <UserProfile name="Trần Thị B" age={25} />
    </div>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Tạo một component tên là `ProductCard` để hiển thị thông tin sản phẩm.
1. Component này nhận vào các thông tin (props) sau: `productName`, `price`, `description`.
2. Hiển thị thông tin lên giao diện. Nếu giá (`price`) lớn hơn 1000, hiển thị thêm chữ "Sản phẩm cao cấp" màu đỏ.
3. Tạo component `App` và sử dụng `ProductCard` ít nhất 3 lần với các dữ liệu khác nhau.

**Bạn hãy viết code giải quyết bài tập này vào một file code thực tế, hoặc viết trực tiếp lên chat để tôi kiểm tra và chữa bài nhé!**

//Viết lại theo ý hiểu 
component là gì là các khối UI ( giao diện người dùng) các khối độc lập

