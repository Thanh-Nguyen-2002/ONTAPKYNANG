/**
 * LÝ THUYẾT: Phương thức filter()
 * 
 * 1. Định nghĩa:
 * - Phương thức `filter()` tạo một mảng mới chứa tất cả các phần tử vượt qua bài kiểm tra (test) được triển khai bởi hàm callback.
 * 
 * 2. Cách thức hoạt động:
 * - `filter()` duyệt qua từng phần tử của mảng.
 * - Nó gọi hàm callback cho mỗi phần tử. Nếu hàm callback trả về `true` (hoặc truthy), phần tử đó được giữ lại và thêm vào mảng mới. Nếu trả về `false` (hoặc falsy), phần tử bị bỏ qua.
 * - `filter()` KHÔNG làm thay đổi mảng ban đầu.
 * - `filter()` KHÔNG thực thi callback đối với các phần tử trống.
 * 
 * 3. Kết quả:
 * - Trả về một mảng mới chứa các phần tử thỏa mãn điều kiện. Nếu không có phần tử nào thỏa mãn, trả về mảng rỗng `[]`.
 * 
 * 4. Ví dụ:
 */

const ages = [32, 33, 16, 40];
const adults = ages.filter(age => age >= 18);

console.log("Mảng gốc:", ages); // [32, 33, 16, 40]
console.log("Mảng sau khi filter:", adults); // [32, 33, 40]

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Cho một mảng các số, hãy tạo một mảng mới chỉ chứa các số chẵn.
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * // Kết quả mong muốn: [2, 4, 6, 8, 10]
 * 
 * Bài tập 2: Lọc ra các sản phẩm còn hàng (inStock: true) từ danh sách sau:
 * const products = [
 *   { name: "Laptop", inStock: true },
 *   { name: "Phone", inStock: false },
 *   { name: "Tablet", inStock: true }
 * ];
 * // Kết quả mong muốn: [{ name: "Laptop", inStock: true }, { name: "Tablet", inStock: true }]
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = numbers.filter(s => s % 2 === 0)
console.log(result);

const result2 = numbers.filter(s => {
    return s % 2 === 0;
})
console.log(result2);

const products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: false },
    { name: "Tablet", inStock: true }
];

const resultPro = products.filter(s => {
    return s.inStock === true
})
console.log(resultPro);

// false