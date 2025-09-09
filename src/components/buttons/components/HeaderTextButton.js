import React from 'react';
import styles from '../css/HeaderTextButton.module.css';


const HeaderTextButton = ({ onClick, children }) => {
    return (<div className={styles.textButtonContainer} onClick={onClick}>
        <div className={styles.textButton}>{children}</div>
    </div>);
};

export default HeaderTextButton;
