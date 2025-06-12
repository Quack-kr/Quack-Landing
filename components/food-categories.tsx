"use client"

import { motion } from "framer-motion"

const foodCategories = [
  { name: "치킨", emoji: "🍗", description: "치킨" },
  { name: "피자 어제 먹음", emoji: "🍕", description: "피자 어제 먹음" },
  { name: "햄버거", emoji: "🍔", description: "햄버거" },
  { name: "중식", emoji: "🥢", description: "중식" },
  { name: "미식", emoji: "🍜", description: "미식" },
  { name: "일식", emoji: "🍱", description: "일식" },
  { name: "분식", emoji: "🥟", description: "분식" },
  { name: "양식", emoji: "🍝", description: "양식" },
  { name: "샐러드", emoji: "🥗", description: "샐러드" },
]

export default function FoodCategories() {
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
            먹고싶은건
            <br />
            몰라도
            <br />
            싫은건 알잖아?
          </h2>
          <p className="text-lg text-quack-black/80">
            안 먹기는 거 어제 먹었지 좀 있다 먹을지
            <br />다 빼면서 지금 먹을걸 찾아볼까요?
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12">
          {foodCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-quack-box-bg rounded-full flex items-center justify-center shadow-lg mb-3 hover:bg-quack-illustration transition-colors">
                <span className="text-2xl md:text-3xl">{category.emoji}</span>
              </div>
              <span className="text-sm font-medium text-quack-black text-center">{category.description}</span>
            </motion.div>
          ))}
        </div>

        {/* 피자 일러스트 */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-32 h-32 bg-quack-box-bg rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl">🍕</span>
            </motion.div>
            <div className="absolute -top-8 -right-8 text-4xl font-bold text-quack-illustration transform rotate-12">
              뭐!!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
