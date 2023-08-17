"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatDistance } from "date-fns";
import { ISpotifyClientCard } from "@/types/types";

const SpotifyClientCard = ({ children, playedAt }: ISpotifyClientCard) => {
  const [hover, setHover] = useState(false);
  const [width, setWidth] = useState(0);
  let playedMessage;

  if (playedAt) {
    playedMessage = formatDistance(new Date(playedAt), new Date(), {
      addSuffix: true,
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth > 640 ? setWidth(640) : setWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: [0, 1] }}
        transition={{ duration: 0.2 }}
        className="flex flex-col h-16"
        onMouseEnter={() => (width >= 640 ? setHover(true) : setHover(false))}
        onMouseLeave={() => setHover(false)}
      >
        {children}
        <div className="flex justify-center z-0 mt-2">
          {width >= 640 ? (
            <AnimatePresence>
              {hover && (
                <motion.div
                  key="modal"
                  initial={{ translateY: -20, opacity: 0 }}
                  animate={{ translateY: 0, opacity: [0, 1] }}
                  exit={{ translateY: -15, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <p className="text-sm select-none">{playedMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <p className="text-sm select-none">{playedMessage}</p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SpotifyClientCard;
