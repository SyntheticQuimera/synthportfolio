"use client";
import AnimatedBackground from "@/app/components/AnimatedBackground";
import Navigation from "@/app/components/Navigation";
import AnimatedCursor from "react-animated-cursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AnimatedBackground />
      <Navigation />
      <AnimatedCursor
        innerSize={0}
        outerSize={16}
        color="255, 255, 255"
        innerScale={0}
        outerAlpha={1}
        outerScale={2}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "video",
          {
            target: ".cursor-button-card",
            ...{
              outerScale: 8,
              innerSize: 16,
              innerScale: 6,
              innerStyle: {
                backgroundImage: 'url("/view-project.svg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
            },
          },
          {
            target: ".cursor-text-xxl",
            ...{
              outerScale: 12,
            },
          },
        ]}
      />
      {children}
    </main>
  );
}
