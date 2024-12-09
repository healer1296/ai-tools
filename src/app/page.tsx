import Image from 'next/image';
import { AIList } from './list';
import { Social } from '@/components/social';
import { Search } from '@/components/search';

export default function Home() {
  return (
    <>
      <header className="fixed top-0 z-10 py-4 md:py-0 bg-slate-950 w-full">
        <div className="flex flex-col gap-4 md:flex-row justify-start md:justify-between items-center h-32 md:h-20 px-4 md:px-8">
          <a className="flex items-center justify-start gap-3" href="/">
            <Image
              aria-hidden
              src="/logo.svg"
              alt="File icon"
              width={30}
              height={30}
              priority={false}
            />

            <h1 className="text-3xl font-black text-cyan-600">AITools</h1>
          </a>
          <div className="flex flex-col md:flex-row justify-end items-center gap-6">
            {/* <div className="hidden md:block">
              <Search />
            </div> */}
            <Social />
          </div>

          {/* <div className="md:hidden">
            <Search />
          </div> */}
        </div>
      </header>

      <main className="px-4 md:px-8 pt-36 md:pt-20">
        {AIList.map((ai) => (
          <section>
            <h3 className="text-xl font-bold mb-4 mt-8">{ai.label}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5">
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
        <div className="flex justify-center items-center">
          <span>© 2024 AI Tools. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}
