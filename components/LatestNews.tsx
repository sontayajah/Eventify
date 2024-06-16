// Local components
import PostCard from "./PostCard";

// Project UI components
import SeeMoreButton from "./SeeMoreButton";
import { getAllPosts } from "@/lib/actions/post.action";

export default async function LatestNews() {
  const allPosts = await getAllPosts({
    take: 4,
    postType: "official",
    isPublished: true,
  });

  return (
    <div className="w-full select-none border-b pb-8 pt-8 lg:border-none lg:pb-0 lg:pt-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ข่าวสารล่าสุด
          </h2>
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          อัพเดทข่าวสารเกี่ยวกับวงการ T-Pop
          ติดตามทุกความเคลื่อนไหวของศิลปินที่คุณชื่นชอบ
        </div>
      </div>

      {allPosts.length > 0 && (
        <>
          <PostCard allPosts={allPosts} />
        </>
      )}

      {allPosts.length === 0 && (
        <p className="mt-4 text-center text-muted-foreground">ยังไม่มีโพสต์</p>
      )}

      <div className="mt-4 flex items-center justify-end">
        <SeeMoreButton url="/news" />
      </div>
    </div>
  );
}
