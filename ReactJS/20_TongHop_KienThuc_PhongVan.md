# TỔNG HỢP KIẾN THỨC REACTJS VÀ CÁC KHÁI NIỆM NÂNG CAO

File này tổng hợp các kiến thức quan trọng nhất ở level Fresher/Junior và bổ sung các lý thuyết cốt lõi về cách React hoạt động (Render/Re-render, Virtual DOM), TypeScript, và các khái niệm khác.

---

## 1. CƠ CHẾ RENDER VÀ RE-RENDER TRONG REACT (QUAN TRỌNG)

Một câu hỏi phỏng vấn rất phổ biến: "Khi React re-render, mọi thứ trong component có bị tạo lại từ đầu không?". Câu trả lời là **Vừa CÓ, Vừa KHÔNG**.

### 1.1. Render lần đầu (Initial Render)
Khi ứng dụng chạy lần đầu tiên:
- React gọi function component của bạn.
- Đọc mã JSX và chuyển đổi thành một cây **Virtual DOM** (DOM ảo).
- React DOM lấy cây Virtual DOM này và tạo ra các thẻ HTML thật trên trình duyệt (Real DOM).
- State được khởi tạo bằng giá trị mặc định truyền vào `useState`.

### 1.2. Re-render xảy ra khi nào?
Một component sẽ bị re-render trong 3 trường hợp:
1. **State thay đổi** (Gọi hàm `setState`).
2. **Props thay đổi** (Component cha truyền props mới xuống).
3. **Component cha bị re-render** (Mặc định component con sẽ bị re-render theo, dù props không đổi).
4. **Context thay đổi** (Nếu component có dùng `useContext` và value của context đổi).

### 1.3. Chuyện gì xảy ra trong quá trình Re-render?
Khi component bị re-render, React sẽ **gọi lại function component đó một lần nữa từ trên xuống dưới**.

**Nhưng cái gì bị tạo lại, cái gì được giữ nguyên?**

*   **Những thứ BỊ TẠO LẠI (Re-created):**
    - Tất cả các biến thông thường (khai báo bằng `let`, `const`, `var`) nằm trong function component sẽ bị cấp phát bộ nhớ mới và tính toán lại.
    - Tất cả các functions (hàm) khai báo bên trong component sẽ được định nghĩa lại ở một vùng nhớ mới. *(Đó là lý do ta cần `useCallback` để giữ lại hàm nếu cần truyền xuống con).*

*   **Những thứ ĐƯỢC GIỮ NGUYÊN (Preserved):**
    - **State:** React lưu trữ state ở một nơi khác (ngoài function component). Dù function chạy lại, hàm `useState` sẽ bỏ qua giá trị khởi tạo và trả về state hiện tại nhất.
    - **DOM Thật (Real DOM):** React KHÔNG xóa hết HTML cũ đi để vẽ lại. Nó sẽ tạo ra một cây Virtual DOM mới, so sánh (diffing) với cây Virtual DOM cũ, và CHỈ cập nhật những thẻ HTML nào thực sự thay đổi trên màn hình.

---

## 2. VIRTUAL DOM & QUÁ TRÌNH RECONCILIATION

### Virtual DOM là gì?
DOM thật (Real DOM) trên trình duyệt rất nặng. Mỗi khi thay đổi DOM thật, trình duyệt phải tính toán lại layout và vẽ lại màn hình (Reflow & Repaint), rất tốn hiệu năng.
**Virtual DOM** là một bản sao nhẹ của Real DOM, được viết bằng JavaScript Object. Nó nằm trong bộ nhớ (RAM).

### Cơ chế hoạt động (Reconciliation)
1. Khi state đổi, React tạo ra một cây Virtual DOM **mới**.
2. React dùng thuật toán **Diffing Algorithm** để so sánh cây Virtual DOM MỚI và cây Virtual DOM CŨ.
3. React tìm ra chính xác sự khác biệt (ví dụ: chỉ có cái `<p>` này đổi text).
4. React gom các thay đổi này lại và cập nhật lên **Real DOM** chỉ trong 1 lần duy nhất (gọi là Batching update).
=> Quá trình so sánh và cập nhật tối ưu này gọi là **Reconciliation**.

