import Image from "next/image";

const DOCTORS = [
  {
    name: "김정호",
    role: "내과 전문의 · 원장",
    career: "서울대학교 의과대학 졸업\n서울대병원 내과 전임의\n대한내과학회 정회원",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    name: "이수진",
    role: "외과 전문의 · 부원장",
    career:
      "연세대학교 의과대학 졸업\n세브란스병원 외과 전임의\n복강경 수술 3,000례+",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "박민수",
    role: "소아청소년과 전문의",
    career:
      "고려대학교 의과대학 졸업\n서울아산병원 소아과 전임의\n대한소아과학회 정회원",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
  {
    name: "최유나",
    role: "영상의학과 전문의",
    career:
      "성균관대학교 의과대학 졸업\n삼성서울병원 영상의학 전임의\n건강검진센터장",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Medical Staff
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            전문 의료진 소개
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            풍부한 임상 경험의 전문의가 정성을 다해 진료합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.name}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-warm group-hover:ring-accent-light transition-all">
                <Image
                  src={doc.image}
                  alt={`${doc.name} ${doc.role}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">
                {doc.role}
              </p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed whitespace-pre-line">
                {doc.career}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
