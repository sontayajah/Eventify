import { getUserProfile } from "@/lib/actions/user.action";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

export default async function Admin() {
  const user = await getCurrentUser();

  if (user) {
    let profile = await getUserProfile(user.id);

    if (profile?.verifyTypeId !== "3") {
      return redirect("/");
    }
  }

  return <div>Admin</div>;
}
