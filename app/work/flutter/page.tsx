import { Project, ProjectType } from "@/components/Project";

import fs from "fs";
import path from "path";

async function getflutter(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const projects: ProjectType[] = JSON.parse(fileData);
  const filteredProjects = projects.filter(
    (project) => project.category === "flutter" && project.visibility === true
  );

  return filteredProjects;
}

async function Flutter() {
  const flutterProjects = await getflutter();
  return (
    <div className="flex flex-col flex-1 m-4 lg:m-12 lg:h-fit h-full">
      <h1 className="pb-3 font-outfit font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight">Flutter Projects</h1>
      <p className="pb-3 text-lg">
        Mobile applications built using the Flutter framework.
      </p>
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
