"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import ScrambledText from "./ui/scramble-text";
import { useIsMobile } from "@/hooks/use-mobile";

const generateReviewCategories = (isMobile: boolean = false) => {
  const categories = ["crazy", "good", "normal", "notgood", "bad"];

  const foodCategoryMap = new Map();

  categories.forEach((category) => {
    const imageSrc = isMobile
      ? `/review-mobile-${category}.png`
      : `/review-${category}.png`;

    foodCategoryMap.set(category, {
      id: category,
      name: category,
      src: imageSrc,
    });
  });

  return foodCategoryMap;
};

const reviewData = [
  {
    review: "옛날우동 미친맛",
    src: "/ic_review_crazy.svg",
  },
  {
    review: "돈까스 맛있어요",
    src: "/ic_review_good.svg",
  },
  {
    review: "부산어묵 평범해요",
    src: "/ic_review_normal.svg",
  },
  {
    review: "떡볶이 아쉬워요",
    src: "/ic_review_notgood.svg",
  },
  {
    review: "시금치 핵노맛",
    src: "/ic_review_bad.svg",
  },
];

export default function ReviewSelection() {
  const isMobile = useIsMobile();

  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 md:pt-[160px]">
        <div className="grid grid-cols-1 mb-6 px-5 md:mb-[96px] md:px-10 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:mb-16"
          >
            <h2 className="text-headline-mobile md:text-headline-medium mb-1 md:mb-2 text-quack-black">
              그래서 거기
              <br />
              뭐가 맛있는데?
            </h2>
            <ScrambledText
              radius={100}
              duration={3}
              speed={0.1}
              scrambleChars={".:"}
              className="text-body-small-modile md:text-body-large text-quack-black"
            >
              웨이팅까지 하고 들어간 맛집
              <br />
              메뉴가 너무 많아서 고민된다면
              <br />
              미친맛 메뉴만 시키자!
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
                src="/what-illust.png"
                alt="what-illust"
                width={512}
                height={368}
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
                src="/what-illust-mobile.png"
                alt="what-illust-mobile"
                width={160}
                height={112}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* 맛 리뷰 영역 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-5 w-full px-5 md:flex md:items-center md:justify-center md:gap-[30px]">
            {Array.from(generateReviewCategories(isMobile).values()).map(
              (item) => (
                <div key={item.id} className="justify-self-center ">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={isMobile ? 48 : 144}
                    height={isMobile ? 63 : 189}
                  />
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* 맛 리뷰 라벨 영역 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full mt-6 overflow-hidden md:mt-8 md:flex md:items-center md:justify-center">
            <motion.div
              className={`flex items-center ${isMobile ? "gap-2" : "gap-5"}`}
              animate={
                isMobile
                  ? {
                      x: [
                        0,
                        -(isMobile ? 103 + 8 : 255 + 24) * reviewData.length,
                      ],
                    }
                  : {}
              }
              transition={
                isMobile
                  ? {
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 10,
                        ease: "linear",
                      },
                    }
                  : {}
              }
              style={{ width: "max-content" }}
            >
              {/* 원본 리뷰들 */}
              {reviewData.map((item, index) => (
                <div
                  key={`original-${index}`}
                  className="flex items-center justify-center h-6 bg-quack-box-bg rounded-[6px] px-1.5 gap-1 flex-shrink-0 md:h-[55px] md:px-3 md:gap-3"
                >
                  <Image
                    src={item.src}
                    alt=""
                    width={isMobile ? 20 : 45.82}
                    height={isMobile ? 20 : 45.82}
                  />
                  <span className="text-label-x-small-mobile text-quack-white whitespace-nowrap md:text-label-medium md:text-[22.91px] md:rounded-[13.75px]">
                    {item.review}
                  </span>
                </div>
              ))}
              {/* 복제 리뷰들 */}
              {isMobile &&
                reviewData.map((item, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex items-center justify-center h-6 bg-quack-box-bg rounded-[6px] px-1.5 gap-1 flex-shrink-0 md:h-[55px] md:px-3 md:gap-3"
                  >
                    <Image src={item.src} alt="" width={20} height={20} />
                    <span className="text-label-x-small-mobile text-quack-white whitespace-nowrap md:text-label-medium md:text-[22.91px] md:rounded-[13.75px]">
                      {item.review}
                    </span>
                  </div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
