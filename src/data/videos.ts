export type VideoCategory =
  | "Nội khoa"
  | "Ngoại Khoa"
  | "Chăm sóc sức khỏe sinh sản"
  | "Dinh dưỡng"
  | "Hoạt động của Trung tâm"
  | "Dự phòng Truyền nhiễm";

export interface Video {
  id: number;
  slug: string;
  title: string;
  category: VideoCategory;
  date: string;
  youtubeId: string;
  description: string;
  views?: number;
}

export const videos: Video[] = [
  // Nội khoa (3)
  {
    id: 1,
    slug: "huong-dan-cham-soc-nguoi-benh-tang-huyet-ap",
    title: "Hướng dẫn chăm sóc người bệnh Tăng huyết áp tại nhà",
    category: "Nội khoa",
    date: "2024-03-15",
    youtubeId: "Sg9S7M9F1", 
    description: "Cách đo huyết áp đúng cách và chế độ ăn uống cho người bệnh cao huyết áp. (Video minh họa)",
    views: 1250
  },
  {
    id: 2,
    slug: "dau-hieu-nhan-biet-dot-quy-som",
    title: "Dấu hiệu nhận biết sớm đột quỵ và cách xử trí",
    category: "Nội khoa",
    date: "2024-02-10",
    youtubeId: "Sg9S7M9F2",
    description: "Quy tắc F.A.S.T trong nhận biết đột quỵ để cấp cứu kịp thời. (Video minh họa)",
    views: 3400
  },
  {
    id: 3,
    slug: "quan-ly-benh-dai-thao-duong",
    title: "Quản lý bệnh Đái tháo đường hiệu quả",
    category: "Nội khoa",
    date: "2024-01-20",
    youtubeId: "Sg9S7M9F3",
    description: "Kiểm soát đường huyết thông qua dinh dưỡng và vận động. (Video minh họa)",
    views: 1800
  },

  // Ngoại Khoa (3)
  {
    id: 4,
    slug: "phau-thuat-noi-soi-ruot-thua",
    title: "Quy trình phẫu thuật nội soi ruột thừa tại TTYT",
    category: "Ngoại Khoa",
    date: "2024-03-01",
    youtubeId: "Sg9S7M9F4",
    description: "Cận cảnh quy trình phẫu thuật ít xâm lấn, hồi phục nhanh. (Video minh họa)",
    views: 2100
  },
  {
    id: 5,
    slug: "cham-soc-vet-thuong-sau-mo",
    title: "Hướng dẫn chăm sóc vết thương sau mổ tại nhà",
    category: "Ngoại Khoa",
    date: "2024-02-28",
    youtubeId: "Sg9S7M9F5",
    description: "Cách thay băng, vệ sinh vết mổ để tránh nhiễm trùng. (Video minh họa)",
    views: 1560
  },
  {
    id: 6,
    slug: "tam-soat-ung-thu-dai-truc-trang",
    title: "Tầm soát ung thư Đại trực tràng: Khi nào cần thực hiện?",
    category: "Ngoại Khoa",
    date: "2023-12-15",
    youtubeId: "Sg9S7M9F6",
    description: "Lợi ích của nội soi tiêu hóa trong tầm soát ung thư sớm. (Video minh họa)",
    views: 980
  },

  // Chăm sóc sức khỏe sinh sản (3)
  {
    id: 7,
    slug: "kham-thai-dinh-ky",
    title: "Lịch khám thai định kỳ mẹ bầu cần nhớ",
    category: "Chăm sóc sức khỏe sinh sản",
    date: "2024-03-10",
    youtubeId: "Sg9S7M9F7",
    description: "Các mốc khám thai quan trọng để đảm bảo thai kỳ khỏe mạnh. (Video minh họa)",
    views: 4500
  },
  {
    id: 8,
    slug: "cham-soc-tre-so-sinh",
    title: "Hướng dẫn tắm và vệ sinh rốn cho trẻ sơ sinh",
    category: "Chăm sóc sức khỏe sinh sản",
    date: "2024-02-15",
    youtubeId: "Sg9S7M9F8",
    description: "Kỹ năng cơ bản dành cho các bà mẹ lần đầu sinh con. (Video minh họa)",
    views: 6200
  },
  {
    id: 9,
    slug: "cac-bien-phap-tranh-thai",
    title: "Tư vấn các biện pháp tránh thai hiện đại",
    category: "Chăm sóc sức khỏe sinh sản",
    date: "2023-11-20",
    youtubeId: "Sg9S7M9F9",
    description: "Ưu nhược điểm của các phương pháp tránh thai phổ biến. (Video minh họa)",
    views: 2300
  },

  // Dinh dưỡng (3)
  {
    id: 10,
    slug: "dinh-duong-cho-tre-bieng-an",
    title: "Giải pháp dinh dưỡng cho trẻ biếng ăn",
    category: "Dinh dưỡng",
    date: "2024-03-05",
    youtubeId: "Sg9S7M9F10",
    description: "Thực đơn giúp bé ăn ngon miệng và tăng cân đều. (Video minh họa)",
    views: 3100
  },
  {
    id: 11,
    slug: "che-do-an-giam-can-lanh-manh",
    title: "Xây dựng chế độ ăn giảm cân lành mạnh, khoa học",
    category: "Dinh dưỡng",
    date: "2024-01-15",
    youtubeId: "Sg9S7M9F11",
    description: "Nguyên tắc ăn uống để giảm cân mà không hại sức khỏe. (Video minh họa)",
    views: 5400
  },
  {
    id: 12,
    slug: "thuc-pham-tot-cho-tim-mach",
    title: "Top 10 thực phẩm tốt cho sức khỏe tim mạch",
    category: "Dinh dưỡng",
    date: "2023-10-30",
    youtubeId: "Sg9S7M9F12",
    description: "Những loại thực phẩm nên bổ sung vào bữa ăn hàng ngày. (Video minh họa)",
    views: 2700
  },

  // Hoạt động của Trung tâm (4)
  {
    id: 13,
    slug: "hoi-nghi-khoa-hoc-2023",
    title: "Hội nghị Khoa học Kỹ thuật Trung tâm Y tế 2023",
    category: "Hoạt động của Trung tâm",
    date: "2023-12-20",
    youtubeId: "Sg9S7M9F13",
    description: "Tổng kết các đề tài nghiên cứu khoa học nổi bật trong năm. (Video minh họa)",
    views: 890
  },
  {
    id: 14,
    slug: "chuong-trinh-kham-thien-nguyen",
    title: "Hành trình khám bệnh thiện nguyện tại xã Hòa Bắc",
    category: "Hoạt động của Trung tâm",
    date: "2024-01-25",
    youtubeId: "Sg9S7M9F14",
    description: "Hoạt động vì cộng đồng của Đoàn thanh niên Trung tâm. (Video minh họa)",
    views: 1400
  },
  {
    id: 15,
    slug: "le-ky-niem-ngay-thay-thuoc-viet-nam",
    title: "Lễ kỷ niệm 69 năm Ngày Thầy thuốc Việt Nam",
    category: "Hoạt động của Trung tâm",
    date: "2024-02-27",
    youtubeId: "Sg9S7M9F15",
    description: "Tôn vinh những cống hiến của đội ngũ y bác sĩ. (Video minh họa)",
    views: 1100
  },
  {
    id: 16,
    slug: "tap-huan-phong-chay-chua-chay",
    title: "Tập huấn và diễn tập Phòng cháy chữa cháy 2024",
    category: "Hoạt động của Trung tâm",
    date: "2024-03-12",
    youtubeId: "Sg9S7M9F16",
    description: "Nâng cao kỹ năng PCCC cho cán bộ nhân viên. (Video minh họa)",
    views: 950
  },

  // Dự phòng Truyền nhiễm (3)
  {
    id: 17,
    slug: "phong-chong-sot-xuat-huyet",
    title: "Chủ động phòng chống Sốt xuất huyết tại gia đình",
    category: "Dự phòng Truyền nhiễm",
    date: "2023-09-10",
    youtubeId: "Sg9S7M9F17",
    description: "Các biện pháp diệt lăng quăng, bọ gậy hiệu quả. (Video minh họa)",
    views: 4100
  },
  {
    id: 18,
    slug: "tiem-chung-cum-mua",
    title: "Tại sao nên tiêm vắc xin Cúm mùa hàng năm?",
    category: "Dự phòng Truyền nhiễm",
    date: "2023-11-05",
    youtubeId: "Sg9S7M9F18",
    description: "Lợi ích của việc tiêm phòng cúm đối với người cao tuổi và trẻ em. (Video minh họa)",
    views: 3200
  },
  {
    id: 19,
    slug: "tay-chan-mieng-o-tre-em",
    title: "Phòng ngừa bệnh Tay chân miệng ở trẻ em",
    category: "Dự phòng Truyền nhiễm",
    date: "2024-03-20",
    youtubeId: "Sg9S7M9F19",
    description: "Giữ vệ sinh đúng cách để bảo vệ trẻ khỏi Tay chân miệng. (Video minh họa)",
    views: 2900
  }
];
