import './projectViewerDetails.css';
import {buttonTargets, projectRanges, timerStates} from "../../../utils/constants";
import {useEffect, useMemo, useState} from "react";
import Checkbox from "../../checkbox/checkbox";
import Button from "../../button/button";

function ProjectViewerCard({project, timerState, updateTimerState}) {
    const checkboxState = useMemo(() => {
        return timerState === timerStates.ongoing;
    }, [timerState]);
    const [tags, setTags] = useState([...project.tags])

    useEffect(() => {
        if (project.tags.length < 5) {
            let tagsArrayLength = project.tags.length;
            const updatedTagsArray = [...project.tags]
            for (tagsArrayLength; tagsArrayLength < 5; tagsArrayLength++) {
                updatedTagsArray.push('empty');
            }
            setTags(updatedTagsArray);
        }
    }, [project])

    const chooseProjectType = () => {
        switch(project.range) {
            case projectRanges.school:
                return 'Projet étudiant';
                break;
            case projectRanges.personal:
                return 'Projet personnel';
                break;
            case projectRanges.professional:
                return 'Projet professionel';
                break;
        }
    }
    return (
        <>
            <div className='viewerDetails-content'>
                <div className='viewerDetails-content-header'>
                    <h3 className='case-style-header'>{chooseProjectType()}</h3>
                </div>
                <div className='viewerDetails-content-title'>
                    <img
                        src={project.picture.logoPath}
                        alt={project.picture.alt}
                        className='viewerDetails-logo case-style-title'
                    />
                    <h1 className='case-style-title'>{project.title}</h1>
                    <h2 className='case-style-title'>{project.date}</h2>
                </div>
                <div className='viewerDetails-content-tags'>
                    {
                        tags.map((tag) => {
                            switch (tag) {
                                case 'HTML':
                                    return <h5 className='case-style-tags tagHTML'>{tag}</h5>
                                    break;
                                case 'CSS':
                                    return <h5 className='case-style-tags tagCSS'>{tag}</h5>
                                    break;
                                case 'SCSS':
                                    return <h5 className='case-style-tags tagSCSS'>{tag}</h5>
                                    break;
                                case 'PHP':
                                    return <h5 className='case-style-tags tagPHP'>{tag}</h5>
                                    break;
                                case 'REACTNATIVE':
                                    return <h5 className='case-style-tags tagREACTNATIVE'>{tag}</h5>
                                    break;
                                case 'JS':
                                    return <h5 className='case-style-tags tagJS'>{tag}</h5>
                                    break;
                                default:
                                    return <h5 className='case-style-tags tagEmpty'>{tag}</h5>
                            }
                        })
                    }
                </div>
                <div className='viewerDetails-content-desc case-style-title'>
                    <p>{project?.description}</p>
                </div>
            </div>
            <div className='viewerDetails-footer flex'>
                <div className='viewerDetails-footer-links flex'>
                    {
                        project.links.github &&
                        <Button
                            project={project}
                            type={buttonTargets.github}
                        />
                    }
                    {
                        project.links.website &&
                        <Button
                            project={project}
                            type={buttonTargets.website}
                        />
                    }
                </div>
                <div className='viewerDetails-auto-scroll'>
                    <h3>Défilement auto</h3>
                    <Checkbox
                        checkboxState={checkboxState}
                        updateTimerState={updateTimerState}
                    />
                </div>
            </div>
        </>
    );
}

export default ProjectViewerCard;
