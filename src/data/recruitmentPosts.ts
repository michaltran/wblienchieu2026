import type { ContentPost } from "../types/content";

export const recruitmentPosts: ContentPost[] = Array.from({ length: 15 }).map((_, i) => ({
  slug: `tuyen-dung-${i + 1}`,
  title: [
      "Thông báo tuyển dụng Bác sĩ Đa khoa (05 chỉ tiêu)",
      "Tuyển dụng Điều dưỡng viên - Hạn nộp 30/01/2024",
      "Tuyển dụng Kỹ thuật viên Hình ảnh y học",
      "Thông báo tuyển dụng Hộ sinh viên làm việc tại Khoa Sản",
      "Tuyển dụng Nhân viên Công nghệ thông tin (Quản trị mạng)",
      "Tuyển dụng Dược sĩ đại học phụ trách kho thuốc",
      "Cơ hội việc làm cho Kế toán viên bệnh viện",
      "Tuyển dụng Hộ lý, Y công (Lao động phổ thông)",
      "Thông báo kết quả thi tuyển viên chức đợt 1 năm 2023",
      "Kế hoạch tuyển dụng nhân sự chất lượng cao năm 2024"
  ][i % 10],
  excerpt: `Trung tâm Y tế Khu vực Liên Chiểu cần tuyển dụng vị trí trên. Môi trường làm việc chuyên nghiệp, chế độ đãi ngộ tốt. Hạn nhận hồ sơ: 30/02/2024.`,
  date: new Date(2024, 0, 10 - i).toISOString().split('T')[0],
  tags: ["Bác sĩ", "Điều dưỡng", "Kỹ thuật", "Hành chính", "Khác"][i % 5] ? [["Bác sĩ", "Điều dưỡng", "Kỹ thuật", "Hành chính", "Khác"][i % 5]] : ["Bác sĩ"],
  featured: i < 3
}));
