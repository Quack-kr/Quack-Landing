"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SubscriptionSection() {
  return (
    <section className="h-auto bg-quack-yellow relative z-10">
      <div className="container relative px-0 pt-10 pb-5 xl:pt-[80px] xl:pb-[160px]">
        <div className="flex flex-col items-center px-5 xl:px-10 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 xl:mb-6"
          >
            <h2 className="text-headline-small-mobile xl:text-headline-small text-center text-quack-black">
              추가 비용없이
              <br />
              구독으로 광고하자!
            </h2>
          </motion.div>
          <div className="w-full">
            {/* 메인 구독 카드 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-quack-black text-quack-white rounded-[8px] py-8 px-5 mb-4 xl:py-20 xl:px-10 xl:mb-9 xl:w-[480px] xl:mx-auto xl:rounded-[20px]"
            >
              <div className="mb-4 xl:mb-6">
                <h3 className="text-label-medium-mobile mb-2 xl:text-label-medium">
                  잘나가는 메뉴를 구독으로 광고!
                </h3>
                <p className="text-label-x-small-mobile font-medium text-quack-gray xl:text-label-medium-mobile">
                  홈 화면에 위치해 노출이 높은 광고입니다.
                </p>
              </div>

              <div className="mb-4 xl:mb-6">
                <div className="text-label-medium text-quack-yellow mb-1 xl:text-body-x-large">
                  첫 한달 무료{" "}
                  <span className="text-[14px] font-bold xl:text-[32px]">
                    {" / 월"}
                  </span>
                </div>
                <div className="text-label-x-small-mobil text-quack-gray xl:text-body-large">
                  <span className="text-[14px] line-through">80,000원 </span>
                  <span className="text-label-x-small-mobile line-through xl:text-[16px]">
                    {" / 월"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4 xl:space-y-4 xl:mb-6">
                <div className="flex items-center text-[12px] font-medium xl:text-label-small xl:font-semibold">
                  <span className="mr-2">
                    <Image
                      src="/ic_check.svg"
                      alt="check-icon"
                      width={14}
                      height={14}
                    />
                  </span>
                  구독기간 내 무제한 광고 집행
                </div>
                <div className="flex items-center text-[12px] font-medium xl:text-label-small xl:font-semibold">
                  <span className="mr-2">
                    <Image
                      src="/ic_check.svg"
                      alt="check-icon"
                      width={14}
                      height={14}
                    />
                  </span>
                  지역별 광고로 상위노출 가능성 UP
                </div>
                <div className="flex items-center text-[12px] font-medium xl:text-label-small xl:font-semibold">
                  <span className="mr-2">
                    <Image
                      src="/ic_check.svg"
                      alt="check-icon"
                      width={14}
                      height={14}
                    />
                  </span>
                  가게 갯수에 상관없이 구독 하나로 광고 OK
                </div>
              </div>

              <div className="flex flex-col xl:flex-col-reverse mt-4 xl:mt-6">
                <p className="text-[10px] font-medium text-quack-gray text-center mb-4 xl:text-[16px] xl:font-semibold xl:mb-0">
                  해당 플랜은 베너광고,스플레쉬 광고를 제외한
                  <br />
                  메뉴광고만 가능한 구독형 광고입니다.
                </p>

                <Button className="w-full bg-quack-yellow text-label-medium-mobile text-quack-black hover:bg-quack-icon-bg font-bold h-12 xl:h-[72px] rounded-[23.33px] xl:rounded-[40px] xl:text-label-medium xl:mb-6">
                  구독하기
                </Button>
              </div>
            </motion.div>

            {/* 추가 정보 카드들 */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 xl:max-w-max xl:mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-quack-black text-quack-white rounded-[11.67px] py-6 px-5 xl:rounded[20px] xl:p-10 xl:w-[480px]"
              >
                <h4 className="text-label-medium-mobile mb-2 xl:text-label-medium xl:mb-4">
                  이런 사장님께 딱이에요!
                </h4>
                <ul className="text-[10px] text-quack-gray font-semibold space-y-2 xl:text-[16px]">
                  <li>
                    1. 배달을 안하시는{" "}
                    <b className="text-quack-yellow">오프라인 중심 사장님</b>
                  </li>
                  <li>
                    2. 지나친{" "}
                    <b className="text-quack-yellow">광고 수수료가 부담</b>
                    되시는 사장님
                  </li>
                  <li>
                    3. 여러가게 운영하시면서{" "}
                    <b className="text-quack-yellow">개별 광고를 지출하시는</b>
                    사장님
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-quack-black text-quack-white rounded-[11.67px] py-6 px-5 xl:rounded[20px] xl:p-10 xl:w-[480px]"
              >
                <h4 className="text-label-medium-mobile mb-2 xl:text-label-medium xl:mb-4">
                  부담되는 모든 것을 다 빼고!
                </h4>
                <ul className="text-[10px] text-quack-gray font-semibold space-y-2 xl:text-[16px]">
                  <li>
                    1. 플렛폼 <b className="text-quack-yellow">중개 수수료</b>
                  </li>
                  <li>
                    2. 광고료 대비{" "}
                    <b className="text-quack-yellow">차등 노출</b>
                  </li>
                  <li>
                    3. 그 외에 설마했던{" "}
                    <b className="text-quack-yellow">모든 추가 수수료</b>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
