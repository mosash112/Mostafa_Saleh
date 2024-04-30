import { Project, ProjectType } from "@/components/Project";

async function getProps(): Promise<ProjectType[]> {
    const response = await fetch('http://localhost:3000/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'backend');

    return filteredProjects;
}

async function Backend() {
    const projects = await getProps();
    return (
        <div className="flex flex-col flex-1 m-8 lg:h-fit h-full">
            <h1 className="pb-3 font-bold text-2xl">Back End Projects</h1>
            <p className="pb-3">Backend apis built using node js with express js, SQL and no-SQL databases.</p>
            {projects?.map((project: ProjectType, index: number) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Backend;