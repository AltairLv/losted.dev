"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25 }}
        className="flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
