"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PiEnvelopeSimpleOpenFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";

export default function Navigation() {
  const iconVariant = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.2,
    },
    whileHover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  const menuVariant = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 1 },
    whileHover: { x: -10, transition: { duration: 0.2 } },
  };

  return (
    <div className="p-nav pointer-events-none fixed z-50 h-screen w-full">
      <div className="flex h-full flex-col justify-between">
        <div className="flex w-full items-start justify-between">
          <Link href="/" className="avatar placeholder">
            <motion.div
              initial={iconVariant.initial}
              animate={iconVariant.animate}
              transition={iconVariant.transition}
              whileHover={iconVariant.whileHover}
              className="pointer-events-auto rounded-full bg-base-content p-1 text-xs font-black text-base-100 lg:p-3 lg:text-sm"
            >
              <p>JR</p>
            </motion.div>
          </Link>
          <ul className="pointer-events-auto flex flex-row space-x-6 text-end text-sm font-bold uppercase lg:flex-col lg:space-x-0">
            <motion.li
              initial={menuVariant.initial}
              animate={menuVariant.animate}
              transition={{ duration: 0.2 }}
              whileHover={menuVariant.whileHover}
            >
              <Link href="/#about">About</Link>
            </motion.li>
            <motion.li
              initial={menuVariant.initial}
              animate={menuVariant.animate}
              transition={{ duration: 0.3 }}
              whileHover={menuVariant.whileHover}
            >
              <Link href="/#works">Works</Link>
            </motion.li>
            <motion.li
              initial={menuVariant.initial}
              animate={menuVariant.animate}
              transition={{ duration: 0.4 }}
              whileHover={menuVariant.whileHover}
            >
              <Link href="/#contact">Contact</Link>
            </motion.li>
          </ul>
        </div>
        <ul className="pointer-events-auto mb-6 w-fit space-y-8">
          <motion.li
            initial={iconVariant.initial}
            animate={iconVariant.animate}
            transition={iconVariant.transition}
            whileHover={iconVariant.whileHover}
          >
            <Link href="https://github.com/SyntheticQuimera" target="_blank">
              <PiGithubLogoFill size={22} />
            </Link>
          </motion.li>
          <motion.li
            initial={iconVariant.initial}
            animate={iconVariant.animate}
            transition={iconVariant.transition}
            whileHover={iconVariant.whileHover}
          >
            <Link
              href="https://www.linkedin.com/in/jaime-roschupkin/"
              target="_blank"
            >
              <PiLinkedinLogoFill size={22} />
            </Link>
          </motion.li>
          <motion.li
            initial={iconVariant.initial}
            animate={iconVariant.animate}
            transition={iconVariant.transition}
            whileHover={iconVariant.whileHover}
          >
            <Link href="mailto:jaimeroschupkin@gmail.com" target="_blank">
              <PiEnvelopeSimpleOpenFill size={22} />
            </Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}
