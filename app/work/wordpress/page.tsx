import { Project, ProjectType } from "@/components/Project";

async function getwordpress(): Promise<ProjectType[]> {
  const response = await fetch(process.env.BASE_URL + "/projects.json");
  const projects: ProjectType[] = await response.json();
  const filteredProjects = projects.filter(
    (project) => project.category === "wordpress"
  );

  console.log(`Filtered WordPress Projects: ${filteredProjects}`);
  return filteredProjects;
}

async function WordPress() {
  const projects = await getwordpress();
  return (
    <div className="flex flex-col flex-1 m-4 lg:m-12 lg:h-fit h-full">
      <h1 className="pb-3 font-bold text-2xl">Wordpress Projects</h1>
      <p className="ms-3 mb-3">apps built using wordpress.</p>
      {projects?.map((project: ProjectType, index: number) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default WordPress;
