/**
 * BÀI HỌC: LƯU Ý KHI CHỌN KIỂU DỮ LIỆU ĐỂ TỐI ƯU TÌM KIẾM (HIỆU SUẤT)
 * (Array vs Object vs Set vs Map)
 * 
 * Khi nào nên dùng cái nào để code chạy nhanh nhất?
 */

// ==========================================
// 1. KHI NÀO NÊN DÙNG MẢNG (ARRAY)?
// ==========================================
/*
- Dùng khi: 
  + Bạn quan tâm đến THỨ TỰ của dữ liệu (cái nào trước, cái nào sau).
  + Bạn cần SẮP XẾP (sort), ĐẢO NGƯỢC (reverse).
  + Bạn muốn thực hiện cùng một thao tác lên tất cả phần tử (map, filter).
  + Dữ liệu có thể trùng lặp.
  
- ❌ ĐIỂM YẾU CHÍNH LÀ TÌM KIẾM: 
  + Việc kiểm tra xem mảng có chứa phần tử X không (dùng `includes`, `indexOf`, `find`) cực kỳ chậm khi mảng lớn.
  + Vì nó phải duyệt từ đầu tới cuối (Độ phức tạp O(n)).
*/
const arr = ['apple', 'banana', 'orange'];
// Tìm kiếm mất thời gian:
const hasBanana = arr.includes('banana'); 


// ==========================================
// 2. KHI NÀO NÊN DÙNG SET? (Bảo bối để tìm kiếm cực nhanh)
// ==========================================
/*
- Dùng khi: 
  + Bạn có một danh sách nhưng CHỈ MUỐN CHỨA CÁC GIÁ TRỊ DUY NHẤT (không trùng lặp).
  + BẠN CẦN KIỂM TRA SỰ TỒN TẠI (TÌM KIẾM) SIÊU NHANH.
  
- ✅ ĐIỂM MẠNH: 
  + Hàm `set.has(value)` tìm kiếm chỉ trong nháy mắt (Độ phức tạp O(1)), nhanh gấp ngàn lần `array.includes` với dữ liệu lớn.
*/
const mySet = new Set(['apple', 'banana', 'orange']);
// Tìm kiếm tức thời:
const isExist = mySet.has('banana'); // Nhanh hơn array.includes rất nhiều


// ==========================================
// 3. KHI NÀO NÊN DÙNG OBJECT?
// ==========================================
/*
- Dùng khi: 
  + Dữ liệu của bạn là dạng cặp CÂU HỎI - TRẢ LỜI, hoặc ID - THÔNG TIN CHI TIẾT (Key - Value).
  + Bạn có ID và muốn TÌM LẤY CHI TIẾT CỰC NHANH.
  
- ✅ ĐIỂM MẠNH:
  + Truy xuất dữ liệu bằng Key (ví dụ `obj[id]`) là tốc độ bàn thờ O(1).
  
- ❌ ĐIỂM YẾU:
  + Key của Object chỉ có thể là String hoặc Symbol. Nếu bạn lấy số hoặc mảng làm Key, nó sẽ tự ép về String.
  + Không đảm bảo thứ tự tốt như Array (mặc dù ES6 có quy định nhưng thường không nên dựa dẫm vào đó).
*/
const usersObj = {
    'U1': { name: 'A', age: 20 },
    'U2': { name: 'B', age: 25 }
};
// Lấy chi tiết user U2 mất 0.0001s:
const userB = usersObj['U2']; 


// ==========================================
// 4. KHI NÀO NÊN DÙNG MAP? (Object nâng cấp)
// ==========================================
/*
- Dùng khi:
  + Bạn cần tính năng lưu trữ Key-Value giống Object, nhưng KHÓA (KEY) CỦA BẠN LÀ MỘT OBJECT KHÁC (chứ không phải chỉ là chuỗi String).
  + Bạn cần duyệt qua dữ liệu liên tục và quan tâm nghiêm ngặt đến THỨ TỰ THÊM VÀO.
  + Bạn cần thao tác thêm/xóa dữ liệu cực kỳ thường xuyên (Map làm việc này tối ưu hơn Object).
*/
const myMap = new Map();
myMap.set('U1', { name: 'A', age: 20 });
myMap.set('U2', { name: 'B', age: 25 });

// Lấy cũng rất nhanh:
const getUser = myMap.get('U2');


/**
 * ----------------------------------------------------
 * TỔNG KẾT NHANH ĐỂ ĐI LÀM / PHỎNG VẤN:
 * ----------------------------------------------------
 * 1. Cần in danh sách ra màn hình? -> ARRAY
 * 2. Cần kiểm tra xem 1 phần tử có tồn tại hay không siêu nhanh? -> SET (thay vì dùng Array.includes)
 * 3. Cần tra cứu thông tin chi tiết bằng ID siêu nhanh? -> OBJECT / MAP (thay vì dùng Array.find)
 * 4. Muốn xóa bỏ các phần tử trùng lặp trong mảng? -> Chuyển mảng thành Set, rồi chuyển ngược lại.
 *    (VD: `const uniqueArr = [...new Set(arr)];`)
 */

// ==========================================
// 5. BÀI TẬP THỰC HÀNH TỐI ƯU HÓA
// ==========================================

/**
 * BÀI TẬP 1: Lọc người dùng bị cấm (Tối ưu tìm kiếm tồn tại)
 * Hệ thống có một mảng `bannedUsers` chứa hàng triệu ID bị cấm.
 * Khi một `loginId` đăng nhập, bạn cần kiểm tra xem người này có bị cấm không.
 * Hãy viết lại hàm kiểm tra bằng cấu trúc dữ liệu tối ưu nhất.
 */
const bannedUsersArray = ['U101', 'U502', 'U999', /* ... hàng triệu ID khác */];

// ❌ Cách làm chậm (Dùng Array):
function isBannedSlow(loginId) {
    return bannedUsersArray.includes(loginId);
}

// ✅ Yêu cầu: 
// 1. Chuyển bannedUsersArray sang kiểu dữ liệu phù hợp (Set)
// const bannedUsersOptimized = ...

// 2. Viết lại hàm isBannedFast(loginId) để tìm kiếm tốc độ O(1)
console.log('\n--- Bài tập 1 ---');
function isBannedFast(loginId) {
    // Code của bạn
}


/**
 * BÀI TẬP 2: Tra cứu điểm thi (Tối ưu tìm kiếm chi tiết)
 * Bạn có mảng kết quả thi của học sinh. 
 * Viết một hàm nhận vào `studentId` và trả về điểm số của học sinh đó.
 */
const examResults = [
    { studentId: 'S01', score: 8.5 },
    { studentId: 'S02', score: 9.0 },
    { studentId: 'S03', score: 7.5 }
];

// ❌ Cách làm chậm: Dùng examResults.find(s => s.studentId === id)

// ✅ Yêu cầu:
// 1. Chuyển examResults thành một Object có key là studentId, value là score
// const resultsObject = ... 

// 2. Viết hàm tra cứu siêu tốc
console.log('\n--- Bài tập 2 ---');
function getStudentScoreFast(id) {
    // Code của bạn
}

