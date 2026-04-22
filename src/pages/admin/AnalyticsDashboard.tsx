import { useState } from "react";
import { Users, Clock, Eye, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Globe } from "lucide-react";
import { cn } from "../../lib/cn";

// Mock Data
const MOCK_STATS = [
  { label: "Tổng Lượt Truy Cập", value: "245,892", change: "+12.5%", trend: "up", icon: Eye, color: "text-blue-600 bg-blue-100" },
  { label: "Người Dùng Online", value: "48", change: "+4", trend: "up", icon: Users, color: "text-green-600 bg-green-100" },
  { label: "Thời Gian TB", value: "4m 32s", change: "-2.1%", trend: "down", icon: Clock, color: "text-purple-600 bg-purple-100" },
  { label: "Tỷ Lệ Thoát", value: "42.3%", change: "-0.8%", trend: "up", icon: TrendingUp, color: "text-orange-600 bg-orange-100" },
];

const MOCK_VISITS = [
  { path: "/", title: "Trang chủ", views: "12,450", unique: "8,320", time: "2m 15s" },
  { path: "/vr360", title: "Tham quan VR360", views: "8,932", unique: "7,100", time: "8m 45s" },
  { path: "/chuyen-khoa/noi-khoa", title: "Khoa Nội", views: "4,210", unique: "3,150", time: "3m 20s" },
  { path: "/dang-ky-kham", title: "Đăng ký khám", views: "3,890", unique: "2,900", time: "4m 10s" },
  { path: "/gioi-thieu/lich-su", title: "Lịch sử hình thành", views: "1,200", unique: "980", time: "1m 45s" },
];

const SimpleBarChart = () => (
  <div className="h-64 flex items-end justify-between gap-2 mt-4 px-2">
    {[45, 67, 52, 78, 89, 72, 65, 84, 95, 76, 68, 82].map((h, i) => (
      <div key={i} className="w-full relative group">
        <div 
           className="w-full bg-blue-500/20 hover:bg-blue-500 rounded-t transition-all duration-300 relative"
           style={{ height: `${h}%` }}
        >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                {h * 12} lượt
            </div>
        </div>
        <div className="text-xs text-slate-400 text-center mt-2">{i + 8}h</div>
      </div>
    ))}
  </div>
);

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState("today");

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Thống Kê Truy Cập</h1>
           <p className="text-slate-500">Giám sát hoạt động thời gian thực</p>
        </div>
        
        <div className="flex items-center gap-2 bg-white p-1 rounded-lg border shadow-sm">
           {['today', 'week', 'month'].map(range => (
               <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-md transition-colors capitalize",
                      timeRange === range ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:bg-slate-50"
                  )}
               >
                  {range === 'today' ? "Hôm nay" : range === 'week' ? "Tuần này" : "Tháng này"}
               </button>
           ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {MOCK_STATS.map((stat, idx) => (
             <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-start justify-between">
                     <div className={cn("p-2 rounded-lg", stat.color)}>
                         <stat.icon className="w-5 h-5" />
                     </div>
                     <div className={cn(
                         "flex items-center text-xs font-semibold px-2 py-1 rounded-full",
                         stat.trend === 'up' ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                     )}>
                         {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                         {stat.change}
                     </div>
                 </div>
                 <div className="mt-4">
                     <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                     <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
                 </div>
             </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-500" />
                      Lưu lượng truy cập (24h)
                  </h3>
              </div>
              <SimpleBarChart />
          </div>

          {/* Device/Location Stats (Simplified) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
              <div>
                  <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                      <Globe className="w-5 h-5 text-indigo-500" />
                      Nguồn truy cập
                  </h3>
                  <div className="space-y-4">
                      {[
                          { label: "Tìm kiếm Google", val: 65, color: "bg-blue-500" },
                          { label: "Mạng xã hội (FB, Zalo)", val: 25, color: "bg-indigo-500" },
                          { label: "Trực tiếp (Direct)", val: 10, color: "bg-slate-300" }
                      ].map((item, i) => (
                          <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                  <span className="text-slate-600">{item.label}</span>
                                  <span className="font-bold text-slate-800">{item.val}%</span>
                              </div>
                              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.val}%` }} />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

               <div className="pt-6 border-t">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-orange-500" />
                      Thiết bị
                  </h3>
                  <div className="flex items-center gap-4">
                      <div className="flex-1 text-center p-3 bg-slate-50 rounded-lg">
                          <div className="text-2xl font-bold text-slate-800">62%</div>
                          <div className="text-xs text-slate-500">Mobile</div>
                      </div>
                      <div className="flex-1 text-center p-3 bg-slate-50 rounded-lg">
                          <div className="text-2xl font-bold text-slate-800">38%</div>
                          <div className="text-xs text-slate-500">Desktop</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Top Pages Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-800">Trang được xem nhiều nhất</h3>
          </div>
          <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-500 font-medium">
                      <tr>
                          <th className="px-6 py-3">Trang</th>
                          <th className="px-6 py-3">Tiêu đề</th>
                          <th className="px-6 py-3 text-right">Lượt xem</th>
                          <th className="px-6 py-3 text-right">Unique</th>
                          <th className="px-6 py-3 text-right">Thời gian</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                      {MOCK_VISITS.map((page, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 text-blue-600 font-mono">{page.path}</td>
                              <td className="px-6 py-4 font-medium text-slate-700">{page.title}</td>
                              <td className="px-6 py-4 text-right">{page.views}</td>
                              <td className="px-6 py-4 text-right text-slate-500">{page.unique}</td>
                              <td className="px-6 py-4 text-right text-slate-500">{page.time}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
}
