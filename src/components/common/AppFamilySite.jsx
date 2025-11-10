import { Separator } from "@/components/ui";

function AppFamilySite() {
  return (
    <div className="w-full h-10 flex items-center gap-3 font-medium text-sm">
      <Separator className="h-3!" orientation="vertical" />
      <a href="">notefolio</a>
      <Separator className="h-3!" orientation="vertical" />
      <a className="text-neutral-400 font-bold" href="">
        LOUD
      </a>
    </div>
  );
}

export { AppFamilySite };
