/**
 * BÀI HỌC: Object.values()
 * 
 * 1. KHÁI NIỆM (Concept)
 * - `Object.values()` là một phương thức tĩnh của đối tượng Object.
 * - Nó được sử dụng để lấy ra tất cả các "giá trị" (values) của các thuộc tính có thể đếm được (enumerable) của một object.
 * 
 * 2. CƠ CHẾ HOẠT ĐỘNG (Mechanism) VÀ KẾT QUẢ (Results)
 * - Cú pháp: Object.values(obj)
 *   + `obj`: Object mà bạn muốn lấy các giá trị.
 * - Kết quả trả về: Một mảng (array) chứa các giá trị.
 * - Tương tự như `Object.keys()`, thứ tự các phần tử trong mảng kết quả giống với khi lặp qua object bằng `for...in`.
 * 
 * 3. VÍ DỤ MINH HỌA (Illustrative Examples)
 */

// Ví dụ 1: Sử dụng với một object thông thường
const user = {
    name: 'Nguyen Van A',
    age: 25,
    role: 'Admin'
};

const userValues = Object.values(user);
console.log('Ví dụ 1:', userValues); 
// Kết quả: [ 'Nguyen Van A', 25, 'Admin' ]

// Ví dụ 2: Sử dụng với chuỗi (String)
// Vì chuỗi có cấu trúc giống như một mảng ký tự, Object.values() sẽ tách từng ký tự ra
const str = "Hello";
console.log('Ví dụ 2:', Object.values(str));
// Kết quả: [ 'H', 'e', 'l', 'l', 'o' ]

/**
 * 4. BÀI TẬP THỰC HÀNH (Practice Exercises)
 * 
 * Bài tập 1: Tính tổng điểm của học sinh
 * Bạn có một object chứa điểm các môn học. Hãy sử dụng Object.values() kết hợp 
 * với phương thức mảng (như reduce) để tính tổng điểm.
 */
const grades = {
    math: 8,
    physics: 7,
    chemistry: 9,
    english: 8.5
};

// Viết code cho Bài tập 1 ở đây:
console.log('--- Bài tập 1 ---');
// ...


/**
 * Bài tập 2: Kiểm tra một giá trị có tồn tại trong Object không
 * Viết một hàm `hasValue(obj, valueToCheck)` kiểm tra xem `valueToCheck`
 * có phải là một giá trị nằm trong `obj` hay không. Trả về true hoặc false.
 */
const config = {
    theme: 'dark',
    language: 'vi',
    notifications: true
};

// Viết code cho Bài tập 2 ở đây:
console.log('--- Bài tập 2 ---');
function hasValue(obj, valueToCheck) {
    // Code của bạn
}

console.log('Có theme dark không?', hasValue(config, 'dark')); // Kỳ vọng: true
console.log('Có version 2.0 không?', hasValue(config, '2.0')); // Kỳ vọng: false
