# Lộ trình học Java Core chuẩn dành cho Backend (Spring Boot)

Để học Java Core không bị lan man, không buồn ngủ và bám sát vào những gì thực tế đi làm (cũng như đi phỏng vấn) yêu cầu, bạn hãy đi theo lộ trình **6 cột mốc** sau đây. 

Các tài liệu trong thư mục này sẽ được sinh ra và đánh số bám sát theo đúng lộ trình này:

### 🌟 Cột mốc 1: Kiến thức nền tảng (Foundation) - [Đã có tài liệu 00]
- Kiểu dữ liệu nguyên thủy (Primitive) vs Kiểu tham chiếu (Reference).
- Phân biệt vùng nhớ Stack và Heap cơ bản.
- Hiểu rõ sự khác nhau sinh tử giữa toán tử `==` và hàm `equals()`.
- String và khái niệm String Pool.

### 🌟 Cột mốc 2: Lập trình hướng đối tượng (OOP) - [Đã có tài liệu 01]
- 4 tính chất: Đóng gói, Kế thừa, Đa hình, Trừu tượng (Hỏi phỏng vấn 100% trúng).
- Hiểu bản chất và phân biệt `Interface` vs `Abstract Class`.
- Ý nghĩa các từ khóa: `static`, `final`, `this`, `super`.
- Pass-by-value (Truyền tham trị) trong Java.

### 🌟 Cột mốc 3: Cấu trúc dữ liệu & Collection Framework - [Đã có tài liệu 02]
- Phân biệt sự khác nhau của List, Set, Map.
- Khi nào dùng ArrayList, khi nào dùng LinkedList.
- Hiểu cơ chế hoạt động bên dưới của HashMap và HashSet (Rất hay hỏi để phân loại ứng viên).
- Tại sao bắt buộc phải Override `hashCode()` đi kèm với `equals()`.

### 🌟 Cột mốc 4: Xử lý ngoại lệ (Exception Handling)
- Phân biệt `Checked Exception` và `Unchecked Exception` (Runtime Exception).
- Phân biệt từ khóa `throw` và `throws`.
- Cách sử dụng `try-catch-finally` chuẩn xác (tránh việc "nuốt" lỗi khiến app sập mà không có log).
- Tự định nghĩa Custom Exception (Rất quan trọng để Spring Boot ném mã lỗi 400, 404, 500 về cho Frontend).

### 🌟 Cột mốc 5: Đa luồng (Multithreading & Concurrency)
- Phân biệt `Thread` và `Runnable`.
- Xử lý xung đột dữ liệu: từ khóa `synchronized`, `volatile`.
- Khái niệm Deadlock là gì?
- Tại sao nên sử dụng Thread Pool (`ExecutorService`) thay vì cứ dùng `new Thread()`?

### 🌟 Cột mốc 6: Java 8+ Features (Tính năng hiện đại - Bắt buộc)
- **Lambda Expression:** Cách viết code ngắn gọn kiểu mới.
- **Stream API:** Vũ khí tối thượng để xử lý list, lọc, map dữ liệu cực nhanh thay cho vòng lặp `for` truyền thống.
- **Optional:** Khắc phục triệt để lỗi "tỷ đô" `NullPointerException`.
- Default method trong Interface.

---
👉 *Mục tiêu:* Học xong 6 cột mốc này, phần móng của bạn đã cực kỳ cứng. Khi quay lại Spring Boot, bạn sẽ thấy mọi thứ rất sáng sủa, không còn cảm giác "copy paste mà không hiểu gì".
