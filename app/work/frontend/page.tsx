import { Project, ProjectType } from "@/components/Project";

async function getReact(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'react');

    return filteredProjects;
}

async function getNext(): Promise<ProjectType[]> {
    const response = await fetch(process.env.BASE_URL + '/projects.json');
    const projects: ProjectType[] = await response.json();
    const filteredProjects = projects.filter(project => project.category === 'next');

    return filteredProjects;
}

async function Frontend() {
    const reactProjects = await getReact();
    const nextProjects = await getNext();
    return (
        <div className="flex flex-col flex-1 m-12 lg:h-fit h-full">
            <h1 className="pb-3 font-bold text-2xl">Front End Projects</h1>
            <div className="border rounded-lg mb-3">
                <h2 className="m-3 font-semibold text-lg">React</h2>
                <p className="ms-3 mb-3">Re-usable frontend built using react js with bootstrap, Tailwind CSS.</p>
                {reactProjects?.map((project: ProjectType, index: number) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className="border rounded-lg mb-3">
                <h2 className="m-3 font-semibold text-lg">Next</h2>
                <p className="ms-3 mb-3">Re-usable frontend built using next js with Tailwind CSS, shadcn/ui.</p>
                {nextProjects?.map((project: ProjectType, index: number) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Frontend;