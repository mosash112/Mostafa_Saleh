import { Project, ProjectType } from "@/components/Project";

async function getProps(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'mern');

    return filteredProjects;
}

async function Mern() {
    const projects = await getProps();
    return (
        <div className="flex flex-col flex-1 m-12 lg:h-fit h-full">
            <h1 className="pb-3 font-bold text-2xl">MERN Projects</h1>
            <p className="pb-3">Profissional website built using React js (vite js, next js) and node js.</p>
            {projects?.map((project: ProjectType, index: number) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Mern;