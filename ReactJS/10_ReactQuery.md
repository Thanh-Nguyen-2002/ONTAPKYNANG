# 10. Chuyên sâu về React Query (TanStack Query)

## 1. Dùng để làm gì?
React Query là một thư viện chuyên trị việc **Server-State Management** (Quản lý trạng thái dữ liệu đến từ Server). Nó thay thế hoàn toàn bộ 3 cồng kềnh `useState + useEffect + fetch`. Nó giúp bạn: Lấy dữ liệu (Fetch), Lưu tạm dữ liệu (Cache), Đồng bộ ngầm (Background Sync), và Cập nhật dữ liệu (Mutations) một cách tự động.

---

## 2. 🔑 [KEY CONCEPT] Vòng đời của một Query (Tuyệt đối phải hiểu)
Để hiểu React Query, bạn KHÔNG được nghĩ theo kiểu "gọi API xong rồi thôi". Bạn phải hiểu vòng đời của dữ liệu trong bộ nhớ (Cache).
Một dữ liệu (Query) sẽ trải qua các trạng thái sau:

1. **`fetching`**: Đang trên đường đi lấy dữ liệu từ server về.
2. **`fresh` (Tươi mới)**: Dữ liệu vừa lấy về. Ở trạng thái này, nếu một component khác cần dữ liệu này, React Query sẽ đưa luôn data cho dùng mà **KHÔNG GỌI LẠI API**. (Thời gian bao lâu do bạn chỉnh bằng `staleTime`).
3. **`stale` (Ôi thiu / Cũ)**: Dữ liệu đã hết hạn "tươi". Về mặt hiển thị, người dùng **vẫn nhìn thấy dữ liệu này**, nhưng ngầm bên dưới, nếu có cơ hội (ví dụ người dùng click chuột lại vào web), React Query sẽ đi gọi lại API để làm mới.
4. **`inactive` (Không ai dùng)**: Khi bạn chuyển sang trang khác, không còn Component nào hiển thị dữ liệu này nữa. Dữ liệu sẽ bắt đầu đếm ngược thời gian chết.
5. **`deleted` (Xóa sổ)**: Sau một khoảng thời gian `inactive` (mặc định 5 phút), dữ liệu bị xóa vĩnh viễn khỏi RAM để giải phóng bộ nhớ (được quyết định bởi `gcTime`).

---

## 3. Các thuộc tính (Options) cốt lõi nhất cần nhớ

Khi bạn gọi `useQuery`, bạn truyền vào một Object chứa các tùy chọn. Dưới đây là ý nghĩa chi tiết:

### a. `queryKey: [Array]`
* **Nó là gì?** Là "chứng minh thư" để React Query phân biệt các API khác nhau trong Cache.
* **Ý nghĩa:** Rất giống dependency array của `useEffect`. Nếu `queryKey` thay đổi, API sẽ tự động gọi lại.
* *Ví dụ:* 
  - Lấy danh sách: `queryKey: ['todos']`
  - Lấy chi tiết Todo số 5: `queryKey: ['todo', 5]`
  - Lấy danh sách trang 2, đang sort theo ngày: `queryKey: ['todos', { page: 2, sort: 'date' }]`

### b. `queryFn: Function`
* **Nó là gì?** Là một hàm (thường là async) thực hiện việc gọi mạng (fetch/axios) và **BẮT BUỘC** phải `return` ra data. Nếu API lỗi, hàm này phải `throw Error`.

### c. `staleTime: number` (Mặc định: 0 mili-giây)
* **Nó là gì?** Thời gian quy định dữ liệu được coi là "Fresh". 
* **Ý nghĩa:** Mặc định là 0, nghĩa là vừa lấy về xong đã bị coi là "ôi thiu" ngay. Lần tới bạn mount lại Component, nó sẽ gọi lại API ngay lập tức. Nếu bạn set `staleTime: 60000` (1 phút), thì trong vòng 1 phút tới, bất cứ Component nào gọi API này đều sẽ nhận được data từ Cache ngay lập tức, không tốn 1 byte mạng nào.

