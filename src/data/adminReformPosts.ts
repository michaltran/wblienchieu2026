import type { ContentPost } from "../types/content";

export const adminReformPosts: ContentPost[] = Array.from({ length: 25 }).map((_, i) => ({
  slug: `cai-cach-hanh-chinh-${i + 1}`,
  title: [
      "Niêm yết công khai thủ tục hành chính thuộc thẩm quyền giải quyết",
      "Hướng dẫn sử dụng Cổng dịch vụ công trực tuyến",
      "Báo cáo kết quả khảo sát hài lòng người bệnh ngoại trú quý IV",
      "Kế hoạch chuyển đổi số ngành y tế năm 2024",
      "Quy trình tiếp nhận và xử lý phản ánh kiến nghị của người dân",
      "Danh mục thủ tục hành chính thực hiện cơ chế một cửa",
      "Hướng dẫn đăng ký khám bệnh online qua ứng dụng",
      "Công khai đường dây nóng hỗ trợ thủ tục BHYT",
      "Kết quả chỉ số cải cách hành chính (PAR INDEX) năm 2023",
      "Quy định mới về đơn giản hóa thủ tục nhập viện"
  ][i % 10],
  excerpt: "Nâng cao chất lượng phục vụ, giảm thiểu thủ tục rườm rà, hướng tới sự hài lòng của người bệnh là mục tiêu hàng đầu.",
  date: new Date(2023, 11, 20 - i).toISOString().split('T')[0],
  tags: ["Thủ tục", "Công khai", "Chuyển đổi số", "Báo cáo"][i % 4] ? [["Thủ tục", "Công khai", "Chuyển đổi số", "Báo cáo"][i % 4]] : ["Thủ tục"],
  featured: i < 3
}));
