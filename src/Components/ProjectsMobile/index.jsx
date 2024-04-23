import { projectsInfo } from "../../assets/projectsData";
import { HiExternalLink } from "react-icons/hi";
import { RxGithubLogo } from "react-icons/rx";

function ProjectsMobile() {


  return (
    <div className="pb-10 px-4">
      <div className="py-1 px-4 sm:p-24">
        <h3 className="text-white text-xl font-bold px-4 py-2 rounded-xl w-fit bg-[#333333]/50">
          🔗 Portfolio
        </h3>
        <h1 className="text-2xl w-1/2 text-left py-5 font-extrabold">
          Trabalhos e projetos
        </h1>
      </div>
      <div className=" carousel-container">
        <div className="carousel carousel-center m-4 space-x-4 ">
          {projectsInfo.map((item) => (
            <div
              key={item.id}
              className="carousel-item bg-gradient-to-t from-primary from-5% px-6 pt-7 rounded-3xl max-w-[55vw]"
            >
              <div className="">
                <h3 className="text-2xl font-bold text-left py-2">
                  {item.title}
                </h3>
                <p className="text-left text-base text-opacity-80 ">
                  {item.description}
                </p>
                <div className="py-4 flex space-x-3 text-left">
                  {item.technologies.map((tech, index) => (
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
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-full"
                />
                <div className="flex space-x-3 justify-end ">
                  <button className=" py-5 ">
                    <a
                      href={item.github}
                      target="_blank"
                      className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
                    >
                      <h1 className="text-white text-sm flex space-x-1 font-bold px-3 py-2 rounded-xl bg-black items-center">
                        <RxGithubLogo className=" h-6 w-auto" />
                      </h1>
                    </a>
                  </button>
                  <button className=" py-5 flex text-left">
                    <a
                      href={item.demo}
                      className="text-left flex space-x-1 items-center hover:opacity-70 transition-opacity duration-300"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsMobile;
