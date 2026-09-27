/**
 * CÁC TRƯỜNG HỢP SỬ DỤNG THỰC TẾ (USE CASES)
 * Kỹ năng: Biến Mảng thành Object (Indexing/Normalization)
 * 
 * Dưới đây là 4 trường hợp phổ biến nhất mà lập trình viên giỏi luôn dùng Object 
 * thay vì dùng vòng lặp Mảng để tối ưu hóa hiệu suất.
 */


// =====================================================================
// TRƯỜNG HỢP 1: GỘP DỮ LIỆU TỪ 2 NGUỒN KHÁC NHAU (GIỐNG SQL JOIN)
// =====================================================================
// Tình huống: Bạn gọi API lấy danh sách user, sau đó gọi một API khác lấy danh sách đơn hàng.
// Nhiệm vụ: Gắn tên user vào từng đơn hàng.

const users = [
    { id: 'U1', name: 'Nguyễn Văn A' },
    { id: 'U2', name: 'Trần Thị B' },
    { id: 'U3', name: 'Lê Văn C' }
];

const orders = [
    { orderId: 101, userId: 'U2', total: 500 },
    { orderId: 102, userId: 'U1', total: 300 },
    { orderId: 103, userId: 'U2', total: 100 }
];

// 👉 BƯỚC TỐI ƯU: Chuyển mảng users thành Object để tra cứu cực nhanh
const userDictionary = Object.fromEntries(users.map(u => [u.id, u.name]));
// { U1: 'Nguyễn Văn A', U2: 'Trần Thị B', U3: 'Lê Văn C' }

// 👉 Áp dụng:
const ordersWithNames = orders.map(order => ({
    ...order,
    userName: userDictionary[order.userId] // O(1) Tra cứu tức thời, không cần dùng users.find()
}));
console.log('Use Case 1 (Gộp dữ liệu):', ordersWithNames);



// =====================================================================
// TRƯỜNG HỢP 2: DỊCH/ÁNH XẠ DỮ LIỆU ĐỂ HIỂN THỊ (DICTIONARY MAPPING)
// =====================================================================
// Tình huống: Backend thường chỉ trả về ID trạng thái (status: 0, 1, 2). 
// Bạn cần hiển thị ra UI chữ tương ứng: "Chờ duyệt", "Đang giao", "Hoàn thành".

const apiResponse = [
    { id: 1, itemName: 'Áo thun', status: 1 },
    { id: 2, itemName: 'Quần jean', status: 0 },
    { id: 3, itemName: 'Giày', status: 2 }
];

// 👉 BƯỚC TỐI ƯU: Tạo một Object Dictionary
const statusMap = {
    0: 'Chờ duyệt',
    1: 'Đang giao',
    2: 'Hoàn thành'
};

// 👉 Áp dụng:
const displayData = apiResponse.map(item => ({
    ...item,
    statusText: statusMap[item.status] // Rất gọn và nhanh
}));
console.log('\nUse Case 2 (Mapping hiển thị):', displayData);



// =====================================================================
// TRƯỜNG HỢP 3: CACHING (LƯU TRỮ TẠM) ĐỂ KHÔNG GỌI LẠI HÀM NẶNG
// =====================================================================
// Tình huống: Khi user click xem chi tiết một sản phẩm, bạn gọi API. 
// Nếu họ click lại sản phẩm đó, bạn không muốn gọi API nữa.

const cache = {}; // Khởi tạo Object rỗng đóng vai trò như bộ nhớ tạm

function getProductDetail(productId) {
    // 1. Kiểm tra xem trong Object cache đã có dữ liệu này chưa
    if (cache[productId]) {
        console.log(`\nLấy từ Cache (rất nhanh): Chi tiết sản phẩm ${productId}`);
        return cache[productId];
    }
    
    // 2. Nếu chưa có, giả lập việc gọi API mất thời gian
    console.log(`\nGọi API (chậm): Đang tải dữ liệu sản phẩm ${productId}...`);
    const data = { id: productId, detail: 'Mô tả rất dài...' }; // Giả sử đây là data từ API trả về
    
    // 3. Lưu vào Object cache để lần sau dùng lại
    cache[productId] = data; 
    
    return data;
}

getProductDetail('P001'); // Lần 1: Phải gọi API (Chậm)
getProductDetail('P001'); // Lần 2: Lấy ngay từ Cache (Nhanh)



// =====================================================================
// TRƯỜNG HỢP 4: TÍNH TOÁN TẦN SUẤT / ĐẾM SỐ LƯỢNG (COUNTING)
// =====================================================================
// Tình huống: Đếm xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần.
// Ví dụ: Đếm số lượng trái cây trong giỏ hàng.

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// 👉 BƯỚC TỐI ƯU: Dùng Object để lưu trữ số đếm
const fruitCount = {};

for (const fruit of fruits) {
    if (fruitCount[fruit]) {
        fruitCount[fruit] += 1; // Nếu đã có trong object thì cộng 1
    } else {
        fruitCount[fruit] = 1;  // Nếu chưa có thì khởi tạo là 1
    }
}
console.log('\nUse Case 4 (Đếm số lượng):', fruitCount);
// Kết quả: { apple: 3, banana: 2, orange: 1 }

// (Có thể viết siêu ngắn gọn bằng reduce):
// const count = fruits.reduce((acc, f) => { acc[f] = (acc[f] || 0) + 1; return acc; }, {});
