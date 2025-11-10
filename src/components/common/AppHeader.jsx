import { Input, Button } from "@/components/ui";
import { ChevronDown, Search } from "lucide-react";
import { MENU } from "@/constants";

function AppHeader() {
  return (
    <header className="w-full flex items-center justify-between px-6 border-b py-3 sticky top-0 bg-white z-5">
      {/* 로고, 메뉴 */}
      <div className="flex items-center gap-6">
        {/* 로고 */}
        <img
          className="h-6 cursor-pointer"
          src="../../src/assets/logo.svg"
          alt="@LOGO"
        />

        {/* 메뉴 */}
        <nav className="flex items-center gap-5">
          {MENU.map((item, i) => {
            return (
              <div
                key={i}
                className="font-medium flex items-center gap-1 cursor-pointer"
              >
                {item.lable}
                {item.newest && <p className="text-xs text-emerald-400">NEW</p>}
                {item.dropdown && <ChevronDown size={16} />}
              </div>
            );
          })}
        </nav>
      </div>

      {/* 검색창, 로그인btn, 회원가입btn */}
      <div>
        {/* 검색창 */}
        <div className="flex items-center gap-2">
          <div className="relative w-76 flex items-center bg-neutral-50">
            <Input
              className={
                "pl-10 rounded-full w-full focus-visible:ring-0 placeholder:text-neutral-400"
              }
              placeholder="230,000개 이상의 크리에이티브 검색"
            ></Input>
            <Search
              className="absolute left-3.5 text-neutral-400"
              size={18}
            ></Search>
          </div>

          {/* 로그인btn */}
          <Button className={"cursor-pointer"} variant={"ghost"}>
            로그인
          </Button>

          {/* 회원가입btn */}
          <Button className={"rounded-full min-h-9 min-w-20 cursor-pointer"}>
            회원가입
          </Button>
        </div>
      </div>
    </header>
  );
}

export { AppHeader };
