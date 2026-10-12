import type { Metadata, Viewport } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["vietnamese", "latin"], weight: ["600", "700", "800"], variable: "--font-baloo", display: "swap" });
const bvp = Be_Vietnam_Pro({ subsets: ["vietnamese", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-bvp", display: "swap" });

export const metadata: Metadata = {
  title: "Vở Toán 4 – Trợ lý học tập",
  description: "Luyện tập Toán lớp 4 theo 73 bài trong sách giáo khoa, có lời khen, âm thanh và bảng xếp hạng.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${baloo.variable} ${bvp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
