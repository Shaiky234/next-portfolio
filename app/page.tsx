import Link from "next/link";
import Image from "next/image";
import profilepic from "../public/images/profilepicpng.png";


export default function Home() {
  return (
    <div className="relative">
      
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full max-w-[1150px] justify-center items-center flex h-full bg-black gap-34">
          <div className="flex flex-col gap-5">
            <h1 className="text-[50px] text-amber-400 font-semibold">
              Hi, I’m Shaik Mohammad.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
                {""} Frontend Developer.
              </span>
            </h1>
            <p className="text-gray-200 hidden md:block">
              Welcome to my Portfolio, I specialize in building responsive and
              interactive websites using the latest web technologies. Whether it
              is a personal project or a large-scale application, I am dedicated
              to delivering high-quality, performance-optimized, and visually
              appealing websites.
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
                Contact me
              </Link>
            </div>
          </div>
          {/* mobile view */}
          <div className=" flex flex-col md:hidden gap-4">
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
              Contact me
            </Link>
          </div>
          <div>
            <Image
              src={profilepic}
              alt="logo"
              className="w-250 h-auto object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
