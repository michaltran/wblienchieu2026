import PageShell from "../../components/layout/PageShell";
import ResultLookup from "../../components/blocks/patients/ResultLookup";

export default function ImagingResults() {
  const breadcrumbs = [
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Kết quả chẩn đoán hình ảnh" }
  ];

  return (
    <PageShell 
      title="Tra cứu Kết quả CĐHA" 
      subtitle="Xem và tải về kết quả Chẩn đoán hình ảnh (X-Quang, Siêu âm, CT...) trực tuyến."
      breadcrumbs={breadcrumbs}
      className="py-10 bg-slate-50/50"
    >
      <ResultLookup 
        title="Tra cứu Kết quả Chẩn đoán Hình ảnh"
        description="Vui lòng nhập chính xác Số điện thoại và Số CCCD/CMND đã đăng ký khi khám bệnh để xem kết quả."
        type="imaging"
      />
    </PageShell>
  );
}
