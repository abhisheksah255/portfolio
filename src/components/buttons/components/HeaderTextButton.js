import { FunctionComponent } from 'react';
import styles from '../css/HeaderTextButton.module.css';


const HeaderTextButton:FunctionComponent= ({ onClick, children }) => {
    return (<div className={styles.textButtonContainer} onClick={onClick}>
        <div className={styles.textButton}>{children}</div>
    </div>);
};

export default HeaderTextButton;
