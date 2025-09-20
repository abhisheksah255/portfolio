import styles from "./SocialIcon.module.css";
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @typedef {Object} SocialIconProps
 * @property {() => void} onClick - Click handler function
 * @property {string} children - URL to the image
 */

const SocialIcon = ({ name, onClick, children }) => {
    return (
        <div className={styles.socialIconContainer} onClick={onClick}>
            <img className={styles.socialIcon} alt={name} src={children} />
        </div>
    );
}

    SocialIcon.propTypes = {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired,
    };

export default SocialIcon;
