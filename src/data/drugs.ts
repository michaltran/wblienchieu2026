export interface Drug {
  slug: string;
  name: string;
  letter: string;
  formBrand?: string;
  groupEffect?: string;
  indications?: string[];
  contraindications?: string[];
  cautions?: string[];
  adverseEffects?: string[];
  dosage?: string[];
  notes?: string[];
  references?: string[];
  topics?: string[];
  relatedPostSlugs?: string[];
}

const generateDrugs = (): Drug[] => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const drugs: Drug[] = [];

  const commonIndications = ["Giảm đau, hạ sốt", "Kháng viêm", "Điều trị nhiễm khuẩn", "Hỗ trợ tiêu hóa"];
  const commonDosage = ["Người lớn: 1 viên x 2 lần/ngày", "Trẻ em: Tham khảo ý kiến bác sĩ", "Uống sau khi ăn"];

  let count = 0;
  letters.forEach((letter) => {
    // Generate 3-5 drugs per letter
    const numDrugs = 3 + Math.floor(Math.random() * 3); 
    for (let i = 1; i <= numDrugs; i++) {
       const hasSuffix = Math.random() > 0.5;
       const suffix = hasSuffix ? ` ${Math.floor(Math.random() * 500)}mg` : "";
       const name = `${letter}xample-Drug ${i}${suffix}`;
       
       drugs.push({
         slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
         name: name,
         letter: letter,
         formBrand: `Viên nén bao phim, ${name} Brand`,
         groupEffect: "Thuốc giảm đau, kháng viêm nhóm NSAIDs",
         indications: [commonIndications[Math.floor(Math.random() * commonIndications.length)]],
         contraindications: ["Mẫn cảm với thành phần thuốc", "Suy gan nặng"],
         cautions: ["Thận trọng với phụ nữ mang thai", "Người lái xe và vận hành máy móc"],
         adverseEffects: ["Buồn nôn", "Chóng mặt", "Dị ứng ngoài da"],
         dosage: commonDosage,
         notes: ["Đọc kỹ hướng dẫn sử dụng trước khi dùng"],
         references: ["Dược thư quốc gia Việt Nam"],
         relatedPostSlugs: [],
       });
       count++;
    }
  });

  // Manually add some realistic ones for demo
  drugs.unshift(
    {
      slug: "paracetamol-500mg",
      name: "Paracetamol 500mg",
      letter: "P",
      formBrand: "Viên nén, Panadol",
      groupEffect: "Giảm đau, hạ sốt",
      indications: ["Đau đầu", "Đau răng", "Sốt do cảm cúm"],
      contraindications: ["Mẫn cảm với Paracetamol", "Thiếu hụt G6PD"],
      cautions: ["Không dùng quá 4g/ngày", "Tránh uống rượu khi dùng thuốc"],
      adverseEffects: ["Ban da", "Tổn thương gan (khi dùng quá liều)"],
      dosage: ["Người lớn: 1-2 viên/lần, cách nhau 4-6h", "Trẻ em: 10-15mg/kg/lần"],
      notes: ["Nếu sốt quá 3 ngày không đỡ cần đi khám"],
      references: ["WHO Model List of Essential Medicines"],
      relatedPostSlugs: []
    },
    {
       slug: "ibuprofen-400mg",
       name: "Ibuprofen 400mg",
       letter: "I",
       formBrand: "Viên nén bao phim",
       groupEffect: "Kháng viêm không steroid (NSAID)",
       indications: ["Đau khớp", "Đau bụng kinh", "Hạ sốt"],
       contraindications: ["Loét dạ dày tá tràng", "Hen phế quản"],
       cautions: ["Người cao tuổi", "Bệnh tim mạch"],
       adverseEffects: ["Đau dạ dày", "Xuất huyết tiêu hóa"],
       dosage: ["1 viên x 2-3 lần/ngày"],
       notes: ["Uống ngay sau khi ăn no"],
       references: [],
       relatedPostSlugs: []
    }
  );

  return drugs.sort((a,b) => a.name.localeCompare(b.name));
};

export const drugs = generateDrugs();
