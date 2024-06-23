import "@/styles/editor.css";

import { getPostBySlug } from "@/lib/actions/post.action";
import ClientComponent from "./ClientComponent";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug);

  // Fetch the post data using the decoded slug
  const postData = await getPostBySlug({ slug: decodedSlug });
  const user = await getCurrentUser();

  if (!postData) {
    return redirect("/");
  }

  if (!postData.isPublished) {
    if (!user || user.id !== postData.authorId) {
      return redirect("/");
    }
  }

  return <>{postData && <ClientComponent postData={postData} />}</>;
}
