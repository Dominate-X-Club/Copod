import React, { ReactNode } from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
}
