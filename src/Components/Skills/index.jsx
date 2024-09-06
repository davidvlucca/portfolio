import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiDaisyui } from "react-icons/si";

import { useTranslation } from "react-i18next";

function Technologies() {
  const { t } = useTranslation("global");

  return (
    <div className="px-6 mM:px-2 mS:px-0 pb-10">
      <div className="py-1 px-4 md:p-10">
        <h3 className="text-white mS:text-base mM:text-lg md:text-2xl text-xl font-bold px-3 py-2 rounded-xl w-fit bg-[#333333]/50">
          {t("skills.emoji")}
        </h3>
        <h1 className="text-2xl md:text-3xl mS:text-xl md:w-2/3 w-1/2 text-left py-5 font-extrabold">
          {t("skills.title")}
        </h1>
        <div className="flex space-x-5 max-w-[100vw]">
          <FaReact className=" h-14 w-auto" />
          <SiTypescript className="h-14 w-auto" />
          <IoLogoJavascript className=" h-14 w-auto" />
          <SiTailwindcss className=" h-14 w-auto" />
          <FaNodeJs className=" h-14 w-auto" />
          <BiLogoMongodb className=" mS:hidden h-14 w-auto" />
          <SiDaisyui className="hidden sm:block h-14 w-auto" />
          <IoLogoHtml5 className="hidden sm:block h-14 w-auto" />
          <IoLogoCss3 className="hidden sm:block h-14 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