---

## 3. TYPESCRIPT TRONG REACT (JUNIOR MUST-KNOW)

TypeScript (TS) giúp code React an toàn hơn bằng cách báo lỗi ngay khi bạn gõ code (lúc compile) thay vì để ứng dụng chạy rồi mới lỗi.

**Ví dụ cơ bản:**
```tsx
// Định nghĩa kiểu dữ liệu cho Props
interface ButtonProps {
  title: string;
  onClick: () => void;
  isDisabled?: boolean; // Dấu ? nghĩa là không bắt buộc
}

const MyButton = ({ title, onClick, isDisabled }: ButtonProps) => {
  return <button onClick={onClick} disabled={isDisabled}>{title}</button>;
};

// Kiểu dữ liệu cho State
const [user, setUser] = useState<string | null>(null);
```

---

## 4. NEXT.JS VÀ CÁC CƠ CHẾ RENDER (TỔNG QUAN)

React mặc định là **CSR (Client-Side Rendering)**: Trình duyệt tải một file HTML trắng bóc, sau đó tải file JavaScript khổng lồ về rồi mới vẽ ra UI. (Làm SEO rất kém, load lần đầu chậm).

Next.js ra đời để giải quyết vấn đề này với các cơ chế:
1.  **SSR (Server-Side Rendering):** HTML được vẽ sẵn ở server với dữ liệu mới nhất trong mỗi request rồi mới gửi về trình duyệt. (Tốt cho SEO, dữ liệu luôn mới).
2.  **SSG (Static Site Generation):** HTML được vẽ sẵn ở server nhưng vẽ từ TÚC LÚC BUILD CODE. Nghĩa là ai vào web cũng nhận được 1 file HTML giống hệt nhau cực nhanh. (Dùng cho Blog, Landing page).

---

## 5. TESTING TRONG REACT

Để đảm bảo ứng dụng không bị vỡ khi thêm tính năng mới, Junior cần biết viết Test.
*   **Jest:** Framework dùng để chạy test, kiểm tra các hàm JavaScript thông thường xem có đúng logic không (VD: hàm tính tổng A + B có ra C không).
*   **React Testing Library (RTL):** Dùng để test giao diện người dùng. Nó giả lập cách user tương tác (ví dụ: tìm nút bấm, click vào, xem có chữ "Success" hiện lên không).

---

## 6. TÓM TẮT LẠI CÁC KIẾN THỨC ĐÃ CÓ (TỪ 01 - 19)

Để dễ ôn tập, hãy map lại các kiến thức bạn đã lưu ở các file khác:

1.  **Nền tảng:** Khởi tạo Component, JSX, truyền dữ liệu (Props) - `01_Components.md`
2.  **State & Lifecycle:** `02_useState.md`, `03_useEffect.md` (Side effects, call API).
3.  **Global State & Chia sẻ dữ liệu:** `04_useContext.md` (giải quyết Prop drilling), `09_StateManagement.md` (Redux/Zustand).
4.  **Tối ưu hiệu năng (Performance):** `05_useMemo_useCallback.md` (tránh tính toán lại, tránh tạo lại hàm), `14_LazyLoading.md` (chia nhỏ bundle JS).
5.  **Tương tác DOM & Tái sử dụng logic:** `07_useRef.md` (Lưu giá trị không re-render, chọc thẳng vào DOM), `17_ForwardRef.md`, `06_CustomHooks.md`.
6.  **Xử lý Form & API:** `12_ReactHookForm.md`, `10_ReactQuery.md` (Cache API, loading, error).
7.  **Routing & UI:** `08_ReactRouter.md`, `13_Styling.md`, `16_SCSS_SASS.md`, `15_ReactPortals.md` (làm Modal).
8.  **Nâng cao:** `11_ErrorBoundaries.md` (bắt lỗi UI vỡ), `18_HOC.md` (Pattern dùng chung logic).
