import { Project, ProjectType } from "@/components/Project";

async function getflutter(): Promise<ProjectType[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/projects.json"
  );
  const projects: ProjectType[] = await response.json();
  const filteredProjects = projects.filter(
    (project) => project.category === "flutter" && project.visibility === true
  );

  return filteredProjects;
}

async function Flutter() {
  const flutterProjects = await getflutter();
  return (
    <div className="flex flex-col flex-1 m-4 lg:m-12 lg:h-fit h-full">
      <h1 className="pb-3 font-bold text-2xl">Flutter Projects</h1>
      <p className="ms-3 mb-3">apps built using Flutter.</p>
      {flutterProjects.length === 0 ? (
        <p className="ms-3 mb-3">No projects to display.</p>
      ) : (
        flutterProjects?.map((project: ProjectType, index: number) => (
          <Project key={index} {...project} />
        ))
      )}
    </div>
  );
}

export default Flutter;
