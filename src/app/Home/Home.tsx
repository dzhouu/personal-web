// Home.tsx
import React, {JSX} from "react";
import "./Home.css";
import {Socials} from "../Social/Socials";
import {useNavigate} from "react-router-dom";

export const Home = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div style={{
            position: "relative",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div>
                <h1 className="home-title" style={{
                    fontFamily: "monospace",
                    textAlign: "center",
                    fontSize: "150px",
                    position: "relative",
                    zIndex: 20
                }}>
                    Denny Zhou
                </h1>
            </div>
            <div style={{position: "relative", display: "flex", alignItems: "center"}}>
                <button type="button" className="navbar-button" onClick={() => navigate("/about")}>About</button>
                <button type="button" className="navbar-button" onClick={() => navigate("/skills")}>Work</button>
                <button type="button" className="navbar-button" onClick={() => navigate("/projects")}>Gear</button>
            </div>
            {/* Render bubbles */}
            <div className="bubbles-container"
                 style={{
                     position: "absolute",
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     zIndex: 0,
                 }}>
                {Array.from({length: 80}).map((_, index) => (
                    <div key={index} className="bubble"
                         style={{
                             position: "absolute",
                             left: `${Math.random() * 100}vw`,
                             top: `${Math.random() * 100}vh`,
                             animationDelay: `${Math.random() * 10}s`,
                         }}/>
                ))}
            </div>
            <Socials/>
        </div>
    );
};
