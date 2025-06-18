"use client";

import { motion } from "framer-motion";
import ScrambledText from "./ui/scramble-text";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const generateFoodCategories = (isMobile: boolean = false) => {
  const categories = [
    "chicken",
    "pizza",
    "hamburger",
    "chinese",
    "asian",
    "sushi",
    "gukbap",
    "tteokbokki",
    "pig-foot",
    "meat",
    "rice",
    "pasta",
    "salad",
    "beer",
    "fish",
  ];

  const foodCategoryMap = new Map();

  categories.forEach((category) => {
    const imageSrc = isMobile
      ? `/food-category-mobile-${category}.png`
      : `/food-category-${category}.png`;

    foodCategoryMap.set(category, {
      id: category,
      name: category,
      src: imageSrc,
    });
  });

  return foodCategoryMap;
};

export default function FoodCategories() {
  const isMobile = useIsMobile();

  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 md:pt-[160px] md:pb-20 md:max-w-full">
        <div className="grid grid-cols-1 mb-6 px-5 md:mb-[146px] md:px-10 md:grid-cols-2 md:gap-12 md:max-w-[1440px] md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mb-16"
          >
            <h2 className="text-headline-mobile md:text-headline-medium mb-1 md:mb-2 text-quack-black">
              먹고싶은건
              <br />
              몰라도
              <br />
              싫은건 알잖아?
            </h2>
            <ScrambledText
              radius={100}
              duration={3}
              speed={0.1}
              scrambleChars={".:"}
              className="text-body-small-modile md:text-body-large text-quack-black"
            >
              안 땡기는거 어제 먹은거 좀 있다 먹을거
              <br />
              다! 빼면서 지금 먹을걸 찾아볼까요?
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
                src="/pizza-illust.svg"
                alt="pizza-illust"
                width={537}
                height={330}
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
                src="/pizza-illust-mobile.png"
                alt="pizza-illust-mobile"
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
              className={`flex items-center ${isMobile ? "gap-2" : "gap-6"}`}
              animate={{
                x: [
                  0,
                  -(isMobile ? 56 + 8 : 150 + 24) *
                    Array.from(generateFoodCategories(isMobile).values())
                      .length,
                ],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "linear",
                },
              }}
              style={{ width: "max-content" }}
            >
              {[...Array(3)].map((_, duplicateIndex) =>
                Array.from(generateFoodCategories(isMobile).values()).map(
                  (item) => (
                    <Image
                      key={`${duplicateIndex}-${item.id}`}
                      src={item.src}
                      alt={item.name}
                      width={isMobile ? 56 : 150}
                      height={isMobile ? 75 : 192}
                      className={`relative flex-shrink-0 ${
                        item.name.includes("pizza")
                          ? isMobile
                            ? "top-[-20px]"
                            : "top-[-72px]"
                          : ""
                      }`}
                    />
                  )
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
