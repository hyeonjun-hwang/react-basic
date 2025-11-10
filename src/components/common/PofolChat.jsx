import React from "react";
import { Skeleton, Badge, Button } from "@/components/ui";
import {
  BadgeCheck,
  Compass,
  WandSparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MENTORS } from "@/constants";

function PofolChat() {
  return (
    <div className="px-16 py-10 bg-black ">
      {/* 타이틀 및 버튼 */}
      <div className="pb-8 flex items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">
          포트폴리오 피드백부터 커리어 상담까지!
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
        {MENTORS.map((mentor, i) => {
          return (
            <div key={i} className="min-w-76">
              {/* 이미지, 뱃지 */}
              <div className="h-55">
                <Skeleton className="relative w-full h-full rounded-b-none z-1">
                  {mentor.job === "디자이너" && (
                    <Badge className="w-fit py-1.5 absolute right-4 bottom-4 rounded-sm z-2 bg-emerald-500">
                      <WandSparkles />
                      <span>{mentor.job}</span>
                    </Badge>
                  )}
                  {mentor.job === "마케터" && (
                    <Badge className="w-fit py-1.5 absolute right-4 bottom-4 rounded-sm z-2 bg-blue-500">
                      <WandSparkles />
                      <span>{mentor.job}</span>
                    </Badge>
                  )}
                </Skeleton>
              </div>

              <div className="h-fit p-5 flex flex-col gap-3 rounded-b-md bg-white">
                {/* 멘토명 */}
                <p className="text-lg font-bold">{mentor.name}</p>

                <div className="flex flex-col gap-2 text-sm">
                  {/* 연차 */}
                  <div className="flex gap-1 items-center">
                    <BadgeCheck color="red" size={20} />
                    <p>{mentor.exp}</p>
                  </div>
                  {/* 경력 */}
                  <div className="flex gap-1 items-center">
                    {mentor.job === "디자이너" && (
                      <Compass color="green" size={20} />
                    )}
                    {mentor.job === "마케터" && (
                      <Compass color="blue" size={20} />
                    )}
                    <p className="truncate">{mentor.career}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { PofolChat };
