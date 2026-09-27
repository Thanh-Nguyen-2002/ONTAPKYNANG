/**
 * LÝ THUYẾT: Các giá trị Falsy và Truthy trong JavaScript
 * 
 * 1. Định nghĩa:
 * - Trong JavaScript, mọi giá trị đều có một đặc tính boolean nội tại, thường được gọi là "truthy" hoặc "falsy".
 * - Khi một giá trị được đánh giá trong ngữ cảnh cần giá trị boolean (ví dụ: trong câu lệnh `if`, vòng lặp `while`, hoặc dùng toán tử `!` / `!!`), JavaScript sẽ tự động ép kiểu (type coercion) giá trị đó sang boolean (`true` hoặc `false`).
 * 
 * 2. Các giá trị FALSY:
 * - Là những giá trị khi bị ép kiểu sang boolean sẽ trở thành `false`.
 * - Trong JS, **CHỈ CÓ 6 GIÁ TRỊ CƠ BẢN** sau đây là Falsy:
 *   1. `false` (chính nó)
 *   2. `0` (số không, bao gồm cả `-0` và `0n` của BigInt)
 *   3. `""` (chuỗi rỗng), `''`, hoặc ` `` `
 *   4. `null` (giá trị rỗng / không tồn tại)
 *   5. `undefined` (biến chưa được gán giá trị)
 *   6. `NaN` (Not a Number - Không phải là một số)
 *   * Ngoại lệ (chỉ có trên trình duyệt): `document.all` cũng là falsy.
 * 
 * 3. Các giá trị TRUTHY:
 * - Là **TẤT CẢ CÁC GIÁ TRỊ CÒN LẠI** không nằm trong danh sách 6 giá trị falsy ở trên. Khi ép kiểu sang boolean, chúng sẽ trở thành `true`.
 * - Một số ví dụ thường gây nhầm lẫn nhưng lại là TRUTHY:
 *   + `"0"` (chuỗi chứa số 0)
 *   + `"false"` (chuỗi chứa chữ "false")
 *   + `" "` (chuỗi có chứa một khoảng trắng)
 *   + `[]` (mảng rỗng)
 *   + `{}` (object rỗng)
 *   + `function(){}` (hàm rỗng)
 *   + Số âm khác `-0` (ví dụ: `-1`, `-42`)
 * 
 * 4. Ví dụ minh họa:
 */

// --- Kiểm tra Falsy ---
if (!"") console.log("Chuỗi rỗng là Falsy!");
if (!0) console.log("Số 0 là Falsy!");
if (!undefined) console.log("Undefined là Falsy!");

// --- Kiểm tra Truthy ---
if ("0") console.log("Chuỗi '0' là Truthy!"); // Sẽ được in ra
if ([]) console.log("Mảng rỗng [] là Truthy!"); // Sẽ được in ra
if ({}) console.log("Object rỗng {} là Truthy!"); // Sẽ được in ra

// Dùng toán tử `!!` (double NOT) để chuyển đổi nhanh một giá trị bất kỳ thành boolean chuẩn
console.log(!!""); // false
console.log(!!"hello"); // true
console.log(!![]); // true

/**
 * 5. Bài tập rèn luyện:
 * 
 * Bài tập 1: Cho mảng hỗn hợp sau, hãy dùng phương thức `filter` để lọc ra TẤT CẢ các giá trị Truthy.
 * const mixedArray = [0, "Hello", false, 42, "", null, "0", undefined, NaN, [], {}];
 * // Gợi ý cú pháp ngắn gọn: Dùng `mixedArray.filter(Boolean)`
 * // Kết quả mong muốn: ["Hello", 42, "0", [], {}]
 * 
 * Bài tập 2: Bạn hãy tự dự đoán kết quả (`true` hay `false`) của các biểu thức sau trước khi chạy code:
 * a) Boolean(null)
 * b) Boolean(" ")  // Chuỗi có chứa dấu cách
 * c) Boolean(-1)   // Số âm
 * d) Boolean(NaN)
 * e) Boolean("false")
 */
