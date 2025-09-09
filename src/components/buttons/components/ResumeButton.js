import { React } from 'react';
import PropTypes from 'prop-types';
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

ResumeButton.propTypes = {
  label: PropTypes.string,
  display: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

export default ResumeButton;