/**
 * LÝ THUYẾT: Phương thức forEach()
 * 
 * 1. Định nghĩa:
 * - Phương thức `forEach()` thực thi một hàm được cung cấp một lần cho mỗi phần tử mảng.
 * 
 * 2. Cách thức hoạt động:
 * - Tương tự như vòng lặp `for`, nó duyệt qua từng phần tử của mảng và gọi hàm callback trên phần tử đó.
 * - Khác với `map()`, `forEach()` KHÔNG trả về một mảng mới.
 * - KHÔNG thể dừng (break) hay bỏ qua (continue) vòng lặp `forEach()` giữa chừng (trừ khi ném ra một Exception).
 * 
 * 3. Kết quả:
 * - Luôn luôn trả về `undefined`. (Do đó, không thể dùng gán vào một biến như `map` hay `filter`).
 * 
 * 4. Ví dụ:
 */

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
    console.log(`Trái cây ở vị trí ${index} là ${fruit}`);
});

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Sử dụng forEach để in ra bình phương của từng số trong mảng.
 * const numbers = [1, 2, 3, 4];
 * // Kết quả mong muốn in ra console: 1, 4, 9, 16
 * 
 * Bài tập 2: Cập nhật trực tiếp mảng các đối tượng bằng cách thêm thuộc tính `seen = true` cho mỗi người dùng.
 * const users = [{ name: "An" }, { name: "Bình" }];
 * // Kết quả mảng users mong muốn: [{ name: "An", seen: true }, { name: "Bình", seen: true }]
 */
const numbers = [1, 2, 3, 4]
numbers.forEach((num) => {
    console.log(num);
});

const users = [{ name: "An" }, { name: "Bình" }];
users.forEach((u) => {
    u.seen = true;
    u.add = 1;
    console.log(u);
})