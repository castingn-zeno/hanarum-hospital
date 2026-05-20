import Image from "next/image";

const FACILITIES = [
  {
    title: "MRI 센터",
    desc: "3.0T 고해상도 MRI로 정밀 진단",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
  },
  {
    title: "수술실",
    desc: "클린룸 등급의 무균 수술 환경",
    image:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
  },
  {
    title: "입원실",
    desc: "1~4인실, 호텔급 편의시설 완비",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  },
  {
    title: "재활치료실",
    desc: "최신 재활 장비와 전문 물리치료사",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    title: "건강검진센터",
    desc: "원스톱 검진 동선, 당일 결과 안내",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
  },
  {
    title: "소아 놀이공간",
    desc: "아이들이 편안하게 대기할 수 있는 공간",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Facilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            시설 안내
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            환자의 편안함과 안전을 최우선으로 설계한 공간
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FACILITIES.map((fac) => (
            <div
              key={fac.title}
              className="group relative h-64 rounded-2xl overflow-hidden"
            >
              <Image
                src={fac.image}
                alt={fac.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white font-bold text-lg">{fac.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
