/**
 * =====================================================================
 * TỔNG HỢP LÝ THUYẾT CÁC PHƯƠNG THỨC XỬ LÝ MẢNG (ARRAY METHODS) TRONG JS
 * =====================================================================
 * 
 * I. NHÓM DUYỆT VÀ BIẾN ĐỔI MẢNG (Không làm thay đổi mảng gốc)
 * 
 * 1. map()
 * - Ý nghĩa: Duyệt qua từng phần tử, biến đổi chúng và trả về một MẢNG MỚI.
 * - Trả về: Một mảng mới có cùng số lượng phần tử với mảng ban đầu.
 * - Ví dụ: [1, 2, 3].map(x => x * 2) // Kết quả: [2, 4, 6]
 * 
 * 2. filter()
 * - Ý nghĩa: Lọc ra các phần tử thỏa mãn điều kiện (hàm trả về true).
 * - Trả về: Một mảng mới chứa các phần tử đã lọc.
 * - Ví dụ: [1, 2, 3].filter(x => x > 1) // Kết quả: [2, 3]
 * 
 * 3. reduce()
 * - Ý nghĩa: Tích lũy các phần tử của mảng thành một GIÁ TRỊ DUY NHẤT.
 * - Trả về: Một giá trị (số, chuỗi, object, mảng...).
 * - Ví dụ: [1, 2, 3].reduce((sum, x) => sum + x, 0) // Kết quả: 6
 * 
 * 4. forEach()
 * - Ý nghĩa: Chỉ duyệt qua các phần tử để thực hiện một hành động nào đó (như in ra log).
 * - Trả về: undefined (không sinh ra mảng mới).
 * - Ví dụ: [1, 2].forEach(x => console.log(x))
 * 
 * 
 * II. NHÓM TÌM KIẾM VÀ KIỂM TRA (Không làm thay đổi mảng gốc)
 * 
 * 5. find()
 * - Ý nghĩa: Tìm phần tử ĐẦU TIÊN thỏa mãn điều kiện.
 * - Trả về: Giá trị của phần tử đó, hoặc undefined nếu không thấy.
 * - Ví dụ: [1, 2, 3].find(x => x > 1) // Kết quả: 2
 * 
 * 6. findIndex()
 * - Ý nghĩa: Tìm CHỈ SỐ (index) của phần tử ĐẦU TIÊN thỏa mãn điều kiện.
 * - Trả về: Số nguyên (index), hoặc -1 nếu không thấy.
 * - Ví dụ: [1, 2, 3].findIndex(x => x > 1) // Kết quả: 1
 * 
 * 7. some()
 * - Ý nghĩa: Kiểm tra xem có ÍT NHẤT 1 phần tử thỏa mãn điều kiện hay không.
 * - Trả về: Boolean (true / false).
 * - Ví dụ: [1, 2, 3].some(x => x > 2) // Kết quả: true
 * 
 * 8. every()
 * - Ý nghĩa: Kiểm tra xem TẤT CẢ các phần tử có thỏa mãn điều kiện hay không.
 * - Trả về: Boolean (true / false).
 * - Ví dụ: [1, 2, 3].every(x => x > 0) // Kết quả: true
 * 
 * 9. includes()
 * - Ý nghĩa: Kiểm tra mảng có chứa một giá trị cụ thể hay không.
 * - Trả về: Boolean (true / false).
 * - Ví dụ: [1, 2, 3].includes(2) // Kết quả: true
 * 
 * 
 * III. NHÓM CẮT GHÉP, XÓA, THÊM VÀ SẮP XẾP
 * 
 * 10. slice() - KHÔNG LÀM THAY ĐỔI MẢNG GỐC
 * - Ý nghĩa: Trích xuất một phần của mảng (từ vị trí start đến trước end).
 * - Trả về: Một mảng mới chứa các phần tử được trích xuất.
 * - Ví dụ: [1, 2, 3, 4].slice(1, 3) // Kết quả: [2, 3]
 * 
 * 11. splice() - !!! CÓ LÀM THAY ĐỔI MẢNG GỐC !!!
 * - Ý nghĩa: Xóa, thêm hoặc thay thế phần tử trực tiếp trên mảng gốc.
 * - Cú pháp: splice(start, deleteCount, item1, item2, ...)
 * - Trả về: Một mảng chứa các phần tử BỊ XÓA.
 * - Ví dụ: 
 *   let arr = [1, 2, 3];
 *   arr.splice(1, 1, 9); // Tại index 1, xóa 1 phần tử, chèn 9
 *   // Kết quả mảng arr hiện tại là: [1, 9, 3]
 * 
 * 12. sort() - !!! CÓ LÀM THAY ĐỔI MẢNG GỐC !!!
 * - Ý nghĩa: Sắp xếp các phần tử trong mảng.
 * - Trả về: Trả về chính mảng gốc (đã được sắp xếp).
 * - Ví dụ: [3, 1, 2].sort((a, b) => a - b) // Kết quả: [1, 2, 3]
 * 
 * =====================================================================
 * TỔNG KẾT NHANH PHÂN LOẠI:
 * 
 * 1. Các hàm LÀM THAY ĐỔI mảng gốc: `splice`, `sort`, `reverse`, `push`, `pop`, `shift`, `unshift`
 * 2. Các hàm TRẢ VỀ MẢNG MỚI: `map`, `filter`, `slice`, `concat`
 * 3. Các hàm TRẢ VỀ MỘT GIÁ TRỊ: `reduce`
 * 4. Các hàm TRẢ VỀ TRUE/FALSE: `some`, `every`, `includes`
 * 5. Các hàm TRẢ VỀ INDEX/PHẦN TỬ: `find`, `findIndex`, `indexOf`
 * =====================================================================
 */
