import React from 'react';
import styles from './Skills.module.css';
import {HeadlineText} from "../text/Headline";
import {InnerLayout} from "../layout/InnerLayout";

export const Skills = ({sectionId = "skills", skills = []}) => {
    return (
        <InnerLayout
            contentColor={"var(--primary-black)"}
            backgroundColor={"var(--primary-white)"}>
            <div className={styles.mySkillsContainer} id={sectionId}>
                <HeadlineText
                firstText=""
                secondText="Tech Stack"
                color={"var(--primary-black)"}/>
                <Grid skills={skills}/>
            </div>
        </InnerLayout>
    );
};


export const SkillCard = ({ title,image }) => {
    return (
        <div className={styles.skillCardContainer}>
            <img className={styles.skillCardImage} alt="skill icon" src={image} />
            <div className={styles.skillName}>{title}</div>
        </div>
    );
};

export const Grid = ({skills = [] }) => {
    return (
        <div className={styles.cardGridContainer}>
            {skills.map(({ id, icon, name }) => (
                <SkillCard
                    key={id}
                    index={id}
                    image={icon}
                    title={name}
                />
            ))}
        </div>
    );
};
