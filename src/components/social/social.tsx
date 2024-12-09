import Image from 'next/image';

export function Social() {
  return (
    <div className="flex gap-6">
      <a
        href="https://www.facebook.com/profile.php?id=61570220338800"
        target="_blank"
      >
        <Image
          className="hover:scale-[120%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
          aria-hidden
          src="/facebook.svg"
          alt="File icon"
          width={25}
          height={25}
          priority={false}
        />
      </a>
      <a href="https://www.instagram.com/jonhsmith140389" target="_blank">
        <Image
          className="hover:scale-[120%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
          aria-hidden
          src="/instagram.svg"
          alt="File icon"
          width={25}
          height={25}
          priority={false}
        />
      </a>
      <a href="https://www.threads.net/@jonhsmith140389" target="_blank">
        <Image
          className="hover:scale-[120%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
          aria-hidden
          src="/thread.svg"
          alt="File icon"
          width={25}
          height={25}
          priority={false}
        />
      </a>

      <a href="https://x.com/JonhSmith140389" target="_blank">
        <Image
          className="hover:scale-[120%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
          aria-hidden
          src="/x.svg"
          alt="File icon"
          width={25}
          height={25}
          priority={false}
        />
      </a>

      {/* <button className="flex items-center gap-2 px-4 py-1 border border-cyan-500 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-900 to-teal-900 hover:scale-[110%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)]">
        Buy me a coffee{' '}
        <Image
          aria-hidden
          src="/heart.svg"
          alt="File icon"
          width={15}
          height={15}
          priority={false}
        />
      </button> */}
    </div>
  );
}
