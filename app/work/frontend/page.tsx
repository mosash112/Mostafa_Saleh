import { Project, ProjectType } from "@/components/Project";

async function getProps(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'frontend');

    return filteredProjects;
}

async function Frontend() {
    const projects = await getProps();
    return (
        <div className="flex flex-col flex-1 m-8 lg:h-fit h-full">
            <h1 className="pb-3 font-bold text-2xl">Front End Projects</h1>
            <p className="pb-3">Re-usable frontend built using react js with bootstrap, Tailwind CSS.</p>
            {projects?.map((project: ProjectType, index: number) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Frontend;