"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ScrambledText from "./ui/scramble-text";
import { useIsMobile } from "@/hooks/use-mobile";

const generateCharacteristicCategories = (isMobile: boolean = false) => {
  const categories = [
    "food",
    "restroom",
    "price",
    "loud",
    "mood",
    "kind",
    "menu",
    "chair",
    "meat",
    "parking",
  ];

  const foodCategoryMap = new Map();

  categories.forEach((category) => {
    const imageSrc = isMobile
      ? `/characteristic-mobile-${category}.png`
      : `/characteristic-${category}.png`;

    foodCategoryMap.set(category, {
      id: category,
      name: category,
      src: imageSrc,
    });
  });

  return foodCategoryMap;
};

export default function CharacteristicSelection() {
  const isMobile = useIsMobile();

  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 xl:pt-[160px] xl:pb-20 xl:max-w-full">
        <div className="grid grid-cols-1 mb-4 px-5 xl:mb-[72px] xl:grid-cols-2 xl:gap-12 xl:w-[75%] xl:mx-auto xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="xl:mb-16"
          >
            <h2 className="text-headline-mobile xl:text-headline-medium mb-1 xl:mb-2 text-quack-black">
              그리고 난...
              <br />
              싫어하는 것도
              <br />다 빼버려!
            </h2>
            <ScrambledText
              radius={100}
              duration={3}
              speed={0.1}
              scrambleChars={".:"}
              className="font-pretendard text-body-small-modile xl:text-body-large text-quack-black"
            >
              이러면 뭐가 남을진 모르겠지만
              <br />다 계획이 있으시겠죠?
            </ScrambledText>
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
                src="/subtract-illust.png"
                alt="subtract-illust"
                width={394}
                height={478}
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
                src="/subtract-illust-mobile.png"
                alt="subtract-illust-mobile"
                width={174}
                height={107}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* 하단 일러스트 영역 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full">
            <motion.div
              className={`flex items-start ${isMobile ? "gap-2" : "gap-6"}`}
              animate={{
                x: [
                  0,
                  -(isMobile ? 56 + 8 : 150 + 24) *
                    Array.from(
                      generateCharacteristicCategories(isMobile).values()
                    ).length,
                ],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...Array(3)].map((_, duplicateIndex) =>
                Array.from(
                  generateCharacteristicCategories(isMobile).values()
                ).map((item) => (
                  <Image
                    key={`${duplicateIndex}-${item.id}`}
                    src={item.src}
                    alt={item.name}
                    width={isMobile ? 56 : 150}
                    height={isMobile ? 88 : 230}
                    className="flex-shrink-0"
                  />
                ))
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
