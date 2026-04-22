export interface HealthPackage {
  id: string;
  name: string;
  price?: string;
  target: string; // Đối tượng
  duration: string;
  includes: string[];
  note?: string;
  highlight?: boolean;
}

export const healthCheckPackages: HealthPackage[] = [
  {
      id: "basic",
      name: "Gói Khám Sức Khỏe Cơ Bản",
      price: "1.200.000đ",
      target: "Cá nhân, Người đi làm",
      duration: "1 buổi sáng",
      includes: ["Khám Nội tổng quát, Mắt, RHM, TMH", "Xét nghiệm máu cơ bản (Công thức máu, đường huyết, mỡ máu)", "Chụp X-quang tim phổi", "Siêu âm ổ bụng tổng quát", "Tổng phân tích nước tiểu"],
      note: "Phù hợp kiểm tra sức khỏe định kỳ hàng năm."
  },
  {
      id: "advanced",
      name: "Gói Khám Sức Khỏe Nâng Cao",
      target: "Người trên 40 tuổi",
      price: "2.500.000đ",
      duration: "1 ngày",
      includes: ["Tất cả mục gói Cơ bản", "Tầm soát chức năng Gan, Thận, Tuyến giáp", "Điện tim (ECG)", "Siêu âm tuyến giáp, tiền liệt tuyến/tử cung", "Tầm soát dấu ấn ung thư (Gan, Phổi, Dạ dày) x1"],
      highlight: true
  },
  {
      id: "corporate",
      name: "Khám Sức Khỏe Doanh Nghiệp",
      target: "Công ty, Xí nghiệp",
      price: "Liên hệ báo giá",
      duration: "Linh hoạt",
      includes: ["Thiết kế gói khám theo nhu cầu doanh nghiệp", "Có thể lấy mẫu xét nghiệm tận nơi", "Ưu đãi chiết khấu theo số lượng cao", "Cung cấp hồ sơ sức khỏe theo Thông tư 14"],
      note: "Dành cho đoàn từ 10 người trở lên."
  },
  {
      id: "pre-marriage",
      name: "Gói Tiền Hôn Nhân",
      target: "Cặp đôi sắp cưới",
      price: "1.800.000đ/người",
      duration: "1 buổi",
      includes: ["Khám sức khỏe sinh sản", "Xét nghiệm các bệnh lây truyền (HIV, Viêm gan B, C, Giang mai)", "Tư vấn di truyền cơ bản", "Siêu âm đánh giá chức năng sinh sản"],
  }
];

export const healthCheckFaq = [
  { q: "Tôi có cần nhịn ăn trước khi khám không?", a: "Có. Bạn nên nhịn ăn ít nhất 8 tiếng trước khi lấy máu xét nghiệm để đảm bảo kết quả chính xác, đặc biệt là chỉ số đường huyết và mỡ máu." },
  { q: "Thời gian nhận kết quả là bao lâu?", a: "Đối với các gói cơ bản, kết quả thường có trong buổi sáng. Các xét nghiệm chuyên sâu có thể mất 24h. Bác sĩ sẽ tư vấn ngay khi có đầy đủ kết quả." },
  { q: "Tôi có thể đăng ký khám vào thứ 7, Chủ nhật không?", a: "Trung tâm có tổ chức khám sức khỏe vào sáng thứ 7 hàng tuần. Chủ nhật chỉ trực cấp cứu. Vui lòng đặt lịch trước." },
  { q: "Doanh nghiệp muốn khám đoàn đông thì quy trình thế nào?", a: "Vui lòng liên hệ phòng Kế hoạch tổng hợp để nhận báo giá và ký hợp đồng. Chúng tôi sẽ sắp xếp luồng khám riêng biệt để không phải chờ đợi." }
];
