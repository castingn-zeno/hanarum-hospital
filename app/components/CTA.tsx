export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          건강이 걱정되시나요?
        </h2>
        <p className="text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
          전문 의료진이 정확한 진단과 맞춤 치료를 제공합니다.
          <br />
          지금 바로 상담 예약하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:02-1234-5678"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            02-1234-5678
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
          >
            오시는 길 보기
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">
          평일 09:00 - 18:00 | 토요일 09:00 - 13:00 | 일·공휴일 휴진
          <br />
          응급실 24시간 운영
        </p>
      </div>
    </section>
  );
}
