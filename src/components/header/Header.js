import React, { useState, useEffect } from 'react';
import HeaderTextButton from "../buttons/components/HeaderTextButton";
import { LogoAndName } from "./LogoAndName";
import styles from "./css/Header.module.css";
import ResumeButton from "../buttons/components/ResumeButton";
import {InnerLayout} from "../layout/InnerLayout";


const handleSectionNavigationClick = (scrollTo) => {
    const section = document.getElementById(scrollTo);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with ID "${scrollTo}" not found.`);
    }
};

const headerNavLinks = [
    { id: 1, label: "Skills", onClick: () => handleSectionNavigationClick("skills") },
    { id: 2, label: "Experience", onClick: () => handleSectionNavigationClick("experience") },
    { id: 3, label: "About Me", onClick: () => handleSectionNavigationClick("aboutMeContainer") },
    { id: 4, label: "Projects", onClick: () => handleSectionNavigationClick("projects") },
    { id: 5, label: "Blogs", onClick: () => handleSectionNavigationClick("blogs") },
    { id: 6, label: "Contacts", onClick: () => handleSectionNavigationClick("contact") },
]


const handleClick = (url) => {
    window.open(url, '_blank');
};

export const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        // Update the isMobile state when resizing the window
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <InnerLayout
            contentColor={"var(--primary-black)"}
            backgroundColor={"var(--primary-white)"}>
            <div className={styles.header}>
                <div className={styles.container}>
                    {/* Logo and Name */}
                    <LogoAndName onPress={()=>{}} className={styles.logoName}>Prashant Singh</LogoAndName>

                    {/* Hamburger Icon */}
                    <div className={styles.hamburgerIcon} onClick={toggleDrawer}>
                        &#9776; {/* Hamburger icon */}
                    </div>

                    {/* Desktop/Tablet Screens */}
                    <div className={styles.taskbar}>
                        {headerNavLinks.map(({ id, label, onClick }) => (
                                <HeaderTextButton key={id} onClick={onClick}>{label}</HeaderTextButton>
                            )
                        )}
                    </div>

                    {/* Conditionally show ResumeButton */}
                    {!isMobile && <ResumeButton display={'flex'} onClick={() => {
                        handleClick("https://drive.google.com/file/d/1tw9mSoSPwjnE-3KHhLBzGb16ftQawR_p/view?usp=share_link")
                    }} />}
                    
                    
                </div>

                {/* Drawer Menu */}
                <div className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}>
                    {/* Menu Items */}
                    <div className={styles.drawerMenu}>
                        <div className={styles.drawerCloseButton} onClick={toggleDrawer}>
                            &times; {/* Close button */}
                        </div>
                        {headerNavLinks.map(({ id, label, onClick }) => (
                                <HeaderTextButton key={id} onClick={onClick}>{label}</HeaderTextButton>
                            )
                        )}
                        {/* <button className={style.buttonContainer}  type="submit"><h2>Hire Me</h2></button> */}
                        <ResumeButton display={'flex' } onClick={()=> {
                        handleClick("https://drive.google.com/file/d/1tw9mSoSPwjnE-3KHhLBzGb16ftQawR_p/view?usp=share_link")
                    }} />
                    </div>
                </div>
            </div>
        </InnerLayout>
    );
};
