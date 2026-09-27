/**
 * LÝ THUYẾT: Phương thức includes()
 * 
 * 1. Định nghĩa:
 * - Phương thức `includes()` xác định xem một mảng có chứa một giá trị nhất định hay không.
 * 
 * 2. Cách thức hoạt động:
 * - Hàm nhận vào 2 tham số: `valueToFind` (giá trị cần tìm) và `fromIndex` (vị trí bắt đầu tìm, mặc định là 0).
 * - Nó sẽ so sánh ngặt nghèo (`===`) giá trị cần tìm với từng phần tử trong mảng.
 * - Khác với `indexOf`, `includes()` CÓ THỂ tìm được giá trị `NaN`.
 * - `includes()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về `true` nếu tìm thấy giá trị trong mảng, ngược lại trả về `false`.
 * 
 * 4. Ví dụ:
 */

const pets = ['cat', 'dog', 'bat'];

console.log("Mảng có chứa 'cat' không?", pets.includes('cat')); // true
console.log("Mảng có chứa 'bird' không?", pets.includes('bird')); // false

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Viết hàm kiểm tra xem một người dùng nhập vào tên trái cây có nằm trong danh sách cho phép không.
 * const allowedFruits = ["apple", "banana", "mango"];
 * const input = "orange";
 * // Dùng includes để kiểm tra input có trong allowedFruits hay không.
 * 
 * Bài tập 2: Kiểm tra xem số 0 có tồn tại trong mảng từ vị trí thứ 3 trở đi không.
 * const nums = [1, 0, 2, 3, 0, 4];
 * // Kết quả mong muốn: true (do có số 0 ở vị trí index 4)
 */


const allowedFruits = ["apple", "banana", "mango"]
const input = "banana";

const result = allowedFruits.includes(input, 0);
console.log(result);
