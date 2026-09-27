/**
 * BÀI HỌC: Object.keys()
 * 
 * 1. KHÁI NIỆM (Concept)
 * - `Object.keys()` là một phương thức tĩnh (static method) của đối tượng Object trong JavaScript.
 * - Nó được sử dụng để lấy ra tất cả các "khóa" (keys/properties) có thể đếm được (enumerable) của một object.
 * 
 * 2. CƠ CHẾ HOẠT ĐỘNG (Mechanism) VÀ KẾT QUẢ (Results)
 * - Cú pháp: Object.keys(obj)
 *   + `obj`: Object mà bạn muốn lấy các keys.
 * - Kết quả trả về: Một mảng (array) chứa các chuỗi (strings). Mỗi chuỗi tương ứng với một tên thuộc tính của đối tượng.
 * - Thứ tự của các phần tử trong mảng kết quả giống với thứ tự khi lặp qua object bằng vòng lặp `for...in` (nhưng `Object.keys` không lặp qua các thuộc tính được kế thừa từ chuỗi nguyên mẫu - prototype chain).
 * 
 * 3. VÍ DỤ MINH HỌA (Illustrative Examples)
 */

// Ví dụ 1: Sử dụng với một object thông thường
const user = {
    name: 'Nguyen Van A',
    age: 25,
    role: 'Admin'
};

const userKeys = Object.keys(user);
console.log('Ví dụ 1:', userKeys); 
// Kết quả: [ 'name', 'age', 'role' ]

// Ví dụ 2: Sử dụng với mảng (Array cũng là một dạng Object trong JS)
// Khi dùng với mảng, keys sẽ là các index (chỉ mục) của mảng
const fruits = ['apple', 'banana', 'orange'];
console.log('Ví dụ 2:', Object.keys(fruits)); 
// Kết quả: [ '0', '1', '2' ]

// Ví dụ 3: Ứng dụng thực tế - Kiểm tra xem một object có rỗng hay không
const emptyObj = {};
const isObjEmpty = Object.keys(emptyObj).length === 0;
console.log('Ví dụ 3 (Object rỗng không?):', isObjEmpty); 
// Kết quả: true


/**
 * 4. BÀI TẬP THỰC HÀNH (Practice Exercises)
 * 
 * Bài tập 1: Cho object `student` bên dưới. 
 * Hãy sử dụng `Object.keys()` và vòng lặp (như `forEach` hoặc `map`) để in ra console câu:
 * "[Tên thuộc tính]: [Giá trị tương ứng]" cho từng thuộc tính.
 */
const student = {
    id: 'SV001',
    fullName: 'Tran Thi B',
    major: 'Computer Science',
    gpa: 3.8
};

// Viết code cho Bài tập 1 ở đây:
console.log('--- Bài tập 1 ---');
// ...


/**
 * Bài tập 2: Tính tổng lương
 * Viết một hàm `calculateTotalSalary(salaries)` nhận vào một object `salaries`.
 * Hàm trả về tổng tất cả các mức lương. Nếu object rỗng thì trả về 0.
 * Gợi ý: Dùng Object.keys() để lấy mảng keys, sau đó dùng reduce() để tính tổng giá trị.
 */
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// Viết code cho Bài tập 2 ở đây:
console.log('--- Bài tập 2 ---');
function calculateTotalSalary(salariesObj) {
    // Code của bạn
}

console.log('Tổng lương:', calculateTotalSalary(salaries)); // Kỳ vọng: 390
console.log('Tổng lương (object rỗng):', calculateTotalSalary({})); // Kỳ vọng: 0
