// Local components
import SeeMoreButton from "./SeeMoreButton";
import PostCard from "./PostCard";
import { getAllPosts } from "@/lib/actions/post.action";

export default async function FanCommunity() {
  const allPosts = await getAllPosts({
    isPublished: true,
    postType: "unofficial",
    take: 4,
  });

  return (
    <div className="w-full select-none border-b pb-8 pt-8 lg:border-none lg:pt-12">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight first:mt-0 lg:text-3xl">
            ชุมชนแฟนคลับ
          </h2>
        </div>

        <div className="text-base text-muted-foreground lg:mt-1 lg:text-lg">
          แหล่งรวมการสนทนาและการจัดกิจกรรมของแฟนคลับ แลกเปลี่ยนความคิดเห็น
          แบ่งปันประสบการณ์กับแฟนคลับคนอื่น ๆ
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
        <SeeMoreButton url="/" />
      </div>
    </div>
  );
}
