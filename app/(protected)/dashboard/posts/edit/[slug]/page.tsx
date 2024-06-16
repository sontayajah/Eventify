import "@/styles/editor.css";

import { getPostById } from "@/lib/actions/post.action";
import ClientComponent from "./ClientComponent";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import DashboardNavbar from "@/components/DashboardNavbar";

export default async function EditPost({
  params,
}: {
  params: { slug: string };
}) {
  const decodedSlug = decodeURIComponent(params.slug);
  const user = await getCurrentUser();

  // Fetch the post data using the decoded slug
  const postData = await getPostById({ id: decodedSlug });

  if (!postData) {
    return redirect("/");
  }

  if (user && postData.authorId !== user.id) {
    return redirect("/");
  }

  return (
    <>
      {postData && (
        <>
          <DashboardNavbar page="createPost" />
          <ClientComponent postData={postData} user={user} />
        </>
      )}
    </>
  );
}
