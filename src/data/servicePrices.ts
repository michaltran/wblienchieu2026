export interface ServicePrice {
  id: string;
  code: string;
  name: string;
  unit: string;
  price: number;
  insurancePrice?: number;
  category: "kham-benh" | "xet-nghiem" | "chan-doan-hinh-anh" | "thu-thuat";
}

export const servicePrices: ServicePrice[] = [
  // 1. Khám bệnh
  { id: "1", code: "KB01", name: "Khám lâm sàng chung, khám chuyên khoa", unit: "Lần", price: 42100, insurancePrice: 42100, category: "kham-benh" },
  { id: "2", code: "KB02", name: "Hội chẩn ca bệnh khó", unit: "Lần", price: 200000, category: "kham-benh" },
  { id: "3", code: "KB03", name: "Khám cấp cứu", unit: "Lần", price: 50000, insurancePrice: 42100, category: "kham-benh" },

  // 2. Xét nghiệm
  { id: "4", code: "XN01", name: "Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)", unit: "Mẫu", price: 46000, insurancePrice: 46000, category: "xet-nghiem" },
  { id: "5", code: "XN02", name: "Định lượng Glucose (Máu)", unit: "Mẫu", price: 25000, insurancePrice: 25000, category: "xet-nghiem" },
  { id: "6", code: "XN03", name: "Định lượng HbA1c", unit: "Mẫu", price: 90000, insurancePrice: 90000, category: "xet-nghiem" },
  { id: "7", code: "XN04", name: "Định lượng Ure (Máu)", unit: "Mẫu", price: 22000, insurancePrice: 22000, category: "xet-nghiem" },
  { id: "8", code: "XN05", name: "Định lượng Creatinin (Máu)", unit: "Mẫu", price: 22000, insurancePrice: 22000, category: "xet-nghiem" },
  { id: "9", code: "XN06", name: "Định lượng Cholesterol toàn phần", unit: "Mẫu", price: 30000, insurancePrice: 30000, category: "xet-nghiem" },
  { id: "10", code: "XN07", name: "Định lượng Triglycerid", unit: "Mẫu", price: 30000, insurancePrice: 30000, category: "xet-nghiem" },
  { id: "11", code: "XN08", name: "Định lượng HDL-C", unit: "Mẫu", price: 35000, insurancePrice: 35000, category: "xet-nghiem" },
  { id: "12", code: "XN09", name: "Định lượng LDL-C", unit: "Mẫu", price: 35000, insurancePrice: 35000, category: "xet-nghiem" },
  { id: "13", code: "XN10", name: "Đo hoạt độ AST (GOT)", unit: "Mẫu", price: 25000, insurancePrice: 25000, category: "xet-nghiem" },
  { id: "14", code: "XN11", name: "Đo hoạt độ ALT (GPT)", unit: "Mẫu", price: 25000, insurancePrice: 25000, category: "xet-nghiem" },

  // 3. Chẩn đoán hình ảnh
  { id: "15", code: "CDHA01", name: "Chụp X-quang ngực thẳng", unit: "Lần", price: 65000, insurancePrice: 65000, category: "chan-doan-hinh-anh" },
  { id: "16", code: "CDHA02", name: "Chụp X-quang cột sống thắt lưng", unit: "Lần", price: 70000, insurancePrice: 70000, category: "chan-doan-hinh-anh" },
  { id: "17", code: "CDHA03", name: "Siêu âm ổ bụng tổng quát", unit: "Lần", price: 50000, insurancePrice: 50000, category: "chan-doan-hinh-anh" },
  { id: "18", code: "CDHA04", name: "Siêu âm tuyến giáp", unit: "Lần", price: 45000, insurancePrice: 45000, category: "chan-doan-hinh-anh" },
  { id: "19", code: "CDHA05", name: "Siêu âm Doppler tim", unit: "Lần", price: 250000, insurancePrice: 220000, category: "chan-doan-hinh-anh" },
  { id: "20", code: "CDHA06", name: "Nội soi dạ dày (không gây mê)", unit: "Lần", price: 350000, insurancePrice: 300000, category: "chan-doan-hinh-anh" },

  // 4. Thủ thuật & Dịch vụ khác
  { id: "21", code: "TT01", name: "Tiêm bắp/Tiêm dưới da", unit: "Mũi", price: 10000, category: "thu-thuat" },
  { id: "22", code: "TT02", name: "Tiêm tĩnh mạch", unit: "Mũi", price: 15000, category: "thu-thuat" },
  { id: "23", code: "TT03", name: "Truyền dịch tĩnh mạch (chưa bao gồm dịch truyền)", unit: "Lần", price: 50000, category: "thu-thuat" },
  { id: "24", code: "TT04", name: "Khâu vết thương phần mềm (dưới 5cm)", unit: "Lần", price: 150000, insurancePrice: 120000, category: "thu-thuat" },
  { id: "25", code: "TT05", name: "Thay băng vết thương chiều dài > 15cm", unit: "Lần", price: 80000, insurancePrice: 65000, category: "thu-thuat" },
];
