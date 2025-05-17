// Home.tsx (Fixed Version)
import React, {JSX, useEffect} from "react";
import "./Home.css";
import {Socials} from "../Social/Socials";
import AllRightReserveComponent from "../All-Right-Reserve/All-Right-Reserve-Component";
import {useNavigate} from "react-router-dom";
import ProfileHeader from "../Profile-Header/Profile";

export const Home = (): JSX.Element => {
    const navigate = useNavigate();

    // Generate random positions for bubbles, but keep them contained
    useEffect(() => {
        // Add overflow: hidden to body to prevent scrolling
        document.body.style.overflow = 'hidden';

        return () => {
            // Clean up when component unmounts
            document.body.style.overflow = '';
        };
    }, []);

    // Create bubbles with proper positioning
    const renderBubbles = () => {
        return Array.from({length: 100}).map((_, index) => (
            <div
                key={index}
                className="bubble"
                style={{
                    left: `${Math.random() * 100}%`, // Use % instead of vw
                    top: `${Math.random() * 100}%`,  // Use % instead of vh
                    animationDelay: `${Math.random() * 10}s`,
                    // Randomize size for more natural appearance
                    width: `${10 + Math.random() * 15}px`,
                    height: `${10 + Math.random() * 15}px`,
                }}
            />
        ));
    };

    return (
        <div className="home-container">
            {/* Bubble container */}
            <div className="bubbles-container">
                {renderBubbles()}
            </div>

            {/* Main content container */}
            <div className="content-container">
                {/*<h1 className="home-title">*/}
                {/*    Denny Zhou*/}
                {/*</h1>*/}
                <ProfileHeader />

                <div className="nav-buttons">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => navigate("/about")}
                    >
                        About
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => navigate("/portfolio")}
                    >
                        Portfolio
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => navigate("/gears")}
                    >
                        Gear
                    </button>
                </div>

                <Socials />
            </div>
            <AllRightReserveComponent />
        </div>
    );
};

export default Home;