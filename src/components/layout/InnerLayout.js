import React from "react";
import PropTypes from "prop-types";
import style from "./ParentLayout.module.css"

export const InnerLayout = ({ children, backgroundColor, contentColor}) => {
    return (
        <div className={style.layout} style={{background:backgroundColor, color:contentColor}} >
            <div className={style.container}>
                {children}
            </div>
        </div>
    );
}

InnerLayout.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  contentColor: PropTypes.string
};