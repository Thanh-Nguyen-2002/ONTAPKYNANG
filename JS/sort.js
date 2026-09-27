/**
 * LÝ THUYẾT: Phương thức sort()
 * 
 * 1. Định nghĩa:
 * - Phương thức `sort()` sắp xếp các phần tử của mảng tại chỗ (in-place) và trả về mảng đã được sắp xếp.
 * 
 * 2. Cách thức hoạt động:
 * - Mặc định, `sort()` chuyển đổi các phần tử thành chuỗi (string) và so sánh theo thứ tự từ điển (UTF-16 code units).
 * - Để sắp xếp chính xác các kiểu dữ liệu khác (như số), bạn cần cung cấp một hàm so sánh (compare function) `(a, b) => { ... }`:
 *   + Nếu hàm trả về giá trị < 0: `a` đứng trước `b`.
 *   + Nếu hàm trả về giá trị > 0: `b` đứng trước `a`.
 *   + Nếu hàm trả về 0: giữ nguyên thứ tự giữa `a` và `b`.
 * - `sort()` CÓ làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về CHÍNH mảng ban đầu (tham chiếu) sau khi đã được sắp xếp lại vị trí các phần tử.
 * 
 * 4. Ví dụ:
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Sắp xếp chuỗi:", fruits); // ["Apple", "Banana", "Mango", "Orange"]

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // Sắp xếp số tăng dần
console.log("Sắp xếp số tăng dần:", points); // [1, 5, 10, 25, 40, 100]

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Sắp xếp mảng các số sau theo thứ tự giảm dần.
 * const numbers = [5, 2, 9, 1, 5, 6];
 * // Kết quả mong muốn: [9, 6, 5, 5, 2, 1]
 * 
 * Bài tập 2: Sắp xếp mảng các đối tượng sau theo giá (price) tăng dần.
 * const products = [
 *   { name: "Laptop", price: 1000 },
 *   { name: "Mouse", price: 50 },
 *   { name: "Keyboard", price: 80 }
 * ];
 * // Kết quả mong muốn: Mouse (50), Keyboard (80), Laptop (1000)
 */
