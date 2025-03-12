"use client";

interface Props {

  title: string;
  text: string;
}

const ProjectCard = ({  title, text }: Props) => {
  return (
    <div
   
      className="w-full h-full bg-black bg-center text-amber-300 border-2 rounded-4xl p-5"
    >
      <div className="flex flex-col gap-10 py-2 z-[50]">
        <h1 className="text-white text-[20px]">{title}</h1>
        <p className= "  text-gray-400 text-[20px]">{text}</p>
        <button className="rounded-[20px] group bg-yellow-400 hover:bg-white-400 px-4 py-3 text-lg text-black max-w-[200px]">Know more</button>
      </div>
    </div>
  );
};

export default ProjectCard;