### d. `gcTime: number` (Tên cũ là `cacheTime` - Mặc định: 5 phút)
* **Nó là gì?** Garbage Collection Time. Thời gian giữ lại dữ liệu trong RAM sau khi không còn Component nào dùng đến nó nữa (chuyển sang trạng thái `inactive`). Quá thời gian này, data bị xóa.

### e. `refetchOnWindowFocus: boolean` (Mặc định: true)
* **Nó là gì?** Khi bạn đang mở web, bạn thu nhỏ trình duyệt đi lướt Facebook, sau đó bạn bấm quay lại tab web của bạn (Focus). 
* **Ý nghĩa:** React Query mặc định cực kì thông minh, nó thấy bạn vừa quay lại tab, nó sẽ tự động chạy ngầm API để lấy dữ liệu mới nhất (vì sợ lúc bạn đi vắng, data trên server đã bị ai đó sửa). Bạn có thể tắt bằng cách set `false`.

---

## 4. 🔑 [KEY CONCEPT] Sự khác biệt sống còn giữa `isLoading` và `isFetching`
Khi bạn dùng hook: `const { data, isLoading, isFetching } = useQuery(...)`
Rất nhiều Senior vẫn hay nhầm lẫn 2 cái này:

* **`isLoading`**: Trạng thái **MÙ TỊT**. Chỉ bằng `true` khi bạn gọi API **LẦN ĐẦU TIÊN**, trong bộ nhớ Cache hoàn toàn trắng tinh chưa có gì. Lúc này bạn phải hiện chữ "Loading..." quay vòng vòng cho user xem.
* **`isFetching`**: Bất cứ khi nào có 1 request mạng chạy đi gọi API (dù là lần 1, lần 2, hay lần thứ 100), nó đều là `true`.
* **Trường hợp thực tế:** Bạn đã gọi API lần 1 (Có `data`). Bạn chuyển tab rồi quay lại. React Query chạy ngầm (Background Refetch). Lúc này `isLoading = false` (vì `data` trong cache vẫn đang được hiển thị), nhưng `isFetching = true` (vì ngầm bên dưới đang gọi mạng cập nhật). Khi mạng gọi xong, `data` trên màn hình thay đổi mượt mà mà không hề bị chớp màn hình trắng!

---

## 5. Cập nhật dữ liệu (Create / Update / Delete) với `useMutation`
Nếu `useQuery` dùng để GET (lấy) dữ liệu, thì `useMutation` dùng để POST/PUT/DELETE dữ liệu.

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function AddTodo() {
  const queryClient = useQueryClient();

  // Khởi tạo Mutation
  const mutation = useMutation({
    mutationFn: (newTodo) => axios.post('/todos', newTodo),
    // Khi gọi API Thêm mới thành công
    onSuccess: () => {
      // 🔑 BÍ QUYẾT: Đánh dấu queryKey ['todos'] là "đã ôi thiu"
      // React Query sẽ LẬP TỨC tự động gọi lại API get danh sách Todos mới!
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <button 
      onClick={() => mutation.mutate({ title: 'Học React Query' })}
      disabled={mutation.isPending} // isPending thay cho isLoading ở bản cũ
    >
      {mutation.isPending ? 'Đang lưu...' : 'Thêm Todo'}
    </button>
  );
}
```

---

## 6. Bài tập thực hiện (Tư duy)
Giả sử bạn làm một trang **Bảng xếp hạng Game**, danh sách này 1 tháng mới cập nhật 1 lần (dữ liệu rất tĩnh). 
Người dùng của bạn rất hay bấm chuyển qua lại giữa trang "Trang Chủ" và trang "Bảng Xếp Hạng".

Theo bạn, để tối ưu tốc độ và không spam API server vô ích, bạn sẽ cấu hình `staleTime` và `refetchOnWindowFocus` như thế nào trong hàm `useQuery` của trang Bảng xếp hạng?
