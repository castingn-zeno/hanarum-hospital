import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한아름 병원 | 가족의 건강을 한아름 가득",
  description:
    "한아름 병원은 내과, 외과, 소아청소년과, 건강검진센터를 갖춘 종합병원입니다. 최신 의료장비와 전문 의료진이 여러분의 건강을 책임집니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
