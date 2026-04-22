import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Phone, CheckCircle2, X, UserSearch } from "lucide-react";

import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Modal } from "../components/ui/Modal";
import { usePublicDepartments, usePublicServices, usePublicDoctors } from "../hooks/useHospital";

// Schema Validation
const appointmentSchema = z.object({
  // A. Thông tin đặt khám
  facility: z.string().min(1, "Vui lòng chọn cơ sở"),
  specialty: z.string().min(1, "Vui lòng chọn chuyên khoa"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  doctor: z.string().optional(),
  date: z.string().min(1, "Vui lòng chọn ngày khám").refine((date) => {
     return new Date(date) >= new Date(new Date().setHours(0,0,0,0));
  }, "Ngày khám phải từ hôm nay trở đi"),
  time: z.string().min(1, "Vui lòng chọn giờ khám"),

  // B. Thông tin người khám
  fullname: z.string().min(2, "Họ tên phải có ít nhất 2 ký tự"),
  birthYear: z.string().regex(/^\d{4}$/, "Năm sinh không hợp lệ"),
  gender: z.string().min(1, "Vui lòng chọn giới tính"),
  phone: z.string().regex(/^(0|\+84)\d{9,10}$/, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  address: z.string().optional(),

  // C. Ghi chú
  symptoms: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export default function Appointment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<AppointmentFormValues | null>(null);

  const { data: deptData } = usePublicDepartments({ limit: 100 });
  const { data: serviceData } = usePublicServices({ limit: 100 });
  const { data: docData } = usePublicDoctors({ limit: 100 });

  const specialties = deptData?.items || [];
  const services = serviceData?.items || [];
  const doctors = docData?.items || [];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      facility: "LienChieu",
      specialty: "",
      service: "",
      date: "",
      time: "",
      fullname: "",
      birthYear: "",
      gender: "",
      phone: "",
    }
  });

  // Prefill Logic
  const prefillDoctorSlug = searchParams.get("doctor");
  const prefillSpecialtyId = searchParams.get("specialty");
  const [prefilledDoctorName, setPrefilledDoctorName] = useState<string | null>(null);

  useEffect(() => {
    if (doctors.length === 0) return; // wait until loaded
    if (prefillDoctorSlug) {
      const foundDoc = doctors.find((d: any) => d.slug === prefillDoctorSlug);
      if (foundDoc) {
        setValue("doctor", foundDoc.id);
        setPrefilledDoctorName(foundDoc.name);
        
        // Auto-select specialty if provided or derived from doctor
        if (prefillSpecialtyId) {
           setValue("specialty", prefillSpecialtyId);
        } else if (foundDoc.departmentId) {
           setValue("specialty", foundDoc.departmentId);
        }
      }
    } else if (prefillSpecialtyId) {
      setValue("specialty", prefillSpecialtyId);
    }
  }, [prefillDoctorSlug, prefillSpecialtyId, setValue, doctors]);

  const clearPrefill = () => {
    setSearchParams({});
    setValue("doctor", "");
    setValue("specialty", "");
    setPrefilledDoctorName(null);
    navigate("/dang-ky-kham", { replace: true });
  };

  const onSubmit = (data: AppointmentFormValues) => {
    console.log("Form Submitted:", data);
    // Simulate API call
    setTimeout(() => {
      setSubmittedData(data);
      setIsSuccessModalOpen(true);
      reset();
      clearPrefill();
    }, 500);
  };

  const selectedSpecialty = watch("specialty");

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Đăng ký khám bệnh</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Đặt lịch khám trực tuyến để tiết kiệm thời gian chờ đợi. Vui lòng điền đầy đủ thông tin bên dưới để được hỗ trợ tốt nhất.
          </p>
        </div>

        {prefilledDoctorName && (
           <div className="max-w-3xl mx-auto mb-8 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-top-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <UserSearch className="w-5 h-5" />
                 </div>
                 <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Đang đặt lịch với</p>
                    <p className="font-bold text-slate-900">{prefilledDoctorName}</p>
                 </div>
              </div>
              <Button variant="ghost" size="sm" onClick={clearPrefill} className="text-slate-500 hover:text-red-500">
                 <X className="w-4 h-4 mr-1" />
                 Thay đổi
              </Button>
           </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Section */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
              
              {/* Group A: Thông tin đặt khám */}
              <section>
                <h3 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 mb-6">A. Thông tin đặt khám</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Cơ sở khám <span className="text-red-500">*</span></label>
                    <Select {...register("facility")} disabled>
                      <option value="LienChieu">Trung tâm Y tế Khu vực Liên Chiểu</option>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Chuyên khoa <span className="text-red-500">*</span></label>
                    <Select {...register("specialty")} className={errors.specialty ? "border-red-500" : ""}>
                      <option value="">-- Chọn chuyên khoa --</option>
                      {specialties.map((s: any) => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </Select>
                    {errors.specialty && <p className="text-xs text-red-500 mt-1">{errors.specialty.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Dịch vụ <span className="text-red-500">*</span></label>
                    <Select {...register("service")} className={errors.service ? "border-red-500" : ""}>
                       <option value="">-- Chọn dịch vụ --</option>
                       {services.map((s: any) => <option key={s.id} value={s.id}>{s.name}</option>)}
                    </Select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Bác sĩ (Tùy chọn)</label>
                    <Select {...register("doctor")}>
                      <option value="">-- Chọn bác sĩ --</option>
                      {doctors
                        .filter((d: any) => !selectedSpecialty || d.departmentId === selectedSpecialty)
                        .map((d: any) => <option key={d.id} value={d.id}>{d.name}</option>)}
                    </Select>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Ngày khám <span className="text-red-500">*</span></label>
                     <Input type="date" {...register("date")} className={errors.date ? "border-red-500" : ""} />
                     {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Giờ khám dự kiến <span className="text-red-500">*</span></label>
                    <Select {...register("time")} className={errors.time ? "border-red-500" : ""}>
                      <option value="">-- Thời gian --</option>
                      <option value="07:00">07:00 - 08:00</option>
                      <option value="08:00">08:00 - 09:00</option>
                      <option value="09:00">09:00 - 10:00</option>
                      <option value="10:00">10:00 - 11:00</option>
                      <option value="13:30">13:30 - 14:30</option>
                      <option value="14:30">14:30 - 15:30</option>
                      <option value="15:30">15:30 - 16:30</option>
                    </Select>
                     {errors.time && <p className="text-xs text-red-500 mt-1">{errors.time.message}</p>}
                  </div>
                </div>
              </section>

              {/* Group B: Thông tin bệnh nhân */}
              <section>
                 <h3 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 mb-6">B. Thông tin bệnh nhân</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                       <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên <span className="text-red-500">*</span></label>
                       <Input placeholder="NHAP IN HOA (VD: NGUYEN VAN A)" {...register("fullname")} className={errors.fullname ? "border-red-500" : ""} />
                       {errors.fullname && <p className="text-xs text-red-500 mt-1">{errors.fullname.message}</p>}
                    </div>
                    
                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Năm sinh <span className="text-red-500">*</span></label>
                       <Input type="number" placeholder="YYYY" {...register("birthYear")} className={errors.birthYear ? "border-red-500" : ""} />
                       {errors.birthYear && <p className="text-xs text-red-500 mt-1">{errors.birthYear.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Giới tính <span className="text-red-500">*</span></label>
                      <div className="flex gap-4 mt-2">
                         <label className="flex items-center">
                           <input type="radio" value="nam" {...register("gender")} className="w-4 h-4 text-primary focus:ring-primary" />
                           <span className="ml-2 text-sm text-slate-700">Nam</span>
                         </label>
                          <label className="flex items-center">
                           <input type="radio" value="nu" {...register("gender")} className="w-4 h-4 text-primary focus:ring-primary" />
                           <span className="ml-2 text-sm text-slate-700">Nữ</span>
                         </label>
                      </div>
                      {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender.message}</p>}
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                       <Input type="tel" placeholder="0901234567" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                       {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                       <label className="block text-sm font-medium text-slate-700 mb-1">Email (Không bắt buộc)</label>
                       <Input type="email" placeholder="example@email.com" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                       {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>

                     <div className="md:col-span-2">
                       <label className="block text-sm font-medium text-slate-700 mb-1">Địa chỉ (Không bắt buộc)</label>
                       <Input placeholder="Số nhà, đường, phường, quận..." {...register("address")} />
                    </div>
                 </div>
              </section>

              {/* Group C: Ghi chú */}
              <section>
                 <h3 className="text-lg font-bold text-primary border-l-4 border-primary pl-3 mb-6">C. Triệu chứng / Ghi chú</h3>
                 <div>
                    <textarea 
                      {...register("symptoms")}
                      rows={4}
                      className="w-full rounded-md border border-input p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Mô tả sơ lược triệu chứng hoặc nhu cầu khám..."
                    ></textarea>
                 </div>
              </section>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <Button type="submit" size="lg" className="w-full md:w-auto px-10 h-12 text-base shadow-lg shadow-primary/20">
                  Xác nhận đặt lịch
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar / Info */}
          <div className="lg:col-span-4">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-4">Lưu ý khi đặt khám</h3>
              <ul className="space-y-3 text-sm text-slate-600 list-disc pl-4 mb-8">
                <li>Vui lòng đến trước giờ hẹn 15 phút để làm thủ tục.</li>
                <li>Mang theo thẻ BHYT và CMND/CCCD khi đi khám.</li>
                <li>Lịch hẹn có giá trị trong ngày, nếu không đến vui lòng hủy hoặc đặt lại.</li>
              </ul>

              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                 <p className="text-sm text-slate-500 mb-2">Cần hỗ trợ khẩn cấp?</p>
                 <a href="tel:0905453677" className="inline-flex items-center justify-center gap-2 text-xl font-bold text-red-600">
                    <Phone className="w-6 h-6 animate-pulse" />
                    0905453677
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)}>
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Đặt lịch thành công!</h2>
          <p className="text-slate-600 mb-6">
            Cảm ơn bạn đã tin tưởng TTYT Liên Chiểu. Chúng tôi đã nhận được thôngợp tin đặt khám của bạn.
          </p>

          {submittedData && (
             <div className="bg-slate-50 p-4 rounded-lg text-left text-sm text-slate-700 mb-6 space-y-2 border border-slate-100">
                <p><strong>Họ tên:</strong> {submittedData.fullname}</p>
                <p><strong>Số điện thoại:</strong> {submittedData.phone}</p>
                <p><strong>Ngày khám:</strong> {format(new Date(submittedData.date), "dd/MM/yyyy")} - {submittedData.time}</p>
                <p><strong>Chuyên khoa:</strong> {specialties.find((s: any) => s.id === submittedData.specialty)?.name}</p>
             </div>
          )}

          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={() => setIsSuccessModalOpen(false)}>Đóng</Button>
            <Button onClick={() => window.location.href="/"}>Về trang chủ</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
