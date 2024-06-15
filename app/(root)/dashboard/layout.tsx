import React from "react";
import DashBoardLayout from "./_components/ui/DashboardLayout";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <DashBoardLayout>
      <main className="flex-grow px-8 py-8 pt-[44px] lg:pl-[248px] lg:pr-[48px]">
        {children}
      </main>
    </DashBoardLayout>
  );
}

export default layout;
