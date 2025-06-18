"use client";

import { motion } from "framer-motion";
import ScrambledText from "./ui/scramble-text";
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
      <div className="container relative px-0 pt-10 pb-5 md:pt-[160px] md:pb-20">
        <div className="grid grid-cols-1 mb-3 px-5 md:mb-[60px] md:px-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mb-16"
          >
            <h2 className="text-headline-mobile md:text-headline-medium mb-1 md:mb-2 text-quack-black">
              빼고 찾은 식당
              <br />
              갈까? 말까?
              <br />
              고민될 땐
            </h2>
            <ScrambledText
              radius={100}
              duration={3}
              speed={0.1}
              scrambleChars={".:"}
              className="text-body-small-modile md:text-body-large text-quack-black"
            >
              최근 3개월 사람들이 방문하는 이유와
              <br />
              가기 망설이는 이유까지 알고 가보자고!
            </ScrambledText>
          </motion.div>

          {/* 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden md:flex"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/hmm-illust.png"
                alt="hmm-illust"
                width={400}
                height={328}
              />
            </motion.div>
          </motion.div>

          {/* 모바일 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-end w-full md:hidden"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-10 md:gap-[130px]">
            <div>
              <h3 className="text-label-large-mobile text-quack-white mb-3 md:text-body-x-large md:mb-4">
                갈까?
              </h3>
              <div className="space-y-2 md:space-y-4">
                {surveyData
                  .filter((item) => item.type === "갈까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-box-bg text-quack-white pl-2 pr-4 h-10 rounded-[8px] flex justify-between items-center md:h-20 md:pl-4 md:pr-[25.5px]"
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <Image
                          src={item.src}
                          alt=""
                          width={isMobile ? 24 : 48}
                          height={isMobile ? 24 : 48}
                        />
                        <span className="text-label-small-mobile md:text-label-medium">
                          {item.question}
                        </span>
                      </div>
                      <span className="text-label-small-mobile md:text-label-medium">
                        {item.count}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-label-large-mobile text-quack-white mb-3 md:text-body-x-large md:mb-4">
                말까?
              </h3>
              <div className="space-y-2 md:space-y-4">
                {surveyData
                  .filter((item) => item.type === "말까?")
                  .map((item, index) => (
                    <motion.div
                      key={item.question}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-quack-box-bg text-quack-white pl-2 pr-4 h-10 rounded-[8px] flex justify-between items-center md:h-20 md:pl-4 md:pr-[25.5px]"
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <Image
                          src={item.src}
                          alt=""
                          width={isMobile ? 24 : 48}
                          height={isMobile ? 24 : 48}
                        />
                        <span className="text-label-small-mobile md:text-label-medium">
                          {item.question}
                        </span>
                      </div>
                      <span className="text-label-small-mobile md:text-label-medium">
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
