import './button.css';
import {buttonTargets} from "../../utils/constants";
import {useMemo} from "react";

function Button({project, type}) {
    const url = useMemo(()=> {
        if (type === buttonTargets.github) {
            return project.links.github;
        } else if (type === buttonTargets.website) {
            return project.links.website
        }
    }, [project, type]);
    const linkText = useMemo(() => {
        if (type === buttonTargets.github) {
            return (
                <>
                    <img src="img/github.png" alt=""/>
                    Github
                </>
            );
        } else if (type === buttonTargets.website) {
            return <>
                <img src="img/arrow-up-right.svg" alt=""/>
                Voir le site
            </>;
        }
    }, [type])

    return (
        <a href={url} className='button-link' target={"_blank"}>
            {linkText}
        </a>
    );
}

export default Button;
