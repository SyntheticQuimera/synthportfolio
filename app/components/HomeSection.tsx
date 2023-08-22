import React from "react";

export default function HomeSection() {
  return (
    <div className="grid h-full w-full place-content-center">
      <div className="cursor-text-xxl select-none space-y-2 text-center text-5xl font-black uppercase md:text-7xl xl:text-9xl">
        <h1 className="text-base font-bold -tracking-[-0.3em]">
          Jaime Roschupkin
        </h1>
        <div>
          <h1>
            Front <span className="text-indigo-600">End</span>
            <br />
            Developer
          </h1>
        </div>
      </div>
    </div>
  );
}
