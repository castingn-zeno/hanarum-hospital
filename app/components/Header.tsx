"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "병원 소개", href: "#about" },
  { label: "진료과목", href: "#departments" },
  { label: "의료진", href: "#doctors" },
  { label: "시설 안내", href: "#facilities" },
  { label: "오시는 길", href: "#location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-bold">H</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-primary-dark">
              한아름병원
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:02-1234-5678"
              className="text-sm font-semibold text-primary"
            >
              02-1234-5678
            </a>
            <a
              href="#contact"
              className="px-5 py-2 bg-primary text-white text-sm rounded-full hover:bg-primary-dark transition-colors"
            >
              예약하기
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-600 hover:text-primary border-b border-gray-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:02-1234-5678"
            className="block py-3 font-semibold text-primary"
          >
            02-1234-5678
          </a>
        </div>
      )}
    </header>
  );
}
