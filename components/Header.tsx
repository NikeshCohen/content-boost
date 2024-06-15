import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./ui/ThemeToggle";
import { navLinks } from "@/constants/navLinks";

import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="layout flex justify-between">
      <div className="flex items-center justify-center space-x-1">
        <p className="text-lg font-bold">ContentBoost</p>
        <Image src="/logo.png" alt="" width={25} height={25} />
      </div>
      <div className="flex items-center justify-center space-x-8">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center space-x-4">
          <ThemeToggle />
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
