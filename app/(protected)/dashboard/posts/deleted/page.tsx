import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

export default function DeletedPosts() {
  return (
    <>
      <DashboardNavbar page="dashboard" />
      <DashboardSidebar />
      <div className="lg:ms-72">Deleted Posts</div>
    </>
  );
}
