import { useState } from "react";
import { Skeleton } from "@/components/ui";
import { BANNERS } from "@/constants";

function CarouselBanner() {
  return (
    <div>
      <section className="pt-10 pb-16 px-1 flex items-center gap-6 overflow-x-auto scrollbar-hide">
        {BANNERS.map((banner, i) => {
          const [isLoading, setIsLoading] = useState(true);
          return (
            <div
              key={i}
              className="relative aspect-4/3 lg:aspect-5/3 object-cover min-w-87 lg:min-w-135 flex items-end"
            >
              {/* 타이틀, 디스크립션 */}
              <div className="absolute left-6 bottom-4 flex flex-col gap-1 lg:gap-2 z-3 text-white">
                <p className="text-lg lg:text-2xl font-semibold">
                  {banner.title}
                </p>
                <p className="text-sm lg:text-base">{banner.description}</p>
              </div>

              {/* 텍스트 뒷 배경 */}
              <div className="absolute w-full h-25 rounded-b-sm bg-linear-to-t from-gray-900/90 to-gray-0 z-2"></div>

              {/* 이미지 */}
              {isLoading && (
                <Skeleton className="absolute w-full h-full z-1 bg-gray-400" />
              )}
              <img
                className="w-full h-full rounded-sm z-1"
                src={`https://loremflickr.com/540/320/cartoon,vector,nature?random=${i}`}
                onLoad={() => {
                  setIsLoading(false);
                }}
                alt=""
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export { CarouselBanner };
