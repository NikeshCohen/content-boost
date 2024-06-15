import React from "react";
import Link from "next/link";

import { sideBarLinks } from "@/constants/sideBarLinks";
import { sideBarSetting } from "@/constants/sideBarSettings";

function DashboardSideBar() {
  return (
    <aside className="fixed h-screen w-52 bg-background-100 transition-transform dark:bg-background-900">
      <div className="d flex h-[95vh] flex-col overflow-y-auto p-3 pt-8">
        <ul className="space-y-2 text-sm font-medium">
          {sideBarLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className="flex items-center space-x-4 rounded-lg py-2 hover:bg-primary-200"
              >
                <link.icon className="ml-3" />
                <span className="flex-1 whitespace-nowrap">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <ul className="space-y-2 text-sm font-medium">
            {sideBarSetting.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className="flex items-center space-x-4 rounded-lg py-2 hover:bg-primary-200"
                >
                  <link.icon className="ml-3" />
                  <span className="flex-1 whitespace-nowrap">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default DashboardSideBar;
