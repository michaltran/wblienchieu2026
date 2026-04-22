# Trung tâm Y tế Khu vực Liên Chiểu — Website

Dự án Website chính thức cho Trung tâm Y tế Liên Chiểu, được xây dựng với công nghệ hiện đại nhằm cung cấp thông tin y tế, đặt lịch khám và tra cứu kết quả cho người dân.

## 🛠 Công nghệ (Tech Stack)

- **Frontend**: React (Vite)
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM

## 🚀 Hướng dẫn cài đặt (Setup)

### 1. Yêu cầu hệ thống

- Node.js (v18 trở lên khuyến nghị)
- npm hoặc yarn/pnpm

### 2. Cài đặt dependency

```bash
npm install
```

### 3. Cấu hình môi trường

Copy file `.env.example` thành `.env` và cập nhật các giá trị cấu hình tương ứng:

```bash
cp .env.example .env
```

- `VITE_API_BASE_URL`: Địa chỉ API Backend (ví dụ: `http://localhost:3000` hoặc URL thật).

### 4. Chạy Development Server

```bash
npm run dev
```

Truy cập tại: `http://localhost:5173`

### 5. Build cho Production

```bash
npm run build
```

Kết quả build sẽ nằm trong thư mục `dist/`.

## 📂 Cấu trúc dự án

- `src/app`: Cấu hình Router và App setup.
- `src/components`: Các component tái sử dụng (Button, Input, Layout...).
- `src/pages`: Các trang chính (Trang chủ, Tin tức, Giới thiệu...).
- `src/lib`: Các tiện ích (API client, helper functions).
- `src/hooks`: Custom React Hooks.
- `src/assets`: Tài nguyên hình ảnh, font.
- `public`: Các file tĩnh (favicon, robots.txt...).

## 🔐 Quản trị (Admin)

Truy cập đường dẫn `/admin` để vào trang quản trị nội dung.

- Đăng nhập với tài khoản được cấp.
- Quản lý bài viết, tin tức, hình ảnh.

## ⚠️ Known Issues

- Hiện tại đang sử dụng Mock API cho một số tính năng nếu chưa kết nối Backend.
- **Build Warning**: Lệnh `npm run build` có thể báo lỗi TypeScript (Type Errors) ở một số file (Appointment.tsx, VideoLibrary.tsx...). Đây là các lỗi kiểm tra kiểu dữ liệu nghiêm ngặt (Strict Mode), tuy nhiên Development Server (`npm run dev`) vẫn hoạt động bình thường. Bạn có thể cần điều chỉnh code hoặc `tsconfig.json` để fix triệt để.

---

© 2026 Design by Đạt Đạt. All rights reserved.
