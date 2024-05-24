import Carousel from "@/components/Carousel";
import LatestPosts from "@/components/LatestPosts";
import LatestRelease from "@/components/LatestRelease";

export default function Home() {
  return (
    <main className="m-auto mt-4 px-4 xl:container">
      <div className="flex flex-col lg:flex-row">
        <Carousel />
        <LatestRelease />
      </div>
      <LatestPosts />
    </main>
  );
}
