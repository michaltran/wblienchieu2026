import { useState, useRef } from "react";
import { Upload, X, Send, Trash2 } from "lucide-react";
import { validateFiles, fileToDataUrl, formatBytes, MAX_FILE_COUNT } from "../../lib/uploads/imageUpload";
import { http } from "../../lib/api/http";

export default function MailboxForm() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            const { ok, errors: validationErrors } = validateFiles([...files, ...selectedFiles]);
            
            if (validationErrors.length > 0) {
                setErrors(validationErrors);
                // Clear errors after 5s
                setTimeout(() => setErrors([]), 5000);
            }

            const newFiles = [...files, ...ok].slice(0, MAX_FILE_COUNT);
            setFiles(newFiles);

            // Generate previews
            const newPreviews = await Promise.all(newFiles.map(fileToDataUrl));
            setPreviews(newPreviews);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        const newPreviews = previews.filter((_, i) => i !== index);
        setFiles(newFiles);
        setPreviews(newPreviews);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrors([]);

        if (!name || !content) {
            setErrors(["Vui lòng điền đầy đủ Họ tên và Nội dung (*)."]);
            return;
        }
        if (content.trim().length < 10) {
            setErrors(["Nội dung phải ít nhất 10 ký tự."]);
            return;
        }

        setIsSubmitting(true);
        try {
            // Gửi thật lên backend API
            await http.post('/api/messages/public', {
                senderName: name.trim(),
                senderEmail: contact.includes('@') ? contact.trim() : undefined,
                senderPhone: !contact.includes('@') ? contact.trim() : undefined,
                subject: subject.trim() || 'Gửi từ hộp thư',
                message: content.trim(),
                type: 'mailbox',
            });

            // Reset form
            setName("");
            setContact("");
            setSubject("");
            setContent("");
            setFiles([]);
            setPreviews([]);
            setSuccessMessage("Đã gửi thành công! Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            const msg = err?.response?.data?.message || 'Gửi thất bại. Vui lòng thử lại sau.';
            setErrors([msg]);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClear = () => {
        if(window.confirm("Bạn có chắc chắn muốn xóa nội dung đang nhập?")) {
            setName("");
            setContact("");
            setSubject("");
            setContent("");
            setFiles([]);
            setPreviews([]);
            setErrors([]);
        }
    };

    return (
        <div className="space-y-8">
            {/* Success Toast */}
            {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">{successMessage}</span>
                </div>
            )}

            {/* Error Toast */}
            {errors.length > 0 && (
                 <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl space-y-1 animate-in fade-in slide-in-from-top-2">
                    {errors.map((err, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                             <X className="w-4 h-4" /> {err}
                        </div>
                    ))}
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Họ và tên <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                            placeholder="Nhập họ tên của bạn"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Số điện thoại / Email <span className="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                            placeholder="Để chúng tôi liên hệ lại khi cần"
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Chủ đề <span className="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                        placeholder="Vắn tắt nội dung chính"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nội dung <span className="text-red-500">*</span></label>
                    <textarea 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1E73BE] focus:border-transparent outline-none transition-all placeholder:text-slate-400 min-h-[150px]"
                        placeholder="Chi tiết câu hỏi hoặc góp ý của bạn..."
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                </div>

                {/* Image Upload Area */}
                <div className="space-y-3">
                     <label className="text-sm font-bold text-slate-700 flex items-center justify-between">
                        <span>Hình ảnh đính kèm (nếu có)</span>
                        <span className="text-xs font-normal text-slate-500">Tối đa 6 ảnh, &le;5MB/ảnh</span>
                     </label>
                     
                     <div 
                        className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 hover:border-blue-400 transition-colors cursor-pointer group"
                        onClick={() => fileInputRef.current?.click()}
                     >
                         <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            multiple 
                            accept="image/png, image/jpeg, image/webp"
                            onChange={handleFileChange as any} 
                         />
                         <div className="w-12 h-12 bg-blue-50 text-[#1E73BE] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                             <Upload className="w-6 h-6" />
                         </div>
                         <p className="text-slate-600 font-medium">Bấm vào đây để tải ảnh lên</p>
                         <p className="text-xs text-slate-400 mt-1">Hỗ trợ JPG, PNG, WEBP</p>
                     </div>

                     {/* Previews */}
                     {files.length > 0 && (
                         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                             {files.map((file, idx) => (
                                 <div key={idx} className="relative group/preview rounded-lg overflow-hidden border border-slate-200 bg-slate-50 aspect-square">
                                     <img src={previews[idx]} alt="preview" className="w-full h-full object-cover" />
                                     <button 
                                        type="button"
                                        onClick={() => removeFile(idx)}
                                        className="absolute top-1 right-1 p-1 bg-white/90 text-red-500 rounded-full shadow-sm opacity-0 group-hover/preview:opacity-100 transition-opacity hover:bg-red-50"
                                     >
                                         <X className="w-4 h-4" />
                                     </button>
                                     <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[10px] p-1 truncate px-2">
                                         {file.name} ({formatBytes(file.size)})
                                     </div>
                                 </div>
                             ))}
                         </div>
                     )}
                </div>

                {/* Disclaimer */}
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs text-slate-600 flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1E73BE] flex items-center justify-center shrink-0 font-bold">!</div>
                    <p>
                        Vui lòng không gửi thông tin nhạy cảm (CCCD, hồ sơ bệnh án đầy đủ). Hình ảnh chỉ dùng để minh họa và sẽ được xử lý theo quy định bảo mật khi hệ thống tiếp nhận chính thức.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1 bg-[#1E73BE] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-200 hover:bg-[#1666aa] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Đang xử lý...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Gửi thư
                            </>
                        )}
                    </button>
                    <button 
                        type="button" 
                        onClick={handleClear}
                        className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:text-red-500 transition-colors flex items-center gap-2"
                    >
                        <Trash2 className="w-5 h-5" />
                        <span className="hidden sm:inline">Xóa nội dung</span>
                    </button>
                </div>
            </form>

            {/* Sent Messages History (Local) */}
            {sentMessages.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                    <button 
                        onClick={() => setShowHistory(!showHistory)}
                        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-slate-50 transition-colors"
                    >
                        <div className="flex items-center gap-2 text-slate-700 font-bold">
                            <Send className="w-5 h-5 text-green-500" />
                            Thư bạn đã gửi (trên thiết bị này)
                            <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{sentMessages.length}</span>
                        </div>
                        {showHistory ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>
                    
                    {showHistory && (
                        <div className="divide-y divide-slate-200 border-t border-slate-200">
                            {sentMessages.map(msg => (
                                <div key={msg.id} className="p-6 bg-white/50 hover:bg-white transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-slate-800">{msg.subject}</h4>
                                        <span className="text-xs text-slate-500 ml-4 shrink-0">
                                            {new Date(msg.createdAt).toLocaleString('vi-VN')}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-600 line-clamp-3 mb-3">{msg.content}</p>
                                    {msg.images.length > 0 && (
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <ImageIcon className="w-4 h-4" />
                                            {msg.images.length} hình ảnh đính kèm
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
