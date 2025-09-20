import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/HeaderTextButton.module.css';


const HeaderTextButton = ({ onClick, children }) => {
    return (<div className={styles.textButtonContainer} onClick={onClick}>
        <div className={styles.textButton}>{children}</div>
    </div>);
};

HeaderTextButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default HeaderTextButton;
