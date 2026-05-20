import Image from "next/image";

const DEPARTMENTS = [
  {
    name: "내과",
    desc: "고혈압, 당뇨, 소화기 질환 등 내과 전반의 전문 진료를 제공합니다. 만성 질환 관리 프로그램을 운영하고 있습니다.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    tags: ["고혈압", "당뇨", "소화기", "호흡기"],
  },
  {
    name: "외과",
    desc: "복강경 수술, 갑상선 수술 등 최소 침습 수술을 통해 빠른 회복을 돕습니다. 수술 후 집중 관리 시스템을 갖추고 있습니다.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9ce113ac100?w=600&q=80",
    tags: ["복강경", "갑상선", "탈장", "외상"],
  },
  {
    name: "소아청소년과",
    desc: "영유아 건강검진부터 청소년기 성장 클리닉까지, 아이들의 건강한 성장을 위한 맞춤 진료를 제공합니다.",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80",
    tags: ["영유아검진", "예방접종", "성장클리닉", "알레르기"],
  },
  {
    name: "건강검진센터",
    desc: "국가건강검진, 종합건강검진, 기업체 검진 등 체계적인 건강검진 프로그램을 운영합니다.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80",
    tags: ["국가검진", "종합검진", "기업검진", "암검진"],
  },
];

export default function Departments() {
  return (
    <section id="departments" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Departments
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            진료과목 안내
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            각 분야 전문의가 환자 맞춤형 진료를 제공합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                  {dept.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dept.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
