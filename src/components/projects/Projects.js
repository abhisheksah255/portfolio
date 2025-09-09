import React from "react";
import style from "./Projects.module.css";
import {InnerLayout} from "../layout/InnerLayout.js";
import {HeadlineText} from "../text/Headline";
import readMore from "../../assets/Read More.svg";
import ResumeButton from "../buttons/components/ResumeButton";

const handleClick = (url) => {
    console.log(url);  // For debugging
    window.open(url, '_blank');  // Opens the link in a new tab
}

export const Projects = ({projects = []}) => {
    return (
        <InnerLayout backgroundColor={"var(--primary-black)"} contentColor={"var(--primary-white"}>
            <div className={style.container} id="projects">
                <HeadlineText firstText="My" secondText=" Projects" color={"var(--primary-white)"}/>
                {projects.map((project, index) => (
                    index % 2 === 0 ? (
                        <LeftProjects key={project.id} project={project} />
                    ) : (
                        <RightProjects key={project.id} project={project} />
                    )
                ))}
            </div>

        </InnerLayout>
    );
}


export const LeftProjects = ({project}) =>{
    const {id, name, description, image, url, githubUrl} = project;
    return (
        <div className={style.projectContainer}>
            <img className={style.projectImage} alt="Project" src={image} />
            <ProjectDetails id={id} name={name} description={description} url={url} githubUrl={githubUrl}/>
        </div>
    );
}

export const RightProjects = ({project}) =>{
    const {id, name, description, image, url, githubUrl} = project;
    return (
        <div className={style.projectContainerRight}>
            <ProjectDetails id={id} name={name} description={description} url={url} githubUrl={githubUrl}/>
            <img className={style.projectImage} alt="Project " src={image} />
        </div>
    );
}

export const ProjectDetails = ({id, name, description, url, githubUrl}) =>{
    return (
        <div className={style.projectDetails}>
            <h1>{id < 10 ? `0${id}` : id}</h1>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={style.buttonContainer}>
                {url && url.trim() && (
                    <ResumeButton 
                        label={"View Live"} 
                        color={"var(--primary-neutral)"} 
                        icon={readMore} 
                        onClick={()=>handleClick(url)}
                    />
                )}
                {githubUrl && githubUrl.trim() && (
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">View Source Code</a>
                )}
            </div>
        </div>
    )
}