import './projectListScroll.css';
import {projectsObject} from "../../../utils/data";
import ProjectViewerCard from "./projectViewerCard";
import {useEffect, useState} from "react";
import {timerStates} from "../../../utils/constants";
import ProjectViewerDetails from "./projectViewerDetails";

function ProjectListScroll() {
    const [selectedProject, setSelectedProject] = useState({
        ...projectsObject[0],
        index: 1
    });
    const [timerState, setTimerState] = useState(timerStates.ongoing);
    const [timerValue, setTimerValue] = useState(true);
    const [fistProject, setFirstProject] = useState(true);

    const updateTimerState = () => {
        return timerState === timerStates.ongoing ? setTimerState(timerStates.stopped) : setTimerState(timerStates.ongoing);
    }

    useEffect(() => {
        if (timerState === timerStates.ongoing && !fistProject) {
            if (selectedProject.index < (projectsObject.length)){
                setSelectedProject({
                    ...projectsObject[selectedProject.index],
                    index: selectedProject.index + 1
                });
                document.getElementById('scrollContainer').scrollBy(0,175)
            } else {
                setSelectedProject({
                    ...projectsObject[0],
                    index: 1
                });
                document.getElementById('scrollContainer').scrollBy(0,-10000)

            }
            setTimeout(() => setTimerValue(!timerValue), 5000);
        } else {
            setFirstProject(false);
            setTimeout(() => setTimerValue(!timerValue), 5000);
        }
    }, [timerValue, timerState])

    const updateDislayYear = (project, index) => {
        let displayYear = true;
        if (index !== 0 && projectsObject[index].date === projectsObject[index - 1].date) {
            displayYear = false;
        }
        return displayYear;
    }

    return (
        <div className='projects-content-scroll'>
            <div className='projects-scroll-detail-container'>
                <ProjectViewerDetails
                    project={selectedProject}
                    timerState={timerState}
                    updateTimerState={updateTimerState}
                />
            </div>
            <div id='scrollContainer' className='projects-scroll-pictures-container'>
                {projectsObject.map((project, index) => {
                    return <ProjectViewerCard
                        project={project}
                        handleChangeProject={setSelectedProject}
                        selectedProject={selectedProject}
                        displayYear={updateDislayYear(project, index)}
                        index={index}
                    />
                })}
            </div>
        </div>
    );
}

export default ProjectListScroll;
