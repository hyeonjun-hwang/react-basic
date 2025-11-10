import React from "react";
import { Skeleton, Badge, Button } from "@/components/ui";
import {
  BadgeCheck,
  Compass,
  WandSparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { RECRUITMENT } from "@/constants";

function Recruit() {
  return (
    <div>
      <div className="px-16 py-10 ">
        {/* 타이틀 및 버튼 */}
        <div className="pb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            디자이너 채용 정보는 노트폴리오에서!
          </h1>
          <div className="flex gap-4">
            <div className="w-14 h-14 relative">
              <Button className="w-full h-full bg-white text-black rounded-full"></Button>
              <ChevronLeft
                size={26}
                color="lightgray"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="w-14 h-14 relative">
              <Button className="w-full h-full bg-white text-black rounded-full"></Button>
              <ChevronRight
                size={26}
                color="black"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        {/* 카드 */}
        <div className="flex overflow-x-auto scrollbar-hide gap-8">
          {RECRUITMENT.map((RECRUITMENT, i) => {
            return (
              <div key={i} className="w-76 flex flex-col gap-3">
                {/* 이미지 */}
                <div className="h-55">
                  <Skeleton className="w-full h-full z-1 bg-gray-400"></Skeleton>
                </div>
                <div className="w-full h-fit flex items-center gap-3 rounded-b-md bg-white">
                  {/* 회사 로고 */}

                  <div>{RECRUITMENT.icon}</div>
                  {/* 공고제목 및 회사명 */}
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold truncate">
                      {RECRUITMENT.title}
                    </p>
                    <p className="truncate">{RECRUITMENT.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Recruit };
