import Image from 'next/image';

export function Search() {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image
            aria-hidden
            src="/search.svg"
            className="opacity-[0.8]"
            alt="File icon"
            width={15}
            height={15}
            priority={false}
          />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-2 ps-10 text-sm text-white border border-white/80 rounded-lg bg-transparent focus:outline-none"
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
}
