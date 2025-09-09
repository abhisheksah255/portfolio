import React from "react";
import {ParentLayout} from "../components/layout/ParentLayout.js";
import {Projects} from "../components/projects/Projects.js";

export const AllProjects = () => {
    return (
        <div>
            <ParentLayout>
                <Projects />
            </ParentLayout>
        </div>
    );
}