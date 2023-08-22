import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CrispProvider from "./components/CrispProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Synth.Dev",
  description: "Create by Jaime Roschupkin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="mytheme" lang="en" className="overflow-hidden">
      <CrispProvider />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
