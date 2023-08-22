"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  PiEnvelopeSimpleOpenFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";

export default function Navigation() {
  return (
    <div className="p-nav pointer-events-none fixed z-50 h-screen w-full">
      <div className="flex h-full flex-col justify-between">
        <div className="flex w-full items-start justify-between">
          <Link href="/" className="avatar placeholder">
            <div className="pointer-events-auto rounded-full bg-base-content p-1 text-xs font-black text-base-100 lg:p-3 lg:text-sm">
              <p>JR</p>
            </div>
          </Link>
          <ul className="pointer-events-auto flex flex-row space-x-6 text-end text-sm font-bold uppercase lg:flex-col lg:space-x-0">
            <li className="hover:-translate-x-3">
              <Link href="/#about">About</Link>
            </li>
            <li className="hover:-translate-x-3">
              <Link href="/#works">Works</Link>
            </li>
            <li className="hover:-translate-x-3">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <ul className="pointer-events-auto mb-6 w-fit space-y-8">
          <li>
            <Link href="https://github.com/SyntheticQuimera" target="_blank">
              <PiGithubLogoFill size={22} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/jaime-roschupkin/"
              target="_blank"
            >
              <PiLinkedinLogoFill size={22} />
            </Link>
          </li>
          <li>
            <Link href="mailto:jaimeroschupkin@gmail.com" target="_blank">
              <PiEnvelopeSimpleOpenFill size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
