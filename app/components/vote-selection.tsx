"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const surveyData = [
  {
    question: "웨이팅 인정 맛집이에요",
    count: 864,
    type: "갈까?",
    src: "/ic_clock.svg",
  },
  {
    question: "재방문 확정이에요",
    count: 168,
    type: "갈까?",
    src: "/ic_door.svg",
  },
  {
    question: "화장실이 깨끗해요",
    count: 113,
    type: "갈까?",
    src: "/ic_people.svg",
  },
  {
    question: "가성비가 좋지 않아요",
    count: 82,
    type: "말까?",
    src: "/ic_money.svg",
  },
  {
    question: "서비스가 마음에요",
    count: 24,
    type: "말까?",
    src: "/ic_hand.svg",
  },
  {
    question: "주차가 불편해요",
    count: 15,
    type: "말까?",
    src: "/ic_parking.svg",
  },
];

export default function VoteSelection() {
  const isMobile = useIsMobile();

  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 xl:pt-[160px] xl:pb-20 xl:max-w-full">
        <div className="grid grid-cols-1 mb-3 px-5 xl:mb-[60px] xl:grid-cols-2 xl:gap-12 xl:w-[75%] xl:mx-auto xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:mb-16"
          >
            <h2 className="text-headline-mobile xl:text-headline-medium mb-1 xl:mb-2 text-quack-black">
              빼고 찾은 식당
              <br />
              갈까? 말까?
              <br />
              고민될 땐
            </h2>
            <p className="font-pretendard text-body-small-modile xl:text-body-large text-quack-black">
              최근 3개월 사람들이 방문하는 이유와
              <br />
              가기 망설이는 이유까지 알고 가보자고!
            </p>
          </motion.div>

          {/* 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden xl:flex xl:justify-self-end"
          >
            <div>
              <Image
                src="/hmm-illust.png"
                alt="hmm-illust"
                width={400}
                height={328}
              />
            </div>
          </motion.div>

          {/* 모바일 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-end w-full xl:hidden"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/hmm-illust-mobile.png"
                alt="hmm-illust-mobile"
                width={150}
                height={123}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* 설문조사 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 xl:gap-[130px] xl:w-[75%] xl:mx-auto xl:px-0 xl:max-w-full">
            <div>
              <h3 className="text-label-large-mobile text-quack-white mb-3 xl:text-body-x-large xl:mb-4">
                갈까?
              </h3>
              <div className="space-y-2 xl:space-y-4">
                {surveyData
                  .filter((item) => item.type === "갈까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-box-bg text-quack-white pl-2 pr-4 h-10 rounded-[8px] flex justify-between items-center xl:h-20 xl:pl-4 xl:pr-[25.5px]"
                    >
                      <div className="flex items-center gap-1 xl:gap-2">
                        <Image
                          src={item.src}
                          alt=""
                          width={isMobile ? 24 : 48}
                          height={isMobile ? 24 : 48}
                        />
                        <span className="text-label-small-mobile xl:text-label-medium">
                          {item.question}
                        </span>
                      </div>
                      <span className="font-pretendard text-label-small-mobile xl:text-label-medium">
                        {item.count}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-label-large-mobile text-quack-white mb-3 xl:text-body-x-large xl:mb-4">
                말까?
              </h3>
              <div className="space-y-2 xl:space-y-4">
                {surveyData
                  .filter((item) => item.type === "말까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-box-bg text-quack-white pl-2 pr-4 h-10 rounded-[8px] flex justify-between items-center xl:h-20 xl:pl-4 xl:pr-[25.5px]"
                    >
                      <div className="flex items-center gap-1 xl:gap-2">
                        <Image
                          src={item.src}
                          alt=""
                          width={isMobile ? 24 : 48}
                          height={isMobile ? 24 : 48}
                        />
                        <span className="text-label-small-mobile xl:text-label-medium">
                          {item.question}
                        </span>
                      </div>
                      <span className="text-label-small-mobile xl:text-label-medium">
                        {item.count}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
