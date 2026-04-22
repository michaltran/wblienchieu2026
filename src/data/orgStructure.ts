export interface Leader {
  id: string;
  name: string;
  title: string;
  photo?: string;
  bio?: string;
  email?: string;
}

export interface OrgNode {
  id: string;
  name: string;
  href?: string;
  children?: OrgNode[];
}

export interface OrgGroup {
  id: string;
  title: string;
  nodes: OrgNode[];
}

export const leaders: Leader[] = [
  {
    id: "GD01",
    name: "BSCKII. Nguyễn Văn A",
    title: "Giám đốc",
    email: "nguyenvana@gmail.com",
    bio: "Chịu trách nhiệm chung về mọi hoạt động của Trung tâm."
  },
  {
    id: "PGD01",
    name: "BSCKI. Trần Thị B",
    title: "Phó Giám đốc",
     email: "tranthib@gmail.com",
    bio: "Phụ trách khối chuyên môn và đào tạo chỉ đạo tuyến."
  },
  {
    id: "PGD02",
    name: "ThS. Lê Văn C",
    title: "Phó Giám đốc",
     email: "levanc@gmail.com",
    bio: "Phụ trách khối hành chính, tài chính và trang thiết bị."
  }
];

export const orgStructure: OrgGroup[] = [
  {
    id: "G01",
    title: "Khối Phòng chức năng",
    nodes: [
      { id: "P01", name: "Phòng Tổ chức - Hành chính" },
      { id: "P02", name: "Phòng Kế hoạch - Nghiệp vụ" },
      { id: "P03", name: "Phòng Tài chính - Kế toán" },
      { id: "P04", name: "Phòng Điều dưỡng" },
       { id: "P05", name: "Phòng Dân số - Truyền thông" },
    ]
  },
  {
    id: "G02",
    title: "Khối Lâm sàng",
    nodes: [
      { id: "K01", name: "Khoa Khám bệnh" },
      { id: "K02", name: "Khoa Cấp cứu - Hồi sức tích cực - Chống độc" },
      { id: "K03", name: "Khoa Nội tổng hợp" },
      { id: "K04", name: "Khoa Ngoại tổng hợp" },
      { id: "K05", name: "Khoa Phụ sản - Chăm sóc SKSS" },
      { id: "K06", name: "Khoa Nhi" },
      { id: "K07", name: "Khoa Y học cổ truyền - Phục hồi chức năng" },
      { id: "K08", name: "Khoa Liên chuyên khoa (RHM - TMH - Mắt)" },

    ]
  },
  {
    id: "G03",
    title: "Khối Cận lâm sàng",
    nodes: [
      { id: "CL01", name: "Khoa Xét nghiệm" },
      { id: "CL02", name: "Khoa Chẩn đoán hình ảnh" },
      { id: "CL03", name: "Khoa Dược" },
      { id: "CL04", name: "Khoa Kiểm soát nhiễm khuẩn" },
    ]
  },
  {
    id: "G04",
    title: "Khối Y tế dự phòng & Trạm Y tế xã/phường",
    nodes: [
      { id: "DP01", name: "Khoa Y tế công cộng & Dinh dưỡng" },
      { id: "DP02", name: "Khoa Kiểm soát bệnh tật & HIV/AIDS" },
      { id: "TYT01", name: "Trạm Y tế Phường Hòa Minh" },
      { id: "TYT02", name: "Trạm Y tế Phường Hòa Khánh Nam" },
      { id: "TYT03", name: "Trạm Y tế Phường Hòa Khánh Bắc" },
      { id: "TYT04", name: "Trạm Y tế Phường Hòa Hiệp Nam" },
      { id: "TYT05", name: "Trạm Y tế Phường Hòa Hiệp Bắc" },
    ]
  }
];
