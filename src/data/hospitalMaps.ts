import campusMap from "../assets/maps/campus-map.svg";
import floorB1 from "../assets/maps/floor-b1.svg";
import floor1F from "../assets/maps/floor-1f.svg";
import floor2F from "../assets/maps/floor-2f.svg";
import floor3F from "../assets/maps/floor-3f.svg";

export interface MapItem {
  id: string;
  title: string;
  level: "CAMPUS" | "B1" | "1F" | "2F" | "3F";
  imageSrc: string;
  description?: string;
}

export interface InfoItem {
  label: string;
  value: string;
  icon?: "phone" | "pin" | "clock" | "download";
}

export interface LegendItem {
  iconLabel: string;
  text: string;
  color?: string; // Hex color for dot
}

/**
 * GUIDE FOR REPLACING MAPS:
 * 1. Prepare your map images (PNG/JPG or SVG). Aspect ratio ~16:9 recommended for best view.
 * 2. Place them in `src/assets/maps/` folder.
 * 3. Update the imports above and `imageSrc` fields below.
 * 4. Ensure images are high resolution (at least 1920px width).
 */

export const hospitalMaps: MapItem[] = [
  {
    id: "campus",
    title: "Sơ đồ tổng thể",
    level: "CAMPUS",
    imageSrc: campusMap,
    description: "Toàn cảnh khuôn viên Trung tâm Y tế Khu vực Liên Chiểu"
  },
  {
    id: "b1",
    title: "Tầng B1",
    level: "B1",
    imageSrc: floorB1,
    description: "Nhà xe nhân viên, Kho vật tư, Hệ thống kỹ thuật"
  },
  {
    id: "1f",
    title: "Tầng 1",
    level: "1F",
    imageSrc: floor1F,
    description: "Khoa Cấp cứu, Khoa Khám bệnh, Quầy thuốc BHYT, Khu tiếp đón"
  },
  {
    id: "2f",
    title: "Tầng 2",
    level: "2F",
    imageSrc: floor2F,
    description: "Khu điều trị nội trú, Khoa Xét nghiệm, Chẩn đoán hình ảnh"
  },
  {
    id: "3f",
    title: "Tầng 3",
    level: "3F",
    imageSrc: floor3F,
    description: "Ban Giám đốc, Phòng Hành chính, Hội trường lớn"
  }
];

export const mapInfo: InfoItem[] = [
  { label: "Hotline", value: "0905453677", icon: "phone" },
  { label: "Địa chỉ", value: "525 Tôn Đức Thắng, Liên Chiểu, Đà Nẵng", icon: "pin" },
  { label: "Giờ làm việc", value: "T2-T6: 7:00-17:00 | T7: 7:00-11:00", icon: "clock" },
];

export const mapLegend: LegendItem[] = [
  { iconLabel: "1", text: "Khoa Khám bệnh", color: "#1E73BE" },
  { iconLabel: "2", text: "Khoa Cấp cứu", color: "#ef4444" },
  { iconLabel: "3", text: "Xét nghiệm", color: "#a855f7" },
  { iconLabel: "4", text: "Chẩn đoán hình ảnh", color: "#f59e0b" },
  { iconLabel: "5", text: "Nhà thuốc", color: "#10b981" },
  { iconLabel: "6", text: "Quầy hướng dẫn", color: "#64748b" },
];
