"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LayoutAnimation({
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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
