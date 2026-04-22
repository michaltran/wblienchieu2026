export interface QualityPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail?: string;
  tags: string[];
}

export const qualityPosts: QualityPost[] = [
  {
    id: "1",
    slug: "cai-tien-quy-trinh-kham-benh",
    title: "Cải tiến quy trình khám bệnh: Giảm thời gian chờ đợi cho người dân",
    excerpt: "Áp dụng công nghệ thông tin và sắp xếp lại luồng di chuyển giúp giảm 30% thời gian chờ đợi tại khoa Khám bệnh.",
    date: "2024-03-20",
    tags: ["Cải tiến quy trình", "Người bệnh là trung tâm"],
  },
  {
    id: "2",
    slug: "tap-huan-an-toan-nguoi-benh-2024",
    title: "Tập huấn An toàn người bệnh: Ưu tiên hàng đầu trong mọi hoạt động y tế",
    excerpt: "Khóa tập huấn cập nhật các tiêu chuẩn mới nhất về an toàn người bệnh cho 100% nhân viên y tế.",
    date: "2024-03-15",
    tags: ["An toàn người bệnh", "Đào tạo"],
  },
  {
    id: "3",
    slug: "khao-sat-hai-long-nguoi-benh-quy-1",
    title: "Kết quả khảo sát hài lòng người bệnh Quý I/2024",
    excerpt: "Tỷ lệ hài lòng chung đạt 95%, ghi nhận nhiều phản hồi tích cực về thái độ phục vụ của điều dưỡng.",
    date: "2024-03-10",
    tags: ["Đo lường chất lượng", "Trải nghiệm người bệnh"],
  },
  {
    id: "4",
    slug: "trien-khai-5s-toan-benh-vien",
    title: "Triển khai phong trào 5S toàn diện tại các khoa phòng",
    excerpt: "Xây dựng môi trường làm việc Xanh - Sạch - Đẹp, góp phần hạn chế sai sót và nâng cao hiệu suất.",
    date: "2024-02-28",
    tags: ["5S", "Môi trường y tế"],
  },
  {
    id: "5",
    slug: "hoi-dong-nguoi-benh-cap-benh-vien",
    title: "Họp Hội đồng người bệnh cấp bệnh viện định kỳ tháng 2",
    excerpt: "Lắng nghe và giải đáp trực tiếp các thắc mắc của người bệnh đang điều trị nội trú.",
    date: "2024-02-25",
    tags: ["Hội đồng người bệnh", "Lắng nghe"],
  },
  {
    id: "6",
    slug: "giam-sat-tuan-thu-ve-sinh-tay",
    title: "Tăng cường giám sát tuân thủ vệ sinh tay ngoại khoa",
    excerpt: "Đảm bảo tuân thủ tuyệt đối quy trình vệ sinh tay để phòng ngừa nhiễm khuẩn vết mổ.",
    date: "2024-02-15",
    tags: ["Kiểm soát nhiễm khuẩn", "An toàn phẫu thuật"],
  },
  {
    id: "7",
    slug: "chuan-hoa-phac-do-dieu-tri-noi-tru",
    title: "Cập nhật và chuẩn hóa 50 phác đồ điều trị nội trú",
    excerpt: "Hội đồng khoa học kỹ thuật thông qua các phác đồ mới dựa trên hướng dẫn của Bộ Y tế.",
    date: "2024-02-10",
    tags: ["Phác đồ điều trị", "Chuyên môn"],
  },
  {
    id: "8",
    slug: "dien-tap-ung-pho-su-co-y-khoa",
    title: "Diễn tập ứng phó sự cố y khoa: Phản ứng nhanh, xử lý chính xác",
    excerpt: "Nâng cao năng lực xử lý tình huống khẩn cấp cho đội ngũ trực cấp cứu.",
    date: "2024-01-20",
    tags: ["Quản lý sự cố", "An toàn người bệnh"],
  },
];
