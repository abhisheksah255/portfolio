import mainLogo from "../../assets/app_logo.svg";
import styles from "./css/Logo.module.css";
import React from 'react';

/**
 * @typedef {Object} LogoAndNameProps
 * @property {() => void} onPress - Click handler function
 * @property {React.ReactNode} children - Child elements to render
 * @property {string} [logo] - Optional logo image source
 */

export const LogoAndName = ({ onPress, children, logo }) => {
    const logoSrc = logo || mainLogo;  // Use provided logo or default to mainLogo

    return (
        <div className={styles.logo} onClick={onPress}>
            <img className={styles.logo1Icon} alt="Logo" src={logoSrc} />
            <b className={styles.personal}>{children}</b>
        </div>
    );
};
