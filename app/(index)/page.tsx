import Carousel from "@/components/Carousel";
import FanCommunity from "@/components/FanCommunity";
import LatestNews from "@/components/LatestNews";
import LatestRelease from "@/components/LatestRelease";
import TrendingArtists from "@/components/TrendingArtists";

export default function Home() {
  return (
    <main className="m-auto mt-4 px-4 sm:container">
      <div className="flex flex-col lg:flex-row">
        <Carousel />
        <LatestRelease />
      </div>
      <TrendingArtists />
      <LatestNews />
      <FanCommunity />
    </main>
  );
}
