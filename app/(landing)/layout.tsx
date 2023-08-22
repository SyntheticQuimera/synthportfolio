"use client";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Navigation from "@/app/components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AnimatedBackground />
      <Navigation />
      {children}
    </main>
  );
}
