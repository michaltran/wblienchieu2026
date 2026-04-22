import PageShell from "../../components/layout/PageShell";
import ResultLookup from "../../components/blocks/patients/ResultLookup";

export default function LabResults() {
  const breadcrumbs = [
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Kết quả xét nghiệm" }
  ];

  return (
    <PageShell 
      title="Tra cứu Kết quả Xét nghiệm" 
      subtitle="Tra cứu trực tuyến kết quả xét nghiệm của bạn nhanh chóng và bảo mật."
      breadcrumbs={breadcrumbs}
      className="py-10 bg-slate-50/50"
    >
      <ResultLookup 
        title="Tra cứu Kết quả Xét nghiệm"
        description="Vui lòng nhập chính xác Số điện thoại và Số CCCD/CMND đã đăng ký khi khám bệnh để xem kết quả."
        type="lab"
      />
    </PageShell>
  );
}
