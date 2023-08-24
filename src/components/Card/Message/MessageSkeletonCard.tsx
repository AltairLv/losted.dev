export const MessageSkeletonCard = ({ x }: { x: number }) => {
  return (
    <div>
      <ul className="list-disc pl-5 mt-4 space-y-4 animate-pulse">
        {Array(x)
          .fill(null)
          .map((_, index: number) => (
            <li key={index}>
              <span className="inline-block h-5 w-full bg-neutral-300 rounded dark:bg-zinc-800"></span>
            </li>
          ))}
      </ul>
    </div>
  );
};
