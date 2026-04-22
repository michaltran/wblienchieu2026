

export type DepartmentBlock = "lam-sang" | "can-lam-sang" | "hanh-chinh";

export interface DepartmentLeader {
  name: string;
  title: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  block: DepartmentBlock;
  leaders: DepartmentLeader[];
  teamImage: string;
  missionText: string;
  duties: string[];
  info: {
    phone: string;
    email: string;
    workingHours: string;
    location: string;
    services: string[];
  };
  highlights: {
    title: string;
    image: string;
  }[];
}

const COMMON_HIGHLIGHTS = Array.from({ length: 10 }, (_, i) => ({
  title: `Hoạt động tiêu biểu ${i + 1}`,
  image: `/assets/departments/placeholders/highlights/slide-${(i + 1).toString().padStart(2, '0')}.svg`
}));

const DEFAULT_INFO = {
  phone: "0905453677",
  email: "trungtamytelienchieu@danang.gov.vn",
  workingHours: "Thứ 2 - Thứ 6: 7:00 - 17:00",
  location: "Khu khám bệnh – TRUNG TÂM Y TẾ KHU VỰC LIÊN CHIỂU",
  services: [
    "Khám và điều trị bệnh chuyên khoa",
    "Tư vấn sức khỏe",
    "Thực hiện các kỹ thuật chuyên môn",
    "Đào tạo và chỉ đạo tuyến",
    "Nghiên cứu khoa học",
    "Hợp tác quốc tế"
  ]
};

