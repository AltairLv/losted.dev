import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h1>Something bad happened... </h1>
        <p>but here is Totoro</p>
        <Image
          src="/assets/notfound.gif"
          alt="Waving"
          className="rounded w-4/5 md:w-2/6 object-cover my-6"
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="/assets/notfound.gif"
          priority
        />
        <Link
          href="/"
          as="/"
          className="p-2 px-4 max-w-[150px] hover:text-neutral-700 dark:hover:text-neutral-200 border-[1px] dark:border-[#FFFFFF20] border-[#100F0F20] rounded-lg"
        >
          Home ?
        </Link>
      </div>
    </>
  );
}
