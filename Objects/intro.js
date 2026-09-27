/**
 * BÀI HỌC: Tổng quan về Object trong JavaScript
 * 
 * 1. OBJECT LÀ GÌ?
 * - Trong JavaScript, Object (đối tượng) là một kiểu dữ liệu dùng để lưu trữ dữ liệu 
 *   dưới dạng các cặp "khóa - giá trị" (key - value).
 * - Hãy tưởng tượng Object giống như một cuốn từ điển: bạn dùng một "từ khóa" (key) 
 *   để tìm ra "ý nghĩa/giá trị" (value) của nó.
 * - Hoặc giống như một sự vật ngoài đời thực (ví dụ: một chiếc xe, một người).
 * 
 * 2. CÁCH TẠO MỘT OBJECT
 */

// Khai báo một object mô tả một chiếc xe
const car = {
    // Thuộc tính (Properties)
    brand: 'Toyota',    // 'brand' là key, 'Toyota' là value
    color: 'Black',
    year: 2022,

    // Phương thức (Methods - là các hàm bên trong object)
    startEngine: function() {
        console.log('Brum brum! Động cơ đã nổ.');
    }
};

/**
 * 3. CÁCH LẤY DỮ LIỆU TỪ OBJECT
 */

// Cách 1: Dùng dấu chấm (Dot notation) - Phổ biến nhất
console.log('Hãng xe:', car.brand); // Kết quả: Toyota

// Cách 2: Dùng dấu ngoặc vuông (Bracket notation) 
// - Hữu ích khi tên key được lưu trong một biến khác, hoặc key có chứa khoảng trắng.
console.log('Màu sắc:', car['color']); // Kết quả: Black

const propName = 'year';
console.log('Năm sản xuất:', car[propName]); // Kết quả: 2022

/**
 * 4. THÊM / SỬA / XÓA THUỘC TÍNH
 */

// Sửa giá trị
car.color = 'Red';
console.log('Màu sau khi sửa:', car.color); // Red

// Thêm thuộc tính mới
car.price = 50000;
console.log('Giá xe:', car.price); // 50000

// Xóa thuộc tính
delete car.year;
console.log('Object car sau khi xóa year:', car);


/**
 * TÓM LẠI:
 * - Object dùng để gom nhóm các dữ liệu có liên quan lại với nhau thành một thực thể duy nhất.
 * - Thay vì tạo 4-5 biến rời rạc như userName, userAge, userRole... ta gộp chúng lại thành 1 object `user`.
 * - Khi làm việc với dữ liệu thực tế (từ database, API), gần như mọi dữ liệu đều trả về dưới dạng Object hoặc Mảng chứa các Object.
 */
