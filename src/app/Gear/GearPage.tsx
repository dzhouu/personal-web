import React, {JSX} from 'react';
import {useNavigate} from "react-router-dom";

export const GearPage = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <button className="btn" onClick={() => navigate("/")}>Home</button>
            <button className="btn" onClick={() => navigate("/skills")}>About</button>
            <button className="btn" onClick={() => navigate("/projects")}>Gear</button>
        </div>
    );
};