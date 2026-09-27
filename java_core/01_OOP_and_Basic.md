# 1. OOP & Các khái niệm nền tảng trong Java

## 1.1. Bốn tính chất của OOP
- **Tính đóng gói (Encapsulation):** Che giấu trạng thái bên trong của đối tượng, chỉ cho phép giao tiếp qua các phương thức public (như getter/setter). Giúp kiểm soát và bảo vệ dữ liệu khỏi những thay đổi không hợp lệ từ bên ngoài.
- **Tính kế thừa (Inheritance):** Cho phép class con (subclass) kế thừa các thuộc tính và phương thức của class cha (superclass) bằng từ khóa `extends`. Java chỉ hỗ trợ **đơn kế thừa class** (một class chỉ có 1 class cha), nhưng có thể implement nhiều interface.
- **Tính đa hình (Polymorphism):** Một hành động có thể xảy ra theo nhiều cách khác nhau.
  - *Compile-time (Static Polymorphism):* Nạp chồng phương thức (**Overloading** - cùng tên method, khác tham số).
  - *Runtime (Dynamic Polymorphism):* Ghi đè phương thức (**Overriding** - class con định nghĩa lại method của class cha).
- **Tính trừu tượng (Abstraction):** Ẩn đi các chi tiết triển khai phức tạp, chỉ hiển thị ra các tính năng (hành vi) cần thiết. Thường được hiện thực hóa qua `Interface` và `Abstract class`.

## 1.2. Interface vs Abstract Class
- **Interface:**
  - Định nghĩa một "hợp đồng" (contract) hoặc bộ quy tắc.
  - Theo mặc định, tất cả các phương thức là `public abstract`, các biến là `public static final`.
  - Một class có thể `implements` **nhiều** interface.
  - Từ Java 8+, Interface có thể chứa `default method` và `static method` có sẵn phần thân.
  - **Sử dụng khi:** Các class không có quan hệ họ hàng (hệ thống phân cấp) nhưng cần chia sẻ chung một hành vi (VD: `Flyable`, `Serializable`).
- **Abstract Class:**
  - Có thể chứa cả phương thức trừu tượng (không có thân) và phương thức thông thường (đã có thân).
  - Có thể khai báo biến instance (lưu giữ trạng thái).
  - Một class chỉ có thể `extends` **một** abstract class duy nhất.
  - **Sử dụng khi:** Có mối quan hệ "IS-A" chặt chẽ và muốn chia sẻ code chung (VD: Abstract class `Animal` cho `Dog`, `Cat`).

## 1.3. Các từ khóa quan trọng thường bị hỏi
- **`static`:** 
  - Thành viên `static` thuộc về **class**, không thuộc về instance (đối tượng) cụ thể nào. 
  - Nó được khởi tạo 1 lần duy nhất trên bộ nhớ khi class được nạp (load) vào JVM.
  - Một phương thức static không thể sử dụng từ khóa `this` hoặc `super` và không thể gọi trực tiếp các thành viên non-static.
- **`final`:**
  - Biến `final`: Giá trị không thể bị thay đổi sau khi đã khởi tạo (đóng vai trò như hằng số).
  - Phương thức `final`: Không thể bị override (ghi đè) bởi class con.
  - Class `final`: Không thể bị kế thừa (VD: class `String` trong Java là final).
- **Phân biệt `final`, `finally`, `finalize()`:**
  - `final`: Keyword áp dụng cho biến, method, class.
  - `finally`: Khối lệnh trong cấu trúc `try-catch-finally`, luôn luôn được thực thi (dùng để đóng connection, close file...).
  - `finalize()`: Một method của class `Object`, được Garbage Collector gọi trước khi thu hồi bộ nhớ của object (hiện nay không khuyến khích dùng và đã bị deprecated ở các bản Java mới).

## 1.4. Tham trị (Pass-by-value) vs Tham chiếu (Pass-by-reference)
- **Câu thần chú:** Java **LUÔN LUÔN** truyền tham trị (pass-by-value). Java hoàn toàn không có truyền tham chiếu.
- **Với kiểu nguyên thủy (int, double...):** Truyền một bản sao (copy) của giá trị biến đó vào phương thức.
- **Với Object:** Nó truyền **bản sao của địa chỉ tham chiếu** (copy of reference). 
  - Nghĩa là: Trong method, bạn CÓ THỂ thay đổi thuộc tính của object đó (VD: `user.setName("New")`). 
  - NHƯNG bạn KHÔNG THỂ trỏ tham chiếu đó sang một object hoàn toàn mới (VD: `user = new User()`) và kỳ vọng biến ở ngoài method cũng bị thay đổi theo.
