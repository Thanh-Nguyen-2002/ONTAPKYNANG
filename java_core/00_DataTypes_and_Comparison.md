# 0. Nền tảng cốt lõi: Kiểu dữ liệu & So sánh (== vs equals)

Nếu bạn chưa nắm rõ phần này thì khoan hãy học OOP hay Spring Boot, vì đây là nguyên nhân gây ra 90% các bug ngớ ngẩn (lỗi logic) của người mới học Java.

## 0.1. Hai loại kiểu dữ liệu trong Java
Java chia kiểu dữ liệu làm 2 thế giới hoàn toàn khác biệt:

**1. Kiểu nguyên thủy (Primitive Types):**
- Gồm 8 loại: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`.
- **Đặc điểm:** Nó lưu trực tiếp giá trị thực sự (ví dụ số `5`, chữ `'A'`, giá trị `true`).
- **Lưu trữ:** Nằm ở vùng nhớ **Stack** (nhỏ, chạy rất nhanh, tự động dọn dẹp ngay khi chạy xong hàm).

**2. Kiểu tham chiếu (Reference Types / Object Types):**
- Gồm: `String`, `Array`, các Class do bạn tự tạo (như `Student`, `User`), và các Wrapper Class (`Integer`, `Long`, `Double`...).
- **Đặc điểm:** Biến khai báo KHÔNG chứa giá trị thực sự, nó chỉ chứa **địa chỉ** (tham chiếu) trỏ tới nơi lưu giữ giá trị thật.
- **Lưu trữ:** Giá trị thật được tạo ra bằng từ khóa `new` nằm ở vùng nhớ **Heap** (rộng lớn, dùng chung, được dọn dẹp bởi Garbage Collector). Còn biến lưu địa chỉ thì nằm ở **Stack**.

---

## 0.2. Cạm bẫy lớn nhất: == và equals()

### Dùng `==`
- Toán tử `==` dùng để so sánh **GIÁ TRỊ** của hai biến (những gì biến đó đang chứa).
- **Với kiểu nguyên thủy:** Biến đang chứa số, nên `==` so sánh hai số đó có bằng nhau không.
  - *Ví dụ:* `int a = 5; int b = 5;` => `a == b` (True).
- **Với kiểu tham chiếu (Object):** Biến đang chứa **địa chỉ bộ nhớ**, nên `==` so sánh xem hai object này có đang trỏ đến **cùng một vùng nhớ** (cùng một địa chỉ) hay không. Nó KHÔNG HỀ quan tâm nội dung bên trong object là gì.
  - *Ví dụ:* 
    ```java
    Student s1 = new Student("Nguyen Van A");
    Student s2 = new Student("Nguyen Van A");
    System.out.println(s1 == s2); // Kết quả: FALSE (Vì được new 2 lần nên nằm ở 2 địa chỉ khác nhau)
    ```

### Dùng `equals()`
- `equals()` là một hàm thuộc về Object. Tác dụng sinh ra của nó là để so sánh **NỘI DUNG (Dữ liệu thực sự)** bên trong 2 object.
- Mặc định, hàm `equals()` của Java lại hoạt động giống hệt `==` (so sánh địa chỉ). 
- Vì vậy, với các class do bạn tự tạo (như `Student`), bạn **PHẢI tự Override (ghi đè) hàm equals()** để chỉ cho Java biết: "Làm thế nào thì được coi là bằng nhau?". (Ví dụ: 2 Student có cùng số CMND thì coi là bằng nhau).
- Đối với class `String`, Java đã viết sẵn hàm `equals()` cực kỳ chuẩn để so sánh từng chữ cái, nên khi so sánh chữ, luôn dùng `equals()`.

---

## 0.3. Câu chuyện của String & String Pool (Hỏi phỏng vấn cực nhiều)

Mặc dù `String` là Object (kiểu tham chiếu), nhưng nó có một đặc quyền lớn trong Java gọi là **String Pool** (Hồ chứa chuỗi).

**Cách 1: Tạo String KHÔNG dùng từ khóa `new` (Literal)**
```java
String s1 = "Hello";
String s2 = "Hello";
System.out.println(s1 == s2); // Kết quả: TRUE
```
*Giải thích:* Khi chạy dòng 1, Java tạo ra chữ "Hello" và vứt vào String Pool. Chạy dòng 2, Java vào String Pool tìm xem có chữ "Hello" nào chưa, thấy có rồi nên nó cho `s2` trỏ chung địa chỉ với `s1` luôn để tiết kiệm RAM. Vì cùng địa chỉ nên `==` ra `true`.

**Cách 2: Tạo String CÓ dùng từ khóa `new`**
```java
String s3 = new String("Hello");
String s4 = new String("Hello");
System.out.println(s3 == s4); // Kết quả: FALSE
```
*Giải thích:* Hễ cứ có chữ `new` là Java bắt buộc phải xây một vùng nhớ mới tinh nằm bên ngoài String Pool (nằm ở Heap chung). Lúc này `s3` và `s4` trỏ đến 2 căn nhà khác nhau. Vì khác địa chỉ nên `==` ra `false`.

**Chốt lại:**
> Khi so sánh giá trị nguyên thủy (int, boolean...): **LUÔN DÙNG `==`**
> Khi so sánh bất cứ Object nào (đặc biệt là String): **LUÔN DÙNG `.equals()`**
