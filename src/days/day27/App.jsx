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
import { useBear } from "@/store";
import { Button, Input } from "@/components/ui";

function App() {
  // 언스플레쉬 이미지 가져오는 API
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("modern");
  const [loading, setLoading] = useState(true);

  const unsplashApi = axios.create({
    baseURL: "https://api.unsplash.com/",
    params: {
      client_id: import.meta.env.VITE_UNSPLASHAPI_CLIENT_ID,
    },
  });

  const fetchSearchPhotos = async () => {
    try {
      const query = search || category;
      const res = await unsplashApi.get("/search/photos", {
        params: {
          page: 1,
          per_page: 16,
          query: query,
        },
      });
      const result = res.data.results;
      // console.log("result :", result);
      setResult(result);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchPhotos();
  }, [category, search]);
  // ---

  return (
    <div className="w-full">
      {/* 배너 */}
      <AppBanner />

      {/* 자회사 링크 */}
      <AppFamilySite />

      {/* 헤더 */}
      <AppHeader searchValue={search} onSetSearch={setSearch} />

      <main className="w-full">
        {/* 캐러셀 */}
        <CarouselBanner />

        {/* 카테고리 */}
        <Category onSetCategory={setCategory} />

        {/* 콘텐츠 */}
        <Content result={result} loading={loading} />

        {/* 포트폴리오 */}
        <PofolChat />

        {/* 채용 */}
        <Recruit />

        {/* 콘텐츠 */}
        <Content result={result} loading={loading} />

        {/* 로그인 유도 */}
        <LoginInducement />
      </main>

      <Footer />
    </div>
  );
}

export { App };
