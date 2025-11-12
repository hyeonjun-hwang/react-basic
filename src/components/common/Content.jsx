import { Eye, Heart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";

function Content({ result = [] }) {
  return (
    <section className="w-full px-6 lg:px-16 pt-4 pb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {result.map((result, i) => {
        return (
          <Dialog key={i}>
            <DialogTrigger>
              {/* 카드 */}
              <div className="flex flex-col gap-3 cursor-pointer">
                {/* 이미지 */}
                <img
                  className="aspect-square rounded-md"
                  src={result.urls.small}
                  alt="@IMAGE"
                />

                <div className="flex justify-between">
                  {/* 유저 */}
                  <div className="flex gap-2 items-center">
                    <img
                      className="rounded-full"
                      src={result.user.profile_image.small}
                      alt="@PROFILE"
                    />
                    <p className="text-sm font-medium">
                      {result.user.first_name}
                    </p>
                  </div>

                  {/* 조회수/좋아요 */}
                  <div className="flex items-center gap-2.5 text-xs font-medium text-gray-600/90">
                    {/* <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <p>{content.views}</p>
                </div> */}
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" color="red" />
                      <p>
                        {result.likes
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{result.alt_description}</DialogTitle>
                <DialogDescription>{result.description}</DialogDescription>
              </DialogHeader>
              <img src={result.urls.regular} alt="" />
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
}

export { Content };
