"use client";

import { motion } from "framer-motion";

export default function LetsSubscribe() {
  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 xl:pt-20 xl:pb-20">
        <div className="flex flex-col items-center px-5 xl:px-10 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 xl:mb-10"
          >
            <h2 className="text-headline-small-mobile xl:text-headline-medium text-center mb-1 xl:mb-3 text-quack-black">
              우리 가게 홍보도
              <br />
              꽥에서 시작
            </h2>
            <p className="font-pretendard text-body-small-modile text-center xl:text-body-large text-quack-black">
              미친맛을 자랑하는 가게 메뉴를 알리고
              <br />
              상위노출을 노려보세요!
            </p>
          </motion.div>

          {/* 입점 신청하기 버튼 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex items-center justify-center"
          >
            <a
              href="https://biz.quack.io.kr/"
              className="bg-quack-black rounded-[40px] w-[160px] h-[48px] flex items-center justify-center xl:w-[200px] xl:h-[72px] hover:bg-quack-black"
            >
              <span className="text-quack-white text-label-medium-mobile xl:text-label-medium">
                입점 신청하기
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
