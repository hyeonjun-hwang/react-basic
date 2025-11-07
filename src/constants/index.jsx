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
  },
  {
    name: "영상/모션그래픽",
    icon: <CirclePlay />,
    isActive: false,
  },
  {
    name: "그래픽 디자인",
    icon: <Palette />,
    isActive: false,
  },
  {
    name: "브랜딩/편집",
    icon: <BanknoteArrowUp />,
    isActive: false,
  },
  {
    name: "UI/UX",
    icon: <LayoutTemplate />,
    isActive: false,
  },
  {
    name: "일러스트레이션",
    icon: <PenTool />,
    isActive: false,
  },
  {
    name: "디지털 아트",
    icon: <Code />,
    isActive: false,
  },
  {
    name: "AI",
    icon: <Megaphone />,
    isActive: false,
  },
  {
    name: "캐릭터 디자인",
    icon: <Camera />,
    isActive: false,
  },
  {
    name: "웹/앱 개발",
    icon: <Globe />,
    isActive: false,
  },
  {
    name: "3D 모델링",
    icon: <Rss />,
    isActive: false,
  },
  {
    name: "사진/이미지",
    icon: <Code />,
    isActive: false,
  },
  {
    name: "마케팅 콘텐츠",
    icon: <Megaphone />,
    isActive: false,
  },
  {
    name: "아이콘/폰트",
    icon: <Camera />,
    isActive: false,
  },
];

// Content.jsx
const tempAvatar = (
  <Avatar className="h-6 w-6">
    <AvatarImage src="https://github.com/evilrabbit.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);
export const CONTENTS = [
  {
    avatar: tempAvatar,
    username: "개발좋아",
    views: 987,
    likes: 45,
  },
  {
    avatar: tempAvatar,
    username: "클론코딩마스터",
    views: 521,
    likes: 72,
  },
  {
    avatar: tempAvatar,
    username: "로이드",
    views: 450,
    likes: 18,
  },
  {
    avatar: tempAvatar,
    username: "노란노루",
    views: 339,
    likes: 98,
  },
  {
    avatar: tempAvatar,
    username: "제이_워커",
    views: 680,
    likes: 55,
  },
  {
    avatar: tempAvatar,
    username: "커피한잔",
    views: 310,
    likes: 31,
  },
  {
    avatar: tempAvatar,
    username: "프론트엔드_짱",
    views: 770,
    likes: 52,
  },
  {
    avatar: tempAvatar,
    username: "피카츄번개",
    views: 105,
    likes: 11,
  },
  {
    avatar: tempAvatar,
    username: "새벽코딩",
    views: 220,
    likes: 9,
  },
  {
    avatar: tempAvatar,
    username: "테일윈드덕후",
    views: 490,
    likes: 41,
  },
  {
    avatar: tempAvatar,
    username: "코드쟁이",
    views: 880,
    likes: 7,
  },
];

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
  },
  {
    icon: <BadgeCheck color="purple" size={48} />,
    title: "그래픽 디자이너 채용",
    company: "이스트 스튜디오",
  },
  {
    icon: <BadgeCheck color="lightgray" size={48} />,
    title: "광고 대행사 디자이너",
    company: "브레이커스",
  },
  {
    icon: <BadgeCheck color="blue" size={48} />,
    title: "[미리캔버스] 그래픽 디자이너",
    company: "미리디",
  },
  {
    icon: <BadgeCheck color="black" size={48} />,
    title: "상급 의적 채용",
    company: "활빈당",
  },
];
