import Link from "next/link";
import Image from "next/image";
import profilepic from "../public/images/profilepicpng.png";

export default function Home() {
  return (
    <main className=" flex justify-center  items-center w-[100%] h-auto ">
      <div className="flex  flex-col justify-center  items-center md:flex-row gap-34 h-auto">

        <div>
          <div className="flex   items-center w-full h-full bg-black">
            <div className=" flex flex-col gap-5 z-[10] max-w-[750px]">
              <h1 className="text-[50px] text-amber-400 font semibold">
                Hi, I’m Shaik Mohammad.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
                  {""} Frontend Developer.
                </span>
              </h1>
              <p className="text-gray-200 hidden md:block">
                Welcome to my Portfolio, I specialize in building responsive and
                interactive websites using the latest web technologies. Whether
                it is a personal project or a large-scale application, I am
                dedicated to delivering high-quality, performance-optimized, and
                visually appealing websites.
              </p>
              <div className="flex-col md:flex-row hidden md:flex gap-5">
                <Link
                  href="/myskills"
                  className="rounded-[20px] group relative bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
                >
                  My skills
                </Link>
                <Link
                  href="/my-projects"
                  className="rounded-[20px] group relative bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
                >
                  <div className="absolute rounded-[20px] z-[1] bg-amber-50 inset-0 opacity-0 group-hover:opacity-20" />
                  My projects
                </Link>
                <Link
                  href="/contactme"
                  className="rounded-[20px] group relative bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
                >
                  <div className="absolute rounded-[20px] z-[1] bg-amber-50 inset-0 opacity-0 group-hover:opacity-20" />
                  Conatct me
                </Link>
              </div> 
            </div>
          </div>
          <div className=" flex  flex-col md:hidden gap-4">
            <Link
              href="/myskills"
              className="rounded-[20px] group bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
            >
              My projects
            </Link>
            <Link
              href="/contactme"
              className="rounded-[20px] group bg-yellow-500 hover:bg-white-400 px-5 py-3 text-lg text-black max-w-[200px] "
            >
              Conatct me
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={profilepic}
            alt="logo"
            className="w-120 h-auto object-contain rounded-full"
          />
        </div>
        
      </div>

    </main>
  );
}
