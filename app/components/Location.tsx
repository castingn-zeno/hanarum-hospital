export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Location
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            오시는 길
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">주소</p>
                  <p className="text-gray-500 text-sm mt-1">
                    서울특별시 강남구 테헤란로 123 한아름빌딩 1~5층
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">전화번호</p>
                  <p className="text-gray-500 text-sm mt-1">
                    대표 02-1234-5678 | 응급 02-1234-5679
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">진료 시간</p>
                  <div className="text-gray-500 text-sm mt-1 space-y-0.5">
                    <p>평일 09:00 - 18:00 (점심 13:00 - 14:00)</p>
                    <p>토요일 09:00 - 13:00</p>
                    <p>일요일·공휴일 휴진</p>
                    <p className="text-primary font-medium">
                      응급실 24시간 운영
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">교통편</p>
                  <div className="text-gray-500 text-sm mt-1 space-y-0.5">
                    <p>
                      <span className="inline-block px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded mr-1">
                        지하철
                      </span>
                      2호선 강남역 3번 출구 도보 5분
                    </p>
                    <p>
                      <span className="inline-block px-1.5 py-0.5 bg-blue-100 text-blue-700 text-xs rounded mr-1">
                        버스
                      </span>
                      강남역 정류장 140, 242, 350번
                    </p>
                    <p>
                      <span className="inline-block px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded mr-1">
                        주차
                      </span>
                      건물 지하 1~3층 (환자 무료 2시간)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a5e30a4e1%3A0x8a8e5a5c5b5b5b5b!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TrnoDroZwgMTIz!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="한아름 병원 위치"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
