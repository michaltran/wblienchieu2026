import PatientCategoryLayout from "../../components/layout/PatientCategoryLayout";
import ServicePriceTable from "../../components/blocks/ServicePriceTable";

export default function ServicePricing() {
  const breadcrumbs = [
    { label: "Trang chủ", href: "/" },
    { label: "Dành cho người bệnh", href: "#" },
    { label: "Bảng giá dịch vụ" },
  ];

  return (
    <PatientCategoryLayout
      title="Bảng giá dịch vụ"
      description="Tra cứu chi phí các dịch vụ khám chữa bệnh, xét nghiệm và kỹ thuật y tế được niêm yết công khai tại Trung tâm Y tế."
      breadcrumbs={breadcrumbs}
    >
      <ServicePriceTable />
    </PatientCategoryLayout>
  );
}
