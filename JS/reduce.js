/**
 * LÝ THUYẾT: Phương thức reduce()
 * 
 * 1. Định nghĩa:
 * - Phương thức `reduce()` thực thi một hàm callback (hàm reducer) do bạn cung cấp trên từng phần tử của mảng, kết quả cuối cùng là một giá trị duy nhất.
 * 
 * 2. Cách thức hoạt động:
 * - Hàm reducer nhận vào 4 tham số:
 *   + `accumulator` (biến tích lũy): Lưu trữ kết quả trả về của lần gọi callback trước đó.
 *   + `currentValue` (giá trị hiện tại): Phần tử hiện tại đang được xử lý trong mảng.
 *   + `currentIndex` (chỉ số hiện tại): Chỉ số của phần tử hiện tại.
 *   + `array` (mảng gốc): Mảng đang gọi `reduce()`.
 * - Có thể truyền thêm `initialValue` (giá trị khởi tạo) làm đối số thứ 2 cho hàm `reduce()`.
 * - `reduce()` KHÔNG làm thay đổi mảng ban đầu.
 * 
 * 3. Kết quả:
 * - Trả về MỘT giá trị duy nhất (có thể là số, chuỗi, mảng, object, v.v...) là kết quả của việc tích lũy qua các phần tử.
 * 
 * 4. Ví dụ:
 */

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 là giá trị khởi tạo (initialValue)

console.log("Mảng gốc:", numbers); // [1, 2, 3, 4]
console.log("Tổng các số:", sum); // 10

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Tìm giá trị lớn nhất trong mảng bằng reduce.
 * const nums = [5, 2, 9, 1, 5, 6];
 * // Kết quả mong muốn: 9
 * 
 * Bài tập 2: Tính tổng số lượng (quantity) của các mặt hàng trong giỏ hàng.
 * const cart = [
 *   { item: "Apple", quantity: 2 },
 *   { item: "Banana", quantity: 5 },
 *   { item: "Orange", quantity: 3 }
 * ];
 * // Kết quả mong muốn: 10
 */

const reuslt = numbers.reduce((sum, s) => {
    return sum + s;
}, 0)

console.log(reuslt);
const nums = [5, 2, 9, 1, 5, 6]
const resultMax = nums.reduce((max, s) => {
    if (max < s) {
        console.log(s);

        max = s;
        console.log(max);

    }

    return max;
}, 0)
console.log(resultMax);


const cart = [
    { item: "Apple", quantity: 2 },
    { item: "Banana", quantity: 5 },
    { item: "Orange", quantity: 3 }
];

const resultQty = cart.reduce((totalQty, c) => {
    return totalQty + c.quantity
}, 0)
console.log(resultQty);
