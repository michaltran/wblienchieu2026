export interface HealthCategory {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export const healthCategories: HealthCategory[] = [
    { id: 'tong-hop', name: 'Tổng hợp', slug: 'tong-hop', description: 'Tin tức và kiến thức y khoa tổng hợp mới nhất.' },
    { id: 'tra-cuu-benh', name: 'Tra cứu bệnh', slug: 'tra-cuu-benh', description: 'Thông tin chi tiết về các loại bệnh lý thường gặp.' },
    { id: 'hieu-ve-co-the', name: 'Hiểu về cơ thể bạn', slug: 'hieu-ve-co-the-ban', description: 'Kiến thức giải phẫu và sinh lý học cơ bản.' },
    { id: 'tim-mach', name: 'Tim mạch', slug: 'tim-mach', description: 'Chăm sóc sức khỏe tim mạch và phòng ngừa bệnh lý.' },
    { id: 'ung-buou', name: 'Ung bướu', slug: 'ung-buou', description: 'Kiến thức về ung thư, phòng ngừa và điều trị.' },
    { id: 'mien-dich-di-ung', name: 'Miễn dịch - Dị ứng', slug: 'mien-dich-di-ung', description: 'Các vấn đề về hệ miễn dịch và dị ứng.' },
    { id: 'tieu-hoa-gan-mat', name: 'Tiêu hóa - Gan mật', slug: 'tieu-hoa-gan-mat', description: 'Sức khỏe hệ tiêu hóa, gan và mật.' },
    { id: 'nhi', name: 'Nhi khoa', slug: 'nhi', description: 'Chăm sóc sức khỏe toàn diện cho trẻ em.' },
    { id: 'suc-khoe-phu-nu', name: 'Sức khỏe phụ nữ', slug: 'suc-khoe-phu-nu', description: 'Các vấn đề sức khỏe đặc thù của phụ nữ.' },
    { id: 'chan-thuong-chinh-hinh', name: 'Chấn thương chỉnh hình', slug: 'chan-thuong-chinh-hinh', description: 'Vận động, xương khớp và chấn thương thể thao.' },
    { id: 'than-kinh', name: 'Thần kinh', slug: 'than-kinh', description: 'Sức khỏe hệ thần kinh và não bộ.' },
    { id: 'tham-my', name: 'Thẩm mỹ', slug: 'tham-my', description: 'Kiến thức thẩm mỹ nội khoa và ngoại khoa.' },
    { id: 'y-hoc-co-truyen', name: 'Y học cổ truyền', slug: 'y-hoc-co-truyen', description: 'Phương pháp chữa bệnh bằng đông y.' },
    { id: 'suc-khoe-tong-quat', name: 'Sức khỏe tổng quát', slug: 'suc-khoe-tong-quat', description: 'Lời khuyên sức khỏe cho mọi lứa tuổi.' },
    { id: 'suc-khoe-tinh-than', name: 'Sức khỏe tinh thần', slug: 'suc-khoe-tinh-than', description: 'Chăm sóc sức khỏe tâm lý và tinh thần.' },
    { id: 'hoi-dap-bac-si', name: 'Hỏi đáp bác sĩ', slug: 'hoi-dap-bac-si', description: 'Giải đáp thắc mắc trực tiếp từ chuyên gia.' },
];
