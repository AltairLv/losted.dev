export default function SpotifySkeletonCard() {
  return (
    <div className="flex my-10 animate-pulse justify-center">
      <div className="flex flex-row min-w-[250px] py-1.5 px-2 border-[1px] dark:border-[#FFFFFF20] border-[#100F0F20] rounded-md justify-between items-center space-x-3 z-10">
        <div className="bg-gray-200 dark:bg-neutral-800 h-11 w-11 rounded"></div>
        <div className="flex flex-col max-w-[120px] mt-1">
          <div className="rounded-sm h-3 w-20 bg-gray-200 dark:bg-neutral-800 mb-1"></div>
          <div className="rounded-sm h-2.5 w-10 bg-gray-200 dark:bg-neutral-800 mb-1"></div>
          <div className="rounded-sm h-2.5 bg-gray-200 dark:bg-neutral-800 mb-1"></div>
        </div>
        <div>
          <div className="w-5 h-5 bg-gray-200 dark:bg-neutral-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
