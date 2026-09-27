/**
 * BÀI HỌC: Destructuring Assignment (Phá vỡ cấu trúc)
 * 
 * 1. KHÁI NIỆM
 * - Cú pháp Destructuring (ES6) là một kỹ năng cực kỳ quan trọng giúp bạn "trích xuất" 
 *   (lấy ra) dữ liệu từ Object hoặc Array một cách nhanh chóng và ngắn gọn thành các biến độc lập.
 * - Thay vì phải chấm từng thuộc tính (vd: user.name, user.age) hoặc lặp (map), bạn có thể lấy thẳng những gì mình cần.
 * 
 * 2. CƠ CHẾ HOẠT ĐỘNG
 */

// Ví dụ ta có một object chứa thông tin người dùng:
const user = {
    id: 1,
    name: 'Nguyen Van A',
    age: 25,
    email: 'a@gmail.com',
    address: {
        city: 'Ho Chi Minh',
        district: 'Q1'
    }
};

/** 
 * CÁCH CŨ (Không dùng destructuring): 
 * Rất dài dòng nếu phải lấy nhiều biến
 */
const oldName = user.name;
const oldAge = user.age;
console.log('Cách cũ:', oldName, oldAge);


/** 
 * CÁCH MỚI (Dùng destructuring): 
 * Ngắn gọn, code sạch sẽ. Tên biến bên trái (trong ngoặc nhọn {}) 
 * phải khớp với tên key (thuộc tính) trong object bên phải.
 */
const { name, email } = user;
console.log('Destructuring cơ bản:', name, email); 
// Kết quả: Nguyen Van A a@gmail.com


/**
 * 3. CÁC TÍNH NĂNG NÂNG CAO THƯỜNG DÙNG
 */

// 3.1: Đổi tên biến khi lấy ra (Alias)
// Lấy thuộc tính 'name' nhưng lưu vào biến tên là 'fullName'
const { name: fullName } = user;
console.log('Đổi tên biến:', fullName);

// 3.2: Gán giá trị mặc định (Default value)
// Nếu object không có thuộc tính 'role', nó sẽ lấy giá trị mặc định là 'Guest'
const { role = 'Guest', age } = user;
console.log('Giá trị mặc định:', role, age);

// 3.3: Lấy dữ liệu lồng nhau (Nested Destructuring)
// Lấy thuộc tính 'city' nằm bên trong object 'address'
const { address: { city } } = user;
console.log('Nested:', city);

// 3.4: Ứng dụng phổ biến nhất - Rút gọn tham số trong hàm
// Thay vì nhận vào cả object `user` rồi dùng `user.name`, ta bóc tách ngay ở tham số
function printUserInfo({ name, age }) {
    console.log(`Xin chào, tôi là ${name}, ${age} tuổi.`);
}
printUserInfo(user);


/**
 * 4. BÀI TẬP THỰC HÀNH
 * 
 * Cho biến `product` như bên dưới. Hãy dùng một dòng destructuring duy nhất để lấy ra:
 * - `productName` (lấy từ thuộc tính name)
 * - `price`
 * - `discount` (nếu không có thì mặc định là 0)
 * - `color` (lấy từ object details)
 */
const product = {
    id: 'P01',
    name: 'Laptop Dell XPS',
    price: 2000,
    details: {
        weight: '1.5kg',
        color: 'Silver'
    }
};

// Viết code bài tập ở đây:
console.log('--- Bài tập ---');
// const { ... } = product;
// console.log(productName, price, discount, color);

