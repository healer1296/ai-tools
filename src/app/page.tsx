import Image from 'next/image';
import { AIList } from './list';
import { Social } from '@/components/social';

export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center h-20 px-8">
          <a className="flex items-center gap-3" href="/">
            <Image
              aria-hidden
              src="/logo.svg"
              alt="File icon"
              width={30}
              height={30}
              priority={false}
            />
            <h1 className="text-3xl font-black text-cyan-600">AI-Tools</h1>
          </a>
          <div className='flex justify-end items-center gap-6'>
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

            <Social />
          </div>
        </div>
      </header>

      <main className="px-8">
        {AIList.map((ai) => (
          <section>
            <h3 className="text-xl font-bold mb-4 mt-8">{ai.label}</h3>

            <div className="grid grid-cols-3 grid-flow-rows gap-5">
              {ai.ai_list.map((item) => (
                <a href={item.link} target="blank">
                  <div className="flex items-center gap-4 p-4 bg-slate-900 border border-white/50 rounded-md cursor-pointer hover:scale-[103%] duration-700 ease-[cubic-bezier(.24,1.61,.72,1.01)]">
                    <Image
                      aria-hidden
                      src={item.logo}
                      alt="File icon"
                      width={item.width}
                      height={item.height}
                      priority={false}
                    />

                    <div className="h-14 w-[1px] bg-white/50"></div>

                    <div>
                      <h3 className="text-lg text-white/90 font-semibold">
                        {item.label}
                      </h3>

                      <p className="text-sm text-white/50 font-medium leading-relaxed tracking-wider line-clamp-1 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="mt-12 py-6 px-8 border-t border-white/80">
        <div className="flex justify-between">
          <span>© 2024 AI Tools. All Rights Reserved.</span>
          <Social />
        </div>
      </footer>
    </>
  );
}
