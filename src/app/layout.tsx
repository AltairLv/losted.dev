import "./globals.css";
import localFont from "next/font/local";
import React from "react";
import clsx from "clsx";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar/Navbar";
import { SmoothScroll } from "@/lib/SmoothScroll";
import MotionLayout from "@/components/Layout/MotionLayout";

const SpaceMono = localFont({
  src: "../../public/fonts/space-mono-regular.ttf",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://losted.dev"),
  title: {
    default: "Losted - Homepage",
    template: "%s | Losted",
  },
  description:
    "Self-taught software developer and language enthusiast diving into front-end development. Always learning, always coding.",
  openGraph: {
    title: "Losted's Homepage",
    description:
      "Self-taught software developer and language enthusiast diving into front-end development. Always learning, always coding.",
    url: "https://losted.dev",
    siteName: "Losted",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Losted's Homepage",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-OriginalLight dark:text-white dark:bg-OriginalDark",
        SpaceMono.className
      )}
    >
      <body className="antialiased max-w-3xl mb-16 md:mb-24 flex mt-2 md:mt-20 lg:mt-30 mx-auto">
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0 mx-2 md:mx-0">
          <Navbar />
          <MotionLayout>{children}</MotionLayout>
          <SmoothScroll />
        </main>
      </body>
    </html>
  );
}
