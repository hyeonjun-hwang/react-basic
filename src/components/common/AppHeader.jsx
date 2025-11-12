import {
  Input,
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui";
import { ChevronDown, Search, Menu } from "lucide-react";
import { MENU } from "@/constants";
import { useState, useEffect } from "react";

// 서치바 컴포넌트
const SearchBar = ({ onSetSearch, className, searchValue }) => {
  const [inputValue, setInputValue] = useState(searchValue || "");

  useEffect(() => {
    setInputValue(searchValue || "");
  }, [searchValue]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSetSearch(inputValue);

      console.log("inputValue :", inputValue);
    }
  };
  const handleOnClick = () => {
    onSetSearch(inputValue);

    console.log("inputValue :", inputValue);
  };
  return (
    <div className={`relative flex items-center ${className}`}>
      <Input
        className={
          "pl-10 rounded-full w-full focus-visible:ring-0 placeholder:text-neutral-400 bg-neutral-50"
        }
        placeholder="230,000개 이상의 크리에이티브 검색"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          if (e.target.value === "") {
            onSetSearch("");
          }
        }}
        onKeyDown={handleKeyDown}
      ></Input>
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 lg:text-neutral-400"
        size={18}
        onClick={handleOnClick}
      ></Search>
    </div>
  );
};

// 로고 이미지 컴포넌트
const LogoImage = ({ className }) => (
  <img
    className={`cursor-pointer ${className}`}
    src="../../src/assets/logo.svg"
    alt="@LOGO"
  />
);

// 메뉴 개별 아이템 컴포넌트
const MenuItem = ({ item, className }) => {
  return (
    <div className={`font-medium flex cursor-pointer ${className}`}>
      <p>{item.lable}</p>
      {item.newest && <p className="text-xs text-emerald-400">NEW</p>}
      {item.dropdown && <ChevronDown size={16} />}
    </div>
  );
};

function AppHeader({ onSetSearch, searchValue }) {
  return (
    <header className="w-full flex items-start lg:items-center justify-between px-4 py-3 lg:px-6 border-b sticky top-0 bg-white z-5">
      {/* 좌측 : 로고, 메뉴 */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex items-center gap-4">
          {/* 메뉴 버튼 (lg 미만) */}
          <Sheet>
            <SheetTrigger>
              <Menu size={24} className="lg:hidden" />
            </SheetTrigger>
            <SheetContent className="w-[80vw] max-w-none! p-8" side="left">
              <SheetHeader>
                <div className="flex flex-col gap-10">
                  {/* 로고 및 로그인/회원가입 */}
                  <div className="flex flex-col items-start gap-6">
                    <LogoImage className="h-4" />
                    <SheetTitle className="text-base font-normal">
                      회원가입 또는 로그인을 통해
                      <br />
                      13만개 이상의 크리에이티브를 발견하고 수집해보세요.
                    </SheetTitle>
                    <div className="w-full flex flex-col gap-2">
                      <Button className="rounded-full bg-[#1ecad3]">
                        회원가입
                      </Button>
                      <Button className="rounded-full" variant="outline">
                        로그인
                      </Button>
                    </div>
                  </div>

                  <Separator></Separator>

                  {/* sheet 속 메뉴  */}
                  <div className="w-full flex flex-col gap-5">
                    {MENU.map((item) => {
                      return (
                        <MenuItem
                          item={item}
                          className="items-center justify-between font-semibold"
                        ></MenuItem>
                      );
                    })}
                  </div>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          {/* 로고 이미지*/}
          <LogoImage className="h-5" />
        </div>

        {/* 헤더 메뉴 */}
        <nav className="flex items-center gap-5">
          {MENU.map((item) => {
            return (
              <MenuItem item={item} className="items-center gap-1"></MenuItem>
            );
          })}
        </nav>
      </div>

      {/* 우측 : 검색창 및 로그인/회원가입 */}
      <div className="flex items-center gap-2">
        {/* 검색창 */}
        <SearchBar onSetSearch={onSetSearch} className="hidden lg:block w-76" />

        {/* 검색 아이콘 (lg 미만) */}
        <Sheet>
          <SheetTrigger>
            <div className="lg:hidden relative flex items-center">
              <Search
                className=" absolute right-1 flextext-neutral-400"
                size={24}
              ></Search>
            </div>
          </SheetTrigger>
          <SheetContent className="h-full" side="bottom">
            <SheetHeader>
              <SheetTitle>검색어를 입력하세요</SheetTitle>
              <SheetDescription></SheetDescription>
              {/* 검색바 */}
              <SearchBar
                searchValue={searchValue}
                onSetSearch={onSetSearch}
                className="w-full"
              ></SearchBar>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* 로그인btn (lg 이상) */}
        <Button className={"hidden lg:block cursor-pointer"} variant={"ghost"}>
          로그인
        </Button>

        {/* 로그인btn (lg 미만) */}
        <Button
          className={"lg:hidden rounded-full cursor-pointer"}
          variant={"outline"}
        >
          로그인
        </Button>

        {/* 회원가입btn (lg 이상) */}
        <Button
          className={
            "hidden lg:block rounded-full min-h-9 min-w-20 cursor-pointer"
          }
        >
          회원가입
        </Button>
      </div>
    </header>
  );
}

export { AppHeader };
