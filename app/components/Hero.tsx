import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
        alt="한아름 병원 외관"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/50 to-transparent" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="text-accent-light text-sm sm:text-base font-medium tracking-widest uppercase mb-4">
              Since 2005
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              가족의 건강을
              <br />
              <span className="text-accent-light">한아름</span> 가득
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              20년간 지역 주민의 건강을 지켜온 한아름 병원.
              <br />
              최신 의료장비와 전문 의료진이 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#departments"
                className="px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors text-center"
              >
                진료과목 보기
              </a>
              <a
                href="tel:02-1234-5678"
                className="px-8 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors text-center"
              >
                전화 예약
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-200">
            {[
              { num: "20년+", label: "진료 경험" },
              { num: "15만+", label: "누적 진료" },
              { num: "12명", label: "전문 의료진" },
              { num: "24시간", label: "응급 진료" },
            ].map((stat) => (
              <div key={stat.label} className="py-4 sm:py-5 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">
                  {stat.num}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
