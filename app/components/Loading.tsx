import React from "react";

interface LoadingProps {
  black?: boolean;
}

export default function Loading({ black = false }: LoadingProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 ${
        black ? "text-secondary" : ""
      }`}
    >
      <span className="loading loading-ring loading-lg"></span>
      <p className="text-xs font-bold uppercase">just wait, okay?</p>
    </div>
  );
}
