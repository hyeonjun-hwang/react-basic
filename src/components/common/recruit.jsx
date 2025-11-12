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
      <div className="px-6 lg:px-16 py-10 bg-gray-50">
        {/* 타이틀 및 버튼 */}
        <div className="pb-6 flex items-center justify-between">
          {/* 타이틀 */}
          <h1 className="text-xl lg:text-2xl font-semibold">
            디자이너 채용 정보는 노트폴리오에서!
          </h1>

          {/* 좌우 버튼 */}
          <div className="hidden lg:flex gap-4">
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
        {/* lg 미만 */}
        <div className="lg:hidden flex flex-col gap-3">
          {RECRUITMENT.map((RECRUITMENT, i) => {
            return (
              <div key={i} className="w-full h-fit flex flex-col gap-3">
                <div className="w-full h-fit flex items-center gap-3 rounded-b-md bg-white p-5 rounded-sm">
                  {/* 회사 로고 */}
                  <div>{RECRUITMENT.icon}</div>
                  {/* 공고제목 및 회사명 */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-xs truncate">{RECRUITMENT.company}</p>
                    <p className="text-sm font-bold truncate">
                      {RECRUITMENT.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {RECRUITMENT.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* lg 이상 */}
        <div className="hidden lg:flex overflow-x-auto scrollbar-hide gap-8">
          {RECRUITMENT.map((RECRUITMENT, i) => {
            return (
              <div key={i} className="min-w-76 flex flex-col gap-3">
                {/* 이미지 */}
                <Skeleton className="w-full min-h-55 z-1 bg-gray-400"></Skeleton>

                {/* 채용명 및 회사 */}
                <div className="w-full h-fit flex items-center gap-3 rounded-b-md bg-none">
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
