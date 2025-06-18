export default function Footer() {
  return (
    <footer className="bg-quack-black text-quack-white py-12">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">꽥</div>
            <div className="space-y-2 text-sm text-quack-white/80">
              <p>사업자 등록번호: 721-04-03645</p>
              <p>통신판매업 신고번호: 2025-와부조안-0126</p>
              <p>
                주소: 경기도 남양주시 와부읍 수레로116번길 16, 402호
                -J186호(아이비타워-2)
              </p>
              <p>
                문의사항: quackkorea@gmail.com 대표: 김걸휘 | 대표전화 :
                010-4121-9833
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-quack-white/80">
              <p>개인정보처리방침 | 꽥 서비스 이용약관</p>
              <p className="mt-4">Copyright © quack. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
