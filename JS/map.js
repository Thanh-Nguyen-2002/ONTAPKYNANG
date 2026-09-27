/**
 * LÝ THUYẾT: Phương thức map()
 * 
 * 1. Định nghĩa:
 * - Phương thức `map()` tạo ra một mảng mới với kết quả là lời gọi 
 * một hàm được cung cấp trên mỗi phần tử của mảng gọi.
 * 
 * 2. Cách thức hoạt động:
 * - `map()` duyệt qua từng phần tử của mảng từ trái sang phải.
 * - Với mỗi phần tử, nó thực thi hàm callback và lấy giá trị trả về của hàm đó để thêm vào mảng mới.
 * - `map()` KHÔNG làm thay đổi mảng ban đầu.
 * - `map()` KHÔNG thực thi hàm callback cho các phần tử trống (empty).
 * 
 * 3. Kết quả:
 * - Trả về một mảng mới có cùng số lượng phần tử với mảng ban đầu (nhưng giá trị đã được biến đổi qua callback).
 * 
 * 4. Ví dụ:
 */

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

const dou = numbers.map(num => {
    return num * 2
})
console.log(dou);

console.log("Mảng gốc:", numbers); // [1, 2, 3, 4, 5]
console.log("Mảng sau khi map:", doubled); // [2, 4, 6, 8, 10]

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Cho một mảng các chuỗi, hãy tạo ra một mảng mới chứa độ dài của từng chuỗi.
 * const words = ["apple", "banana", "cherry"];
 * // Kết quả mong muốn: [5, 6, 6]
 * 
 * Bài tập 2: Cho một mảng các object chứa thông tin người dùng, hãy tạo ra một mảng mới chỉ chứa tên (name) của họ.
 * const users = [
 *   { id: 1, name: "Alice", age: 25 },
 *   { id: 2, name: "Bob", age: 30 },
 *   { id: 3, name: "Charlie", age: 35 }
 * ];
 * // Kết quả mong muốn: ["Alice", "Bob", "Charlie"]
 */

const words = ["apple", "banana", "cherry"];

const leng = words.map(s => {
    num = s.length;
    return num;
});
console.log(leng);

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const userName = users.map(s => s.name);
console.log(userName);

const userNameV2 = users.map(s => {
    return s.name
})
console.log(userNameV2);

