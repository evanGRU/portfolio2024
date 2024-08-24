import './projectDetailDefault.css';

function ProjectDetailDefault({project}) {
    return (
        <article className="flex">
            <div className="text flex">
                <h2>{project?.title}</h2>
                <h3>{project?.type}</h3>
                <a href={project?.url} target="_blank" rel="noreferrer">Découvrir</a>
            </div>
            <div id={`picture${project.id}`} className="pics flex bg1">
                <img src={project?.picture?.path} alt={project?.picture?.alt} />
            </div>
        </article>
    );
}

export default ProjectDetailDefault;
