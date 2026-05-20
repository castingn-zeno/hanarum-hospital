export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <span className="text-white font-bold">한아름병원</span>
            </div>
            <p className="text-sm leading-relaxed">
              가족의 건강을 한아름 가득.
              <br />
              20년간 지역 주민의 건강 파트너.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">진료과목</h4>
            <ul className="space-y-2 text-sm">
              <li>내과</li>
              <li>외과</li>
              <li>소아청소년과</li>
              <li>건강검진센터</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">진료안내</h4>
            <ul className="space-y-2 text-sm">
              <li>평일 09:00 - 18:00</li>
              <li>토요일 09:00 - 13:00</li>
              <li>일·공휴일 휴진</li>
              <li className="text-accent">응급실 24시간</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:02-1234-5678" className="hover:text-white">
                  대표 02-1234-5678
                </a>
              </li>
              <li>
                <a href="tel:02-1234-5679" className="hover:text-white">
                  응급 02-1234-5679
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hanarum-hospital.co.kr"
                  className="hover:text-white"
                >
                  info@hanarum-hospital.co.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; 2026 한아름병원. All rights reserved.
          </p>
          <p className="text-xs">
            사업자등록번호 123-45-67890 | 대표 김정호 | 의료기관번호 12345
          </p>
        </div>
      </div>
    </footer>
  );
}
