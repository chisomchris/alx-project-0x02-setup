import React, { ReactElement } from "react";
import Header from "./Header";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Layout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} bg-zinc-50 font-sans dark:bg-black`}
    >
      <Header />
      <main className="px-4">{children}</main>
    </div>
  );
};

export default Layout;
