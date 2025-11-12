import { ArrowUpDown } from "lucide-react";
import { Separator } from "@/components/ui";
import React from "react";
import { CATEGORYS } from "@/constants";

function Category() {
  return (
    <div className="sticky top-15 px-6 lg:px-16 py-3 flex items-center justify-center gap-10 bg-white z-4">
      {/* 정렬 */}
      <div className="hidden w-fit lg:flex flex-col items-center gap-2">
        <ArrowUpDown />
        <p className="text-sm lg:text-base whitespace-nowrap">정렬</p>
      </div>

      <Separator className="hidden lg:block h-8!" orientation="vertical" />

      {/* 카테고리 리스트 */}
      <div className="w-fit flex gap-8 overflow-scroll scrollbar-hide">
        {CATEGORYS.map((category, i) => {
          // isActive가 true일 때 클래스 추가
          const colorClass =
            category.isActive && "text-emerald-500 font-semibold";

          // 아이콘 크기 반응형 처리
          const iconSize = "w-5 h-5 lg:w-6 lg:h-6";
          const iconFinalClass = `${iconSize} ${colorClass || ""}`;

          return (
            <div key={i} className="flex flex-col items-center gap-2">
              {React.cloneElement(category.icon, {
                className: iconFinalClass,
              })}
              <p
                className={`text-sm lg:text-base whitespace-nowrap ${colorClass}`}
              >
                {category.name}
              </p>
            </div>
          );
        })}
      </div>

      <Separator className="h-8!" orientation="vertical" />

      {/* 경기도 AI 콘텐츠 */}
      <div className="w-fit flex flex-col items-center gap-1">
        <img
          className="w-8"
          src="https://cdn-bastani.stunning.kr/static/feature/portfolio/category/img-gyeonngi-do.png"
          alt=""
        />
        <p className="hidden lg:block text-sm lg:text-base whitespace-nowrap ">
          경기도 AI 콘텐츠
        </p>
        <p className="lg:hidden text-sm lg:text-base whitespace-nowrap">
          경기도 AI
        </p>
      </div>
    </div>
  );
}

export { Category };
