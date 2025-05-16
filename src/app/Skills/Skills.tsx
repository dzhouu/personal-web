import React, {JSX} from 'react';
import {useNavigate} from "react-router-dom";
import ExperienceAndProjects from "./ExperienceAndProjects";


// SkillsPage component
export const SkillsPage = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar">
                <button className="btn" onClick={() => navigate("/")}>Home</button>
                <button className="btn" onClick={() => navigate("/about")}>About</button>
                <button className="btn" onClick={() => navigate("/gears")}>Gear</button>
            </div>
            <ExperienceAndProjects />
        </div>
    );
};
