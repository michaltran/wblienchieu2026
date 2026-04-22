export interface PatientCategory {
  key: "vaccine" | "procedure" | "pricing" | "policy" | "charity" | "mailbox";
  title: string;
  route: string;
  description: string;
}

export const patientCategories: PatientCategory[] = [
  {
    key: "vaccine",
    title: "Tư vấn và Tiêm chủng Vắc xin",
    route: "/nguoi-benh/tu-van-tiem-chung-vac-xin",
    description: "Cung cấp thông tin cập nhật về các loại vắc xin, lịch tiêm chủng khuyến nghị và tư vấn sức khỏe phòng ngừa cho mọi lứa tuổi."
  },
  {
    key: "procedure",
    title: "Hướng dẫn và Quy trình khám chữa bệnh",
    route: "/nguoi-benh/huong-dan-quy-trinh-kham-chua-benh",
    description: "Hướng dẫn chi tiết các bước đăng ký, thủ tục khám bảo hiểm y tế và quy trình khám dịch vụ tại bệnh viện."
  },
  {
    key: "pricing",
    title: "Bảng giá dịch vụ bệnh viện",
    route: "/nguoi-benh/bang-gia-dich-vu",
    description: "Tra cứu bảng giá niêm yết các dịch vụ khám bệnh, chữa bệnh, xét nghiệm và kỹ thuật y tế."
  },
  {
    key: "policy",
    title: "Chế độ chính sách",
    route: "/nguoi-benh/che-do-chinh-sach",
    description: "Thông tin về quyền lợi bảo hiểm y tế, các chính sách hỗ trợ người bệnh và quy định nội bộ."
  },
  {
    key: "charity",
    title: "Nhịp cầu nhân ái",
    route: "/nguoi-benh/nhip-cau-nhan-ai",
    description: "Kết nối những tấm lòng vàng, chia sẻ và hỗ trợ các hoàn cảnh khó khăn đang điều trị tại bệnh viện."
  },
  {
    key: "mailbox",
    title: "Hộp thư bạn đọc",
    route: "/nguoi-benh/hop-thu-ban-doc",
    description: "Kênh tiếp nhận ý kiến đóng góp, câu hỏi và phản hồi từ người bệnh và thân nhân."
  }
];
