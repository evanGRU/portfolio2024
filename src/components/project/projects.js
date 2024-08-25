import {useDisplayMode} from "../../contexts/displayModeContext";
import './projects.css';
import Switch from "../switch/switch";
import {displayModes} from "../../utils/constants";
import ProjectListScroll from "./scroll/projectListScroll";
import ProjectListDefault from "./default/projectListDefault";

function Projects() {
    const {displayMode, toggleDisplayMode} = useDisplayMode();

    return (
        <section id="projects" className="projects-container flex-column">
            <div className='projects-header'>
                <h1 className='projects-title'>Mes projets</h1>
                <Switch displayMode={displayMode} toggle={toggleDisplayMode}/>
            </div>
            {
                displayMode === displayModes.scroll ?
                    <ProjectListScroll></ProjectListScroll>
                    : <ProjectListDefault></ProjectListDefault>
            }
        </section>
    );
}

export default Projects;
