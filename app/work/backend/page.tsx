import { Project, ProjectType } from "@/components/Project";

async function getnodejs(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'nodejs');

    return filteredProjects;
}

async function getdotnet(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === '.net');

    return filteredProjects;
}

async function Backend() {
    const nodeJsProjects = await getnodejs();
    const detNetProjects = await getdotnet();
    return (
        <div className="flex flex-col flex-1 m-12 lg:h-fit h-full">
            <h1 className="pb-3 font-bold text-2xl">Back End Projects</h1>
            <div className="border rounded-lg mb-3">
                <h2 className="m-3 font-semibold text-lg">Node JS</h2>
                <p className="ms-3 mb-3">Backend apis built using node js with express js, SQL and no-SQL databases.</p>
                {nodeJsProjects?.map((project: ProjectType, index: number) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className="border rounded-lg mb-3">
                <h2 className="m-3 font-semibold text-lg">.Net</h2>
                <p className="ms-3 mb-3">Backend apis built using .net SQL databases.</p>
                {detNetProjects?.map((project: ProjectType, index: number) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Backend;