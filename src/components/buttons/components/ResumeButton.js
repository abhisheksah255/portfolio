import { React } from 'react';
import styles from '../css/ResumeButton.module.css';
import download from '../../../assets/download.svg';

const ResumeButton = ({ 
    label="Resume", 
    display ='flex', 
    color ="var(--primary-black)",
    icon = download, 
    onClick 
}) => {
    return (
        <div className={styles.button}
             onClick={onClick}
             style={{ display: display, background: color }}
        >
            <div className={styles.resume}>{label}</div>
            {icon && <img className={styles.downloadIcon} alt="Download Icon" src={icon}/>}
        </div>
    );
};

export default ResumeButton;