"use client"

import { motion } from "framer-motion"

const bowlTypes = [
  { name: "미친맛", emoji: "🍜", description: "미친맛" },
  { name: "맛있어요", emoji: "🍲", description: "맛있어요" },
  { name: "평범해요", emoji: "🥣", description: "평범해요" },
  { name: "아쉬워요", emoji: "🍽️", description: "아쉬워요" },
  { name: "노맛", emoji: "💥", description: "노맛" },
]

const features = ["죽남좋을 마태요", "토스 맛있어요", "부산어를 평범해요", "먹어이 아쉬워요", "서울시 먹노맛"]

export default function BowlSelection() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-quack-black mb-6">
            그래서 거기
            <br />
            뭐가 맛있는데?
          </h2>
          <p className="text-lg text-quack-black/80">
            먹어봤 거지고고 좋아요 맛있
            <br />다 빼면서 지금 먹을걸 찾아볼까요?
          </p>
        </motion.div>

        {/* 그릇 아이콘들 */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-5 gap-8">
            {bowlTypes.map((bowl, index) => (
              <motion.div
                key={bowl.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-quack-white rounded-full flex items-center justify-center shadow-lg mb-3 border-2 border-quack-box-bg">
                  <span className="text-2xl">{bowl.emoji}</span>
                </div>
                <span className="text-sm font-medium text-quack-black text-center">{bowl.description}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 기능 버튼들 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.button
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-quack-box-bg text-quack-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-quack-illustration transition-colors"
            >
              {feature}
            </motion.button>
          ))}
        </div>

        {/* 홍보 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-2 border-dashed border-quack-box-bg p-12 rounded-3xl"
        >
          <h3 className="text-2xl font-bold text-quack-black mb-4">
            우리 가게 홍보도
            <br />
            백에서 시작
          </h3>
          <p className="text-quack-black/80 mb-6">
            마진율을 위한는 가게 정보 등록과
            <br />
            실시간을 소비자들!
          </p>
          <button className="bg-quack-black text-quack-white px-8 py-3 rounded-full font-medium hover:bg-quack-illustration transition-colors">
            입점 신청하기
          </button>
        </motion.div>
      </div>
    </section>
  )
}
