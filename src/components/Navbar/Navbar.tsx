"use client";
import { name } from "@/data/info";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedCharacters from "@/lib/AnimatedText";

export const NavbarLogo = () => {
  const placeholderText = [{ text: name }];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      {placeholderText.map((item, index) => {
        return <AnimatedCharacters {...item} key={index} />;
      })}
    </motion.div>
  );
};

const navObj: { [key: string]: string } = {
  "/stack": "stack",
  "/work": "work",
  "/guestbook": "guestbook",
};

export const Navbar = () => {
  let pathname = usePathname();
  const [page, setPage] = useState<string | undefined | null>(null);

  useEffect(() => {
    const matchedKey = Object.keys(navObj).find((key) =>
      pathname.startsWith(key)
    );
    setPage(matchedKey ? navObj[matchedKey] : null);
  }, [pathname]);

  return (
    <div className="flex flex-row items-center ml-auto font-bold text-sm font-serif mb-2">
      <AnimatePresence mode="wait">
        <motion.div key={page} className="flex flex-row items-center">
          {page && (
            <motion.div
              initial={{ translateX: 5, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              exit={{ translateX: 5, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex flex-row items-center"
            >
              <Link
                href={page}
                as={`/${page}`}
                className="font-sans mx-1 p-0.5 hover:text-neutral-700 dark:hover:text-neutral-200 "
              >
                {page}
              </Link>
              <span className="mx-2 md:mx-4 cursor-default">/</span>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <Link
        href="/"
        as="/"
        aria-label="Homepage"
        className="text-3xl rounded-md px-1 py-0.5"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <NavbarLogo />
      </Link>
    </div>
  );
};
