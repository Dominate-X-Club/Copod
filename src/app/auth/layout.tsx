import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login | Sing-up",
  description: "Login so that you can use the full functionality of Copod.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-screen w-full flex">
        <div className="w-1/2 h-full hidden md:block">
          <Image
            src="/auth-cover.jpeg"
            className="w-full h-full object-cover object-[20%]"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center justify-center px-4 dark:bg-black">
          {children}
        </div>
      </div>
    </>
  );
}