export const departments: Department[] = [
  // A) Khối lâm sàng
  {
    id: "ls-noi",
    name: "Khoa Nội",
    slug: "khoa-noi",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Khoa Nội có chức năng khám và điều trị các bệnh lý nội khoa, chăm sóc sức khỏe toàn diện cho người bệnh.",
    duties: [
      "Khám bệnh, chữa bệnh nội trú và ngoại trú.",
      "Thực hiện các thủ thuật, kỹ thuật nội khoa.",
      "Tuyên truyền giáo dục sức khỏe.",
      "Tham gia phòng chống dịch bệnh.",
      "Đào tạo và nghiên cứu khoa học."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-ngoai",
    name: "Khoa Ngoại",
    slug: "khoa-ngoai",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Khoa Ngoại chuyên khám, cấp cứu và điều trị các bệnh lý ngoại khoa bằng phẫu thuật và thủ thuật.",
    duties: [
      "Phẫu thuật cấp cứu và theo kế hoạch.",
      "Điều trị hậu phẫu.",
      "Tư vấn phẫu thuật.",
      "Chuyển giao kỹ thuật.",
      "Nghiên cứu ứng dụng kỹ thuật mới."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-phu-san",
    name: "Khoa Phụ sản & CSSKSS",
    slug: "khoa-phu-san-csskss",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Chăm sóc sức khỏe sinh sản, khám và điều trị các bệnh lý phụ khoa, quản lý thai nghén.",
    duties: [
      "Khám thai, quản lý thai nghén.",
      "Đỡ đẻ, phẫu thuật sản phụ khoa.",
      "Điều trị bệnh phụ khoa.",
      "Kế hoạch hóa gia đình.",
      "Sàng lọc trước sinh và sơ sinh."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-cap-cuu",
    name: "Khoa Cấp cứu - Hồi sức tích cực",
    slug: "khoa-cap-cuu-hoi-suc-tich-cuc",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tiếp nhận, cấp cứu và điều trị tích cực cho bệnh nhân nặng, nguy kịch.",
    duties: [
      "Thường trực cấp cứu 24/24.",
      "Hồi sức tích cực, chống độc.",
      "Vận chuyển cấp cứu.",
      "Sẵn sàng ứng phó thảm họa.",
      "Đào tạo cấp cứu."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-kham-benh",
    name: "Khoa Khám Bệnh",
    slug: "khoa-kham-benh",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tiếp đón, sàng lọc và khám bệnh ngoại trú cho người dân.",
    duties: [
      "Tổ chức tiếp đón bệnh nhân.",
      "Khám bệnh, kê đơn, chỉ định xét nghiệm.",
      "Tư vấn sức khỏe.",
      "Quản lý hồ sơ bệnh án ngoại trú.",
      "Khám sức khỏe định kỳ."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-yhct",
    name: "Khoa YHCT & PHCN",
    slug: "khoa-yhct-phcn",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Kết hợp Y học cổ truyền và Y học hiện đại trong khám chữa bệnh và phục hồi chức năng.",
    duties: [
      "Khám chữa bệnh bằng YHCT.",
      "Vật lý trị liệu - Phục hồi chức năng.",
      "Kết hợp đông tây y.",
      "Bào chế thuốc đông y.",
      "Hướng dẫn tập luyện dưỡng sinh."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-lien-chuyen-khoa",
    name: "Khoa TMH - M - RHM",
    slug: "khoa-tmh-m-rhm",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Khám và điều trị các bệnh chuyên khoa Tai Mũi Họng, Mắt, Răng Hàm Mặt.",
    duties: [
      "Khám chữa bệnh RHM, Mắt, TMH.",
      "Phẫu thuật chuyên khoa.",
      "Thủ thuật chuyên khoa.",
      "Chương trình nha học đường.",
      "Phòng chống mù lòa."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-phau-thuat",
    name: "Khoa Phẫu thuật & GMHS",
    slug: "khoa-phau-thuat-gmhs",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Đảm bảo vô cảm và hồi sức cho các ca phẫu thuật, thủ thuật.",
    duties: [
      "Gây mê, gây tê cho phẫu thuật.",
      "Hồi sức sau mổ.",
      "Điều trị đau.",
      "Hỗ trợ cấp cứu.",
      "Quản lý phòng mổ."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "ls-nhi",
    name: "Khoa Nhi",
    slug: "khoa-nhi",
    block: "lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Chăm sóc sức khỏe, khám và điều trị bệnh cho trẻ em.",
    duties: [
      "Khám và điều trị nhi khoa.",
      "Cấp cứu nhi.",
      "Chiếu đèn trị vàng da.",
      "Tư vấn dinh dưỡng trẻ em.",
      "Tiêm chủng mở rộng."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },

  // B) Khối Cận lâm sàng
  {
    id: "cls-xet-nghiem",
    name: "Khoa Xét nghiệm",
    slug: "khoa-xet-nghiem",
    block: "can-lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Thực hiện các xét nghiệm y khoa phục vụ chẩn đoán và điều trị.",
    duties: [
      "Xét nghiệm huyết học, sinh hóa, vi sinh.",
      "Đảm bảo an toàn sinh học.",
      "Kiểm chuẩn xét nghiệm.",
      "Lưu trữ máu và chế phẩm máu.",
      "Tư vấn kết quả xét nghiệm."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "cls-cdha",
    name: "Khoa Chẩn đoán hình ảnh",
    slug: "khoa-chan-doan-hinh-anh",
    block: "can-lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Thực hiện các kỹ thuật hình ảnh y học để chẩn đoán bệnh.",
    duties: [
      "Chụp X-quang, CT Scanner.",
      "Siêu âm chẩn đoán.",
      "Nội soi chẩn đoán.",
      "Đảm bảo an toàn bức xạ.",
      "Hội chẩn hình ảnh."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "cls-ksnk",
    name: "Khoa KSNK",
    slug: "khoa-ksnk",
    block: "can-lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Kiểm soát nhiễm khuẩn bệnh viện, đảm bảo an toàn cho người bệnh và nhân viên y tế.",
    duties: [
      "Giám sát nhiễm khuẩn bệnh viện.",
      "Quản lý chất thải y tế.",
      "Khử khuẩn, tiệt khuẩn dụng cụ.",
      "Vệ sinh môi trường bệnh viện.",
      "Tập huấn kiểm soát nhiễm khuẩn."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "cls-duoc",
    name: "Khoa Dược VTYT & TTB",
    slug: "khoa-duoc-vtyt-ttb",
    block: "can-lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Cung ứng thuốc, vật tư y tế, trang thiết bị đảm bảo chất lượng phục vụ khám chữa bệnh.",
    duties: [
      "Cung ứng thuốc, hóa chất, VTYT.",
      "Dược lâm sàng, thông tin thuốc.",
      "Pha chế thuốc.",
      "Quản lý trang thiết bị y tế.",
      "Bảo quản thuốc."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "cls-dinh-duong",
    name: "Khoa Dinh dưỡng",
    slug: "khoa-dinh-duong",
    block: "can-lam-sang",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng khoa" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng khoa" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Chăm sóc dinh dưỡng, tiết chế cho người bệnh điều trị nội trú.",
    duties: [
      "Tư vấn dinh dưỡng.",
      "Xây dựng thực đơn bệnh lý.",
      "Cung cấp suất ăn bệnh lý.",
      "Giám sát an toàn thực phẩm.",
      "Hội chẩn dinh dưỡng."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },

  // C) Khối Hành chính
  {
    id: "hc-ke-hoach",
    name: "Phòng Kế hoạch - Nghiệp vụ",
    slug: "phong-ke-hoach-nghiep-vu",
    block: "hanh-chinh",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng phòng" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng phòng" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tham mưu xây dựng quy hoạch, kế hoạch phát triển và hoạt động chuyên môn của đơn vị.",
    duties: [
      "Xây dựng kế hoạch hoạt động.",
      "Chỉ đạo tuyến.",
      "Quản lý hồ sơ bệnh án.",
      "Thống kê báo cáo số liệu.",
      "Công nghệ thông tin y tế."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "hc-to-chuc",
    name: "Phòng Tổ chức hành chính",
    slug: "phong-to-chuc-hanh-chinh",
    block: "hanh-chinh",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng phòng" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng phòng" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tham mưu công tác tổ chức cán bộ, hành chính quản trị và bảo vệ chính trị nội bộ.",
    duties: [
      "Công tác tổ chức cán bộ.",
      "Văn thư lưu trữ.",
      "Thi đua khen thưởng.",
      "Quản trị hành chính.",
      "An ninh trật tự."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "hc-tai-chinh",
    name: "Phòng Tài chính kế toán",
    slug: "phong-tai-chinh-ke-toan",
    block: "hanh-chinh",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng phòng" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng phòng" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tham mưu quản lý tài chính, ngân sách và hạch toán kế toán.",
    duties: [
      "Lập dự toán thu chi.",
      "Quản lý thu chi ngân sách.",
      "Thanh quyết toán BHYT.",
      "Trả lương và chế độ.",
      "Quản lý tài sản công."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  },
  {
    id: "hc-dieu-duong",
    name: "Phòng Điều dưỡng",
    slug: "phong-dieu-duong",
    block: "hanh-chinh",
    leaders: [
      { name: "BSCKI Nguyễn Văn A", title: "Trưởng phòng" },
      { name: "ThS.BS Trần Thị B", title: "Phó trưởng phòng" }
    ],
    teamImage: "/assets/departments/placeholders/team-photo.svg",
    missionText: "Tổ chức, chỉ đạo và giám sát công tác chăm sóc người bệnh toàn diện.",
    duties: [
      "Xây dựng quy trình chăm sóc.",
      "Giám sát thực hiện y lệnh.",
      "Đào tạo điều dưỡng.",
      "Giao tiếp ứng xử.",
      "Kiểm soát nhiễm khuẩn."
    ],
    info: DEFAULT_INFO,
    highlights: COMMON_HIGHLIGHTS
  }
];
