import './projectListDefault.css';
import ProjectDetailDefault from "./projectDetailDefault";
import {projectsObject} from "../../../utils/data";

function ProjectListDefault() {
    return (
        <div className={'projects-content-default'}>
            {projectsObject.map((project) => {
                return <ProjectDetailDefault project={project}/>
            })}
        </div>
    );
}

export default ProjectListDefault;
