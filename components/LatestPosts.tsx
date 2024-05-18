import Image from "next/image";

export default function LatestPosts() {
  return (
    <div className="w-full select-none border-b py-8 lg:border-none lg:py-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            โพสต์ล่าสุด
          </h2>
          {/* <Image
            src="/logo/twitter/logo-black.png"
            alt="youtube logo"
            width="1280"
            height="720"
            className="block h-3 w-3 dark:hidden lg:h-4 lg:w-4"
          />
          <Image
            src="/logo/twitter/logo-white.png"
            alt="youtube logo"
            width="1280"
            height="720"
            className="hidden h-3 w-3 dark:block lg:h-4 lg:w-4"
          />
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ทางการ
          </h2> */}
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          ประกาศข่าวสาร กิจกรรม และบทความต่าง ๆ
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-x-7 md:gap-y-8 lg:grid-cols-4 lg:gap-10">
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-row items-center space-y-1.5 p-6">
            Card 1
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-row items-center space-y-1.5 p-6">
            Card 2
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-row items-center space-y-1.5 p-6">
            Card 3
          </div>
        </div>
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-row items-center space-y-1.5 p-6">
            Card 4
          </div>
        </div>
      </div>
    </div>
  );
}
