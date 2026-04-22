export interface HealthPost {
    slug: string;
    title: string;
    excerpt: string;
    categorySlug: string;
    date: string;
    readTime: number;
    cover: string;
    featured?: boolean;
    content?: Array<{ type: "h2" | "p" | "ul"; value: string | string[] }>;
}

export const healthPosts: HealthPost[] = [
    {
        slug: "dau-hieu-dot-quy-som",
        title: "5 Dấu Hiệu Đột Quỵ Sớm Bạn Không Nên Bỏ Qua",
        excerpt: "Nhận biết sớm các dấu hiệu đột quỵ có thể cứu sống tính mạng và giảm thiểu di chứng nghiêm trọng.",
        categorySlug: "tim-mach",
        date: "2024-05-15",
        readTime: 5,
        cover: "/assets/health/cover-01.svg",
        featured: true,
        content: [
            { type: "h2", value: "Quy tắc F.A.S.T là gì?" },
            { type: "p", value: "F.A.S.T là quy tắc vàng để nhận biết đột quỵ: Face (Méo miệng), Arm (Yếu tay), Speech (Nói ngọng), Time (Thời gian cấp cứu)." },
            { type: "p", value: "Nếu bạn hoặc người thân có bất kỳ dấu hiệu nào trên đây, hãy gọi cấp cứu ngay lập tức." }
        ]
    },
    {
        slug: "bi-quyet-song-khoe-mua-nang-nong",
        title: "Bí Quyết Giữ Sức Khỏe Trong Mùa Nắng Nóng Gay Gắt",
        excerpt: "Nắng nóng kéo dài dễ dẫn đến say nắng, mất nước. Hãy áp dụng những mẹo nhỏ này để bảo vệ cơ thể.",
        categorySlug: "suc-khoe-tong-quat",
        date: "2024-06-01",
        readTime: 4,
        cover: "/assets/health/cover-02.svg",
        featured: true
    },
    {
        slug: "thuc-don-cho-tre-bieng-an",
        title: "Gợi Ý Thực Đơn Dinh Dưỡng Cho Trẻ Biếng Ăn",
        excerpt: "Cải thiện tình trạng biếng ăn ở trẻ nhỏ với các món ăn ngon miệng, đầy đủ dưỡng chất và dễ làm.",
        categorySlug: "nhi",
        date: "2024-05-20",
        readTime: 6,
        cover: "/assets/health/cover-03.svg",
        featured: true
    },
    {
         slug: "tieu-duong-type-2-la-gi",
         title: "Tiểu Đường Type 2: Nguyên Nhân Và Cách Phòng Ngừa",
         excerpt: "Hiểu rõ về bệnh tiểu đường type 2 để có chế độ ăn uống và sinh hoạt hợp lý, ngăn ngừa biến chứng.",
         categorySlug: "tra-cuu-benh",
         date: "2024-04-10",
         readTime: 7,
         cover: "/assets/health/cover-04.svg"
    },
    {
        slug: "yoga-giam-dau-lung",
        title: "5 Bài Tập Yoga Giúp Giảm Đau Lưng Hiệu Quả",
        excerpt: "Đau lưng là vấn đề phổ biến dân văn phòng. Thử ngay các động tác yoga đơn giản này tại nhà.",
        categorySlug: "chan-thuong-chinh-hinh",
        date: "2024-03-22",
        readTime: 5,
        cover: "/assets/health/cover-05.svg"
    },
    {
        slug: "tam-soat-ung-thu-co-tu-cung",
        title: "Tầm Soát Ung Thư Cổ Tử Cung: Khi Nào Và Như Thế Nào?",
        excerpt: "Ung thư cổ tử cung là căn bệnh nguy hiểm ở phụ nữ. Tầm soát định kỳ là cách tốt nhất để phòng tránh.",
        categorySlug: "suc-khoe-phu-nu",
        date: "2024-05-05",
        readTime: 6,
        cover: "/assets/health/cover-06.svg"
    },
    {
        slug: "roi-loan-tieu-hoa-o-tre",
        title: "Xử Trí Rối Loạn Tiêu Hóa Ở Trẻ Nhỏ Tại Nhà",
        excerpt: "Cha mẹ cần làm gì khi trẻ bị nôn trớ, tiêu chảy hoặc táo bón? Hướng dẫn từ bác sĩ chuyên khoa.",
        categorySlug: "nhi",
        date: "2024-04-28",
        readTime: 5,
        cover: "/assets/health/cover-03.svg"
    },
    {
        slug: "thuc-pham-tot-cho-tim-mach",
        title: "Top 10 Thực Phẩm Tốt Cho Tim Mạch Bạn Nên Ăn Hàng Ngày",
        excerpt: "Bổ sung cá hồi, các loại hạt, rau xanh... vào thực đơn để có trái tim khỏe mạnh.",
        categorySlug: "tim-mach",
        date: "2024-03-15",
        readTime: 4,
        cover: "/assets/health/cover-01.svg"
    },
    {
        slug: "stress-va-suc-khoe",
        title: "Stress Ảnh Hưởng Đến Sức Khỏe Thể Chất Như Thế Nào?",
        excerpt: "Căng thẳng kéo dài không chỉ ảnh hưởng tâm lý mà còn gây ra nhiều bệnh lý thể chất nguy hiểm.",
        categorySlug: "suc-khoe-tinh-than",
        date: "2024-02-20",
        readTime: 6,
        cover: "/assets/health/cover-02.svg"
    },
    {
        slug: "cham-soc-da-mua-hanh-kho",
        title: "Bí Quyết Chăm Sóc Da Mùa Hanh Khô Để Luôn Mịn Màng",
        excerpt: "Dưỡng ẩm đúng cách là chìa khóa để làn da luôn tươi trẻ bất chấp thời tiết hanh khô.",
        categorySlug: "tham-my",
        date: "2024-01-10",
        readTime: 3,
        cover: "/assets/health/cover-06.svg"
    }
    // Add more placeholder posts as needed to reach 30-50 usually, keeping it concise for demo
];
