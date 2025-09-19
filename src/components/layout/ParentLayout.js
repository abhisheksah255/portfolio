import React from "react";
import PropTypes from "prop-types";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

export const ParentLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

ParentLayout.propTypes = {
  children: PropTypes.node
};
