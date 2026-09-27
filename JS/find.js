/**
 * LÝ THUYẾT: Phương thức find()
 * 
 * 1. Định nghĩa:
 * - Phương thức `find()` trả về giá trị của PHẦN TỬ ĐẦU TIÊN trong mảng thỏa mãn hàm kiểm tra được cung cấp.
 * 
 * 2. Cách thức hoạt động:
 * - `find()` thực thi hàm callback một lần cho mỗi phần tử có trong mảng cho đến khi nó tìm thấy một phần tử khiến hàm trả về `true`.
 * - Nếu tìm thấy phần tử như vậy, `find()` lập tức trả về giá trị của phần tử đó và DỪNG duyệt mảng.
 * - Nếu không có phần tử nào thỏa mãn, `find()` trả về `undefined`.
 * - `find()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về 1 phần tử (đầu tiên) thỏa mãn điều kiện hoặc `undefined`.
 * 
 * 4. Ví dụ:
 */

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);

console.log("Mảng gốc:", numbers); // [5, 12, 8, 130, 44]
console.log("Phần tử đầu tiên lớn hơn 10:", found); // 12

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Tìm người dùng có id = 2 trong mảng sau.
 * const users = [
 *   { id: 1, name: "Alice" },
 *   { id: 2, name: "Bob" },
 *   { id: 3, name: "Charlie" }
 * ];
 * // Kết quả mong muốn: { id: 2, name: "Bob" }
 * 
 * Bài tập 2: Tìm số âm đầu tiên trong mảng.
 * const nums = [4, 7, -2, 9, -5, 3];
 * // Kết quả mong muốn: -2
 */

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const result = users.find(s => {
    return s.id === 2;
})
console.log(result);
