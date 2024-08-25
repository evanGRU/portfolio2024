import './projectDetailDefault.css';

function ProjectDetailDefault({project}) {
    return (
        <article className="flex">
            <div className="text flex">
                <h2>{project?.title}</h2>
                <h3>{project?.type}</h3>
                <div className="projectDefault-links">
                    {project?.links.website &&
                        <a href={project?.links.website} target="_blank" rel="noreferrer">Découvrir</a>
                    }
                    {project?.links.github &&
                        <a href={project?.links.github} target="_blank" rel="noreferrer" className="link-github">
                            <img src="img/github_wh.png" alt="github_blanc"/>
                        </a>
                    }
                </div>
            </div>
            <div id={`picture${project.id}`} className="pics flex bg1">
                <img src={project?.picture?.path} alt={project?.picture?.alt} />
            </div>
        </article>
    );
}

export default ProjectDetailDefault;
