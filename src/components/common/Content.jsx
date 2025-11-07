import { useState } from "react";
import { Skeleton, Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { Eye, Heart } from "lucide-react";
import { CONTENTS } from "@/constants";

function Content() {
  return (
    <div className="px-16 pt-4 pb-16 flex flex-wrap gap-6">
      {/* 카드 */}
      {CONTENTS.map((content, i) => {
        const [isLoading, setIsLoading] = useState(true);
        return (
          <div className="w-fit h-fit flex flex-col gap-3">
            {/* 이미지 */}
            <div className="w-75 h-75">
              {isLoading && <Skeleton className="w-full h-full bg-gray-400" />}
              <div>
                <img
                  className="w-full h-full rounded-md"
                  src={`https://loremflickr.com/300/300/cartoon,vector,nature?random=${i}`}
                  onLoad={() => setIsLoading(false)}
                  alt=""
                />
              </div>
            </div>

            <div className="flex justify-between">
              {/* 유저 */}
              <div className="flex gap-2 items-center">
                {content.avatar}
                <p className="text-sm font-medium">{content.username}</p>
              </div>

              {/* 조회수/좋아요 */}
              <div className="flex items-center gap-2.5 text-xs font-medium text-gray-600/90">
                <div className="flex items-center gap-0.5">
                  <Eye className="w-4 h-4" />
                  <p>{content.views}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <Heart className="w-4 h-4" />
                  <p>{content.likes}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Content };
