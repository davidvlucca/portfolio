import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiDaisyui } from "react-icons/si";

function Technologies() {
  return (
    <div className=" pb-10">
      <div className="py-1 px-4 sm:p-24">
        <h3 className="text-white text-xl font-bold px-4 py-2 rounded-xl w-fit bg-[#333333]/50">
          🧑‍💻 Skills
        </h3>
        <h1 className="text-3xl w-1/2 text-left py-5 font-extrabold">
          Tecnologias e habilidades
        </h1>
        <div className="flex space-x-5 max-w-[100vw]">
          <FaReact className=" h-14 w-auto" />
          <IoLogoJavascript className=" h-14 w-auto" />
          <SiTailwindcss className=" h-14 w-auto" />
          <FaNodeJs className=" h-14 w-auto" />
          <BiLogoMongodb className=" h-14 w-auto" />
          <SiDaisyui className=" h-14 w-auto" />
          <IoLogoHtml5 className="hidden sm:block h-14 w-auto" />
          <IoLogoCss3 className="hidden sm:block h-14 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Technologies