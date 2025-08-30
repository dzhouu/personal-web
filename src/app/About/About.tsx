import React, {JSX, useEffect, useState} from "react";
import "./About.css";
import {useNavigate} from "react-router-dom";
import AllRightReserveComponent from "../All-Right-Reserve/All-Right-Reserve-Component";

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
                <button className="btn" onClick={() => navigate("/portfolio")}>Portfolio</button>
                <button className="btn" onClick={() => navigate("/gears")}>Gear</button>
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
                        <p>I was born and raised in Seattle, WA but lived in China for a few years</p>
                        <p>Graduate from the University of Washington Computer Science Department</p>
                        <p>I am an avid foodie and I love to chat over coffee/food or cook on my free time.</p>
                        <p>I love cars and my dream car is a Porsche 911</p>
                        <p>Fashion is something I want to get into, how to dress better is something I ask myself 🤣</p>
                        <p>My favorite sports teams are the Seahawks and Warriors</p>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">Hobbies</h1>
                        <p><b>Some of my hobbies consist of:</b></p>
                        <ul>
                            <li>Snowboarding - IKON Pass Holder during the winter time</li>
                            <li>Tennis</li>
                            <li>Golf</li>
                            <li>Foodie Adventures - Follow my Beli!</li>
                            <li>Watching Anime (Currently watching: Kaiju No. 8 and Sakamoto Days)</li>
                        </ul>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">Interest</h1>
                        <p>Some of my career interest consist of:</p>
                        <ul>
                            <li>Data Engineering</li>
                            <li>Business Intelligence Engineering</li>
                            <li>Software Development</li>
                            <li>Program Manager</li>
                        </ul>
                        <p>Topics i've been interested:</p>
                        <ul>
                            <li>Distributed Systems</li>
                            <li>Database Internals</li>
                            <li>AI Infrastructure</li>
                        </ul>
                    </div>
                    <div className="info-container">
                        <h1 className="info-heading">More Info</h1>
                        <p>I'm currently seeking opportunities in Data Engineering/Software Development where I can apply my skills and continue to grow.</p>
                        <p>Feel free to check out my portfolio to see some of my recent projects, or contact me if you'd like to connect!</p>
                        <p>I enjoy collaborating on innovative projects that solve real-world problems.</p>
                        <p>Lets grab some food!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};