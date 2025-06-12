"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SubscriptionSection() {
  return (
    <section className="py-20 bg-quack-yellow">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-quack-black mb-8">
            추가 비용없이
            <br />
            구독으로 광고하자!
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          {/* 메인 구독 카드 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-quack-black text-quack-white rounded-3xl p-8 mb-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">맛나는 먹을걸 구독으로 광고</h3>
              <p className="text-sm text-quack-white/80">한 달에 먹을걸 소비 좋은 광고하자</p>
            </div>

            <div className="text-center mb-6">
              <div className="text-3xl font-bold mb-1">
                첫 한달 무료 <span className="text-lg">/월</span>
              </div>
              <div className="text-lg">80,000원/월</div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                구독기간 내 무제한 광고 등록
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                상세 광고로 상품을 기능 UP
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-400 mr-2">✓</span>
                가게 주소에 검색어 가능 광고 OK
              </div>
            </div>

            <Button className="w-full bg-quack-yellow text-quack-black hover:bg-quack-icon-bg font-bold py-3 rounded-full">
              구독하기
            </Button>

            <p className="text-xs text-quack-white/60 text-center mt-4">
              매월 결제는 매월 구독하신 날짜에 자동 결제
              <br />
              해지요청 가능한 구독을 관리하세요.
            </p>
          </motion.div>

          {/* 추가 정보 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-quack-black text-quack-white rounded-2xl p-6"
            >
              <h4 className="font-bold mb-3">이런 사업님께 맞아요!</h4>
              <ul className="text-sm space-y-1">
                <li>1. 매출 향상이는 소상공인 음식 사업자</li>
                <li>2. 직접 광고 수수료 부담하는 사업자</li>
                <li>3. 어려서 홍보하시려면 매출 광고 개선하는 사업자</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-quack-black text-quack-white rounded-2xl p-6"
            >
              <h4 className="font-bold mb-3">부담되는 모든 것을 대체!</h4>
              <ul className="text-sm space-y-1">
                <li>1. 광고 홍보수수료</li>
                <li>2. 광고비는 매출 노출</li>
                <li>3. 그 외에 광고비는 모든 수수료</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
