import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center max-w-5xl m-auto h-20">
          <div className="flex items-center gap-3">
            <Image
              aria-hidden
              src="/logo.svg"
              alt="File icon"
              width={30}
              height={30}
              priority={false}
            />
            <h1 className="text-3xl font-black text-cyan-800">AI-Tools</h1>
          </div>
          <form className='w-1/2'>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Image
                  aria-hidden
                  src="/search.svg"
                  className='opacity-[0.8]'
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
          <div className="flex gap-6">
            <a href="/" target="_blank">
              <Image
                className="hover:scale-[110%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
                aria-hidden
                src="/facebook.svg"
                alt="File icon"
                width={25}
                height={25}
                priority={false}
              />
            </a>
            <a href="/" target="_blank">
              <Image
                className="hover:scale-[110%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
                aria-hidden
                src="/instagram.svg"
                alt="File icon"
                width={25}
                height={25}
                priority={false}
              />
            </a>
            <a href="/" target="_blank">
              <Image
                className="hover:scale-[110%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)] opacity-[0.8]"
                aria-hidden
                src="/thread.svg"
                alt="File icon"
                width={25}
                height={25}
                priority={false}
              />
            </a>

            <button className="flex items-center gap-2 px-4 py-1 border border-cyan-500 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-900 to-teal-900 hover:scale-[110%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)]">
              Buy me a coffee{' '}
              <Image
                aria-hidden
                src="/heart.svg"
                alt="File icon"
                width={15}
                height={15}
                priority={false}
              />
            </button>
          </div>
        </div>
      </header>

      <main></main>
    </>
  );
}
