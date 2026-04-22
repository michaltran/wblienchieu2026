export interface QualityDoc {
  id: string;
  title: string;
  type: string;
  size: string;
  date: string;
  url: string;
}

// Using stable public government/official URLs for demonstration
export const qualityDocs: QualityDoc[] = [
  {
    id: "doc1",
    title: "Quy trình tiếp nhận và xử lý phản ánh kiến nghị của người bệnh",
    type: "PDF",
    size: "1.2 MB",
    date: "2024-01-15",
    url: "https://daotao.vnu.edu.vn/dkmh/assets/documents/mau_phieu_DKMH_sau_dai_hoc.pdf"
  },
  {
    id: "doc2",
    title: "Hướng dẫn báo cáo sự cố y khoa tự nguyện",
    type: "DOCX",
    size: "850 KB",
    date: "2023-12-20",
    url: "https://file-examples.com/storage/fe595568856623631988849/2017/02/file-sample_100kB.doc"
  },
  {
    id: "doc3",
    title: "Bảng kiểm an toàn phẫu thuật thủ thuật (Surgical Safety Checklist)",
    type: "PDF",
    size: "500 KB",
    date: "2023-11-10",
    url: "https://www.who.int/docs/default-source/patient-safety/safe-surgery/checklist/sssl-checklist-vietnamese.pdf"
  },
  {
    id: "doc4",
    title: "Quy định về văn hóa ứng xử trong bệnh viện",
    type: "PDF",
    size: "2.4 MB",
    date: "2023-10-05",
    url: "https://kcb.vn/upload/2000212/20170915/tainguyen_023759Van-hoa-ung-xu_2017.pdf"
  },
  {
    id: "doc5",
    title: "Danh mục chỉ số chất lượng bệnh viện năm 2024",
    type: "XLSX",
    size: "1.5 MB",
    date: "2024-01-01",
    url: "https://file-examples.com/storage/fe595568856623631988849/2017/02/file_example_XLSX_10.xlsx"
  },
  {
    id: "doc6",
    title: "Hướng dẫn phòng ngừa và kiểm soát nhiễm khuẩn bệnh viện",
    type: "PDF",
    size: "3.2 MB",
    date: "2023-09-15",
    url: "https://kcb.vn/upload/2000212/20180425/Quyet-dinh-3916-va-Huong-dan-KSNK.pdf"
  },
];
