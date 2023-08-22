import React from "react";

interface ListItemProps {
  title: string;
  desc: string;
}

const ListItem = ({ title, desc }: ListItemProps) => {
  return (
    <li className="group relative flex w-full items-center overflow-hidden">
      <span className="ml-2 text-7xl font-bold uppercase transition-all duration-300 ease-in-out group-hover:text-primary-content lg:ml-4 lg:text-8xl xl:text-9xl">
        {title}
      </span>
      <div className="absolute z-[-1] flex h-full w-0 items-center justify-end bg-primary pr-[1px] text-primary-content transition-all duration-300 ease-in-out group-hover:w-full">
        <span className="mr-2 hidden w-64 text-xs font-semibold opacity-0 group-hover:opacity-100 group-hover:sm:block lg:mr-4 lg:w-96 xl:text-sm">
          {desc}
        </span>
      </div>
    </li>
  );
};

export default function WhatIDoSection() {
  return (
    <div className="p-section flex h-full w-full items-center justify-center">
      <ul className="cursor-text-xxl flex w-full select-none flex-col">
        <ListItem
          title="web"
          desc="See mind-bending pages? Next.JS, isolation and coffee fuel - web development at your service!"
        />
        <ListItem
          title="Mobile"
          desc="Clearly, insufficient apps shake brains with notifications. Concentration, overrated?"
        />
        <ListItem
          title="UI/UX"
          desc="Embracing animations and hidden buttons, modern UX peak. Because nothing's friendlier than an interactive maze!"
        />
      </ul>
    </div>
  );
}
