import './projectViewerCard.css';

function ProjectViewerCard({project, handleChangeProject, selectedProject, displayYear, index}) {
    const isSelected = project.id === selectedProject.id;

    return (
        <>
            {
                displayYear &&
                <div className='card-date-title'>
                    <h3>{project.date}</h3>
                </div>
            }
            <div className={`viewerCard ${isSelected ? 'active' : ''}`} onClick={() => handleChangeProject({
                ...project,
                index: index
            })}>
                <img src={project.picture.pathBis} alt={project.picture.alt}/>
            </div>
        </>
    );
}

export default ProjectViewerCard;
