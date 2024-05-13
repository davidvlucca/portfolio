import { projectsInfo } from "../../assets/projectsData";
import { HiExternalLink } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";

import { useTranslation } from "react-i18next";

function ProjectsDesktop() {
  const { t } = useTranslation("global");
  return (
    <div className="px-4">
      <div className=" md:px-10 hidden lg:block">
        <h3 className="text-white md:text-2xl text-xl font-bold px-4 py-2 rounded-xl w-fit bg-[#333333]/50">
          {t("portfolio.emoji")}
        </h3>
        <h1 className="text-2xl md:w-full w-1/2 text-left md:text-4xl py-5 font-extrabold">
          {t("portfolio.title")}
        </h1>
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 2xl:grid-cols-4 xl:gap-x-6 xl:gap-y-12 md:px-12 md:p-10">
        {/* Mapping through projectsInfo array */}

        {projectsInfo.map((project) => (
          <div
            key={project.id}
            className="card bg-zinc-800 bg-opacity-70 rounded-3xl shadow-xl"
          >
            <figure>
              {/* You can use project.img as the source */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title text-2xl text-white font-bold text-left py-2">
                {project.title}
              </h2>
              <div className=" text-left flex space-x-3">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className={`text-white text-sm font-bold px-4 py-2 rounded-xl w-fit ${
                      tech === "Online" ? "bg-green-500" : "bg-[#333333]/50"
                    }`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-white text-left text-xl text-opacity-80 py-4">
                {t(
                  // Access the translation function (t) provided by react-i18next
                  // Use template literals to dynamically generate the translation key
                  // The key is constructed based on the project title, converted to lowercase
                  // and with spaces replaced by underscores
                  `portfolio.${project.title.toLowerCase().replace(/\s+/g, "_")}_desc`
                )}
              </p>

              <div className=" flex flex-wrap flex-end gap-2 justify-end ">
                {/* You can add buttons for GitHub or Demo if available */}
                <div className="flex space-x-3 justify-end ">
                  <button className=" ">
                    <a
                      href={project.github}
                      className="text-right flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
                    >
                      <h1 className="text-white text-sm flex space-x-1 font-bold px-3 py-2 rounded-xl bg-black items-center">
                        <RxGithubLogo className=" h-6 w-auto" />
                      </h1>
                    </a>
                  </button>
                  <button className=" flex text-right">
                    <a
                      href={project.demo}
                      className="text-right flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
                    >
                      <h1 className="text-white text-base flex space-x-2 font-bold px-4 py-2 rounded-xl bg-black items-center">
                        <p>Demo</p>
                        <HiExternalLink className=" h-4 w-auto" />
                      </h1>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsDesktop;
