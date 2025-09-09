import React from "react";
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