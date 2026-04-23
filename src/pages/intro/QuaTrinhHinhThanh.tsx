import { useQuery } from "@tanstack/react-query";
import IntroLayout from "../../components/layout/IntroLayout";
import IntroHero from "../../components/blocks/intro/IntroHero";
import StatsStrip from "../../components/blocks/intro/StatsStrip";
import Timeline from "../../components/blocks/intro/Timeline";
import Section from "../../components/ui/Section";
import { contentApi } from "../../lib/api/content";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

// Dữ liệu mặc định khi chưa có trong admin
const DEFAULT_TIMELINE = [
  { year: "2010", title: "Giai đoạn định hình mô hình hoạt động", desc: "Trung tâm Y tế quận Liên Chiểu được kiện toàn và đi vào hoạt động ổn định, xác lập vai trò y tế dự phòng và khám chữa bệnh ban đầu." },
  { year: "2015", title: "Mở rộng quy mô phục vụ cộng đồng", desc: "Nâng cấp cơ sở hạ tầng, mở rộng các khoa phòng lâm sàng, đáp ứng nhu cầu khám chữa bệnh ngày càng tăng của người dân." },
  { year: "2018", title: "Chuẩn hóa quy trình, nâng cao chất lượng", desc: "Triển khai áp dụng các tiêu chuẩn quản lý chất lượng bệnh viện, cải tiến quy trình đón tiếp và chăm sóc người bệnh." },
  { year: "2020", title: "Tăng cường năng lực dự phòng & ứng phó dịch", desc: "Phát huy vai trò nòng cốt trong công tác phòng chống dịch bệnh, bảo vệ sức khỏe cộng đồng trước những thách thức mới." },
  { year: "2023", title: "Đẩy mạnh chuyển đổi số y tế", desc: "Ứng dụng mạnh mẽ công nghệ thông tin trong quản lý, khám chữa bệnh, hướng tới hồ sơ sức khỏe điện tử toàn dân." },
  { year: "2025", title: "Hoàn thiện hệ sinh thái dịch vụ chăm sóc sức khỏe", desc: "Phát triển các gói dịch vụ y tế chất lượng cao, tiếp tục khẳng định vị thế là địa chỉ tin cậy của người dân khu vực." },
];


export default function QuaTrinhHinhThanh() {
  // Lấy dữ liệu timeline từ Admin Settings (key: hospital.timeline)
  const { data: timelineFromApi } = useQuery({
    queryKey: ['settings', 'hospital.timeline'],
    queryFn: contentApi.publicGetTimeline,
    staleTime: 1000 * 60 * 10, // cache 10 phút
  });

  // Dùng dữ liệu từ API nếu có, fallback về mặc định
  const historyTimeline = (timelineFromApi && timelineFromApi.length > 0)
    ? timelineFromApi
    : DEFAULT_TIMELINE;

  const breadcrumbs = [
    { label: "Giới thiệu", href: "#" },
    { label: "Quá trình hình thành" }
  ];

  const stats = [
    { label: "Năm thành lập", value: "----" },
    { label: "Khoa / Phòng", value: "--" },
    { label: "Nhân sự", value: "~---" },
    { label: "Lượt khám/năm", value: "--.--+" },
  ];

  const achievements = [
    "Nâng cao trải nghiệm người bệnh toàn diện",
    "Chuẩn hóa năng lực chuyên môn đội ngũ y bác sĩ",
    "Tăng cường hợp tác quốc tế và tuyến trên",
    "Đẩy mạnh chuyển đổi số trong quản lý bệnh viện",
    "Thực hiện xuất sắc các hoạt động cộng đồng"
  ];

  return (

    <IntroLayout currentPath="/gioi-thieu/qua-trinh-hinh-thanh-phat-trien">
      <IntroHero
        title="Quá trình hình thành và phát triển"
        subtitle="Hành trình xây dựng, củng cố năng lực và mở rộng dịch vụ chăm sóc sức khỏe cho nhân dân."
        breadcrumbs={breadcrumbs}
      />

      {/* Safe Stats Placeholder */}
      <Section>
        <StatsStrip stats={stats} />
        <p className="text-center text-xs text-slate-400 italic -mt-8 mb-12">
          * Số liệu đang được cập nhật từ báo cáo chính thức.
        </p>
      </Section>

      <div className="space-y-16">
        {/* Timeline */}
        <Section title="Các cột mốc đáng nhớ" description="Những dấu ấn quan trọng trong lịch sử phát triển của Trung tâm.">
          <Timeline events={historyTimeline} />
          <p className="text-center text-sm text-slate-500 italic mt-8 bg-slate-50 p-3 rounded-lg border border-slate-100">
            Ghi chú: Mốc thời gian và sự kiện sẽ được cập nhật chi tiết theo tài liệu lịch sử chính thức của Trung tâm.
          </p>
        </Section>

        {/* Achievements */}
        <Section title="Dấu ấn nổi bật" className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Không ngừng vươn lên</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Trải qua quá trình hình thành và phát triển, tập thể cán bộ viên chức Trung tâm luôn nỗ lực vượt qua khó khăn, hoàn thành tốt sứ mệnh chăm sóc và bảo vệ sức khỏe nhân dân.
              </p>
              <Link to="/lien-he" className="font-bold text-[#1E73BE] hover:underline">
                Liên hệ với chúng tôi &rarr;
              </Link>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
              <ul className="space-y-4">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Footer CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div>
            <h4 className="font-bold text-lg text-slate-900 mb-1">Đồng hành cùng sức khỏe của bạn</h4>
            <p className="text-sm text-slate-500">Chúng tôi luôn ở đây để lắng nghe và phục vụ.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/lien-he" className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors">
              Liên hệ
            </Link>
            <Link to="/dang-ky-kham" className="px-5 py-2.5 bg-[#1E73BE] text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
              Đăng ký khám
            </Link>
          </div>
        </div>
      </div>
    </IntroLayout>
  );
}
