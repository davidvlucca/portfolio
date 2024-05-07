import { projectsInfo } from "../../assets/projectsData";

function ProjectsDesktop() {
  return (
    <div className="px-4">
      <div className=" md:px-10 hidden lg:block">
        <h3 className="text-white md:text-2xl text-xl font-bold px-4 py-2 rounded-xl w-fit bg-[#333333]/50">
          🔗 Portfolio
        </h3>
        <h1 className="text-2xl md:w-full w-1/2 text-left md:text-4xl py-5 font-extrabold">
          Trabalhos e projetos
        </h1>
      </div>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-x-16 xl:gap-y-12 md:px-12 md:p-10">
        {/* Mapping through projectsInfo array */}

        {projectsInfo.map((project) => (
          <div
            key={project.id}
            className="card bg-gradient-to-t from-primary from-5% bg-opacity-70 bg-base-100 border rounded-3xl shadow-xl"
          >
            <figure>
              {/* You can use project.img as the source */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                {/* You can add buttons for GitHub or Demo if available */}
                {project.github && (
                  <a href={project.github} className="btn btn-primary mr-2">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="btn btn-primary">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsDesktop;
