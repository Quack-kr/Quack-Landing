export default function Footer() {
  return (
    <footer className="bg-quack-black text-quack-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">꽥</div>
            <div className="space-y-2 text-sm text-quack-white/80">
              <p>사업자등록번호 : 777-88-01234</p>
              <p>통신판매업 신고번호 : 2025-서울강남-0126</p>
              <p>주소 : 서울 강남구 테헤란로 123길 45, 6층(역삼동)</p>
              <p>대표자 : contact@quack.co.kr 대표 : 김꽥꽥 | 전화번호 : 070-8877-4455</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-quack-white/80">
              <p>개인정보처리방침 | 이용약관</p>
              <p className="mt-4">Copyright © quack. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
