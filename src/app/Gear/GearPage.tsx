import React, {JSX, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './GearPage.css'

export const GearPage = (): JSX.Element => {
    const navigate = useNavigate();

    interface ItemProps {
        title: string;
        description: string;
        imageUrl?: string;
    }

    interface SectionProps {
        title: string;
        items: ItemProps[];
        defaultOpen?: boolean;
    }

    interface CategoryProps {
        title: string;
        sections: SectionProps[];
    }

// Item Component
    const Item: React.FC<ItemProps> = ({ title, description, imageUrl }) => {
        return (
            <div className="item">
                <div className="item-info">
                    <h4 className="item-title">{title}</h4>
                    <p className="item-description">{description}</p>
                </div>
                <div className="item-image">
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} />
                    ) : (
                        <img src="/api/placeholder/50/50" alt={title} />
                    )}
                </div>
            </div>
        );
    };

    // Section Component
    const Section: React.FC<SectionProps> = ({ title, items, defaultOpen = false }) => {
        const [isOpen, setIsOpen] = useState(defaultOpen);

        const toggleSection = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className={`section ${isOpen ? 'active' : ''}`}>
                <div className="section-header" onClick={toggleSection}>
                    <h3 className="section-title">{title}</h3>
                    <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
                </div>
                <div className="section-content">
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </div>
        );
    };
    // Sample data structure
    const categories: CategoryProps[] = [
        {
            title: "Work & Play",
            sections: [
                {
                    title: "Keyboards",
                    items: [
                        {
                            title: "Lofree Flow",
                            description: "10% OFF code: calvinxli",
                            imageUrl: "/images/lofree-flow.jpg" // Replace with actual image path
                        },
                        {
                            title: "Keydous NJ80-AP",
                            description: "brass plate, g pro brown switches",
                            imageUrl: "/images/keydous.jpg" // Replace with actual image path
                        },
                        {
                            title: "Keychron Q1 HE",
                            description: "shell white version",
                            imageUrl: "/images/keychron.jpg" // Replace with actual image path
                        }
                    ]
                },
                {
                    title: "Desktop",
                    items: [
                        {
                            title: "Monitor Stand",
                            description: "Walnut wood, adjustable height"
                        }
                    ]
                },
                {
                    title: "Lighting",
                    items: []
                },
                {
                    title: "Office Furniture",
                    items: []
                },
                {
                    title: "PC Specs",
                    items: []
                }
            ]
        },
        {
            title: "Content",
            sections: [
                {
                    title: "Cameras",
                    items: []
                },
                {
                    title: "Lighting",
                    items: []
                },
                {
                    title: "Microphones",
                    items: []
                }
            ]
        },
        {
            title: "Other",
            sections: [
                {
                    title: "Everyday Carry",
                    items: []
                }
            ]
        }
    ];

// Category Component
    const Category: React.FC<CategoryProps> = ({ title, sections }) => {
        return (
            <div className="category">
                <h2 className="category-title">{title}</h2>
                {sections.map((section, index) => (
                    <Section
                        key={index}
                        title={section.title}
                        items={section.items}
                        defaultOpen={index === 0} // First section is open by default
                    />
                ))}
            </div>
        );
    };

    return (
        <div>
            <div className="navbar">
                <button className="btn" onClick={() => navigate("/")}>Home</button>
                <button className="btn" onClick={() => navigate("/about")}>About</button>
                <button className="btn" onClick={() => navigate("/portfolio")}>Portfolio</button>
            </div>
            <div className="stuff-showcase">
                {categories.map((category, index) => (
                    <Category
                        key={index}
                        title={category.title}
                        sections={category.sections}
                    />
                ))}
            </div>
        </div>
    );
};