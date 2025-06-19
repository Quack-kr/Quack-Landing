"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrambledText from "./ui/scramble-text";
import ScrollVelocity from "./ui/scroll-velocity";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="h-[calc(100vh-116px)] sm:h-[calc(100vh-116px-40px)] xl:h-auto bg-quack-yellow relative z-10">
      <div className="container relative mx-auto px-5 xl:w-[75%] xl:mx-auto xl:px-0 xl:max-w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {/* 왼쪽 텍스트 영역 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-5 xl:pt-10"
          >
            <h1 className="text-headline-mobile xl:text-headline-large mb-1 md:mb-2 text-quack-black">
              싫어하는 걸<br />싹 빼고
              <br />
              시작하자.
            </h1>
            <ScrambledText
              radius={100}
              duration={3}
              speed={0.1}
              scrambleChars={".:"}
              className="text-body-small-modile xl:text-body-small text-quack-black leading-relaxed xl:mb-8"
            >
              배고픈 순간 먹고 싶은 음식은 떠오르지 않을 때
              <br />
              근데 먹기 싫은 건 딱! 알고 있을때 그때 사용하면
              <br />딱 좋을 거 같지 않아요?
            </ScrambledText>

            {/* 앱 스토어 다운로드 이미지 */}
            <Button className="bg-quack-black text-quack-white rounded-[40px] px-8 py-4 box-content hidden xl:flex hover:bg-quack-illustration">
              <Image
                src="/app-store.svg"
                alt="app-download"
                width={134}
                height={40}
              />
            </Button>
          </motion.div>

          {/* 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden xl:flex xl:justify-self-end"
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
                src="/hero-illust.svg"
                alt="hero-illust"
                width={694}
                height={722}
              />
            </motion.div>
          </motion.div>

          {/* 모바일 오른쪽 일러스트 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 right-5 block xl:hidden"
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
                src="/hero-illust-mobile.svg"
                alt="hero-illust-mobile"
                width={241}
                height={371}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 모바일 하단 앱 스토어 다운로드 이미지 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-[120px] sm:bottom-[150px] w-full flex items-center justify-center"
      >
        <Button className="bg-quack-black text-quack-white rounded-[40px] w-[160px] h-[48px] flex items-center justify-center xl:hidden hover:bg-quack-black">
          <Image
            src="/app-store-mobile.svg"
            alt="app-download"
            width={96}
            height={28}
          />
        </Button>
      </motion.div>

      {/* 모바일 하단 조이스틱 백그라운드 이미지 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute bottom-10 left-0 w-full flex xl:hidden">
          <Image
            src="/joystick-illust-mobile.svg"
            alt="joystick-illust-mobile"
            width={240}
            height={109}
          />
        </div>
      </motion.div>

      {/* 모바일 하단 스크롤 텍스트 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-10 bg-quack-illustration text-quack-yellow flex items-center z-10 overflow-hidden xl:hidden">
          <ScrollVelocity
            velocity={isMobile ? 100 : 200}
            texts={[
              "점심에 고기는 해비하고 햄버거는 너무 인스턴트고 피자는 어제 먹었구 치킨도 지금 안땡기고 밥은 먹어야대는데 뭘 먹어야되ㄴ 아 맞다! 저녁에 뭐 먹는다 했으니까 그거도 빼고 아 대리님 다이어트 한다니까 분식은 안드시겠지..",
            ]}
            className="whitespace-nowrap label-medium-mobile xl:text-label-large"
          />
        </div>
      </motion.div>

      {/* 데스크탑 하단 */}
      <div className="absolute bottom-0 left-0 xl:relative xl:bottom-auto xl:left-auto w-full h-[200px] hidden xl:flex xl:mt-[172px]">
        <Image
          src="/joystick-illust.svg"
          alt="joystick-illust"
          width={337}
          height={198.64}
          className="absolute bottom-[112.36px] right-1/2 -translate-x-1/2 z-10 hidden xl:flex"
        />

        <Image
          src="/background-illust.svg"
          alt="background-illust"
          fill
          style={{ objectFit: "cover" }}
        />

        {/* 데스크탑 하단 스크롤 텍스트 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute bottom-0 left-0 w-full h-20 bg-quack-illustration text-quack-yellow flex items-center z-10 overflow-hidden">
            <ScrollVelocity
              velocity={isMobile ? 100 : 200}
              texts={[
                "점심에 고기는 해비하고 햄버거는 너무 인스턴트고 피자는 어제 먹었구 치킨도 지금 안땡기고 밥은 먹어야대는데 뭘 먹어야되ㄴ 아 맞다! 저녁에 뭐 먹는다 했으니까 그거도 빼고 아 대리님 다이어트 한다니까 분식은 안드시겠지..",
              ]}
              className="whitespace-nowrap label-medium-mobile xl:text-label-large"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
