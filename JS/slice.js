/**
 * LÝ THUYẾT: Phương thức slice()
 * 
 * 1. Định nghĩa:
 * - Phương thức `slice()` trả về một bản sao nông (shallow copy) của một phần mảng, được chọn từ vị trí bắt đầu đến vị trí kết thúc (không bao gồm kết thúc).
 * 
 * 2. Cách thức hoạt động:
 * - Nhận vào 2 tham số: `start` (vị trí bắt đầu) và `end` (vị trí kết thúc).
 * - Nếu không truyền tham số, nó sẽ copy toàn bộ mảng.
 * - Nếu truyền index âm, nó sẽ tính từ cuối mảng ngược lại.
 * - Phần tử tại vị trí `end` sẽ KHÔNG được bao gồm trong mảng mới.
 * - `slice()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về một MẢNG MỚI chứa các phần tử được trích xuất.
 * 
 * 4. Ví dụ:
 */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log("Từ index 2 đến hết:", animals.slice(2)); // ["camel", "duck", "elephant"]
console.log("Từ index 2 đến index 4:", animals.slice(2, 4)); // ["camel", "duck"] (Không lấy "elephant")
console.log("Mảng gốc:", animals); // Vẫn không đổi

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Lấy 3 phần tử đầu tiên của mảng.
 * const nums = [10, 20, 30, 40, 50];
 * // Kết quả mong muốn: [10, 20, 30]
 * 
 * Bài tập 2: Lấy 2 phần tử cuối cùng của mảng (Sử dụng chỉ số âm).
 * // Kết quả mong muốn: [40, 50]
 */
