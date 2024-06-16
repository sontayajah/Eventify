import "@/styles/editor.css";

import { getPostBySlug } from "@/lib/actions/post.action";
import ClientComponent from "./ClientComponent";
import { redirect } from "next/navigation";

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug);

  // Fetch the post data using the decoded slug
  const postData = await getPostBySlug({ slug: decodedSlug });

  if (!postData) {
    return redirect("/");
  }

  return <>{postData && <ClientComponent postData={postData} />}</>;
}
