import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
