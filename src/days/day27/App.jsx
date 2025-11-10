import { useState, useEffect } from "react";
import axios from "axios";
import {
  AppHeader,
  AppBanner,
  AppFamilySite,
  CarouselBanner,
  Category,
  Content,
  PofolChat,
  Recruit,
  Footer,
  LoginInducement,
} from "@/components/common";

function App() {
  // 언스플레쉬 이미지 가져오는 API
  const [result, setResult] = useState([]);

  const unsplashApi = axios.create({
    baseURL: "https://api.unsplash.com/",
    params: {
      client_id: "pPry_0pVJ3aSOKnlynlhVUK8qXZhObbPmF8aUs0rY1M",
    },
  });

  const fetchSearchPhotos = async () => {
    const res = await unsplashApi.get("/search/photos", {
      params: {
        page: 1,
        per_page: 16,
        query: "modern",
      },
    });
    const result = res.data.results;
    console.log("result :", result);
    setResult(result);
  };

  useEffect(() => {
    fetchSearchPhotos();
  }, []);
  // ---

  return (
    <div className="w-full">
      {/* 배너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppFamilySite />

      {/* 헤더 */}
      <AppHeader />

      <main className="w-full">
        {/* 캐러셀 */}
        <CarouselBanner />

        {/* 카테고리 */}
        <Category />

        {/* 콘텐츠 */}
        <Content result={result} />

        {/* 포트폴리오 */}
        <PofolChat />

        {/* 채용 */}
        <Recruit />

        {/* 콘텐츠 */}
        <Content result={result} />

        {/* 로그인 유도 */}
        <LoginInducement />
      </main>

      <Footer />
    </div>
  );
}

export { App };
