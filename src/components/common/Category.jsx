import { ArrowUpDown } from "lucide-react";
import { Separator } from "@/components/ui";
import React from "react";
import { CATEGORYS } from "@/constants";

function Category() {
  return (
    <div className="sticky top-15 px-16 py-3 flex items-center justify-center gap-10 bg-white z-4">
      {/* 정렬 */}
      <div className="w-fit min-w-12 flex flex-col items-center gap-2">
        <ArrowUpDown />
        <p className="whitespace-nowrap">정렬</p>
      </div>

      <Separator className="h-8!" orientation="vertical" />

      {/* 카테고리 리스트 */}
      <div className="flex gap-10 overflow-scroll scrollbar-hide">
        {CATEGORYS.map((category, i) => {
          // isActive가 true일 때 클래스 추가
          const colorClass =
            category.isActive && "text-emerald-500 font-semibold";

          return (
            <div key={i} className="w-fit flex flex-col items-center gap-2">
              {category.isActive
                ? React.cloneElement(category.icon, {
                    className: colorClass,
                  })
                : category.icon}
              <p className={`whitespace-nowrap ${colorClass}`}>
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
        <p className="whitespace-nowrap">경기도 AI 콘텐츠</p>
      </div>
    </div>
  );
}

export { Category };
