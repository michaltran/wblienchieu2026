import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "../../lib/cn";

// Validation Schema
const contactSchema = z.object({
  fullname: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  subject: z.string().min(1, "Vui lòng chọn chủ đề"),
  content: z.string().min(10, "Nội dung cần ít nhất 10 ký tự"),
  consent: z.boolean().refine((val) => val === true, "Bạn cần đồng ý để chúng tôi liên hệ lại")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      subject: "Hỏi về dịch vụ",
      content: "",
      consent: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    console.log("Contact Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
           <h3 className="text-2xl font-bold text-slate-900 mb-2">Gửi yêu cầu hỗ trợ</h3>
           <p className="text-slate-600 mb-8">Điền thông tin vào form dưới đây, chúng tôi sẽ phản hồi sớm nhất.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
            <Input 
              {...register("fullname")}
              className={cn("bg-white", errors.fullname && "border-red-500 focus-visible:ring-red-200")}
              placeholder="Nguyễn Văn A" 
            />
            {errors.fullname && <p className="text-xs text-red-500">{errors.fullname.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Số điện thoại <span className="text-red-500">*</span></label>
            <Input 
              {...register("phone")}
              className={cn("bg-white", errors.phone && "border-red-500 focus-visible:ring-red-200")}
              placeholder="0912..." 
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Email</label>
          <Input 
             {...register("email")}
             className={cn("bg-white", errors.email && "border-red-500 focus-visible:ring-red-200")}
             placeholder="example@gmail.com (không bắt buộc)" 
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Chủ đề <span className="text-red-500">*</span></label>
            <select 
               {...register("subject")}
               className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
               <option value="Đăng ký khám">Đăng ký khám bệnh</option>
               <option value="Hỏi về dịch vụ">Hỏi về dịch vụ</option>
               <option value="Phản ánh góp ý">Phản ánh & Góp ý</option>
               <option value="Khác">Khác</option>
            </select>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Nội dung <span className="text-red-500">*</span></label>
            <textarea
               {...register("content")}
               className={cn(
                 "flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                 errors.content && "border-red-500 focus-visible:ring-red-200"
               )}
               placeholder="Nhập nội dung bạn cần hỗ trợ..."
            ></textarea>
            {errors.content && <p className="text-xs text-red-500">{errors.content.message}</p>}
        </div>

         <div className="flex items-start gap-3">
             <input 
               type="checkbox" 
               id="consent" 
               {...register("consent")}
               className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
             />
             <label htmlFor="consent" className="text-sm text-slate-600 cursor-pointer select-none">
                Tôi đồng ý để Trung tâm Y tế Liên Chiểu liên hệ lại để tư vấn và hỗ trợ.
             </label>
         </div>
         {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}

        <div className="pt-2">
           <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px]" disabled={isSubmitting}>
             {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
           </Button>
        </div>
      </form>

      {/* Success Modal */}
      <Dialog open={isSuccess} onClose={() => setIsSuccess(false)} className="relative z-50">
         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
         <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded-3xl bg-white p-8 shadow-2xl text-center">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <Dialog.Title className="text-xl font-bold text-slate-900 mb-2">Gửi thành công!</Dialog.Title>
               <Dialog.Description className="text-slate-600 mb-8">
                 Chúng tôi đã nhận được yêu cầu của bạn và sẽ liên hệ lại trong thời gian sớm nhất.
               </Dialog.Description>
               <Button onClick={() => setIsSuccess(false)} className="w-full">
                 Đóng
               </Button>
            </Dialog.Panel>
         </div>
      </Dialog>
    </>
  );
}
