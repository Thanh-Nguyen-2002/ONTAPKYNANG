# 2. Java Collections Framework & Cấu trúc dữ liệu

Collections là phần kiến thức sử dụng nhiều nhất khi làm thực tế (nhận dữ liệu từ DB, xử lý list, lọc data...) và cũng là phần hay bị hỏi vặn vẹo nhất lúc phỏng vấn.

## 2.1. Phân biệt List, Set, và Map
- **List (Danh sách):**
  - Lưu trữ dữ liệu **có thứ tự** (đúng theo thứ tự bạn `add` vào).
  - **Cho phép** các phần tử trùng lặp (duplicate).
  - Thường dùng: `ArrayList`, `LinkedList`.
- **Set (Tập hợp):**
  - Lưu trữ dữ liệu **không có thứ tự** (ngoại trừ `TreeSet` có sắp xếp, hoặc `LinkedHashSet` giữ nguyên thứ tự thêm).
  - **KHÔNG cho phép** các phần tử trùng lặp.
  - Thường dùng: `HashSet`, `TreeSet`.
- **Map (Từ điển - Ánh xạ):**
  - Không kế thừa từ interface `Collection` như List và Set.
  - Lưu trữ dữ liệu theo cặp **Key - Value** (Khóa - Giá trị).
  - **Key phải là duy nhất**, Value thì có thể trùng.
  - Thường dùng: `HashMap`, `TreeMap`, `ConcurrentHashMap`.

## 2.2. ArrayList vs LinkedList
- **ArrayList:** 
  - Hoạt động dựa trên mảng động (Dynamic Array). 
  - Truy xuất dữ liệu (gọi `get(index)`) cực kỳ nhanh `O(1)` vì tính toán được vị trí trên mảng. 
  - Thêm/Xóa phần tử ở giữa danh sách bị chậm `O(n)` vì phải tịnh tiến (shift) toàn bộ các phần tử phía sau.
  - 👉 *Khi nào dùng:* Hầu hết mọi trường hợp, đặc biệt khi thao tác truy vấn (đọc) nhiều hơn thao tác thêm/xóa ở giữa.
- **LinkedList:** 
  - Hoạt động dựa trên danh sách liên kết đôi (Doubly Linked List).
  - Truy xuất chậm vì phải duyệt node từ đầu hoặc cuối mảng `O(n)`.
  - Thêm/Xóa phần tử ở hai đầu rất nhanh `O(1)`.
  - 👉 *Khi nào dùng:* Chủ yếu dùng khi cần implement hàng đợi (`Queue`/`Deque`) hoặc khi dữ liệu biến động liên tục ở 2 đầu.

## 2.3. HashMap hoạt động đằng sau như thế nào? (Cực kỳ quan trọng)
*HashSet thực chất cũng sử dụng HashMap ở bên dưới để hoạt động.*
**Cơ chế lưu trữ của HashMap:**
1. Khi bạn gọi `map.put(key, value)`, HashMap sẽ gọi hàm `hashCode()` của `key` để sinh ra một con số (mã hash).
2. Dựa vào mã hash này, nó dùng thuật toán để tính ra **vị trí (index)** trong một mảng (được gọi là các **bucket**).
3. Nếu hai Key khác nhau nhưng lại rơi vào cùng một bucket (hiện tượng **Hash Collision - Đụng độ hash**), Java sẽ nối các phần tử lại với nhau thành một `LinkedList` tại bucket đó.
4. **Cập nhật từ Java 8:** Nếu `LinkedList` tại một bucket có số lượng phần tử > 8, nó sẽ tự động chuyển đổi sang cấu trúc **Cây Đỏ-Đen (Red-Black Tree)** để tối ưu tốc độ tìm kiếm từ `O(n)` (tuyến tính) xuống `O(log n)`.

## 2.4. Mối quan hệ "Sinh tử" giữa equals() và hashCode()
Đây là lỗi mà 90% sinh viên mắc phải khi dùng Custom Object (VD: class `User`, `Student`) làm **Key trong HashMap** hoặc lưu vào **HashSet**. Bạn **BẮT BUỘC** phải override cả 2 hàm này.

- **Quy tắc của Java:**
  1. Nếu `equals()` so sánh 2 object trả về `true`, thì `hashCode()` của chúng **PHẢI** giống nhau.
  2. Nếu `hashCode()` giống nhau, `equals()` **chưa chắc đã bằng nhau** (do đụng độ hash).
- **Hậu quả nếu chỉ override `equals()` mà quên `hashCode()`:** 
  Giả sử bạn có 2 object `Student` với cùng ID là 1. Theo logic thực tế chúng là 1 người. Nhưng vì chưa override `hashCode()`, địa chỉ bộ nhớ khác nhau khiến mã hash khác nhau.
  => `HashSet` sẽ không nhận ra chúng giống nhau và lưu cả 2 object này (lỗi trùng lặp dữ liệu) hoặc bạn sẽ không thể lấy giá trị từ `HashMap` bằng key mới.
