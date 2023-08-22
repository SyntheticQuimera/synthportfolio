"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("941d2e47-bcfe-4255-b791-8520b70fdc63");
  }, []);

  return null;
}
