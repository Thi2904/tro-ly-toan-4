import type { Metadata, Viewport } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["vietnamese", "latin"], variable: "--font-baloo", display: "swap" });
const bvp = Be_Vietnam_Pro({ subsets: ["vietnamese", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-bvp", display: "swap" });

export const metadata: Metadata = {
  title: "Siêu Sao Toán 4 – Luyện Toán lớp 4 theo sách giáo khoa",
  description: "Siêu Sao Toán 4: luyện tập 73 bài Toán lớp 4 theo sách giáo khoa, có lời khen bằng tiếng Việt, bảng xếp hạng và trang quản lý cho giáo viên.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${baloo.variable} ${bvp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
