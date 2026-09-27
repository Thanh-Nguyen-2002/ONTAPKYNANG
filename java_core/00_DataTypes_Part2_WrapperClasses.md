# 0.5. Nền tảng mở rộng: Kiểu Nguyên Thủy (int) và Wrapper Class (Integer)

Nếu bạn chỉ biết `int`, `double`, `boolean` thì thực sự **CHƯA ĐỦ**. Khi làm việc với các Framework như Spring Boot, cấu trúc dữ liệu, hay gọi API/Database, chúng ta gần như bắt buộc phải dùng **Wrapper Class** (`Integer`, `Double`, `Boolean`).

Đây là chỗ giao thoa giữa "Kiểu dữ liệu" và "Object" mà rất nhiều người dễ dính bug.

## 1. Wrapper Class là gì và tại sao phải có?
- Kiểu nguyên thủy (Primitive như `int`) là kiểu dữ liệu thô, nó chạy rất nhanh nhưng nó KHÔNG PHẢI là một Object. Vì không phải Object nên nó không thể gọi hàm, không thể chứa giá trị `null`, và không thể dùng chung với cấu trúc dữ liệu như List (Bạn **không thể** viết `List<int>`, bắt buộc phải là `List<Integer>`).
- **Wrapper Class** là việc Java lấy một hộp (Object) và nhét cái biến nguyên thủy đó vào.
  - `int` ➡️ `Integer`
  - `double` ➡️ `Double`
  - `boolean` ➡️ `Boolean`
  - `char` ➡️ `Character`

## 2. Autoboxing và Unboxing (Phép thuật và cạm bẫy)
- **Autoboxing (Tự động đóng hộp):** Bạn có thể gán thẳng số nguyên cho Object mà không cần chữ `new`. Java sẽ tự ngầm làm điều đó.
  - `Integer a = 5;` (Java ngầm hiểu: lấy số 5 cho vào hộp Integer).
- **Unboxing (Tự động mở hộp):** Bạn có thể gán Object Integer cho một biến `int` bình thường.
  - `Integer a = new Integer(10); int b = a;`

**🔥 CẠM BẪY 1: Chết vì NullPointerException do Unboxing**
```java
Integer tongTien = null; 
// Hợp lệ, vì Wrapper là Object nên nó có quyền chứa null 
// (Rất hay gặp khi móc data từ Database lên mà cột đó chưa có giá trị).

int tienTrongVi = tongTien; 
// 💥 LỖI: NullPointerException (App bị sập ngay lập tức)! 
// Lý do: Biến int là nguyên thủy, giá trị mặc định là 0 chứ tuyệt đối không nhận null.
// Java cố gắng "mở hộp" (unboxing) một cục null ra để lấy số nguyên nên bị lỗi.
```

## 3. Bẫy "Integer Cache" (Câu hỏi phỏng vấn phân loại Senior)
Hãy nhìn đoạn code sau:
```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // Kết quả: TRUE

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // Kết quả: FALSE (Ủa tại sao????)
```

**Giải thích:**
- Tương tự như *String Pool*, để tiết kiệm bộ nhớ, Java có một cơ chế tối ưu ngầm gọi là **Integer Cache**. Nó sẽ lưu sẵn tất cả các hộp `Integer` có giá trị từ **-128 đến 127**.
- Khi bạn gọi `a = 100`, số 100 nằm trong vùng Cache, nên Java lấy cái hộp có sẵn đưa cho `a` và `b` dùng chung. (Chung địa chỉ nên `==` trả về TRUE).
- Khi bạn gọi `c = 200`, vì 200 vượt quá giới hạn 127, Java bắt buộc phải `new` ra 2 cái hộp mới tinh nằm ở 2 nơi khác nhau trong Heap. (Khác địa chỉ nên `==` trả về FALSE).

**👉 BÀI HỌC SƯƠNG MÁU:**
Khi so sánh các biến Wrapper (`Integer`, `Long`, `Double`...), **TUYỆT ĐỐI KHÔNG** dùng `==`. Hãy luôn dùng `equals()`.
`System.out.println(c.equals(d)); // Kết quả: TRUE`
