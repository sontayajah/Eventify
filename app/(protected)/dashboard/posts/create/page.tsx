import { getCurrentUser } from "@/lib/session";
import ClientComponent from "./ClientComponent";
import DashboardNavbar from "@/components/DashboardNavbar";
import { getAllCategories } from "@/lib/actions/category.action";

export default async function NewPost() {
  const user = await getCurrentUser();
  const categories = await getAllCategories();

  return (
    <>
      <DashboardNavbar page="createPost" />
      <ClientComponent user={user} categories={categories} />
    </>
  );
}
