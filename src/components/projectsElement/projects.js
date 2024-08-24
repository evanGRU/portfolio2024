import './projects.css';
import ProjectsElement from "../projects/projectsElement";
import {projectsObject} from "../../utils/Data";

function Projects() {
    return (
        <section id="projects" className="projects flex">
            <h1 className="projects-title">PROJETS ÉTUDIANTS</h1>

            {projectsObject.map((project) => {
                return <ProjectsElement project={project}/>
            })}
        </section>
    );
}

export default Projects;
