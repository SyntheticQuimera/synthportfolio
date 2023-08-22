import React from "react";

interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  if (!title) {
    return null;
  }
  return (
    <>
      <div className="absolute top-0 hidden w-full select-none items-center gap-8 text-lg font-bold uppercase -tracking-[-0.3em] lg:flex lg:h-24 lg:pl-24 xl:h-28 xl:pl-28">
        <h1 className="">{title}</h1>
        <div className="border-b lg:w-36 xl:w-96" />
      </div>
      <div className="absolute top-0 flex h-screen font-bold uppercase lg:hidden">
        <div className="flex w-12 items-center justify-center">
          <h1 className="-rotate-90 whitespace-nowrap text-lg -tracking-[-0.3em]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
