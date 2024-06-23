import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardPostTable from "@/components/DashboardPostTable";
import DashboardSidebar from "@/components/DashboardSidebar";
import React from "react";

export default function DeletedPosts() {
  return (
    <>
      <DashboardNavbar page="dashboard" />
      <DashboardSidebar />
      <div className="px-8 py-10 lg:ms-72 lg:px-16">
        <p className="text-lg font-semibold">โพสต์ที่ถูกลบ</p>
        <p className="text-base text-muted-foreground">
          รายการโพสต์ทั้งหมดของคุณที่ถูกลบแล้ว
        </p>

        <DashboardPostTable type="Deleted" />
      </div>
    </>
  );
}
