/**
 * BÀI HỌC: Object.entries()
 * 
 * 1. KHÁI NIỆM (Concept)
 * - `Object.entries()` là một phương thức tĩnh của đối tượng Object.
 * - Nó được sử dụng để lấy ra một mảng chứa các cặp [key, value] của các thuộc tính có thể đếm được (enumerable) của một object.
 * 
 * 2. CƠ CHẾ HOẠT ĐỘNG (Mechanism) VÀ KẾT QUẢ (Results)
 * - Cú pháp: Object.entries(obj)
 *   + `obj`: Object mà bạn muốn lấy các cặp key-value.
 * - Kết quả trả về: Một mảng của các mảng (mảng 2 chiều). Mỗi mảng con sẽ có đúng 2 phần tử: phần tử đầu tiên là chuỗi khóa (key), phần tử thứ hai là giá trị (value) tương ứng.
 * 
 * 3. VÍ DỤ MINH HỌA (Illustrative Examples)
 */

// Ví dụ 1: Sử dụng với một object thông thường
const user = {
    name: 'Nguyen Van A',
    age: 25,
    role: 'Admin'
};

const userEntries = Object.entries(user);
console.log('Ví dụ 1:');
console.log(userEntries);
// Kết quả: 
// [ 
//   [ 'name', 'Nguyen Van A' ], 
//   [ 'age', 25 ], 
//   [ 'role', 'Admin' ] 
// ]

// Ví dụ 2: Ứng dụng phổ biến - Duyệt qua Object bằng for...of
// Bằng cách dùng Object.entries() kết hợp với destructuring
console.log('Ví dụ 2 - Duyệt object:');
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// Ví dụ 3: Chuyển đổi Object thành Map
// Cấu trúc trả về của Object.entries() rất phù hợp để khởi tạo một Map
const userMap = new Map(Object.entries(user));
console.log('Ví dụ 3 - Map:', userMap.get('name')); 
// Kết quả: Nguyen Van A


/**
 * 4. BÀI TẬP THỰC HÀNH (Practice Exercises)
 * 
 * Bài tập 1: Đảo ngược Object
 * Viết một hàm `invertObject(obj)` nhận vào một object và trả về một object mới 
 * trong đó các keys và values bị đảo ngược cho nhau (giả sử các values đều là string/number).
 * Gợi ý: Dùng Object.entries() và sau đó dùng reduce() hoặc Object.fromEntries().
 */
const person = {
    firstName: 'John',
    lastName: 'Doe',
    job: 'Developer'
};

// Viết code cho Bài tập 1 ở đây:
console.log('--- Bài tập 1 ---');
function invertObject(obj) {
    // Code của bạn
}
// Kết quả kỳ vọng: { John: 'firstName', Doe: 'lastName', Developer: 'job' }
console.log(invertObject(person));

/**
 * Bài tập 2: Lọc các thuộc tính theo giá trị
 * Cho một object chứa điểm. Hãy tạo một object mới chỉ chứa các môn có điểm >= 8.
 * Gợi ý: Dùng Object.entries(), sau đó dùng phương thức filter() của mảng, 
 * và cuối cùng dùng Object.fromEntries() để chuyển mảng trở lại thành object.
 */
const scores = {
    Math: 9,
    English: 7,
    Science: 8.5,
    History: 6
};

// Viết code cho Bài tập 2 ở đây:
console.log('--- Bài tập 2 ---');
// ...
