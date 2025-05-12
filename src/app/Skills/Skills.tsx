import React from 'react';

// SkillCard component to display individual skill
const SkillCard: React.FC<{ skill: string; description: string; icon?: string }> = ({ skill, description, icon }) => {
    return (
        <div className="skill-card border rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white">
            {icon && <img src={icon} alt={`${skill} icon`} className="w-16 h-16 mb-4 mx-auto" />}
            <h3 className="text-xl font-semibold text-center text-gray-800">{skill}</h3>
            <p className="text-sm text-gray-600 text-center mt-2">{description}</p>
        </div>
    );
};

// InternshipCard component to display individual internship
const InternshipCard: React.FC<{
    company: string;
    role: string;
    duration: string;
    description: string;
}> = ({ company, role, duration, description }) => {
    return (
        <div className="internship-card border rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{role} <span className="text-gray-500">@ {company}</span></h3>
            <p className="text-sm text-gray-500 mt-1">{duration}</p>
            <p className="text-sm text-gray-600 mt-3">{description}</p>
        </div>
    );
};

const ProjectCard: React.FC<{
    name: string;
    duration: string;
    description: string;
}> = ({ name, duration, description }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {duration}</p>
            <p>{description}</p>
        </div>
    );
};


// SkillsPage component
export const SkillsPage: React.FC = () => {
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

    return (
        <div className="skills-page container mx-auto px-4 py-12 bg-gray-50" style={{textAlign:"center"}}>
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill.skill} description={skill.description}/>
                ))}
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-900 mt-16 mb-8">Internships</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {internships.map((internship, index) => (
                    <InternshipCard
                        key={index}
                        company={internship.company}
                        role={internship.role}
                        duration={internship.duration}
                        description={internship.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsPage;
