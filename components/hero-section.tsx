"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-quack-yellow relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 텍스트 영역 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-quack-black leading-tight">
              쉽어하는 걸<br />싫 빼고
              <br />
              시작하자.
            </h1>
            <p className="text-lg text-quack-black/80 leading-relaxed">
              배고픈 순간 먹고싶은 음식을 빠르게 찾아
              <br />
              근데 먹기 싫은건 빼고 골라 그래 사용하면
              <br />빠 좋잖아 같이 쓸이야?
            </p>
            <Button className="bg-quack-black text-quack-white hover:bg-quack-illustration rounded-full px-8 py-6 text-lg">
              Download on the App Store
            </Button>
          </motion.div>

          {/* 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* 메인 전구 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-0 right-20 w-32 h-40 bg-quack-icon-bg rounded-full flex items-center justify-center"
              >
                <div className="w-20 h-24 bg-quack-white rounded-full relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-quack-yellow rounded-full flex items-center justify-center">
                    🍔
                  </div>
                </div>
              </motion.div>

              {/* 플로팅 음식 아이콘들 */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 left-10 w-20 h-20 bg-quack-box-bg rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🍕</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-20 w-16 h-16 bg-quack-icon-bg rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">🍗</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-10 right-10 w-18 h-18 bg-quack-box-bg rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">🍜</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute top-32 right-5 w-14 h-14 bg-quack-icon-bg rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-lg">🥗</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 하단 스크롤 텍스트 */}
      <div className="absolute bottom-0 left-0 w-full bg-quack-illustration text-quack-white py-2 overflow-hidden">
        <motion.div
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="whitespace-nowrap text-sm"
        >
          고기는 배비하고 햄버거는 너무 인스턴트고 피자는 아제 먹었구 치킨도 지금 안먹기고 맘은 먹어야하는데 뭘
          먹어야하는 아 맞다! 저녁에 뭐 먹을까?
        </motion.div>
      </div>
    </section>
  )
}
