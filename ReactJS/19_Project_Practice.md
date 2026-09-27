# 19. Dự án Thực hành Tổng hợp: "Mini Shop" (Cửa hàng trực tuyến)

Đây là dự án giúp bạn xâu chuỗi toàn bộ 18 bài học trước đó thành một sản phẩm thực tế. Bạn hãy làm dự án này bên trong thư mục `react-practice` mà chúng ta vừa tạo nhé!

## 1. Mô tả dự án
Xây dựng một trang web bán hàng cơ bản với 3 trang chính:
- **Trang chủ (`/`):** Hiển thị danh sách sản phẩm, có thanh tìm kiếm.
- **Trang Giỏ hàng (`/cart`):** Hiển thị các sản phẩm đã chọn, tổng tiền.
- **Trang Đăng nhập (`/login`):** Form đăng nhập giả lập.

---

## 2. Các yêu cầu chức năng và Kỹ năng tương ứng

### Bước 1: Khởi tạo và Chia Layout
- **Yêu cầu:** Tạo một thanh Điều hướng (Navbar) luôn xuất hiện ở trên cùng, chứa các nút link: "Trang chủ", "Giỏ hàng" và "Đăng nhập".
- 🎯 **Kỹ năng rèn luyện:** 
  - **Bài 01 (Components):** Tách Layout, Navbar thành các component riêng biệt.
  - **Bài 08 (React Router):** Sử dụng `<BrowserRouter>`, `<Routes>`, `<Route>` và `<Link>` để chuyển trang mà không load lại web.
  - **Bài 13 & 16 (Styling/SCSS):** Dùng Tailwind (hoặc SCSS) để trang trí cho Navbar đẹp mắt.

### Bước 2: Hiển thị danh sách Sản phẩm
- **Yêu cầu:** Ở Trang chủ, gọi một API giả lập (ví dụ: `https://fakestoreapi.com/products`) để lấy danh sách sản phẩm và in ra màn hình. Khi đang gọi mạng, phải hiện chữ "Đang tải...".
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 02 & 03 (useState, useEffect):** Lưu dữ liệu từ API vào state và dùng `useEffect` để gọi API khi trang vừa render.
  - **Bài 10 (React Query - Tùy chọn nâng cao):** Nếu muốn làm chuẩn chỉ, hãy dùng React Query thay cho `useEffect` để gọi API và tự động lưu Cache.

### Bước 3: Tính năng "Thêm vào giỏ hàng" toàn cục
- **Yêu cầu:** Mỗi sản phẩm có 1 nút "Thêm vào giỏ". Bấm vào nút này, trên Navbar ở góc phải phải tăng số lượng (Ví dụ: Giỏ hàng: 3 món). Sang Trang Giỏ Hàng sẽ nhìn thấy các món đã thêm.
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 04 (useContext) HOẶC Bài 09 (Zustand):** Bạn bắt buộc phải dùng quản lý state toàn cục để truyền dữ liệu `cart` từ Component Trang Chủ lên Component Navbar và sang Trang Giỏ Hàng (tránh Props Drilling).

### Bước 4: Chức năng Tìm kiếm Sản phẩm
- **Yêu cầu:** Có một thanh Input tìm kiếm. Khi người dùng gõ chữ (ví dụ "áo"), danh sách sản phẩm ở dưới tự động lọc ra những món có chữ "áo".
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 05 (useMemo):** Dùng `useMemo` để ghi nhớ kết quả lọc danh sách sản phẩm. Tránh trường hợp phải dùng vòng lặp filter lại mảng 100 sản phẩm mỗi lần Navbar chớp nháy (re-render).
  - **Bài 07 (useRef):** Ngay khi vào trang chủ, con trỏ chuột tự động nhấp nháy (focus) vào ô tìm kiếm để người dùng gõ luôn (dùng `inputRef.current.focus()`).

### Bước 5: Custom Hook cực xịn (useDebounce)
- **Yêu cầu:** Khi tìm kiếm, không nên lọc sản phẩm ngay lập tức mỗi khi gõ 1 phím (vì nếu API thật, gõ 10 chữ sẽ gọi API 10 lần, sập server). Phải đợi người dùng gõ xong, DỪNG tay khoảng 0.5 giây thì mới bắt đầu lọc.
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 06 (Custom Hooks):** Tự viết một Hook tên là `useDebounce(value, delay)` để trì hoãn quá trình cập nhật chữ tìm kiếm. 

### Bước 6: Xử lý Form Đăng nhập
- **Yêu cầu:** Tại trang Đăng nhập, tạo một Form có 2 trường: Email và Password. Yêu cầu nhập đúng định dạng Email, Mật khẩu trên 6 ký tự. Nếu sai, báo lỗi chữ đỏ ngay bên dưới ô nhập.
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 12 (React Hook Form):** Bắt buộc dùng thư viện này để quản lý Form. Không dùng useState thông thường để lưu chữ gõ vào (giúp form siêu mượt không re-render).

### Bước 7: Hiển thị Modal "Thêm thành công"
- **Yêu cầu:** Khi bấm thêm vào giỏ, hiện lên một cái bảng thông báo to giữa màn hình (che mờ phần đằng sau): "Đã thêm Áo thun vào giỏ hàng!".
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 15 (React Portals):** Không để code HTML của cái Modal này chìm bên trong thẻ sản phẩm, mà dùng `createPortal` bắn nó ra tận thẻ `<body>` để tránh lỗi CSS `z-index`.

### Bước 8: Tối ưu Tốc độ Web (Nâng cao)
- **Yêu cầu:** Đảm bảo khi người dùng mới vào web, họ không phải tải luôn code của trang Giỏ hàng và Đăng nhập.
- 🎯 **Kỹ năng rèn luyện:**
  - **Bài 14 (Lazy Loading):** Áp dụng `React.lazy` và `<Suspense>` vào các Component đại diện cho Page ở trong Router.

---

## 3. Cách thức thực hiện
1. Mở VS Code, trỏ vào thư mục `react-practice` mà tôi đã tạo sẵn.
2. Cài đặt các thư viện nếu cần: `react-router-dom`, `react-hook-form`, `zustand` (hoặc tự dùng Context).
3. Làm lần lượt từ Bước 1 đến Bước 8. 
4. Gặp khó khăn ở bước nào, bị lỗi màn hình trắng, hoặc làm xong một bước muốn tôi review code -> **Hãy copy code gửi vào chat này!**

Bạn sẵn sàng mở thư mục dự án và bắt đầu Bước 1 (Chia Layout & Routing) chưa?
