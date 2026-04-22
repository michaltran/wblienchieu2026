import type { ContentPost } from "../types/content";

export const procurementPosts: ContentPost[] = Array.from({ length: 30 }).map((_, i) => ({
  slug: `dau-thau-${i + 1}`,
  title: [
      "Thông báo mời chào giá cung cấp văn phòng phẩm năm 2024",
      "Kế hoạch lựa chọn nhà thầu cung cấp hóa chất xét nghiệm",
      "Kết quả lựa chọn nhà thầu gói thầu mua sắm trang thiết bị y tế",
      "Thông báo gia hạn thời gian nộp hồ sơ đề xuất gói thầu số 05",
      "Mời quan tâm gói thầu sửa chữa cải tạo khu nhà D",
      "Công khai kế hoạch mua sắm thuốc quý I/2024",
      "Thông báo hủy thầu gói thầu cung cấp dịch vụ bảo vệ",
      "Quyết định phê duyệt kết quả lựa chọn nhà thầu",
      "Danh sách nhà thầu trúng thầu vật tư y tế tiêu hao",
      "Hồ sơ mời thầu gói thầu dịch vụ vệ sinh công nghiệp"
  ][i % 10] + ` [Mã: DT-${1000 + i}]`,
  excerpt: `Căn cứ Luật Đấu thầu và các văn bản hướng dẫn thi hành. Trung tâm Y tế Khu vực Liên Chiểu công bố thông tin đấu thầu gói thầu số ${i+1}.`,
  date: new Date(2024, 0, 15 - (i % 30)).toISOString().split('T')[0],
  tags: ["Thông báo", "Mời chào giá", "Kết quả", "Kế hoạch LCNT"][i % 4] ? [["Thông báo", "Mời chào giá", "Kết quả", "Kế hoạch LCNT"][i % 4]] : ["Thông báo"],
  fileUrl: i % 2 === 0 ? "/files/placeholder.pdf" : undefined,
  featured: i < 3
}));
