# 12. React Hook Form (Quản lý Form chuyên nghiệp)

## 1. Dùng để làm gì?
Xử lý Form (Biểu mẫu) trong React thường khá mệt mỏi: Lấy dữ liệu từng ô, kiểm tra tính hợp lệ (Validation - ví dụ: Email phải có chữ @, mật khẩu phải dài hơn 8 ký tự), và hiển thị lỗi.
`React Hook Form` là một thư viện giúp quản lý Form cực kì nhẹ, nhanh, ít code và giảm tối đa số lần re-render không cần thiết.

## 2. So sánh với cái tương tự
- **Controlled Component (Cách thông thường dùng `useState`):** 
  Mỗi lần bạn gõ 1 phím vào ô Input, component sẽ bị re-render 1 lần. Nếu Form có 20 trường dữ liệu (ví dụ form Đăng ký phức tạp), việc re-render liên tục sẽ gây giật lag nghiêm trọng (đặc biệt trên điện thoại). Code validate cũng phải viết tay rất dài.
- **Formik:** Một thư viện quản lý Form khác, rất nổi tiếng trước đây, nhưng viết code hơi cồng kềnh.
- **React Hook Form:** Sử dụng kiến trúc Uncontrolled Component (dựa vào `useRef` ngầm). Bạn gõ phím, nó **KHÔNG** re-render, chỉ lúc bấm Submit nó mới kiểm tra dữ liệu. Hiệu năng vô địch.

## 3. Dùng trong hoàn cảnh nào?
Bất cứ trang web nào có Form Đăng nhập, Đăng ký, Thanh toán, Khảo sát dài trang, hay tạo sản phẩm mới. Đặc biệt là những Form yêu cầu Validation phức tạp.

## 4. Ưu điểm và Nhược điểm
**Ưu điểm:**
- Nhanh tuyệt đối vì không gây re-render khi gõ chữ.
- Cú pháp gắn vào form (`register`) cực ngắn.
- Dễ dàng tích hợp với các thư viện validate mạnh mẽ như Yup hoặc Zod.

**Nhược điểm:**
- Vì không re-render khi gõ chữ, nếu bạn có một logic đòi hỏi "Hiện chữ A nếu ô input vừa gõ chữ B" (Real-time tracking), bạn phải dùng thêm hàm `watch()` của thư viện này (hơi khó hiểu xíu ban đầu).

## 5. Vì sao dùng nó?
Thay vì "phát minh lại cái bánh xe" bằng cách tự viết hàng đống hàm `handleEmailChange`, `validatePassword`,... thì việc dùng một công cụ chuyên biệt sẽ tiết kiệm cho bạn hàng giờ đồng hồ với độ chính xác cao hơn.

## 6. Ví dụ minh họa

Cài đặt: `npm install react-hook-form`

```jsx
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  // Lấy ra các hàm cần thiết từ hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Hàm chạy khi người dùng bấm Submit VÀ không có lỗi nào
  const onSubmit = (data) => {
    console.log("Dữ liệu an toàn chuẩn bị gửi Server:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 20 }}>
      <div>
        <label>Tên đăng nhập:</label><br/>
        {/* Đăng ký input này vào form, yêu cầu BẮT BUỘC NHẬP */}
        <input {...register("username", { required: true, minLength: 3 })} />
        {/* Báo lỗi nếu vi phạm */}
        {errors.username?.type === 'required' && <p style={{color:'red'}}>Không được để trống</p>}
        {errors.username?.type === 'minLength' && <p style={{color:'red'}}>Tên phải dài hơn 3 ký tự</p>}
      </div>

      <div style={{ marginTop: 15 }}>
        <label>Email:</label><br/>
        {/* Đăng ký input bằng pattern (Biểu thức chính quy Regex) */}
        <input {...register("email", { 
          required: true, 
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
        })} />
        {errors.email && <p style={{color:'red'}}>Email không đúng định dạng</p>}
      </div>

      <button type="submit" style={{ marginTop: 20 }}>Đăng Ký</button>
    </form>
  );
}
```

## 7. Bài tập thực hiện
**Yêu cầu:** 
Dựa vào ví dụ phía trên, hãy thêm vào form một trường **Mật khẩu (Password)**.
Yêu cầu kiểm tra (validation):
1. Bắt buộc nhập (`required`).
2. Tối đa 20 ký tự (`maxLength`).
3. Tối thiểu 6 ký tự (`minLength`).
4. Hiện thông báo lỗi màu đỏ tương ứng cho từng trường hợp vi phạm.

**Bạn hãy viết thêm code vào và gửi tôi xem nhé!**
