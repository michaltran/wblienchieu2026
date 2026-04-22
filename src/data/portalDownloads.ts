import type { DownloadItem } from "../components/blocks/content/PortalDownloads";

export function getDownloads(moduleSlug: string): DownloadItem[] {
  switch (moduleSlug) {
    case "dao-tao-nckh":
      return [
        { label: "Mẫu phiếu đăng ký tham gia đào tạo liên tục", href: "#", fileType: "PDF" },
        { label: "Quy định về nghiên cứu khoa học cấp cơ sở", href: "#", fileType: "PDF" },
        { label: "Biểu mẫu báo cáo đề tài NCKH", href: "#", fileType: "DOCX" },
        { label: "Kế hoạch đào tạo chỉ đạo tuyến 2024", href: "#", fileType: "PDF" },
      ];
    
    case "dau-thau-mua-sam":
      return [
        { label: "Mẫu hồ sơ chào giá cạnh tranh", href: "#", fileType: "DOCX" },
        { label: "Biểu mẫu cam kết bảo hành", href: "#", fileType: "DOCX" },
        { label: "Danh mục kỹ thuật trang thiết bị mời thầu", href: "#", fileType: "XLSX" },
        { label: "Mẫu đơn dự thầu (Dành cho nhà thầu)", href: "#", fileType: "DOCX" },
      ];

    case "cai-cach-hanh-chinh":
      return [
        { label: "Bộ thủ tục hành chính cấp cơ sở", href: "#", fileType: "PDF" },
        { label: "Phiếu khảo sát hài lòng người bệnh (Mẫu in)", href: "#", fileType: "PDF" },
        { label: "Mẫu đơn đề nghị cung cấp thông tin y tế", href: "#", fileType: "DOCX" },
        { label: "Hướng dẫn sử dụng Kiosk thông minh", href: "#", fileType: "PDF" },
      ];

    case "tuyen-dung":
      return [
        { label: "Mẫu phiếu đăng ký dự tuyển viên chức (NĐ 115)", href: "#", fileType: "DOCX" },
        { label: "Sơ yếu lý lịch tự thuật (Mẫu 2C-BNV)", href: "#", fileType: "DOCX" },
        { label: "Hướng dẫn nộp hồ sơ trực tuyến", href: "#", fileType: "PDF" },
        { label: "Cam kết về thời gian công tác", href: "#", fileType: "DOCX" },
      ];

    default:
      return [];
  }
}
