import React, {JSX} from 'react';
import {useNavigate} from "react-router-dom";


// SkillsPage component
export const SkillsPage = (): JSX.Element => {
    const skills = [
        { skill: 'JavaScript', description: 'Experienced in ES6+ features and frameworks.'},
        { skill: 'React', description: 'Proficient in building SPAs and reusable components.'},
        { skill: 'TypeScript', description: 'Strong understanding of static typing and type safety.'},
    ];

    const internships = [
        {
            company: 'TechCorp',
            role: 'Software Engineer Intern',
            duration: 'June 2023 - August 2023',
            description: 'Developed front-end components and optimized API calls for better performance.',
        },
        {
            company: 'InnovateX',
            role: 'Web Developer Intern',
            duration: 'January 2023 - May 2023',
            description: 'Redesigned the company website and improved accessibility features.',
        },
    ];

    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar">
                <button className="btn" onClick={() => navigate("/")}>Home</button>
                <button className="btn" onClick={() => navigate("/about")}>About</button>
                <button className="btn" onClick={() => navigate("/gears")}>Gear</button>
            </div>
        </div>
    );
};
