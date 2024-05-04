import React, { ReactNode } from "react";
import Navbar from "./navbar/navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      {/* <footer>this is footer</footer> */}
    </>
  );
}
