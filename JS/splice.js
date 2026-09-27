/**
 * LÝ THUYẾT: Phương thức splice()
 * 
 * 1. Định nghĩa:
 * - Phương thức `splice()` thay đổi nội dung của một mảng bằng cách loại bỏ, thay thế các phần tử hiện tại và/hoặc thêm các phần tử mới vào mảng.
 * 
 * 2. Cách thức hoạt động:
 * - Cú pháp: `array.splice(start, deleteCount, item1, item2, ...)`
 *   + `start`: Vị trí bắt đầu thay đổi.
 *   + `deleteCount` (Tùy chọn): Số lượng phần tử muốn xóa. Nếu là 0, sẽ không có phần tử nào bị xóa.
 *   + `item1, item2...` (Tùy chọn): Các phần tử muốn thêm vào mảng bắt đầu từ vị trí `start`.
 * - `splice()` CÓ làm thay đổi mảng ban đầu (Rất quan trọng, khác với slice).
 * 
 * 3. Kết quả:
 * - Trả về một mảng chứa các phần tử bị XÓA. Nếu không xóa phần tử nào, trả về mảng rỗng `[]`.
 * 
 * 4. Ví dụ:
 */

const months = ['Jan', 'March', 'April', 'June'];

// Thêm 'Feb' vào vị trí index 1, xóa 0 phần tử
months.splice(1, 0, 'Feb');
console.log("Sau khi thêm:", months); // ["Jan", "Feb", "March", "April", "June"]

// Chèn tại vị trí index 4, và thay thế/xóa 1 phần tử
months.splice(4, 1, 'May');
console.log("Sau khi thay thế:", months); // ["Jan", "Feb", "March", "April", "May"]

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Xóa phần tử thứ 2 và thứ 3 khỏi mảng.
 * const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
 * // Kết quả mảng sau thao tác: ["Red", "Yellow", "Purple"]
 * 
 * Bài tập 2: Thay thế phần tử cuối cùng của mảng bằng "Black" và "White".
 * // Kết quả mảng sau thao tác: ["Red", "Green", "Blue", "Yellow", "Black", "White"]
 */
