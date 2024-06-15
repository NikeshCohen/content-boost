import React from "react";
import Image from "next/image";
import { ProfileDropDown } from "./ProfileDropDown";
import { Button } from "@/components/ui/button";

function DashBoardHeader() {
  return (
    <header className="fixed left-0 right-0 z-[80] flex justify-between bg-background-100 p-4 transition-transform dark:bg-background-900">
      <div className="flex items-center justify-center space-x-1">
        <p className="text-lg font-bold">ContentBoost</p>
        <Image src="/logo.png" alt="" width={25} height={25} />
      </div>

      <div className="flex items-center justify-center gap-2">
        <ProfileDropDown />
        <Button>Create Boost</Button>
      </div>
    </header>
  );
}

export default DashBoardHeader;
