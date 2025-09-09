import React from "react";
import {ParentLayout} from "../components/layout/ParentLayout.js";
import {MyExperience} from "../components/experiance/MyExperience.js";

export const AllExperience = () => {
    return (
        <div>
            <ParentLayout>
                <MyExperience />
            </ParentLayout>
        </div>
    );
}