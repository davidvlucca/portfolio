import { projectsInfo } from "../../assets/projectsData";
import { HiExternalLink } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";

import { useTranslation } from "react-i18next";

function ProjectsMobile() {
  const { t } = useTranslation("global");

  return (
    <div className="pb-10 px-4 mM:px-2 mS:px-0 lg:hidden">
      <div className="py-1 px-4 md:p-10">
        <h3 className="text-white md:text-2xl text-xl font-bold px-4 py-2 rounded-xl w-fit bg-[#333333]/50">
          {t("portfolio.emoji")}
        </h3>
        <h1 className="text-2xl md:w-full w-1/2 text-left md:text-4xl py-5 font-extrabold">
          {t("portfolio.title")}
        </h1>
      </div>
      <div className="md:px-4 carousel-container">
        <div className="carousel carousel-center m-4 space-x-4 ">
          {projectsInfo.map((item) => (
            <div
              key={item.id}
              className="carousel-item bg-zinc-800 bg-opacity-70 px-6 pt-7 rounded-3xl mS:max-w-[70vw] mM:max-w-[65vw] max-w-[60vw] flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-2xl text-white font-bold text-left py-2">
                  {item.title}
                </h3>
                <p className="text-left text-white text-base md:text-lg text-opacity-80 ">
                  {t(
                    // Access the translation function (t) provided by react-i18next
                    // Use template literals to dynamically generate the translation key
                    // The key is constructed based on the project title, converted to lowercase
                    // and with spaces replaced by underscores
                    `portfolio.${item.title.toLowerCase().replace(/\s+/g, "_")}_desc`
                  )}
                </p>

                <div className="py-4 flex space-x-3 text-left ">
                  {item.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`text-white text-sm mS:text-xs mM:text-xs font-bold px-4 py-2 mS:px-3 rounded-xl w-fit ${
                        tech === "Online" ? "bg-green-500" : "bg-[#333333]/50"
                      }`}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              {/* Container for image and buttons */}
              <div className="flex flex-col justify-end">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-full"
                />
                <div className="flex space-x-3 justify-end ">
                  <button className="py-5 ">
                    <a
                      href={item.github}
                      target="_blank"
                      className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
                    >
                      <h1 className="text-white text-sm flex space-x-1 font-bold px-3 py-2 rounded-xl bg-black items-center">
                        <RxGithubLogo className="h-6 w-auto" />
                      </h1>
                    </a>
                  </button>
                  <button className="py-5 flex text-left">
                    <a
                      href={item.demo}
                      className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
                    >
                      <h1 className="text-white text-base flex space-x-2 font-bold px-4 py-2 rounded-xl bg-black items-center">
                        <p>Demo</p>
                        <HiExternalLink className="h-4 w-auto" />
                      </h1>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsMobile;
