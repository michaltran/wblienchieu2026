export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  specialtyId: string; // Matching specialties.ts IDs
  department?: string;
  experienceYears: number;
  languages: string[];
  avatar?: string;
  bio: string;
  tags: string[];
  scheduleNote: string;
  featured: boolean;
  
  // New API Fields
  externalId?: string | number;
  facility?: string;
  expertise?: string[];
  experience?: string[];
  education?: string[];
  publications?: string[];
}

export const doctors: Doctor[] = [
  {
    id: "1",
    slug: "bs-ckii-nguyen-van-a",
    externalId: "416",
    name: "Nguyễn Văn A",
    title: "BS.CKII",
    specialty: "Nội khoa",
    specialtyId: "tong-quat",
    department: "Khoa Nội",
    facility: "Trung tâm Y tế Khu vực Liên Chiểu",
    experienceYears: 20,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Hơn 20 năm kinh nghiệm trong khám và điều trị các bệnh lý nội khoa tổng quát, tim mạch và lão khoa. Từng tu nghiệp tại Pháp và tham gia nhiều đề tài nghiên cứu cấp thành phố.",
    tags: ["Tim mạch", "Lão khoa", "Nội tổng quát"],
    scheduleNote: "Thứ 2 - Thứ 6",
    featured: true,
    expertise: [
       "Khám và điều trị các bệnh lý Tim mạch: Tăng huyết áp, Suy tim, Bệnh mạch vành",
       "Điều trị các bệnh lý Lão khoa",
       "Tư vấn và kiểm soát các yếu tố nguy cơ tim mạch",
       "Siêu âm tim và mạch máu"
    ],
    experience: [
       "2003 - 2010: Bác sĩ điều trị tại Bệnh viện Đa khoa Đà Nẵng",
       "2010 - 2018: Phó Trưởng khoa Nội, Trung tâm Y tế Liên Chiểu",
       "2018 - Nay: Trưởng khoa Nội, Trung tâm Y tế Khu vực Liên Chiểu"
    ],
    education: [
       "Tốt nghiệp Bác sĩ Đa khoa - Đại học Y Dược Huế (2003)",
       "Tốt nghiệp Bác sĩ Chuyên khoa I Nội khoa (2008)",
       "Tốt nghiệp Bác sĩ Chuyên khoa II Nội Tim mạch (2015)",
       "Chứng chỉ Siêu âm tim mạch nâng cao"
    ],
    publications: [
       "Nghiên cứu đặc điểm lâm sàng bệnh nhân suy tim cao tuổi (2018)",
       "Đánh giá hiệu quả kiểm soát huyết áp trên bệnh nhân đái tháo đường (2020)"
    ]
  },
  {
    id: "2",
    slug: "ths-bs-tran-thi-b",
    externalId: "417",
    name: "Trần Thị B",
    title: "ThS.BS",
    specialty: "Sản phụ khoa",
    specialtyId: "san-phu",
    department: "Khoa Sản",
    facility: "Trung tâm Y tế Khu vực Liên Chiểu",
    experienceYears: 15,
    languages: ["Tiếng Việt", "Tiếng Pháp"],
    bio: "Chuyên gia hàng đầu về sản phụ khoa, theo dõi thai kỳ và điều trị vô sinh hiếm muộn. Luôn tận tâm và thấu hiểu tâm lý người bệnh.",
    tags: ["Theo dõi thai kỳ", "Phụ khoa", "Hiếm muộn"],
    scheduleNote: "Thứ 2, 4, 6",
    featured: true,
     expertise: [
       "Theo dõi thai kỳ nguy cơ cao",
       "Điều trị vô sinh hiếm muộn",
       "Phẫu thuật nội soi phụ khoa",
       "Tư vấn kế hoạch hóa gia đình"
    ],
    experience: [
       "2008 - 2015: Bác sĩ khoa Sản, Bệnh viện Phụ sản - Nhi Đà Nẵng",
       "2015 - Nay: Phó Trưởng khoa Sản, Trung tâm Y tế Khu vực Liên Chiểu"
    ],
    education: [
       "Tốt nghiệp Bác sĩ Đa khoa - Đại học Y Dược TP.HCM",
       "Thạc sĩ Y học chuyên ngành Sản phụ khoa",
       "Chứng chỉ Phẫu thuật nội soi cơ bản và nâng cao"
    ]
  },
  {
    id: "3",
    slug: "bs-cki-le-van-c",
    externalId: "418",
    name: "Lê Văn C",
    title: "BS.CKI",
    specialty: "Ngoại khoa",
    specialtyId: "ngoai-khoa",
    department: "Khoa Ngoại",
    facility: "Trung tâm Y tế Khu vực Liên Chiểu",
    experienceYears: 12,
    languages: ["Tiếng Việt"],
    bio: "Nhiều năm kinh nghiệm phẫu thuật nội soi ổ bụng và chấn thương chỉnh hình. Luôn cập nhật các kỹ thuật phẫu thuật xâm lấn tối thiểu.",
    tags: ["Phẫu thuật nội soi", "Chấn thương chỉnh hình"],
    scheduleNote: "Thứ 3, 5, 7",
    featured: false,
    expertise: [
        "Phẫu thuật nội soi tiêu hóa: Ruột thừa, Túi mật",
        "Phẫu thuật thoát vị bẹn",
        "Kết hợp xương trong chấn thương",
        "Điều trị bệnh lý hậu môn trực tràng"
    ],
    experience: [
        "2011 - Nay: Bác sĩ khoa Ngoại, Trung tâm Y tế Khu vực Liên Chiểu"
    ],
    education: [
        "Tốt nghiệp Bác sĩ Đa khoa - Đại học Y Dược Huế",
        "Bác sĩ Chuyên khoa I Ngoại khoa",
        "Chứng chỉ Phẫu thuật nội soi ổ bụng"
    ]
  },
  {
    id: "4",
    slug: "bs-ckii-pham-thi-d",
    externalId: "419",
    name: "Phạm Thị D",
    title: "BS.CKI",
    specialty: "Nhi khoa",
    specialtyId: "nhi",
    department: "Khoa Nhi",
    facility: "Trung tâm Y tế Khu vực Liên Chiểu",
    experienceYears: 18,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Tận tâm, yêu trẻ, chuyên điều trị các bệnh lý hô hấp và tiêu hóa ở trẻ em. Coi bệnh nhi như người thân trong gia đình.",
    tags: ["Hô hấp nhi", "Tiêu hóa nhi", "Dinh dưỡng"],
    scheduleNote: "Thứ 2 - Thứ 7",
    featured: true,
     expertise: [
        "Bệnh lý hô hấp trẻ em: Viêm phổi, Hen phế quản",
        "Bệnh lý tiêu hóa nhi",
        "Tư vấn dinh dưỡng và tiêm chủng",
        "Khám và điều trị vàng da sơ sinh"
    ],
    education: [
        "Tốt nghiệp Bác sĩ Nhi khoa - Đại học Y Hà Nội",
        "Bác sĩ Chuyên khoa I Nhi khoa"
    ],
    experience: [
         "2005 - 2015: Bác sĩ khoa Nhi, Bệnh viện TƯ Huế",
         "2015 - Nay: Trưởng khoa Nhi, Trung tâm Y tế Khu vực Liên Chiểu"
    ]
  },
  {
    id: "5",
    slug: "ths-bs-hoang-van-e",
    name: "Hoàng Văn E",
    title: "ThS.BS",
    specialty: "Tai Mũi Họng",
    specialtyId: "tai-mui-hong",
    department: "Khoa Liên Chuyên Khoa",
    experienceYears: 10,
    languages: ["Tiếng Việt"],
    bio: "Chuyên sâu về nội soi tai mũi họng và phẫu thuật amidan, VA.",
    tags: ["Nội soi TMH", "Phẫu thuật vùng cổ"],
    scheduleNote: "Các buổi sáng trong tuần",
    featured: false,
    expertise: ["Nội soi Tai Mũi Họng", "Phẫu thuật Amidan - VA", "Điều trị viêm xoang mạn tính"],
    education: ["Thạc sĩ Tai Mũi Họng - Đại học Y Dược Huế"]
  },
  {
    id: "6",
    slug: "bs-cki-vo-thi-f",
    name: "Võ Thị F",
    title: "BS.CKI",
    specialty: "Răng Hàm Mặt",
    specialtyId: "rang-ham-mat",
    department: "Khoa Liên Chuyên Khoa",
    experienceYears: 14,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Kinh nghiệm dày dặn trong nha khoa thẩm mỹ và phẫu thuật hàm mặt.",
    tags: ["Nha khoa thẩm mỹ", "Cấy ghép Implant"],
    scheduleNote: "Thứ 2 - Thứ 6",
    featured: false,
    expertise: ["Nha khoa thẩm mỹ", "Nội nha", "Nhổ răng khôn"],
    education: ["Bác sĩ Chuyên khoa I Răng Hàm Mặt"]
  },
  {
    id: "7",
    slug: "bs-dang-van-g",
    name: "Đặng Văn G",
    title: "BS",
    specialty: "Y học cổ truyền",
    specialtyId: "y-hoc-co-truyen",
    department: "Khoa YHCT",
    experienceYears: 8,
    languages: ["Tiếng Việt", "Tiếng Trung"],
    bio: "Kết hợp tinh hoa y học cổ truyền và y học hiện đại trong điều trị bệnh mạn tính.",
    tags: ["Châm cứu", "Vật lý trị liệu"],
    scheduleNote: "Thứ 2 - Thứ 6",
    featured: false,
  },
  {
    id: "8",
    slug: "bs-ckii-nguyen-thi-h",
    name: "Nguyễn Thị H",
    title: "BS.CKII",
    specialty: "Nội Tim mạch",
    specialtyId: "tong-quat",
    department: "Khoa Nội",
    experienceYears: 22,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Chuyên gia tim mạch can thiệp, điều trị tăng huyết áp và suy tim.",
    tags: ["Tim mạch can thiệp", "Siêu âm tim"],
    scheduleNote: "Thứ 2, 4, 6",
    featured: true,
  },
  {
    id: "9",
    slug: "ths-bs-le-quoc-i",
    name: "Lê Quốc I",
    title: "ThS.BS",
    specialty: "Chẩn đoán hình ảnh",
    specialtyId: "xet-nghiem", // Approximate or need new specific ID
    department: "Khoa CĐHA",
    experienceYears: 11,
    languages: ["Tiếng Việt"],
    bio: "Thành thạo các kỹ thuật CT, MRI và siêu âm 4D.",
    tags: ["Chẩn đoán hình ảnh", "CT - MRI"],
    scheduleNote: "Toàn thời gian",
    featured: false,
  },
  {
    id: "10",
    slug: "bs-cki-tran-van-k",
    name: "Trần Văn K",
    title: "BS.CKI",
    specialty: "Da liễu",
    specialtyId: "da-lieu",
    department: "Khoa Khám bệnh",
    experienceYears: 9,
    languages: ["Tiếng Việt"],
    bio: "Chuyên điều trị các bệnh da liễu và chăm sóc da thẩm mỹ.",
    tags: ["Da liễu thẩm mỹ", "Laser CO2"],
    scheduleNote: "Thứ 3, 5, 7",
    featured: false,
  },
  {
    id: "11",
    slug: "bs-nguyen-van-l",
    name: "Nguyễn Văn L",
    title: "BS",
    specialty: "Hồi sức cấp cứu",
    specialtyId: "tong-quat",
    department: "Khoa HSCC",
    experienceYears: 6,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Năng động, nhiệt huyết, luôn túc trực cấp cứu người bệnh 24/7.",
    tags: ["Cấp cứu đa khoa", "Hồi sức tích cực"],
    scheduleNote: "Theo ca trực",
    featured: false,
  },
  {
    id: "12",
    slug: "bs-cki-pham-thi-m",
    name: "Phạm Thị M",
    title: "BS.CKI",
    specialty: "Mắt",
    specialtyId: "mat",
    department: "Khoa Liên Chuyên Khoa",
    experienceYears: 16,
    languages: ["Tiếng Việt"],
    bio: "Nhiều kinh nghiệm phẫu thuật Phaco và điều trị tật khúc xạ.",
    tags: ["Phẫu thuật Phaco", "Tật khúc xạ"],
    scheduleNote: "Thứ 2 - Thứ 6",
    featured: false,
  },
  {
    id: "13",
    slug: "ths-bs-vo-van-n",
    name: "Võ Văn N",
    title: "ThS.BS",
    specialty: "Nội Tiêu hóa",
    specialtyId: "tong-quat",
    department: "Khoa Nội",
    experienceYears: 13,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Chuyên gia về nội soi tiêu hóa chẩn đoán và can thiệp.",
    tags: ["Nội soi tiêu hóa", "Gan mật"],
    scheduleNote: "Thứ 2, 3, 5",
    featured: true,
  },
  {
    id: "14",
    slug: "bs-ngo-thi-tuyet-nhung",
    name: "Ngô Thị Tuyết Nhung",
    title: "BS.CK Nội",
    specialty: "Nội Thần kinh",
    specialtyId: "tong-quat",
    department: "Khoa Nội",
    experienceYears: 2,
    languages: ["Tiếng Việt", "Tiếng Pháp"],
    bio: "Điều trị chuyên sâu các bệnh lý thần kinh, đột quỵ và đau đầu mạn tính.",
    tags: ["Thần kinh", "Đột quỵ"],
    scheduleNote: "Thứ 4, 6",
    featured: true,
  },
  {
    id: "15",
    slug: "bs-le-van-p",
    name: "Lê Văn P",
    title: "BS",
    specialty: "Xét nghiệm",
    specialtyId: "xet-nghiem",
    department: "Khoa Xét nghiệm",
    experienceYears: 7,
    languages: ["Tiếng Việt"],
    bio: "Đảm bảo kết quả xét nghiệm chính xác, hỗ trợ đắc lực cho chẩn đoán.",
    tags: ["Huyết học", "Hóa sinh"],
    scheduleNote: "Toàn thời gian",
    featured: false,
  },
  {
    id: "16",
    slug: "bs-cki-dao-thi-tuy-duyn",
    name: "Đào Thị Túy Duyên",
    title: "BS.CKI",
    specialty: "Nhi khoa",
    specialtyId: "nhi-khoa", // Need to ensure ID exists
    department: "Khoa Nhi",
    experienceYears: 19,
    languages: ["Tiếng Việt"],
    bio: "Chuyên gia điều trị các bệnh cho trẻ em.",
    tags: ["Nhi khoa", "Chăm sóc trẻ em"],
    scheduleNote: "Thứ 2 - Thứ 6",
    featured: false,
  },
  {
    id: "17",
    slug: "bs-tran-van-r",
    name: "Trần Văn R",
    title: "BS",
    specialty: "Gây mê hồi sức",
    specialtyId: "ngoai-khoa",
    department: "Khoa GMHS",
    experienceYears: 5,
    languages: ["Tiếng Việt", "Tiếng Anh"],
    bio: "Đảm bảo an toàn vô cảm cho các ca phẫu thuật.",
    tags: ["Gây mê", "Giảm đau sau mổ"],
    scheduleNote: "Theo lịch phẫu thuật",
    featured: false,
  },
  {
    id: "18",
    slug: "ths-bs-pham-van-s",
    name: "Phạm Văn S",
    title: "ThS.BS",
    specialty: "Nội Cơ xương khớp",
    specialtyId: "tong-quat",
    department: "Khoa Nội",
    experienceYears: 17,
    languages: ["Tiếng Việt"],
    bio: "Chuyên điều trị thoái hóa khớp, loãng xương và các bệnh tự miễn.",
    tags: ["Cơ xương khớp", "Tiêm khớp"],
    scheduleNote: "Thứ 2, 4, 6",
    featured: true,
  }
];
