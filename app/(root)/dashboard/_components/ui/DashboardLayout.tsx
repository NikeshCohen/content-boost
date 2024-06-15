import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import DashboardSideBar from "./DashboardSideBar";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashBoardHeader />
      <section className="flex pt-12">
        <div className="hidden lg:block">
          <DashboardSideBar />
        </div>
        {children}
      </section>
    </>
  );
}

export default DashBoardLayout;
