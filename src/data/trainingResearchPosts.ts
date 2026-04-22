import type { ContentPost } from "../types/content";

export const trainingResearchPosts: ContentPost[] = Array.from({ length: 35 }).map((_, i) => ({
  slug: `dao-tao-nckh-${i + 1}`,
  title: [
      "Hội thảo cập nhật phác đồ điều trị Tăng huyết áp 2024",
      "Kế hoạch đào tạo liên tục cho điều dưỡng quý I/2024",
      "Nghiệm thu đề tài nghiên cứu khoa học cấp cơ sở năm 2023",
      "Tập huấn kỹ năng giao tiếp ứng xử cho nhân viên y tế",
      "Triển khai kỹ thuật mới trong phẫu thuật nội soi",
      "Hội nghị khoa học kỹ thuật thường niên lần thứ X",
      "Thông báo tuyển sinh lớp đào tạo cấp cứu cơ bản",
      "Hướng dẫn chẩn đoán và điều trị sốt xuất huyết Dengue",
      "Sinh hoạt khoa học: Ứng dụng AI trong chẩn đoán hình ảnh",
      "Lễ tốt nghiệp lớp bác sĩ định hướng chuyên khoa Y học cổ truyền"
  ][i % 10] + ` (Số ${i + 1})`,
  excerpt: "Thông tin chi tiết về chương trình đào tạo, mục tiêu, đối tượng tham gia và thời gian tổ chức. Các cán bộ nhân viên vui lòng đăng ký trước ngày diễn ra sự kiện.",
  date: new Date(2023, 11, 31 - i).toISOString().split('T')[0],
  tags: ["Đào tạo", "Hội thảo", "NCKH", "Chuyên môn"][i % 4] ? [["Đào tạo", "Hội thảo", "NCKH", "Chuyên môn"][i % 4]] : ["Đào tạo"],
  featured: i < 3
}));
