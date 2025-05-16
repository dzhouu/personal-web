import React, {useState} from 'react';
import {Briefcase, Code, ChevronDown, ChevronUp, ExternalLink, Github} from 'lucide-react';
import './Skills.css';

interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    summary: string;
    description: string[];
    technologies: string[];
}

interface Project {
    id: string;
    title: string;
    period: string;
    summary: string;
    description: string[];
    technologies: string[];
    links: {
        github: string | null;

        live: string | null;
    };
}

interface ExpandedItems {
    [key: string]: boolean;
}

const ExperienceAndProjects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'projects'>('experience');
    const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

    const toggleExpand = (id: string): void => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const experiences: Experience[] = [
        {
            id: 'exp1',
            role: 'Software Engineer',
            company: 'Supio',
            period: 'March 2024 - November 2024',
            location: 'Seattle, WA',
            summary: 'Developed responsive web interfaces using React and Tailwind CSS. Collaborated with the design team to implement UI components. Improved website performance by 25% through code optimization.',
            description: ['hi'],
            technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git']
        },
    ];

    const projects: Project[] = [
        {
            id: 'proj1',
            title: 'Sharded Transactional Key-Value Store',
            period: 'December 2023',
            summary: 'Designed and developed a responsive portfolio website to showcase my skills and projects. Implemented modern UI/UX principles and animations.',
            description: [],
            technologies: ['React', 'CSS', 'Responsive Design'],
            links: {
                github: 'https://github.com/username/portfolio',
                live: 'https://yourportfolio.com'
            }
        },
        {
            id: 'proj2',
            title: 'Document Search Engine',
            period: 'June 2023',
            summary: 'Built a full-stack task management application with user authentication, task categorization, and deadline reminders. Implemented drag-and-drop functionality.',
            description: [],
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Authentication'],
            links: {
                github: 'https://github.com/username/task-app',
                live: 'https://yourtaskapp.com'
            }
        },
        {
            id: 'proj3',
            title: 'SimpleDB',
            period: 'June 2024',
            summary: 'Created a comprehensive UI design for an e-commerce platform. Designed user flows, wireframes, and high-fidelity mockups.',
            description: [],
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj4',
            title: 'Tic-Tac-Toe',
            period: 'May 2025',
            summary: 'Created a comprehensive UI design for an e-commerce platform. Designed user flows, wireframes, and high-fidelity mockups.',
            description: [],
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj5',
            title: 'Dennyz.com',
            period: 'May 2025 - Present',
            summary: 'Created a comprehensive UI design for an e-commerce platform. Designed user flows, wireframes, and high-fidelity mockups.',
            description: [],
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj6',
            title: 'QuizMe',
            period: 'March 2024',
            summary: 'Created a comprehensive UI design for an e-commerce platform. Designed user flows, wireframes, and high-fidelity mockups.',
            description: [],
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj7',
            title: 'Central Limit Theorem',
            period: 'March 2025',
            summary: 'Created a comprehensive UI design for an e-commerce platform. Designed user flows, wireframes, and high-fidelity mockups.',
            description: [],
            technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
    ];

    return (
        <div className="experience-container">
            <div className="tabs-container">
                <div className="tabs-wrapper">
                    <button
                        className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        <Briefcase className="tab-button-icon"/>
                        Experience
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        <Code className="tab-button-icon"/>
                        Projects
                    </button>
                </div>
            </div>

            <div className="item-list">
                {activeTab === 'experience' ? (
                    experiences.map((exp) => (
                        <div key={exp.id} className="item-card">
                            <div className="item-header">
                                <div>
                                    <h3 className="item-title">{exp.role}</h3>
                                    <div className="item-subtitle">
                                        <span className="company">{exp.company}</span> • {exp.location}
                                    </div>
                                    <div className="item-period">{exp.period}</div>
                                </div>
                                <button
                                    onClick={() => toggleExpand(exp.id)}
                                    className="expand-button"
                                >
                                    {expandedItems[exp.id] ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                                </button>
                            </div>

                            {expandedItems[exp.id] && (
                                <div className="item-details">
                                    <b className="item-description">{exp.summary}</b>
                                    <ul className="item-description-list">
                                        {exp.description.map((point, index) => (
                                            <li key={index} className='item-description-point'>{point}</li>))}
                                    </ul>
                                    <div className="tech-container">
                                        {exp.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    projects.map((project) => (
                        <div key={project.id} className="item-card">
                            <div className="item-header">
                                <div>
                                    <h3 className="item-title">{project.title}</h3>
                                    <div className="item-period">{project.period}</div>
                                </div>
                                <button
                                    onClick={() => toggleExpand(project.id)}
                                    className="expand-button"
                                >
                                    {expandedItems[project.id] ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                                </button>
                            </div>

                            {expandedItems[project.id] && (
                                <div className="item-details">
                                    <b className="item-description">{project.summary}</b>
                                    <ul className="item-description-list">
                                        {project.description.map((point, index) => (
                                            <li key={index} className="item-description-point">{point}</li>
                                        ))}
                                    </ul>
                                    <div className="tech-container">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                    <div className="links-container">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <Github size={16} className="link-icon"/>
                                                GitHub Repo
                                            </a>
                                        )}
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <ExternalLink size={16} className="link-icon"/>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ExperienceAndProjects;