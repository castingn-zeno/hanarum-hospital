import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80"
                alt="의료진 상담 장면"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl font-bold">20</p>
              <p className="text-sm opacity-80">년의 신뢰</p>
            </div>
          </div>

          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              환자 중심의 따뜻한 진료,
              <br />
              한아름 병원입니다
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              2005년 개원 이래, 한아름 병원은 &quot;환자가 편안한
              병원&quot;이라는 철학 아래 지역사회 건강 증진에 앞장서 왔습니다.
              내과, 외과, 소아청소년과, 건강검진센터를 갖추고 있으며, 각 분야
              전문의가 체계적인 진료를 제공합니다.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              최신 MRI, CT, 초음파 장비를 보유하고 있어 정밀 검사부터 수술까지
              원스톱으로 진행 가능합니다. 24시간 응급실 운영으로 언제든 환자분을
              맞이할 준비가 되어 있습니다.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏥", title: "최신 시설", desc: "2024년 리모델링 완료" },
                { icon: "👨‍⚕️", title: "전문 의료진", desc: "각 분야 15년+ 경력" },
                { icon: "🔬", title: "정밀 장비", desc: "MRI·CT·초음파 완비" },
                { icon: "🕐", title: "24시간 운영", desc: "응급실 연중무휴" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-warm rounded-xl">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-semibold text-gray-900 mt-2 text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
