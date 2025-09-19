import styles from "./Headline.module.css";
import React from "react";
import PropTypes from "prop-types";

export const HeadlineText = ({ firstText, secondText, color = "var(--primary-black)" }) => {
    return (
        <div className={styles.skillText} style={{ color: color }}>
            <span className={styles.thin}>{firstText}</span>{secondText}
        </div>
    );
};

    HeadlineText.propTypes = {
        firstText: PropTypes.string.isRequired,
        secondText: PropTypes.string.isRequired,
        color: PropTypes.string
    };
