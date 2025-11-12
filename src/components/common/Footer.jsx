import React from "react";
import {
  Separator,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui";
import { MailOpen, BookText, Instagram, Facebook, Twitter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { FOOTERLINKS } from "@/constants";

function Footer() {
  return (
    <footer className="hidden w-full px-4 py-2 fixed bottom-0 lg:flex items-center justify-between border-t bg-white z-100">
      {/* 텍스트 묶음 영역 */}
      <div className="flex items-center gap-3 text-sm">
        <a href="">
          <span className="font-bold">(주)스터닝</span> 사업자 정보
        </a>
        <Separator className="h-4!" orientation="vertical" />
        {FOOTERLINKS.map((FOOTERLINK, i) => (
          <a key={i} href="">
            {FOOTERLINK}
          </a>
        ))}
      </div>

      {/* 아이콘 묶음 영역 */}
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <BookText />
          </TooltipTrigger>
          <TooltipContent>
            <p>노트폴리오 매거진</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <MailOpen />
          </TooltipTrigger>
          <TooltipContent>
            <p>노폴레터</p>
          </TooltipContent>
        </Tooltip>

        <Separator className="h-4!" orientation="vertical" />

        {/* 인스타 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Instagram />
          </TooltipTrigger>
          <TooltipContent>
            <p>인스타그램</p>
          </TooltipContent>
        </Tooltip>
        {/* 페북 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </TooltipTrigger>
          <TooltipContent>
            <p>페이스북</p>
          </TooltipContent>
        </Tooltip>
        {/* 트위터 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Twitter />
          </TooltipTrigger>
          <TooltipContent>
            <p>트위터</p>
          </TooltipContent>
        </Tooltip>

        <Separator className="h-4!" orientation="vertical" />

        {/* 애플 스토어 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faApple} size="xl" />
          </TooltipTrigger>
          <TooltipContent>
            <p>iOS App</p>
          </TooltipContent>
        </Tooltip>
        {/* 구글 스토어 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <FontAwesomeIcon icon={faGooglePlay} size="xl" className="mr-14" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Android App</p>
          </TooltipContent>
        </Tooltip>
        {/* 스터닝 로고 */}
        <svg
          width="88"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="stunning-service-icon"
        >
          <path d="M0 0h88v14H0V0z" fill="#fff" fill-opacity="0.01"></path>
          <path
            d="M40.875 11.119c1.758 0 3.858-.625 3.858-3.605V3.202h-2.155V7.58c0 1.112-.591 1.725-1.664 1.725-1.074 0-1.664-.647-1.664-1.768V3.224h-2.155V7.57c0 2.32 1.293 3.549 3.797 3.549M28.401 8.618v-.021c0-1.48-1.228-2.04-3.073-2.424-1.142-.245-1.547-.43-1.547-.862v-.03c0-.38.349-.604.935-.604.84.02 1.656.284 2.35.759L28.155 4a5.468 5.468 0 00-3.362-1c-1.906 0-3.186 1-3.186 2.488v.026c0 1.62 1.414 2.06 3.12 2.432 1.186.271 1.51.457 1.51.862v.022c0 .405-.389.638-1.07.638a4.624 4.624 0 01-2.732-.932l-1.19 1.354a6.085 6.085 0 003.84 1.255c2.057 0 3.333-.97 3.333-2.535M36.077 3.19h-7.19v1.806h2.514v5.955h2.15V4.996h2.526V3.19zM67.401 3.19h-2.069v7.761h2.069V3.19zM78.064 7.079v.026c0 2.31 1.949 4.049 4.53 4.049A5.266 5.266 0 0086 9.954V6.506h-3.104v1.449h1.337v1.091l-.04.026a2.9 2.9 0 01-1.5.345 2.37 2.37 0 01-2.47-2.311v-.022a2.218 2.218 0 012.204-2.272 3.047 3.047 0 012.017.72l1.198-1.445a4.835 4.835 0 00-3.224-1.078c-2.483 0-4.354 1.75-4.354 4.075M54.026 10.973V3.189h-2.043v4.67l-.047-.056L48.15 3.19h-1.926v7.784h2.047V6.298l3.944 4.675h1.81zM63.578 10.973V3.189h-2.043v4.67l-.048-.056-3.784-4.614H55.78v7.784h2.043V6.298l3.944 4.675h1.81zM76.949 10.973V3.189h-2.043v4.67l-.048-.056-3.784-4.614H69.15v7.784h2.044V6.298l3.943 4.675h1.81zM19.35 6.928l-5.57-5.399a.112.112 0 00-.15 0l-3.147 3.044a.431.431 0 01-.298.117.431.431 0 01-.28-.1L6.75 1.53a.108.108 0 00-.146 0L1.03 6.927a.103.103 0 000 .142l5.574 5.399a.1.1 0 00.073.03.093.093 0 00.073-.03l3.164-3.062a.43.43 0 01.276-.099c.106 0 .209.038.289.108l3.15 3.053a.1.1 0 00.074.03.104.104 0 00.077-.03l5.57-5.399a.094.094 0 00.023-.11.094.094 0 00-.024-.032z"
            fill="#0D0D0D"
          ></path>
        </svg>
      </div>
    </footer>
  );
}

export { Footer };
