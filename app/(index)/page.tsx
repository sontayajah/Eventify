import Carousel from "@/components/Carousel";
import LatestRelease from "@/components/LatestRelease";

export default function Home() {
  return (
    <main className="m-auto mt-4 max-w-screen-2xl bg-background px-8">
      <div className="flex flex-col lg:flex-row">
        <Carousel />
        <LatestRelease />
      </div>
    </main>
  );
}
