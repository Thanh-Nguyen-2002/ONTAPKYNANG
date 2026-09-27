/**
 * LÝ THUYẾT: Phương thức some()
 * 
 * 1. Định nghĩa:
 * - Phương thức `some()` kiểm tra xem có ÍT NHẤT MỘT phần tử trong mảng thỏa mãn điều kiện được kiểm tra bởi hàm cung cấp hay không.
 * 
 * 2. Cách thức hoạt động:
 * - `some()` thực thi hàm callback cho từng phần tử của mảng cho đến khi nó tìm thấy phần tử trả về giá trị `true` (truthy).
 * - Nếu tìm thấy phần tử thỏa mãn, `some()` lập tức trả về `true` và KHÔNG kiểm tra các phần tử còn lại.
 * - Nếu không có phần tử nào thỏa mãn sau khi duyệt hết mảng, nó trả về `false`.
 * - `some()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về `true` (nếu có ít nhất 1 phần tử thỏa mãn) hoặc `false` (nếu không có phần tử nào).
 * 
 * 4. Ví dụ:
 */

const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);

console.log("Mảng gốc:", numbers); // [1, 2, 3, 4, 5]
console.log("Mảng có chứa số chẵn không?", hasEven); // true

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Kiểm tra xem trong mảng có số âm nào không.
 * const nums = [5, 9, -1, 3, 7];
 * // Kết quả mong muốn: true
 * 
 * Bài tập 2: Kiểm tra xem danh sách sản phẩm có sản phẩm nào hết hàng (inStock: false) không.
 * const products = [
 *   { name: "Áo", inStock: true },
 *   { name: "Quần", inStock: true },
 *   { name: "Mũ", inStock: false }
 * ];
 * // Kết quả mong muốn: true
 */
