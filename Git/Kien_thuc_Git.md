# 📚 Kiến Thức Git & GitHub (Toàn Tập)

Tài liệu này tổng hợp các kiến thức từ cơ bản đến nâng cao về Git, giúp bạn dễ dàng ôn tập và tra cứu.

---

## 1. Các khái niệm cốt lõi
- **Repository (Repo):** Nơi lưu trữ toàn bộ mã nguồn và lịch sử thay đổi của dự án.
- **Commit:** Một điểm lưu (snapshot) trạng thái của mã nguồn tại một thời điểm.
- **Branch (Nhánh):** Một phiên bản làm việc độc lập của repo. Nhánh `main` hoặc `master` thường là nhánh chính.
- **Working Directory:** Thư mục hiện tại trên máy chứa các file bạn đang làm việc.
- **Staging Area (Index):** Khu vực trung gian chứa các file đã được chuẩn bị để commit.

---

## 2. Các lệnh Git cơ bản thường dùng

### Khởi tạo & Cấu hình
```bash
# Khởi tạo một repo mới trong thư mục hiện tại
git init

# Cấu hình thông tin người dùng
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"

# Clone một repo từ GitHub/GitLab về máy
git clone <url_của_repo>
```

### Thêm & Lưu thay đổi
```bash
# Kiểm tra trạng thái các file (đã sửa, đã add, chưa add...)
git status

# Thêm một file vào Staging Area
git add <tên_file>

# Thêm tất cả file thay đổi vào Staging Area
git add .

# Lưu các thay đổi (Commit) với thông điệp
git commit -m "Thông điệp mô tả thay đổi"
```

### Xem lịch sử
```bash
# Xem lịch sử các commit
git log

# Xem lịch sử rút gọn (mỗi commit 1 dòng)
git log --oneline
```

### Đồng bộ với Remote (Server)
```bash
# Tải các thay đổi mới nhất từ remote về nhưng CHƯA gộp vào code hiện tại
git fetch

# Tải các thay đổi mới nhất từ remote về và GỘP (merge) vào code hiện tại
git pull origin <tên_branch>

# Đẩy các commit từ máy lên remote repo
git push origin <tên_branch>
```

---

## 3. Làm việc với Nhánh (Branch)
Làm việc với nhánh giúp bạn phát triển các tính năng mới mà không ảnh hưởng đến code đang chạy ổn định.

```bash
# Liệt kê danh sách các nhánh
git branch

# Tạo nhánh mới
git branch <tên_nhánh_mới>

# Chuyển sang một nhánh khác (lệnh cũ)
git checkout <tên_nhánh>

# Chuyển sang một nhánh khác (lệnh mới khuyên dùng)
git switch <tên_nhánh>

# Tạo và chuyển sang nhánh mới ngay lập tức
git checkout -b <tên_nhánh_mới>
# hoặc
git switch -c <tên_nhánh_mới>

# Xóa một nhánh (phải đứng ở nhánh khác để xóa)
git branch -d <tên_nhánh>
```

---

## 4. Gộp code (Merge & Rebase)
Khi làm xong tính năng trên một nhánh, bạn cần gộp nó vào nhánh chính (thường là `main`).

### Git Merge
Gộp code giữ nguyên lịch sử commit của cả 2 nhánh. Sinh ra một "merge commit".
```bash
# 1. Chuyển về nhánh đích (nhánh muốn gộp vào)
git switch main
# 2. Thực hiện gộp nhánh tính năng vào main
git merge <tên_nhánh_tính_năng>
```

### Git Rebase
Đưa các commit của nhánh hiện tại lên đầu nhánh đích, giúp lịch sử commit phẳng (linear) và gọn gàng hơn.
```bash
# Đứng tại nhánh tính năng
git rebase main
```
> **Lưu ý:** KHÔNG bao giờ dùng rebase trên nhánh public (như main) đã được push lên server cho nhiều người cùng dùng.

---

## 5. Hoàn tác & Quay lại trạng thái cũ (Nâng cao)

### Tạm cất code (Git Stash)
Bạn đang làm dở tính năng nhưng cần chuyển nhánh để fix bug gấp? Git stash sẽ giúp bạn cất code tạm thời.
```bash
# Cất code chưa commit đi
git stash

# Xem danh sách các lần cất code
git stash list

# Lấy code đã cất ra và áp dụng vào nhánh hiện tại
git stash pop
```

### Khôi phục thay đổi (Undo)
```bash
# Bỏ qua các file đã đưa vào Staging Area (Undo git add)
git restore --staged <tên_file>

# Hủy bỏ mọi thay đổi ở Working Directory (Đưa file về trạng thái commit gần nhất)
git restore <tên_file>
```

### Reset & Revert
**Git Revert:** Tạo ra một commit mới có nội dung đảo ngược lại các thay đổi của commit cũ. (An toàn cho public branch).
```bash
git revert <mã_commit_hash>
```

**Git Reset:** Quay lùi thời gian về một commit trước đó.
- `--soft`: Giữ lại thay đổi ở Working Directory và Staging Area.
- `--mixed` (Mặc định): Giữ lại thay đổi ở Working Directory, xóa khỏi Staging.
- `--hard`: Xóa BỎ TOÀN BỘ thay đổi, code quay về y hệt thời điểm commit đó. (Cẩn thận khi dùng).
```bash
git reset --hard <mã_commit_hash>
```

---

## 6. Lấy một commit cụ thể (Cherry-pick)
Bạn muốn lấy chính xác 1 commit từ nhánh B sang nhánh A mà không muốn merge toàn bộ nhánh B?
```bash
# Đứng ở nhánh A
git cherry-pick <mã_commit_hash>
```

---

## 7. Giải quyết xung đột (Resolve Conflict)
Khi gộp (merge/pull) code có sự thay đổi tại cùng một dòng của cùng một file bởi 2 người khác nhau, Git sẽ báo **Conflict**.
1. Git sẽ đánh dấu vùng bị conflict trong file bằng các dấu `<<<<<<<`, `=======`, `>>>>>>>`.
2. Bạn mở file lên, xem xét và giữ lại phần code đúng (hoặc gộp cả hai).
3. Xóa các dấu đánh dấu của Git.
4. Chạy `git add <file_đã_sửa>`.
5. Chạy `git commit -m "Resolve conflict"`.
