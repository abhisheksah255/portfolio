import React from "react";
import {InnerLayout} from "../layout/InnerLayout.js";
import styles from "./Footer.module.css";
import style from "../header/css/Header.module.css";
import {LogoAndName} from "../header/LogoAndName";
import mainLogo from "../../assets/PortfolioLogo.svg";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <InnerLayout backgroundColor={"var(--primary-black)"} contentColor={"var(--primary-white)"}>
            <div className={styles.footerContainer}>
                <LogoAndName onPress={()=>{}} className={style.logoName} logo={mainLogo}>Prashant Singh</LogoAndName>

                <div className={styles.footerCopyRight}>
                    <h4>&copy; 2024-{currentYear} Prashant Singh</h4>
                    <h4>Design: <a href="https://www.figma.com/@jhanvishah" target="_blank" rel="noopener noreferrer">@Jhanvi Sah</a> | Free Figma Community.</h4>
                </div>

            </div>
        </InnerLayout>
    );
}