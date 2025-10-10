
import { Link } from "react-router-dom";
// import MainBg from "./assets/mainbg2.jpg";
import Project1 from "./assets/project0001.jpg";
import Project2 from "./assets/project0002.jpg";
import Project3 from "./assets/project0003.jpg";


const projects = [
  { id: 1, title: "Project 1", image: Project1, path: "/project1" },
  { id: 2, title: "Project 2", image: Project2, path: "/project2" },
  { id: 3, title: "Project 3", image: Project3, path: "/project3" },

];

const Projects = () => {
  return (
    <section className="w-full bg-purple-200 ">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 p-4">
        
        {projects.map((project) => (
          <Link
  to={project.path}
  key={project.id}
  className="relative h-64 sm:h-72 md:h-80 lg:h-[28rem] w-full overflow-hidden rounded-lg group"
>
  <div
    className="h-full w-full bg-cover bg-center transform transition duration-500 lg:group-hover:scale-95"
    style={{ backgroundImage: `url(${project.image})` }}
  >
    {/* Overlay — only visible on large screens */}
    <div className="absolute inset-0 hidden lg:block bg-black bg-opacity-40 opacity-0 lg:group-hover:opacity-100 transition duration-500"></div>

    {/* Title */}
    <span className="absolute bottom-6 left-6 font-netflix text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white transition duration-500 lg:group-hover:scale-110 lg:group-hover:text-purple-900">
      {project.title}
    </span>
  </div>
</Link>

        ))}
      </div>
    </section>
  );
};

export default Projects;
