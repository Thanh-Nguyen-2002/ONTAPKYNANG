/**
 * LÝ THUYẾT: Phương thức every()
 * 
 * 1. Định nghĩa:
 * - Phương thức `every()` kiểm tra xem TẤT CẢ các phần tử trong mảng có thỏa mãn điều kiện được kiểm tra bởi hàm cung cấp hay không.
 * 
 * 2. Cách thức hoạt động:
 * - `every()` thực thi hàm callback cho từng phần tử của mảng cho đến khi nó tìm thấy một phần tử trả về giá trị `false` (falsy).
 * - Nếu tìm thấy phần tử KHÔNG thỏa mãn, `every()` lập tức trả về `false` và KHÔNG kiểm tra các phần tử còn lại.
 * - Nếu duyệt hết mảng mà tất cả đều thỏa mãn (đều trả về true), nó trả về `true`.
 * - `every()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về `true` (nếu tất cả thỏa mãn) hoặc `false` (nếu có ít nhất 1 phần tử không thỏa mãn).
 * 
 * 4. Ví dụ:
 */

const ages = [21, 18, 25, 30];
const allAdults = ages.every(age => age >= 18);

console.log("Mảng gốc:", ages); // [21, 18, 25, 30]
console.log("Tất cả đều trên 18 tuổi?", allAdults); // true

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Kiểm tra xem tất cả các số trong mảng có phải là số dương không.
 * const numbers = [5, 9, 1, 3, 7];
 * // Kết quả mong muốn: true
 * 
 * Bài tập 2: Kiểm tra xem tất cả học sinh đã nộp bài chưa (isSubmitted: true).
 * const students = [
 *   { name: "An", isSubmitted: true },
 *   { name: "Bình", isSubmitted: false },
 *   { name: "Châu", isSubmitted: true }
 * ];
 * // Kết quả mong muốn: false
 */

const numbers = [5, 9, 1, 3, 7]
const result = numbers.every(s => s > 0);
console.log(result);

const result2 = numbers.every(s => {
    return s > 0;
})
console.log(result2);

