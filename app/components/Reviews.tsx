const REVIEWS = [
  {
    name: "김○영",
    age: "40대 여성",
    dept: "내과",
    text: "만성 소화불량으로 여러 병원을 다녔는데, 김정호 원장님께서 꼼꼼하게 검사해주시고 원인을 찾아주셨어요. 치료 후 정말 좋아졌습니다.",
    rating: 5,
  },
  {
    name: "박○준",
    age: "50대 남성",
    dept: "외과",
    text: "복강경 탈장 수술을 받았는데 수술 후 회복이 정말 빨랐어요. 이수진 선생님이 수술 전후로 자세히 설명해주셔서 안심이 됐습니다.",
    rating: 5,
  },
  {
    name: "최○은",
    age: "30대 여성",
    dept: "소아청소년과",
    text: "아이가 병원을 무서워했는데 박민수 선생님이 정말 친절하게 대해주셔서 이제는 오히려 병원 가자고 해요. 감사합니다.",
    rating: 5,
  },
  {
    name: "이○현",
    age: "60대 남성",
    dept: "건강검진센터",
    text: "종합검진 받았는데 동선이 깔끔하고 대기 시간도 짧았어요. 결과 설명도 이해하기 쉽게 해주셔서 좋았습니다.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            환자 후기
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            한아름 병원을 찾아주신 환자분들의 소중한 후기입니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 bg-warm rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-4 h-4 ${idx < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.age}</p>
                </div>
                <span className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                  {review.dept}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
