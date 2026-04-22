export interface PatientPost {
  slug: string;
  categoryKey: "vaccine" | "procedure" | "pricing" | "policy" | "charity" | "mailbox";
  title: string;
  date: string; // YYYY-MM-DD
  excerpt?: string;
  content?: Array<{ type: "p" | "h2" | "ul"; value: string | string[] }>;
}

export const patientPosts: PatientPost[] = [
  {
    slug: "lich-tiem-chung-cho-tre-so-sinh",
    categoryKey: "vaccine",
    title: "Lịch tiêm chủng đầy đủ cho trẻ sơ sinh và trẻ nhỏ cha mẹ cần nhớ",
    date: "2023-12-15",
    excerpt: "Tổng hợp lịch tiêm các mũi vắc xin quan trọng trong những năm đầu đời để bảo vệ bé khỏi các bệnh nguy hiểm.",
    content: [
      { type: "p", value: "Việc tiêm chủng đầy đủ và đúng lịch là biện pháp quan trọng nhất để phòng ngừa các bệnh truyền nhiễm nguy hiểm cho trẻ sơ sinh và trẻ nhỏ..." }
    ]
  },
  {
    slug: "loi-ich-tiem-vac-xin-cum-mua",
    categoryKey: "vaccine",
    title: "Tại sao nên tiêm vắc xin cúm mùa hàng năm?",
    date: "2023-12-10",
    excerpt: "Virus cúm thay đổi liên tục, vì vậy tiêm nhắc lại hàng năm là cách tốt nhất để duy trì khả năng miễn dịch.",
  },
  {
    slug: "vac-xin-phe-cau-ngua-benh-gi",
    categoryKey: "vaccine",
    title: "Vắc xin phế cầu khuẩn phòng ngừa những bệnh gì?",
    date: "2023-12-05",
    excerpt: "Tìm hiểu về vắc xin phế cầu và vai trò của nó trong việc phòng ngừa viêm phổi, viêm màng não và nhiễm trùng huyết.",
  },
  {
    slug: "luu-y-truoc-va-sau-tiem-chung",
    categoryKey: "vaccine",
    title: "Những lưu ý quan trọng cần biết trước và sau khi tiêm chủng",
    date: "2023-11-28",
    excerpt: "Hướng dẫn chăm sóc và theo dõi sức khỏe sau tiêm để đảm bảo an toàn và hiệu quả của vắc xin.",
  },
  {
    slug: "vac-xin-uon-van-cho-phu-nu-mang-thai",
    categoryKey: "vaccine",
    title: "Tầm quan trọng của tiêm phòng uốn ván cho phụ nữ mang thai",
    date: "2023-11-20",
    excerpt: "Tiêm vắc xin uốn ván giúp bảo vệ cả mẹ và bé khỏi nguy cơ nhiễm trùng uốn ván trong quá trình sinh nở.",
  },
  {
    slug: "vac-xin-ngua-ung-thu-co-tu-cung-hpv",
    categoryKey: "vaccine",
    title: "Vắc xin HPV và phòng ngừa ung thư cổ tử cung: Những điều cần biết",
    date: "2023-11-15",
    excerpt: "Thông tin về độ tuổi tiêm, lịch tiêm và hiệu quả bảo vệ của vắc xin HPV.",
  },
  {
    slug: "tiem-vac-xin-viem-gan-b",
    categoryKey: "vaccine",
    title: "Tiêm vắc xin Viêm gan B: Liều sơ sinh trong 24 giờ đầu",
    date: "2023-11-10",
    excerpt: "Vì sao trẻ sơ sinh cần được tiêm mũi vắc xin viêm gan B đầu tiên càng sớm càng tốt sau khi chào đời?",
  },
  {
    slug: "vac-xin-soi-quai-bi-rubella",
    categoryKey: "vaccine",
    title: "Bộ 3 vắc xin Sởi - Quai bị - Rubella: Thời điểm vàng để tiêm",
    date: "2023-11-05",
    excerpt: "Bảo vệ trẻ khỏi 3 bệnh truyền nhiễm phổ biến chỉ với mũi tiêm kết hợp.",
  },
  {
    slug: "vac-xin-thuy-dau",
    categoryKey: "vaccine",
    title: "Phòng bệnh Thủy đậu hiệu quả bằng vắc xin",
    date: "2023-10-28",
    excerpt: "Thủy đậu có thể gây biến chứng nguy hiểm, tiêm vắc xin là cách phòng bệnh chủ động và hiệu quả nhất.",
  },
  {
    slug: "vac-xin-viem-nao-nhat-ban",
    categoryKey: "vaccine",
    title: "Cập nhật lịch tiêm vắc xin Viêm não Nhật Bản mới nhất",
    date: "2023-10-20",
    excerpt: "Hướng dẫn lịch tiêm chủng vắc xin Viêm não Nhật Bản cho trẻ em theo chương trình tiêm chủng mở rộng và dịch vụ.",
  },
  {
    slug: "phan-ung-sau-tiem-thuong-gap",
    categoryKey: "vaccine",
    title: "Cách xử trí các phản ứng thông thường sau tiêm chủng tại nhà",
    date: "2023-10-15",
    excerpt: "Sốt nhẹ, sưng đau tại chỗ tiêm là bình thường. Hướng dẫn cha mẹ cách chăm sóc trẻ đúng cách.",
  },
  {
    slug: "vac-xin-dich-vu-va-mo-rong",
    categoryKey: "vaccine",
    title: "Phân biệt vắc xin Tiêm chủng mở rộng và Vắc xin dịch vụ",
    date: "2023-10-10",
    excerpt: "Giải đáp thắc mắc về sự khác biệt giữa hai hình thức tiêm chủng phổ biến hiện nay.",
  },
  {
    slug: "tiem-nhac-lai-vac-xin",
    categoryKey: "vaccine",
    title: "Tại sao cần tiêm nhắc lại một số loại vắc xin?",
    date: "2023-10-05",
    excerpt: "Hiểu rõ về miễn dịch cộng đồng và lý do cần tiêm các mũi nhắc lại để duy trì hiệu quả bảo vệ.",
  },
  {
    slug: "vac-xin-rota-virus",
    categoryKey: "vaccine",
    title: "Vắc xin Rota virus: Uống hay tiêm và khi nào nên bắt đầu?",
    date: "2023-09-28",
    excerpt: "Phòng ngừa tiêu chảy cấp do Rota virus cho trẻ nhỏ bằng vắc xin đường uống.",
  },
  {
    slug: "vac-xin-viem-mang-nao-mo-cau",
    categoryKey: "vaccine",
    title: "Bệnh Viêm màng não mô cầu và các loại vắc xin phòng ngừa",
    date: "2024-01-05",
    excerpt: "Căn bệnh nguy hiểm diễn tiến nhanh, cần được phòng ngừa chủ động bằng vắc xin AC hoặc BC.",
  },
  {
    slug: "gop-y-quy-trinh-kham-benh",
    categoryKey: "mailbox",
    title: "Góp ý về quy trình đăng ký khám bệnh trực tuyến",
    date: "2024-01-10",
    excerpt: "Tôi thấy quy trình đăng ký hiện tại khá thuận tiện, tuy nhiên phần chọn giờ khám cần rõ ràng hơn...",
  },
  {
    slug: "hoi-ve-lich-tiem-chung",
    categoryKey: "mailbox",
    title: "Hỏi về lịch tiêm chủng vắc xin 6 trong 1",
    date: "2024-01-08",
    excerpt: "Con tôi hiện được 2 tháng tuổi, tôi muốn hỏi lịch tiêm vắc xin 6 trong 1 tại trung tâm như thế nào?",
  },
  {
    slug: "cam-on-bac-si-khoa-noi",
    categoryKey: "mailbox",
    title: "Thư cảm ơn đội ngũ y bác sĩ Khoa Nội tổng hợp",
    date: "2024-01-05",
    excerpt: "Gia đình xin gửi lời cảm ơn chân thành đến các bác sĩ đã tận tình chăm sóc cho mẹ tôi trong thời gian nằm viện.",
  },
  {
    slug: "thac-mac-bhyt",
    categoryKey: "mailbox",
    title: "Thắc mắc về mức hưởng BHYT khi khám trái tuyến",
    date: "2023-12-28",
    excerpt: "Tôi có thẻ BHYT đăng ký tại quận Hải Châu, nếu sang quận Liên Chiểu khám thì được hưởng bao nhiêu %?",
  },
  {
    slug: "de-xuat-them-ghe-cho",
    categoryKey: "mailbox",
    title: "Đề xuất bố trí thêm ghế chờ tại khu vực xét nghiệm",
    date: "2023-12-25",
    excerpt: "Vào buổi sáng bệnh nhân rất đông, mong bệnh viện bố trí thêm ghế ngồi cho người nhà và bệnh nhân.",
  },
  {
    slug: "hoi-ve-goi-kham-suc-khoe",
    categoryKey: "mailbox",
    title: "Tư vấn gói khám sức khỏe tổng quát cho người cao tuổi",
    date: "2023-12-20",
    excerpt: "Xin hỏi bệnh viện có gói khám nào dành riêng cho người trên 70 tuổi không và chi phí khoảng bao nhiêu?",
  },
  {
    slug: "phan-anh-thai-do-nhan-vien",
    categoryKey: "mailbox",
    title: "Phản ánh về thái độ phục vụ tại quầy thuốc BHYT",
    date: "2023-12-15",
    excerpt: "Sáng nay tôi đi lấy thuốc, nhân viên tại quầy số 3 có thái độ chưa đúng mực khi hướng dẫn người bệnh...",
  },
  {
    slug: "tim-do-that-lac",
    categoryKey: "mailbox",
    title: "Tìm giấy tờ thất lạc tại khu vực Chẩn đoán hình ảnh",
    date: "2023-12-12",
    excerpt: "Tôi có để quên một hồ sơ màu xanh tại ghế chờ chụp X-quang vào sáng ngày 12/12...",
  },
  {
    slug: "khen-ngoi-dieu-duong",
    categoryKey: "mailbox",
    title: "Khen ngợi điều dưỡng Nguyễn Văn A khoa Cấp cứu",
    date: "2023-12-05",
    excerpt: "Cảm ơn điều dưỡng A đã sơ cứu rất kịp thời và nhẹ nhàng khi tôi bị tai nạn giao thông đưa vào viện.",
  },
  {
    slug: "hoi-ve-dich-vu-lay-mau",
    categoryKey: "mailbox",
    title: "Dịch vụ lấy mẫu xét nghiệm tại nhà hoạt động khung giờ nào?",
    date: "2023-11-28",
    excerpt: "Tôi muốn đăng ký lấy mẫu máu tại nhà cho người già đi lại khó khăn, xin hỏi lịch làm việc của dịch vụ này.",
  }
];
