import {
  AppHeader,
  AppBanner,
  AppFamilySite,
  CarouselBanner,
  Category,
  Content,
  PofolChat,
  Recruit,
} from "@/components/common";

function App() {
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
        <Content />

        {/* 포트폴리오 */}
        <PofolChat />

        {/* 채용 */}
        <Recruit />

        {/* 콘텐츠 */}
        <Content />
      </main>
    </div>
  );
}

export default App;
