# Hướng dẫn kiểm tra VR360 (Drop-in Image Test)

Hệ thống hỗ trợ 2 chế độ hiển thị:

1.  **Multires Tiles** (Mặc định - Chất lượng cao, load nhanh): Cần cắt ảnh thành nhiều tiles nhỏ.
2.  **Equirectangular Image** (Chế độ test): Sử dụng 1 file ảnh JPG/PNG duy nhất.

Để test nhanh 1 địa điểm mà không cần cắt tiles, bạn có thể copy ảnh 360 vào thư mục `public/vr360/panos/`. Hệ thống sẽ tự động phát hiện và hiển thị ảnh này nếu không tìm thấy tiles.

## Cách thực hiện

### Bước 1: Chuẩn bị ảnh

- Ảnh Panorama 360 độ (tỉ lệ 2:1), ví dụ 4096x2048 hoặc 8192x4096.
- Định dạng: JPG hoặc PNG.

### Bước 2: Đổi tên file

Đổi tên file ảnh trùng với **ID địa điểm** (xem danh sách bên dưới).
Ví dụ: `khu-a-tiep-don.jpg`

### Bước 3: Copy vào dự án

Copy file đã đổi tên vào thư mục:
`public/vr360/panos/`

### Bước 4: Kiểm tra

Mở trình duyệt và truy cập:
`http://localhost:5173/vr360?scene=<ID>`

Ví dụ: `http://localhost:5173/vr360?scene=khu-a-tiep-don`

---

## Danh sách ID địa điểm (Scene IDs)

### Khu A

- `khu-a-tiep-don`: Khu tiếp đón
- `khu-a-khoa-kham-benh`: Khoa Khám Bệnh
- `khu-a-cap-cuu`: Cấp cứu

### Khu B

- `khu-b-khoa-truyen-nhiem`: Khoa Truyền nhiễm

### Khu C

- `khu-c-phau-thuat-gmhs`: Khoa phẫu thuật - GMHS
- `khu-c-ksnk`: Khoa KSNK

### Khu nhà 9 tầng

- `nha-9-tang-b1-nha-de-xe`: Tầng hầm B1: Nhà để xe
- `nha-9-tang-chan-doan-hinh-anh`: Khoa Chẩn đoán hình ảnh
- `nha-9-tang-khoa-noi`: Khoa Nội
- `nha-9-tang-khoa-phu-san`: Khoa Phụ sản
- `nha-9-tang-khoa-nhi`: Khoa Nhi
- `nha-9-tang-khoa-yhct`: Khoa YHCT
- `nha-9-tang-khoa-dinh-duong`: Khoa Dinh dưỡng
- `nha-9-tang-cap-cuu-hstc`: Khoa Cấp cứu - Hồi sức tích cực
- `nha-9-tang-khoi-hanh-chinh`: Khối hành chính
