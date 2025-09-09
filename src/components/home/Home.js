import React from "react";
import HeroSection from "./Banner";
import {Skills} from "../skills/Skills";
import {MyExperience} from "../experiance/MyExperience";
import AboutMe from "../aboutme/AboutMe";
import {Projects} from "../projects/Projects";
import {Blogs} from "../blogs/Blogs";
import {Contact} from "../contacts/Contact";
import {ParentLayout} from "../layout/ParentLayout";
import androidStudio from "../../assets/android-studio.svg";
import android from "../../assets/android.svg";
import kotlin from "../../assets/kotlin.svg";
import medium from "../../assets/medium.svg";
import reactNative from "../../assets/react-native.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import ktor from "../../assets/ktor.svg";
import sdlc from "../../assets/sdlc.png";
import jetpack from "../../assets/jetpack-compose.svg";
import kobweb from "../../assets/kobweb.svg";
import java from "../../assets/Java.svg";
import debugdesk from "../../assets/Debugdesk.png";
import debugdeskMobile from "../../assets/DebugDeskMobile.png";
import notebook from "../../assets/Notebook.png";

const Home = () => {
    const blogUrls = [
        "https://prashantandev.medium.com/understanding-state-management-in-jetpack-compose-concepts-best-practices-and-examples-d338ba1b0d15",
        "https://prashantandev.medium.com/enhance-your-android-codebase-with-ktlint-8991d6c35bc8",
        "https://prashantandev.medium.com/mastering-java-memory-management-demystifying-data-types-precision-and-memory-allocation-b6023b419c2a",
        "https://medium.com/@prashantandev/a-comprehensive-guide-to-sharedflow-stateflow-flow-and-livedata-in-android-development-da6c2c8bf8c5",
        "https://medium.com/@prashantandev/mastering-splash-screens-in-android-be0c0db8663e",
        "https://medium.com/@prashantandev/unlocking-the-power-of-mvi-and-mvvm-architectures-a-comprehensive-guide-for-android-developers-5778ffcc39a0",
    ];

    const skills = [
        {
            id: 1,
            name: "Android",
            icon: android,
        },
        {
            id: 2,
            name: "Kotlin",
            icon: kotlin,
        },
        {
            id: 3,
            name: "Jetpack Compose",
            icon: jetpack,
        },
        {
            id: 4,
            name: "KMP",
            icon: "https://www.jetbrains.com/_assets/www/kotlin-multiplatform/parts/sections/head/hero-shape.41226a16aa9674fbb2f397f143af121c.jpg",
        },
        {
            id: 5,
            name: "Java",
            icon: java,
        },  
        {
            id: 6,
            name: "React",
            icon: reactNative,
        },
        {
            id: 7,
            name: "React Native",
            icon: reactNative,
        },
        {
            id: 8,
            name: "SDLC",
            icon: sdlc,
        },
        {
            id: 9,
            name: "Kobweb",
            icon: kobweb,
        },
        {
            id: 10,
            name: "Koin",
            icon: "https://insert-koin.io/img/koin_new_logo.png",
        },
        {
            id: 11,
            name: "Ktor",
            icon: ktor,
        },  
        {
            id: 12,
            name: "Android Studio",
            icon: androidStudio,
        },
        
    ];
    const paragraphs = [
        `I'm a passionate full-stack developer with experience in <b>native Android development</b> using <b>Kotlin</b> since 2021 and <b>Kotlin Multiplatform (KMP)</b> for building cross-platform applications across <b>Android, iOS, web, and desktop</b>. I've also been working with <b>Ktor</b> for both <b>client and backend development</b> for more than a year while expanding my expertise in <b>React.js, Go, and Jenkins</b> to strengthen my backend and DevOps skills.`,
        `My core expertise lies in <b>mobile app development</b>, with a strong focus on <b>scalable, user-centric applications</b>. I follow a <b>structured development approach</b>—planning architecture, flow, and components before writing code—ensuring <b>efficiency, maintainability, and long-term scalability</b>.`,
        `I thrive on <b>problem-solving, building impactful products, and continuously learning new technologies</b>. While I'm actively sharpening my skills in <b>Go, React.js, and Jenkins</b>, I bring a strong foundation in <b>clean architecture, reusable components, and performance optimization</b> to every project I work on.`,
        `Beyond coding, I enjoy <b>writing about technology</b> and sharing my experiences on <b>Medium</b>. I also have a passion for <b>photography</b>, capturing meaningful moments through my lens. Whether it's <b>building software</b> or <b>framing the perfect shot</b>, I love blending <b>technical expertise with creative vision</b> to bring ideas to life.`,
        `For more on my work, check out the <b>Projects</b> section below!`
    ];

    const socialLinks = [
        {
            id: 1,
            name: "LinkedIn",
            icon: linkedin,
            url: "https://www.linkedin.com/in/prashant-android-dev",
        },
        {
            id: 2,
            name: "GitHub",
            icon: github,
            url: "https://github.com/prashant17d97",
        },
        {
            id: 3,            
            name: "Medium",
            icon: medium,
            url: "https://prashantandev.medium.com/",
        },
    ];  


    const projects = [

        {
            id: 1,
            name: "Notebook",
            description: "Notebook is a Kotlin Multiplatform (KMP) app built with Clean Architecture and the MVVM pattern, providing a seamless experience for both Android and iOS users. This app enables users to manage notes with a simple yet effective interface.",
            image: notebook,
            url: "https://play.google.com/store/apps/details?id=app.debugdesk.notebook",
            githubUrl: "https://github.com/prashant17d97/Notebook-KMP",
        },
        {
            id: 2,
            name: "Debug Desk",
            description: "Debug Desk is a web application built as a learning project to explore Kotlin Compose HTML and the Kobweb framework, which supports both frontend and backend development in Kotlin. This project serves as a practical implementation to understand web development using Kotlin Multiplatform. Debug Desk is fully functional for reading but remains a learning-focused project without onboarding for writers.",
            image: debugdesk,
            url: "https://www.debugdesk.in",
            githubUrl: null,
        },
        {
            id: 3,
            name: "Debug Desk Mobile",
            description: "Debug Desk Mobile is a cross-platform blog app designed to provide users with access to a wide range of blog content. It caters to a diverse audience interested in reading blogs on various topics such as technology, lifestyle, travel, and more.",
            image: debugdeskMobile,
            url: null,
            githubUrl: "https://github.com/prashant17d97/Debug-Desk",
        },
    ];

    return (
        <div>
            <ParentLayout>
                <HeroSection socialLinks={socialLinks}/>
                <Skills sectionId="skills" skills={skills}/>
                <MyExperience/>
                <AboutMe paragraphs={paragraphs} />
                <Projects projects={projects}/>
                <Blogs blogUrls={blogUrls} />
                <Contact socialLinks={socialLinks}/>
            </ParentLayout>
        </div>
    );
};

export default Home;
