import React from "react";
import style from "./AboutMe.module.css";
import { useMediaQuery } from "react-responsive";
import {HeadlineText} from "../text/Headline";
import AboutMeImage from "../../assets/AboutMe.svg";
import AboutMeImageMobile from "../../assets/AboutMeM.svg";
import {InnerLayout} from "../layout/InnerLayout.js";

const AboutMe = ({ paragraphs }) => {
   
    return (
        <InnerLayout
            contentColor={"var(--primary-black)"}
            backgroundColor={"var(--primary-white)"}
        >
            <AboutMeContainer paragraphs={paragraphs}/>
        </InnerLayout>
    );
}

export default AboutMe;


export const AboutMeContainer = ({ paragraphs }) => {
    const isSmall = useMediaQuery({ maxWidth: 768 });
    const aboutMeImage = isSmall ? AboutMeImageMobile : AboutMeImage;

    return (
        <div className={style.aboutMeContainer} id="aboutMeContainer">
            <img className={style.aboutMeImg} alt="About Me" src={aboutMeImage}/>
            <div className={style.aboutMeContent}>
                <HeadlineText
                    firstText="About"
                    secondText=" Me"
                    color={"var(--primary-black)"}/>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>
        </div>
    );
}