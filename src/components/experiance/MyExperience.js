import style from "./Experience.module.css";
import {HeadlineText} from "../text/Headline";
import React from "react";
import {InnerLayout} from "../layout/InnerLayout.js";
import openbet from "../../assets/openbet.svg";
const experienceList = [
    {
        companyName: "OpenBet",
        role: "Software Engineer - Android",
        location: "Bengaluru, Karnataka",
        workType: "Hybrid",
        duration: "June 2023 - Present",
        description: "Developed and optimized Android applications using Kotlin, Jetpack Compose, and Android SDK.Collaborated with UI/UX teams to design user-friendly interfaces that enhanced app performance and user experience.",
        website: "https://www.openbet.com",
        logo: openbet,
    },
    {
        companyName: "Glaukoustech Solutions Pvt Ltd",
        role: "Android Developer",
        location: "Bengaluru, Karnataka",
        workType: "On-site",
        duration: "Oct 2022 - May 2023",
        description: "I was responsible for the entire development cycle of native Android applications. From designing and developing the user interface to integrating APIs and libraries, I ensure that the applications are high-quality and meet the project requirements.",
        website: "http://www.glaukous.com/",
        logo: "https://media.licdn.com/dms/image/v2/C560BAQG4-5x_zAiG8Q/company-logo_100_100/company-logo_100_100/0/1644670426679?e=1748476800&v=beta&t=G2hIigmo2iz9L9kHyqVCs6xqDOTZse0KU5h5mS5bC6I", // Replace with actual logo URLs
    },
    {
        companyName: "Apptunix",
        role: "Android Developer Intern",
        location: "Saas Nagar, Mohali, Punjab",
        workType: "On-site",
        duration: "Oct 2021 - Oct 2022",
        description: "As an Android Developer Intern at Apptunix, I focused on learning and applying best practices in Android development using Kotlin and Java. I worked on developing and optimizing mobile applications, improving UI/UX, and debugging issues. This experience helped me strengthen my problem-solving skills, understand performance optimization, and gain hands-on experience with real-world projects.",
        website: "https://www.apptunix.com",
        logo: "https://media.licdn.com/dms/image/v2/D560BAQEHIdt9G1gkmQ/company-logo_100_100/company-logo_100_100/0/1736247013098/apptunixus_logo?e=1748476800&v=beta&t=W8JGjTLKhGfKiLp5Ce4L9HA22skE7Q2GgSveo9PchyM", // Replace with actual logo URLs
    },

    // Add more experiences here
];

export const MyExperience = () => {
    return (
        <InnerLayout
            backgroundColor={"var(--primary-black)"}
            contentColor={"var(--primary-white)"}
        >
            <div className={style.container} id="experience">
                <HeadlineText
                    firstText="My"
                    secondText=" Experience"
                    color={"var(--primary-white)"}
                />
                {
                    experienceList.map(
                        (experience, index) => (
                            <Experience key={index} experience={experience} />
                        )
                    )
                }
            </div>
        </InnerLayout>
    );
}

export const Experience =({ experience }) => {
    return (
        <div className={style.experience}>
            <div className={style.companyContainer}>
                <div className={style.companyDetails}>
                    <img
                        src={experience.logo}
                        alt="Company Logo"
                    />
                    <div className={style.companyNameLocation}>
                        <h2>{experience.companyName}</h2>
                        <h4>{experience.location}</h4>
                        <h4>{experience.workType}</h4>
                        <a href={experience.website} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>{experience.website}</a>
                    </div>
                </div>
                <p>{experience.duration}</p>


            </div>
            <div className={style.descriptionDetails}>
                <h4>{experience.role}</h4>
                <p className={style.jobDescription}>{experience.description}</p>
            </div>
        </div>
    );
}
