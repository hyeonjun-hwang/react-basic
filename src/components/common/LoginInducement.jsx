import React from "react";
import { Button } from "../ui";

function LoginInducement() {
  return (
    <div className="py-20 flex flex-col items-center gap-4">
      <div className="text-lg">
        <a className="underline" href="">
          회원가입
        </a>
        {" 또는 "}
        <a className="underline" href="">
          로그인
        </a>
        을 통해 19만개 이상의 크리에이티브를 발견하고 수집해보세요.
      </div>
      <div className="flex items-center gap-4">
        <Button className="px-4 py-6 rounded-full bg-gray-800">
          <span className="mx-3">회원가입</span>
        </Button>
        <span>{" 또는 "}</span>
        <Button className="px-4 py-6 rounded-full" variant="outline">
          <span className="mx-3">로그인</span>
        </Button>
      </div>
    </div>
  );
}

export { LoginInducement };
