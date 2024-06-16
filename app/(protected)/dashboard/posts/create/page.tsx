import { getCurrentUser } from "@/lib/session";
import ClientComponent from "./ClientComponent";
import DashboardNavbar from "@/components/DashboardNavbar";

export default async function NewPost() {
  const user = await getCurrentUser();

  return (
    <>
      <DashboardNavbar page="createPost" />
      <ClientComponent user={user} />
    </>
  );
}
