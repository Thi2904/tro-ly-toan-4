# Trợ lý học tập Toán 4

Ứng dụng luyện tập Toán lớp 4 (sách Kết nối tri thức với cuộc sống, 2 tập, 73 bài).

- Học sinh nhập họ tên và ngày sinh để vào học. Lần sau nhập đúng lại là vào lại tài khoản cũ, không tạo mới.
- Mỗi lần làm bài gồm 10 câu chọn ngẫu nhiên từ ngân hàng câu hỏi của bài (tổng hơn 1 100 câu).
- Làm đúng được khen, làm sai được động viên bằng giọng đọc tiếng Việt của trình duyệt kèm hiệu ứng âm thanh.
- Bảng xếp hạng cho học sinh và giáo viên cùng xem.
- Giáo viên quản lý điểm tại mục "Giáo viên" ở trang đăng nhập.

## Công nghệ

Next.js 16 (App Router), React 19, Neon Postgres (`@neondatabase/serverless`), deploy trên Vercel.

## Chạy trên máy

```bash
npm install
cp .env.example .env.local   # điền DATABASE_URL, ADMIN_PASSWORD, SESSION_SECRET
npm run dev
```

Không có `DATABASE_URL` thì ứng dụng dùng bộ nhớ tạm (mất dữ liệu khi khởi động lại) để chạy thử.

## Biến môi trường

| Tên | Ý nghĩa |
| --- | --- |
| `DATABASE_URL` | Chuỗi kết nối Postgres (Neon) |
| `ADMIN_USERNAME` | Tên đăng nhập giáo viên (mặc định `admin`) |
| `ADMIN_PASSWORD` | Mật khẩu giáo viên |
| `SESSION_SECRET` | Chuỗi ngẫu nhiên dài để ký cookie đăng nhập |

## Ngân hàng câu hỏi

Nằm trong `lib/bank/` theo từng chương. Kiểm tra cấu trúc: `npm run check:bank`.
Đề có thể kèm hình: `[[angle:60]]`, `[[clock:3:00]]`, `[[lines:perp]]`, `[[shape:rhombus]]`, `[[frac:2/6]]`, `[[bar:Tiêu đề|A=1,B=2|đơn vị]]`; phân số viết `{a/b}`.
