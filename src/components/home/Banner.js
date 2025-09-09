import styles from './Banner.module.css';
import React from "react";
import heroBanner from "../../assets/Banner.svg";
import {InnerLayout} from "../layout/InnerLayout";
import SocialIconContainer from "../header/SocialIconContainer";

// const handleClick = (link) => {
//     console.log(link);  // For debugging
//     window.open(link, '_blank');  // Opens the link in a new tab
// }
const HeroSection = ({socialLinks = []}) => {
    return (
        <InnerLayout
            contentColor={"var(--primary-black)"}
            backgroundColor={"var(--primary-white)"}>
        <div className={styles.heroContainer}>
            <div className={styles.descriptionLeft}>
                <h1 className={styles.introText}>
                    <span className={styles.thin}>Hello I&#39;m,</span> <br/>Prashant Singh.<br/>
                    Full Stack<span className={styles.thin}> Developer</span><br/>
                    <span className={styles.thin}>Based In</span> India.
                </h1>
                <div className={styles.professionSummary}>I'm a full stack developer passionate about building user-centric applications. With expertise in Android, Kotlin Multiplatform, React.js, and Ktor, I focus on creating scalable, high-performance solutions. Driven by problem-solving and a love for learning, I strive to combine technical excellence with a creative vision in every project I work on.</div>
                <div className={styles.resumeWithSocialIcon}>
                    <SocialIconContainer socialLinks={socialLinks}/>
                </div>
            </div>
            <img className={styles.bannerImage} alt="Banner" src={heroBanner} />
        </div>
        </InnerLayout>
    );
};

export default HeroSection;

