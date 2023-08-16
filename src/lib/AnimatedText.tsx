"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const Wrapper = (props: { children: React.ReactNode }) => {
  return props.children;
};

const AnimatedCharacters = (props: { text: string }) => {
  const item: Variants = {
    hidden: {
      y: "300%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: "10%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };
  const splitWords = props.text.split(" ");
  const words: string[][] = splitWords.map((word) => word.split(""));

  return (
    <>
      {words.map((word: string[], index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element: string, index) => {
              return (
                <div
                  key={index}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <motion.span
                    style={{
                      display: "inline-block",
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </div>
              );
            })}
          </Wrapper>
        );
      })}
    </>
  );
};

export default AnimatedCharacters;
