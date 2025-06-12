"use client"

import { motion } from "framer-motion"

const features = [
  { icon: "⏰", title: "음식 늦게 나오는 곳", subtitle: "늦게 나오는 곳" },
  { icon: "👥", title: "화장실 더러운 곳", subtitle: "화장실 더러운 곳" },
  { icon: "📝", title: "가성비 안좋은 곳", subtitle: "가성비 안좋은 곳" },
  { icon: "📈", title: "시끄러운 곳", subtitle: "시끄러운 곳" },
  { icon: "💡", title: "분위기 안좋은 곳", subtitle: "분위기 안좋은 곳" },
  { icon: "📊", title: "불친절한 곳", subtitle: "불친절한 곳" },
  { icon: "📋", title: "매뉴구성 안좋은 곳", subtitle: "매뉴구성 안좋은 곳" },
  { icon: "🔥", title: "최악 불편한 곳", subtitle: "최악 불편한 곳" },
  { icon: "🍽️", title: "고기 안구워주는 곳", subtitle: "고기 안구워주는 곳" },
]

const surveyData = [
  { question: "웨이팅 인정 맛집이에요", count: 864, type: "갈까?" },
  { question: "재방문 확정이에요", count: 168, type: "갈까?" },
  { question: "화장실이 깨끗해요", count: 113, type: "갈까?" },
  { question: "가성비가 좋지 않아요", count: 82, type: "말까?" },
  { question: "서비스가 마음에요", count: 24, type: "말까?" },
  { question: "주차가 불편해요", count: 15, type: "말까?" },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-quack-yellow">
      <div className="container mx-auto px-6">
        {/* 첫 번째 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-quack-black mb-6">
                그리고 난...
                <br />
                싫어하는 것도
                <br />다 빼버려!
              </h2>
              <p className="text-lg text-quack-black/80">
                이러면 뭐가 남을지 모르겠지만
                <br />더 제외이 있으시겠죠?
              </p>
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="text-6xl text-quack-illustration transform rotate-12"
              >
                뭐!!
              </motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 right-10 text-4xl"
              >
                🍽️
              </motion.div>
            </div>
          </div>

          {/* 기능 아이콘들 */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-quack-box-bg rounded-full flex items-center justify-center shadow-lg mb-3 hover:bg-quack-illustration transition-colors">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <span className="text-xs font-medium text-quack-black text-center leading-tight">
                  {feature.subtitle}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 두 번째 섹션 - 설문조사 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-quack-black mb-6">
                빼고 찾은 식당
                <br />
                갈까? 말까?
                <br />
                고민될 때
              </h2>
              <p className="text-lg text-quack-black/80">
                최근 3개월 사람들이 방문하는 이유와
                <br />
                가기 싫어하는 이유까지 알고 가보자고!
              </p>
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="text-6xl text-quack-illustration"
              >
                📊
              </motion.div>
            </div>
          </div>

          {/* 설문조사 결과 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-quack-black mb-6">갈까?</h3>
              <div className="space-y-4">
                {surveyData
                  .filter((item) => item.type === "갈까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-box-bg text-quack-white p-4 rounded-2xl flex justify-between items-center"
                    >
                      <span className="text-sm font-medium">{item.question}</span>
                      <span className="text-lg font-bold">{item.count}</span>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-quack-black mb-6">말까?</h3>
              <div className="space-y-4">
                {surveyData
                  .filter((item) => item.type === "말까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-illustration text-quack-white p-4 rounded-2xl flex justify-between items-center"
                    >
                      <span className="text-sm font-medium">{item.question}</span>
                      <span className="text-lg font-bold">{item.count}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
