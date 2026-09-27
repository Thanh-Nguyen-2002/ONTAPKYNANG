# 3. Xử lý ngoại lệ (Exception Handling)

Ngoại lệ (Exception) là những lỗi xảy ra **trong lúc chương trình đang chạy** (Runtime) làm gián đoạn luồng thực thi bình thường. Xử lý ngoại lệ là kỹ năng bắt buộc để ứng dụng Backend không bị sập (crash) và có thể trả về thông báo lỗi thân thiện cho Frontend.

---

## 3.1. Phân biệt Checked Exception và Unchecked Exception

### a. Unchecked Exception (Runtime Exception)
- Là những lỗi mà Java **KHÔNG bắt buộc** bạn phải xử lý (try-catch) lúc viết code. Nhưng nếu nó xảy ra, chương trình sẽ sập.
- Thường là do lỗi logic của lập trình viên.
- **Ví dụ phổ biến:** `NullPointerException` (truy cập object bị null), `IndexOutOfBoundsException` (truy cập phần tử mảng không tồn tại), `ArithmeticException` (chia cho 0).

### b. Checked Exception
- Là những lỗi xảy ra do các yếu tố bên ngoài (đọc file bị lỗi, mất kết nối database...).
- Java **BẮT BUỘC** bạn phải xử lý nó (bằng `try-catch` hoặc thêm `throws` ở tên hàm), nếu không code sẽ không thể biên dịch (báo lỗi gạch đỏ ngay trên IDE).
- **Ví dụ phổ biến:** `IOException`, `SQLException`, `FileNotFoundException`.

---

## 3.2. Từ khóa try - catch - finally

Đây là bộ 3 dùng để "bẫy" và xử lý lỗi.

**Ví dụ minh họa:**
```java
public class ExceptionExample {
    public static void main(String[] args) {
        String data = null;
        try {
            // Khối code có nguy cơ sinh ra lỗi
            System.out.println("Bắt đầu xử lý...");
            int length = data.length(); // Gây lỗi NullPointerException ở đây
            System.out.println("Độ dài: " + length); // Dòng này sẽ KHÔNG được chạy
            
        } catch (NullPointerException e) {
            // Bắt đúng lỗi NullPointerException và xử lý
            System.out.println("Lỗi rùi: Dữ liệu đang bị Null!");
            
        } catch (Exception e) {
            // Exception là class cha, dùng để bắt mọi lỗi còn lại (nếu có)
            System.out.println("Một lỗi không xác định đã xảy ra: " + e.getMessage());
            
        } finally {
            // Khối này LUÔN LUÔN được chạy, bất kể có lỗi hay không.
            // Thường dùng để dọn dẹp tài nguyên (đóng file, ngắt kết nối database).
            System.out.println("Block finally luôn được gọi. Đã dọn dẹp xong!");
        }
    }
}
```

---

## 3.3. Phân biệt `throw` và `throws`

- **`throw` (động từ - hành động):** Dùng bên TRONG thân hàm, để chủ động ném ra một Exception khi dữ liệu không hợp lệ.
- **`throws` (nhãn dán):** Dùng ở TÊN hàm, để cảnh báo rằng hàm này có nguy cơ ném ra lỗi, ai gọi hàm này thì tự đi mà xử lý (try-catch).

**Ví dụ minh họa:**
```java
// Khai báo hàm có nguy cơ lỗi bằng "throws"
public static void checkAge(int age) throws Exception {
    if (age < 18) {
        // Chủ động ném ra lỗi bằng "throw"
        throw new Exception("Lỗi: Bạn chưa đủ 18 tuổi!");
    } else {
        System.out.println("Bạn đủ tuổi truy cập.");
    }
}

public static void main(String[] args) {
    // Vì checkAge có "throws Exception" (Checked Exception), nên khi gọi bắt buộc phải try-catch
    try {
        checkAge(16);
    } catch (Exception e) {
        System.out.println(e.getMessage());
    }
}
```

---

## 3.4. Custom Exception (Cách Spring Boot hay làm)

Thực tế đi làm, người ta rất ít dùng class `Exception` mặc định của Java để ném lỗi, mà sẽ tự định nghĩa (Custom) một Exception để mô tả đúng nghiệp vụ.

**Ví dụ: Định nghĩa lỗi khi không tìm thấy User trong Database**
```java
// 1. Tạo class kế thừa từ RuntimeException (để không bắt buộc try-catch khắp mọi nơi)
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}

// 2. Sử dụng trong Service (Spring Boot)
public class UserService {
    public void findUser(int id) {
        // Giả sử tìm trong database không thấy
        boolean isExist = false;
        
        if (!isExist) {
            // Ném ra Exception có ý nghĩa rõ ràng
            throw new UserNotFoundException("Không tìm thấy User với ID: " + id);
        }
    }
}
```

---

## 3.5. 🎯 Bài tập thực hành (Mở IDE lên code nhé)

**Bài tập 1: Rèn luyện Try-Catch**
Viết một hàm `int divide(int a, int b)`. 
1. Nếu `b == 0`, hãy chủ động `throw` ra một `ArithmeticException` với lời nhắn "Không thể chia cho 0".
2. Trong hàm `main()`, gọi hàm `divide()` và bọc nó trong `try-catch`. In ra lời nhắn lỗi nếu có. Thêm khối `finally` in ra "Đã thực hiện phép chia".

**Bài tập 2: Validate dữ liệu đăng ký**
1. Tạo một Custom Exception tên là `InvalidEmailException` (kế thừa `RuntimeException`).
2. Viết hàm `register(String email)`.
3. Kiểm tra: nếu biến email bị `null`, hoặc không chứa ký tự `@`, hãy `throw new InvalidEmailException("Email không hợp lệ!")`.
4. Gọi hàm trong `main()` và bắt lỗi để in thông báo thân thiện ra màn hình.
