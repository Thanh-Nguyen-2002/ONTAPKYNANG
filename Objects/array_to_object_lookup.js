/**
 * BÀI HỌC: Lấy dữ liệu siêu tốc bằng Object thay vì dùng mảng (O(1) Lookup)
 * Kỹ năng: Biến mảng thành Object (Indexing / Normalization) bằng Object.fromEntries() hoặc reduce()
 * 
 * 1. VẤN ĐỀ VỚI MẢNG (ARRAY)
 * - Khi bạn có một mảng hàng ngàn sản phẩm, và bạn muốn tìm sản phẩm có id là 'P100'.
 * - Nếu dùng mảng (vd: array.find() hoặc array.map()), JavaScript sẽ phải chạy từ đầu đến cuối 
 *   mảng để tìm. Tốc độ rất chậm (độ phức tạp O(n)).
 * 
 * 2. GIẢI PHÁP: DÙNG OBJECT
 * - Nếu ta biến mảng đó thành một Object (trong đó "khóa" là id sản phẩm), ta có thể lấy thẳng
 *   sản phẩm ra bằng cách gọi `object['P100']`. Tốc độ là tức thời (độ phức tạp O(1)).
 */

const usersArray = [
    { id: 'U01', name: 'John', age: 25 },
    { id: 'U02', name: 'Anna', age: 22 },
    { id: 'U03', name: 'Peter', age: 30 }
];

console.log('--- CÁCH CHẬM: DÙNG MẢNG (.find) ---');
// Mỗi lần muốn tìm user U02, nó phải duyệt qua mảng
const foundUser = usersArray.find(user => user.id === 'U02');
console.log('Tìm bằng mảng:', foundUser);


console.log('\n--- CÁCH NHANH: DÙNG OBJECT ---');
/**
 * BƯỚC 1: CHUYỂN MẢNG THÀNH OBJECT
 * Chúng ta sẽ dùng Object.fromEntries() kết hợp với map() để gom mảng lại thành Object
 * Cấu trúc mong muốn: { 'U01': {...}, 'U02': {...}, 'U03': {...} }
 */

// Object.fromEntries nhận vào một mảng các cặp [key, value]
const usersObject = Object.fromEntries(
    usersArray.map(user => [user.id, user])
);

console.log('Object sau khi chuyển đổi:', usersObject);
/* Kết quả: 
{
  U01: { id: 'U01', name: 'John', age: 25 },
  U02: { id: 'U02', name: 'Anna', age: 22 },
  U03: { id: 'U03', name: 'Peter', age: 30 }
}
*/

/**
 * BƯỚC 2: TÌM KIẾM CỰC NHANH (KHÔNG CẦN VÒNG LẶP)
 */
const fastFoundUser = usersObject['U02'];
console.log('Tìm bằng Object:', fastFoundUser);


/**
 * 3. BÀI TẬP THỰC HÀNH
 * 
 * Bài toán: Bạn đang viết ứng dụng giỏ hàng. Bạn có 1 danh sách sản phẩm (products).
 * Mỗi khi user thêm sản phẩm vào giỏ, bạn chỉ có `productId`. 
 * Hãy chuyển mảng `products` thành dạng Object để tra cứu giá sản phẩm cực nhanh 
 * mà không cần dùng `.find()` hay `.map()` mỗi khi tính tiền.
 */

const products = [
    { id: 'P01', name: 'Laptop', price: 2000 },
    { id: 'P02', name: 'Mouse', price: 50 },
    { id: 'P03', name: 'Keyboard', price: 100 }
];

const cart = ['P01', 'P03', 'P01']; // User mua 2 Laptop, 1 Keyboard

console.log('\n--- Bài tập ---');
// 1. Dùng Object.fromEntries (hoặc reduce) để tạo `productsObject` với key là id
// const productsObject = ...

// 2. Tính tổng tiền giỏ hàng (Gợi ý: Dùng reduce lặp qua `cart` và tra cứu giá bằng productsObject[id].price)
// let totalPrice = cart.reduce((total, id) => { ... }, 0);
// console.log('Tổng tiền:', totalPrice); // Kỳ vọng: 4100
