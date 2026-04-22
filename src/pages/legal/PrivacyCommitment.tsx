import PageShell from "../../components/layout/PageShell";
import { Shield, Lock, Eye, Server, Cookie, Phone, Mail, MapPin, CalendarClock } from "lucide-react";

export default function PrivacyCommitment() {
  return (
    <PageShell
      title="Cam kết bảo mật"
      subtitle="Chúng tôi tôn trọng quyền riêng tư và bảo vệ dữ liệu của người dùng khi sử dụng website."
      breadcrumbs={[
        { label: "Cam kết bảo mật" }
      ]}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
    >
      {/* Table of Contents (Desktop Sticky) */}
      <div className="hidden lg:block lg:col-span-3 sticky top-24">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Nội dung chính
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="#pham-vi" className="hover:text-primary transition-colors block">1. Phạm vi áp dụng</a></li>
            <li><a href="#du-lieu" className="hover:text-primary transition-colors block">2. Dữ liệu thu thập</a></li>
            <li><a href="#muc-dich" className="hover:text-primary transition-colors block">3. Mục đích sử dụng</a></li>
            <li><a href="#chia-se" className="hover:text-primary transition-colors block">4. Chia sẻ dữ liệu</a></li>
            <li><a href="#bao-mat" className="hover:text-primary transition-colors block">5. Lưu trữ & Bảo mật</a></li>
            <li><a href="#cookie" className="hover:text-primary transition-colors block">6. Cookie</a></li>
            <li><a href="#quyen" className="hover:text-primary transition-colors block">7. Quyền người dùng</a></li>
            <li><a href="#lien-he" className="hover:text-primary transition-colors block">8. Liên hệ</a></li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-9 space-y-8">
        {/* Policy Alert */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-sm text-blue-800">
           <Shield className="w-5 h-5 shrink-0" />
           <p>Thông tin dưới đây mang tính tham khảo và sẽ được điều chỉnh theo quy định hiện hành của pháp luật Việt Nam khi cần thiết.</p>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28">
           <h2 id="pham-vi" className="flex items-center gap-2 text-primary">
              <Eye className="w-6 h-6" />
              1. Phạm vi áp dụng
           </h2>
           <p>
             Chính sách bảo mật này mô tả cách Trung tâm Y tế Khu vực Liên Chiểu thu thập, sử dụng và bảo vệ thông tin cá nhân của người dùng khi truy cập website chính thức của chúng tôi. Chúng tôi cam kết tuân thủ các quy định về bảo vệ dữ liệu cá nhân theo pháp luật Việt Nam.
           </p>

           <h2 id="du-lieu" className="flex items-center gap-2 text-primary">
              <Server className="w-6 h-6" />
              2. Dữ liệu chúng tôi thu thập
           </h2>
           <ul>
             <li><strong>Thông tin bạn cung cấp:</strong> Bao gồm họ tên, số điện thoại, địa chỉ email, và các thông tin y tế cơ bản khi bạn đăng ký khám bệnh trực tuyến hoặc gửi câu hỏi tư vấn.</li>
             <li><strong>Dữ liệu kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, thời gian truy cập và các trang bạn đã xem trên website. Những thông tin này giúp chúng tôi cải thiện trải nghiệm người dùng và bảo mật hệ thống.</li>
           </ul>

           <h2 id="muc-dich" className="flex items-center gap-2 text-primary">
              <Lock className="w-6 h-6" />
              3. Mục đích sử dụng
           </h2>
           <p>Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
           <ul>
             <li>Xử lý lịch hẹn khám chữa bệnh và cung cấp các dịch vụ y tế.</li>
             <li>Liên hệ xác nhận lịch hẹn hoặc thông báo kết quả (nếu có).</li>
             <li>Phản hồi các thắc mắc, khiếu nại hoặc góp ý của người dân.</li>
             <li>Cải thiện chất lượng dịch vụ và nội dung trên website.</li>
           </ul>

           <h2 id="chia-se" className="flex items-center gap-2 text-primary">
              <Shield className="w-6 h-6" />
              4. Chia sẻ dữ liệu
           </h2>
           <p>
             Chúng tôi <strong>không bán, trao đổi hoặc chia sẻ</strong> thông tin cá nhân của bạn với bên thứ ba vì mục đích thương mại. Thông tin chỉ được chia sẻ trong các trường hợp:
           </p>
           <ul>
              <li>Khi có sự đồng ý của bạn.</li>
              <li>Khi cần thiết để cung cấp dịch vụ y tế (ví dụ: chuyển tuyến, hội chẩn).</li>
              <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền.</li>
           </ul>

           <h2 id="bao-mat" className="flex items-center gap-2 text-primary">
              <Lock className="w-6 h-6" />
              5. Lưu trữ & Bảo mật
           </h2>
           <p>
             Dữ liệu của bạn được lưu trữ trên hệ thống máy chủ an toàn. Chúng tôi áp dụng các biện pháp kỹ thuật như mã hóa truyền tải (HTTPS), tường lửa và phân quyền truy cập nghiêm ngặt để bảo vệ thông tin khỏi các truy cập trái phép, mất mát hoặc phá hủy.
           </p>

           <h2 id="cookie" className="flex items-center gap-2 text-primary">
              <Cookie className="w-6 h-6" />
              6. Cookie
           </h2>
           <p>
             Website sử dụng Cookie để ghi nhớ các tùy chọn của bạn và thống kê lượt truy cập. Bạn có thể tắt Cookie trong cài đặt trình duyệt, nhưng điều này có thể ảnh hưởng đến một số tính năng của website.
           </p>

           <h2 id="quyen" className="flex items-center gap-2 text-primary">
              <Shield className="w-6 h-6" />
              7. Quyền của người dùng
           </h2>
           <p>Bạn có quyền:</p>
           <ul>
             <li>Yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của mình.</li>
             <li>Rút lại sự đồng ý cho phép thu thập dữ liệu (trừ trường hợp pháp luật quy định khác).</li>
             <li>Khiếu nại nếu phát hiện thông tin bị sử dụng sai mục đích.</li>
           </ul>

           <h2 id="lien-he" className="flex items-center gap-2 text-primary">
              <Mail className="w-6 h-6" />
              8. Liên hệ về bảo mật
           </h2>
           <p>Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ:</p>
           <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose space-y-4">
               <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Email</h4>
                    <p className="text-slate-600">trungtamytelienchieu@danang.gov.vn</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Hotline</h4>
                    <p className="text-slate-600">0905453677</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Địa chỉ</h4>
                    <p className="text-slate-600">525 Tôn Đức Thắng, phường Hòa Khánh, TP Đà Nẵng, Việt Nam</p>
                  </div>
               </div>
           </div>

           <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-2 text-slate-400 text-sm italic">
              <CalendarClock className="w-4 h-4" />
              Cập nhật lần cuối: Tháng 03/2026
           </div>
        </div>
      </div>
    </PageShell>
  );
}
