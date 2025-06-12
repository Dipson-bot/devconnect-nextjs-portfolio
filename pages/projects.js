import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}
