/**
 * LÝ THUYẾT: Phương thức findIndex()
 * 
 * 1. Định nghĩa:
 * - Phương thức `findIndex()` trả về CHỈ SỐ (index) của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp.
 * 
 * 2. Cách thức hoạt động:
 * - Giống như `find()`, nó thực thi hàm callback cho mỗi phần tử cho đến khi hàm trả về `true`.
 * - Lập tức dừng duyệt mảng và trả về `index` của phần tử đó.
 * - Nếu duyệt hết mảng mà không có phần tử nào thỏa mãn, trả về `-1`.
 * - `findIndex()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về một số nguyên là index của phần tử thỏa mãn, hoặc `-1`.
 * 
 * 4. Ví dụ:
 */

const numbers = [5, 12, 8, 130, 44];
const indexFound = numbers.findIndex(element => element > 10);

console.log("Mảng gốc:", numbers); // [5, 12, 8, 130, 44]
console.log("Chỉ số của phần tử đầu tiên lớn hơn 10:", indexFound); // 1 (là phần tử 12)

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Tìm vị trí index của user có tên là "Charlie".
 * const users = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" },
 *   { id: 3, name: "Charlie" }
 * ];
 * // Kết quả mong muốn: 2
 * 
 * Bài tập 2: Xóa người dùng có id = 2 ra khỏi mảng (Gợi ý: Dùng findIndex để tìm vị trí, sau đó dùng splice để xóa).
 */
