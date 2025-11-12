import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import {
  Layers,
  CirclePlay,
  Palette,
  LayoutTemplate,
  PenTool,
  Code,
  Megaphone,
  Rss,
  Globe,
  Camera,
  BanknoteArrowUp,
  BadgeCheck,
} from "lucide-react";

// AppHeader.jsx
export const MENU = [
  { lable: "발견", newest: false, dropdown: false },
  { lable: "채용", newest: false, dropdown: false },
  { lable: "워크숍/커뮤니티", newest: false, dropdown: true },
  { lable: "포폴 피드백", newest: true, dropdown: false },
  { lable: "에이전시", newest: false, dropdown: false },
];

// CarouselBanner.jsx
export const BANNERS = [
  {
    title: "타이틀 타이틀 타이틀",
    description: "디스크립션",
  },
  {
    title: "타이틀 타이틀 타이틀",
    description: "디스크립션",
  },
  {
    title: "타이틀 타이틀 타이틀",
    description: "디스크립션",
  },
  {
    title: "타이틀 타이틀 타이틀",
    description: "디스크립션",
  },
  {
    title: "타이틀 타이틀 타이틀",
    description: "디스크립션",
  },
];

// Category.jsx
export const CATEGORYS = [
  {
    name: "전체",
    icon: <Layers />,
    isActive: true,
    category: "modern",
  },
  {
    name: "영상/모션그래픽",
    icon: <CirclePlay />,
    isActive: false,
    category: "video",
  },
  {
    name: "그래픽 디자인",
    icon: <Palette />,
    isActive: false,
    category: "graphic",
  },
  {
    name: "브랜딩/편집",
    icon: <BanknoteArrowUp />,
    isActive: false,
    category: "edit",
  },
  {
    name: "UI/UX",
    icon: <LayoutTemplate />,
    isActive: false,
    category: "ui",
  },
  {
    name: "일러스트레이션",
    icon: <PenTool />,
    isActive: false,
    category: "Illustration",
  },
  {
    name: "디지털 아트",
    icon: <Code />,
    isActive: false,
    category: "art",
  },
  {
    name: "AI",
    icon: <Megaphone />,
    isActive: false,
    category: "ai",
  },
  {
    name: "캐릭터 디자인",
    icon: <Camera />,
    isActive: false,
    category: "character",
  },
  {
    name: "웹/앱 개발",
    icon: <Globe />,
    isActive: false,
    category: "app",
  },
  {
    name: "3D 모델링",
    icon: <Rss />,
    isActive: false,
    category: "3d",
  },
  {
    name: "사진/이미지",
    icon: <Code />,
    isActive: false,
    category: "picture",
  },
  {
    name: "마케팅 콘텐츠",
    icon: <Megaphone />,
    isActive: false,
    category: "marketing",
  },
  {
    name: "아이콘/폰트",
    icon: <Camera />,
    isActive: false,
    category: "icon",
  },
];

// Content.jsx
const tempAvatar = (
  <Avatar className="h-6 w-6">
    <AvatarImage src="https://github.com/evilrabbit.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

// PofolChat.jsx
export const MENTORS = [
  {
    name: "박영미 멘토",
    job: "디자이너",
    exp: "전문가(11년차)",
    career: "현 카카오 BX 디자이너 책임",
  },
  {
    name: "박보은 멘토",
    job: "디자이너",
    exp: "전문가(7년차)",
    career: "현 마이리얼트립 프로덕트 디자이너",
  },
  {
    name: "윤지영 멘토",
    job: "디자이너",
    exp: "전문가(18년차)",
    career: "현 프리랜서 / 전 오늘의집 브랜드 디자인 리드",
  },
  {
    name: "이동민 멘토",
    job: "마케터",
    exp: "전문가(11년차)",
    career: "현 카카오페이 시니어 서비스 마케터",
  },
  {
    name: "홍길동 멘토",
    job: "마케터",
    exp: "시니어 도적",
    career: "구 전설의 의적",
  },
];

// Recruit.jsx
export const RECRUITMENT = [
  {
    icon: <BadgeCheck color="orange" size={48} />,
    title: "그래픽 디자이너 (3D) 채용asdasasdsadasdd",
    company: "토스플레이스",
    description: "경력(5~10년) / 서울시 강남구",
  },
  {
    icon: <BadgeCheck color="purple" size={48} />,
    title: "그래픽 디자이너 채용",
    company: "이스트 스튜디오",
    description: "경력(5~10년) / 서울시 강남구",
  },
  {
    icon: <BadgeCheck color="lightgray" size={48} />,
    title: "광고 대행사 디자이너",
    company: "브레이커스",
    description: "경력(5~10년) / 서울시 강남구",
  },
  {
    icon: <BadgeCheck color="blue" size={48} />,
    title: "[미리캔버스] 그래픽 디자이너",
    company: "미리디",
    description: "경력(5~10년) / 서울시 강남구",
  },
  {
    icon: <BadgeCheck color="black" size={48} />,
    title: "상급 의적 채용",
    company: "활빈당",
    description: "경력(5~10년) / 서울시 강남구",
  },
];

// Footer.jsx
export const FOOTERLINKS = [
  "서비스소개",
  "공지사항",
  "운영정책",
  "개인정보처리방침",
  "자주묻는질문",
  "광고상품",
  "문의하기",
];
