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
            summary: 'Data and Product Engineer for the Mass Tort Product team where I spearheaded the re-design of the Product pipeline process for Report and Overview case generation',
            description:
                [
                    'Refactored internal JSON metadata for various stakeholders',
                    "Enhanced development efficiency and flexibility in schema management by engineering a full-stack Schema FunctionEditor that enabled developers to create, retrieve, and edit schema functions stored in DynamoDB using GraphQL APIs",
                    "Led the implementation/deployment of automated pipeline processes, achieving an 87.5% reduction in processing time per case. Architected a fault-tolerant, concurrent system that preserved execution states by leveraging TemporalIO OpenAI fine-tuned models, and AWS S3 to generate, process, and integrate case report & overviews."
                ],
            technologies: ['Python', 'React', 'Typescript', 'Natural Language Processing', 'TemporalIO', 'Amazon Web Services', 'Git']
        },
    ];

    const projects: Project[] = [
        {
            id: 'proj1',
            title: 'Sharded Transactional Key-Value Store',
            period: 'December 2023',
            summary: 'Implemented a KV-Store that is highly scalable',
            description: ["Wrote and implemented a design documentation of a fault-tolerant sharded key-value store that allowed cross-group\n" +
            "transactions and handled reconfiguration.", "Integrated a Shard Master utilizing multi-paxos with dynamic reconfiguration and load balancing of shards among\n" +
            "replica groups.", "Extended system’s functionality by implementing two-phase commit with locking, deadlock-free behavior, and\n" +
            "guaranteeing linearizability of all transactions, including concurrent re-configurations."],
            technologies: ['Java', 'Lombok', 'Distributed Systems'],
            links: {
                github: 'https://github.com/username/portfolio',
                live: 'https://yourportfolio.com'
            }
        },
        {
            id: 'proj2',
            title: 'Document Search Engine',
            period: 'June 2023',
            summary: 'Built a Document Search Engine called 333gle that enables users to query for files stored on disk that contain specific words or phrases',
            description: ["Developed a document search engine and front-end web server built on top of POSIX that is capable of processing\n" +
            "word inputs to match a pre-populated database.", "Implemented a doubly linked list and chaining hash table through a program capable of modifying index files in\n" +
            "network-byte order and a directory crawler to create inverted indices stored on disk.", "Utilized multi-threaded networking to allow multiple clients to interact simultaneously with search engine and\n" +
            "handle over 300 queries per second."],
            technologies: ['C', 'C++', 'POSIX'],
            links: {
                github: 'https://github.com/username/task-app',
                live: 'https://yourtaskapp.com'
            }
        },
        {
            id: 'proj3',
            title: 'SimpleDB',
            period: 'June 2024',
            summary: 'Created a Simple Database called SimpleDB that is capable of storing data.',
            description: ["Developed core components of a database management system, including query parsing, table operators, relational\n" +
            "algebra operators, buffer pool, and data management.", "Implemented a buffer pool with caching mechanisms and an eviction policy to improve performance, ensuring\n" +
            "transactional safety through a synchronized Log Manager.", "Extended the system to support concurrent transactions using Strict 2PL with a timeout-based deadlock detection\n" +
            "mechanism for safe concurrency and recovery."],
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
            summary: 'Command Line Game allowing users to play Tic Tac Toe.',
            description: ["Utilized Object Oriented Programming Design Patterns to implement the class", "Enabled users to interact by writing to Command Line and receiving and giving Input/Output"],
            technologies: ['Python', 'CL', "Object Oriented Programming"],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj5',
            title: 'Dennyz.com',
            period: 'May 2025 - Present',
            summary: 'The Website you are currently on :)',
            description: [],
            technologies: ['TypeScript', "React", 'UI/UX Design', 'Prototyping', "Routes"],
            links: {
                github: null,
                live: 'https://www.dennyz.com'
            }
        },
        {
            id: 'proj6',
            title: 'QuizMe',
            period: 'March 2024',
            summary: 'A Comprehensive App that enables users to create and study Flash Cards',
            description: ["Developed a dynamic digital application utilizing React and TypeScript, enabling users to create, manage, and\n" +
            "study customizable flashcard sets for enhanced learning experiences.", "Successfully integrated REST API communications for seamless data persistence and retrieval, while implementing\n" +
            "error handling and input validation for improved reliability on the back-end utilizing Express.", "Conducted thorough Unit testing to ensure all components and functionalities (both front-end and back-end) work\n" +
            "as intended, delivering a high-quality product."],
            technologies: ['TypeScript', 'React', 'Express', "Routing", "RestAPI"],
            links: {
                github: null,
                live: 'https://www.figma.com/file/example'
            }
        },
        {
            id: 'proj7',
            title: 'Central Limit Theorem',
            period: 'March 2025',
            summary: 'The Central Limit Theorem in detail',
            description: [""],
            technologies: ['HTML/CSS', 'UI/UX Design', 'JavaScript', "ObservableHQ", "Vega-Lite"],
            links: {
                github: null,
                live: 'https://clt-statistics-a5e31b.pages.cs.washington.edu/'
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
                                    <h3 className="item-title-gear">{exp.role}</h3>
                                    <div className="item-subtitle-exp">
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
                                    <b className="item-description-exp">{exp.summary}</b>
                                    <ul className="item-description-list-exp">
                                        {exp.description.map((point, index) => (
                                            <li key={index} className='item-description-point-exp'>{point}</li>))}
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
                                    <h3 className="item-title-gear">{project.title}</h3>
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
                                    <b className="item-description-exp">{project.summary}</b>
                                    <ul className="item-description-list-exp">
                                        {project.description.map((point, index) => (
                                            <li key={index} className="item-description-point-exp">{point}</li>
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