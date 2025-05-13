// About.tsx
import React, {JSX, useEffect, useState} from "react";
import "./About.css";
import {useNavigate} from "react-router-dom";

export const About = (): JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const content = [
        "studying Computer Science",
        "a Coder",
        "a Software Developer",
        "looking for a full-time SWE position",
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="navbar">
                <button className="btn" onClick={() => navigate("/")}>Home</button>
                <button className="btn" onClick={() => navigate("/skills")}>Skills</button>
                <button className="btn" onClick={() => navigate("/projects")}>Project</button>
            </div>
            <div className="about-container">
                <div className="animated-text">
                    <h1 className="semi-bold">
                        I am <span className="content-color">{content[currentIndex]}</span>
                    </h1>
                </div>
                <div className="info-grid">
                    <div className="info-container">
                        <h1 className="info-heading">Who I Am</h1>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">Hobbies</h1>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">Interest</h1>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">More Info</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
