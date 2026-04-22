import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X, Phone, MapPin, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

interface HotlinePopupProps {
  open: boolean;
  onClose: () => void;
}

export default function HotlinePopup({ open, onClose }: HotlinePopupProps) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all">
                {/* Header */}
                <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-100">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-black text-primary uppercase"
                    >
                      Hotline
                    </Dialog.Title>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      Trung tâm Y tế Khu vực Liên Chiểu — Y tế gần dân, Ân cần chăm sóc
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-red-100 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Đóng"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* Hotline List */}
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                       <div>
                          <h4 className="font-bold text-slate-900">Trung tâm Y tế Khu vực Liên Chiểu (Đà Nẵng)</h4>
                          <p className="text-sm text-slate-500">Tiếp nhận tư vấn & hướng dẫn</p>
                       </div>
                       <a href="tel:0905453677" className="text-xl font-black text-primary mt-2 md:mt-0 hover:underline">
                          0905453677
                       </a>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                       <div>
                          <h4 className="font-bold text-slate-900">Tư vấn dịch vụ</h4>
                          <p className="text-sm text-slate-500">Giải đáp thắc mắc dịch vụ y tế</p>
                       </div>
                       <a href="tel:0905453677" className="text-xl font-black text-primary mt-2 md:mt-0 hover:underline">
                          0905453677
                       </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-blue-50/30 p-4 rounded-2xl border border-blue-100">
                      <h4 className="font-bold text-slate-900 mb-2">Giờ làm việc</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                          <div>
                             <span className="font-semibold text-slate-800 block">T2 - T6:</span>
                             7h00 - 11h30 & 13h30 - 17h00
                          </div>
                          <div>
                             <span className="font-semibold text-slate-800 block">Sáng T7:</span>
                             7h00 - 11h30
                          </div>
                          <div className="md:col-span-2">
                             <span className="font-bold text-red-600">Cấp cứu: 24/7 - Hotline 115</span>
                          </div>
                      </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Location Card */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                       <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                             <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 text-sm">525 Tôn Đức Thắng</h4>
                             <p className="text-xs text-slate-500">Phường Hòa Khánh, TP. Đà Nẵng</p>
                          </div>
                       </div>
                       <div className="mt-auto grid grid-cols-2 gap-3">
                          <a 
                            href="https://www.google.com/maps/search/?api=1&query=525+Tôn+Đức+Thắng,+Hòa+Khánh,+Đà+Nẵng" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center py-2 px-3 rounded-lg bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                          >
                            Chỉ đường
                          </a>
                          <Link 
                            to="/dang-ky-kham" 
                            onClick={onClose}
                            className="flex items-center justify-center py-2 px-3 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors"
                          >
                            Đăng ký khám
                          </Link>
                       </div>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                       <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                             <Mail className="w-5 h-5" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 text-sm">Email hỗ trợ</h4>
                             <p className="text-xs text-slate-500 break-all">trungtamytelienchieu@...</p>
                          </div>
                       </div>
                       <div className="mt-auto grid grid-cols-2 gap-3">
                          <a 
                            href="mailto:trungtamytelienchieu@danang.gov.vn" 
                            className="flex items-center justify-center py-2 px-3 rounded-lg bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                          >
                            Gửi Email
                          </a>
                          <a 
                            href="tel:0905453677"
                            className="flex items-center justify-center py-2 px-3 rounded-lg bg-orange-50 text-orange-700 text-xs font-bold hover:bg-orange-100 transition-colors"
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Gọi ngay
                          </a>
                       </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-center">
                     <p className="text-xs text-amber-800 font-medium">
                        Thông tin mang tính tham khảo, không thay thế tư vấn y tế. Vui lòng gọi <span className="font-bold">0905453677</span> để được hướng dẫn.
                     </p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
