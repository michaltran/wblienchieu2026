import { departments } from "../data/departments";

export interface NavItem {
  key: string; // Translation key
  href?: string;
  children?: NavItem[];
  isHeader?: boolean; // New prop for Mega Menu headers
}

const specialtyChildren: NavItem[] = [
  {
    key: "Khối Lâm sàng",
    isHeader: true,
    href: "/chuyen-khoa/lam-sang",
    children: departments
      .filter(d => d.block === "lam-sang")
      .map(d => ({
        key: d.name,
        href: `/chuyen-khoa/lam-sang/${d.slug}`
      }))
  },
  {
    key: "Khối Cận lâm sàng",
    isHeader: true,
    href: "/chuyen-khoa/can-lam-sang",
    children: departments
      .filter(d => d.block === "can-lam-sang")
      .map(d => ({
        key: d.name,
        href: `/chuyen-khoa/can-lam-sang/${d.slug}`
      }))
  },
  {
    key: "Khối Hành chính",
    isHeader: true,
    href: "/chuyen-khoa/hanh-chinh",
    children: departments
      .filter(d => d.block === "hanh-chinh")
      .map(d => ({
        key: d.name,
        href: `/chuyen-khoa/hanh-chinh/${d.slug}`
      }))
  }
];

export const mainNavConfig: NavItem[] = [
  {
    key: "nav_intro",
    href: "/gioi-thieu",
    children: [
      { key: "nav_intro_mission", href: "/gioi-thieu/su-menh-tam-nhin" },
      { key: "nav_intro_functions", href: "/gioi-thieu/chuc-nang-nhiem-vu" },
      { key: 'nav_intro_org_structure', href: '/gioi-thieu/co-cau-to-chuc' },
      { key: "nav_intro_hospital_map", href: "/gioi-thieu/so-do-benh-vien" },
      { key: "nav_intro_history", href: "/gioi-thieu/qua-trinh-hinh-thanh-phat-trien" },
    ],
  },
  {
    key: "nav_specialty",
    href: "/chuyen-khoa",
    children: specialtyChildren
  },
  {
    key: "nav_patients",
    children: [
        { key: "nav_patients_vaccine", href: "/nguoi-benh/tu-van-tiem-chung-vac-xin" },
        { key: "nav_patients_process", href: "/nguoi-benh/huong-dan-quy-trinh-kham-chua-benh" },
        { key: "nav_patients_price", href: "/nguoi-benh/bang-gia-dich-vu" },
        { key: "nav_patients_policy", href: "/nguoi-benh/che-do-chinh-sach" },
        { key: "nav_patients_charity", href: "/nguoi-benh/nhip-cau-nhan-ai" }, // Star icon
        { key: "nav_patients_mailbox", href: "/nguoi-benh/hop-thu-ban-doc" },
        { key: "Xem kết quả xét nghiệm", href: "/nguoi-benh/ket-qua-xet-nghiem" },
        { key: "Xem kết quả chẩn đoán hình ảnh ", href: "/nguoi-benh/ket-qua-chan-doan-hinh-anh" },
    ]
  },
  {
    key: "nav_activity", // Hoạt động
    children: [
      { key: "nav_activity_news", href: "/bai-viet" }, 
      { key: "nav_quality", href: "/hoat-dong/quan-ly-chat-luong" }, 
      { key: "nav_activity_common_med", href: "/hoat-dong/y-hoc-thuong-thuc" },
      { key: "nav_activity_training", href: "/hoat-dong/dao-tao-nckh" },
      { key: "nav_activity_bidding", href: "/hoat-dong/dau-thau-mua-sam" },
      { key: "nav_activity_reform", href: "/hoat-dong/cai-cach-hanh-chinh" },
      { key: "nav_activity_health_check", href: "/hoat-dong/kham-suc-khoe" },
      { key: "nav_activity_survey", href: "/hoat-dong/khao-sat-hai-long-nguoi-benh" },
      { key: "nav_activity_recruitment", href: "/hoat-dong/tuyen-dung" },
    ],
  },
  {
    key: "nav_library",
    children: [
      { key: "nav_video", href: "/thu-vien/video" },
      { key: "nav_image_lib", href: "/thu-vien/hinh-anh" },
    ],
  },
];
