"use client";

import { signIn, signOut } from "next-auth/react";
import { GitHubIcon, GoogleIcon } from "@/components/Icons";

export function SignOut() {
  return (
    <button
      className="text-sm text-neutral-700 dark:text-neutral-200 py-1 pr-0.5 pl-2 dark:hover:text-neutral-300 hover:text-neutral-600 border rounded-md dark:border-neutral-300/20 border-neutral-600/20"
      onClick={() => signOut()}
    >
      Logout 🎈
    </button>
  );
}

export function SignIn({ service }: { service: "Google" | "Github" }) {
  return (
    <button
      className="flex bg-white dark:bg-black text-neutral-600 dark:text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-neutral-800 hover:dark:text-white transition-all border border-slate-300"
      onClick={async () => await signIn(service.toLowerCase())}
    >
      {service === "Google" ? <GoogleIcon /> : <GitHubIcon />}
      <div className="ml-3">Sign in with {service}</div>
    </button>
  );
}
