"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SubscriptionSection() {
  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 md:pt-[80px] md:pb-[160px]">
        <div className="flex flex-col items-center px-5 md:px-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-[16px] md:mb-6"
          >
            <h2 className="text-headline-small-mobile md:text-headline-small text-center text-quack-black">
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
              className="bg-quack-black text-quack-white rounded-3xl p-8 mb-4 md:mb-9"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  잘나가는 메뉴를 구독으로 광고!
                </h3>
                <p className="text-sm text-quack-white/80">
                  홈 화면에 위치해 노출이 높은 광고입니다.
                </p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-1">
                  첫 한달 무료 <span className="text-lg">/월</span>
                </div>
                <div className="text-lg">80,000원/월</div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  구독기간 내 무제한 광고 집행
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  지역별 광고로 상위노출 가능성 UP
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  가게 갯수에 상관없이 구독 하나로 광고 OK
                </div>
              </div>

              <p className="text-xs text-quack-white/60 text-center my-4">
                해당 플랜은 베너광고,스플레쉬 광고를 제외한
                <br />
                메뉴광고만 가능한 구독형 광고입니다.
              </p>

              <Button className="w-full bg-quack-yellow text-quack-black hover:bg-quack-icon-bg font-bold h-12 md:h-[72px] rounded-[23.33px] md:rounded-[40px] md:text-label-medium">
                구독하기
              </Button>
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
                <h4 className="font-bold mb-3">이런 사장님께 딱이에요!</h4>
                <ul className="text-sm space-y-1">
                  <li>1. 배달을 안하시는 오프라인 중심 사장님</li>
                  <li>2. 지나친 광고 수수료가 부담되시는 사장님</li>
                  <li>
                    3. 여러가게 운영하시면서 개별 광고를 지출하시는 사장님
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-quack-black text-quack-white rounded-2xl p-6"
              >
                <h4 className="font-bold mb-3">부담되는 모든 것을 다 빼고!</h4>
                <ul className="text-sm space-y-1">
                  <li>1. 플렛폼 중개 수수료</li>
                  <li>2. 광고료 대비 차등 노출</li>
                  <li>3. 그 외에 설마했던 모든 추가 수수료</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
