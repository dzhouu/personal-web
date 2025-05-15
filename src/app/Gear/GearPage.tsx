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
                    title: "Keyboards / Mice",
                    items: [
                        {
                            title: "Keyboard 1",
                            description: "Keychron Q2 Max",
                        },
                        {
                            title: "Keyboard 2",
                            description: "NuPhy Halo 65",
                        },
                        {
                            title: "Mice 1 ",
                            description: "Logitech G502 Light Speed"
                        },
                    ]
                },
                {
                    title: "Desktop",
                    items: [
                        {
                            title: "Monitor 1",
                            description: "LG 34WP60C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440)"
                        },
                        {
                            title: "Monitor 2",
                            description: "LG 27GN800-B UltraGear 27 inch QHD"
                        }
                    ]
                },
                {
                    title: "PC Specs",
                    items: [
                        {
                            title: "CPU",
                            description: "Walnut wood, adjustable height"
                        },
                        {
                            title: "GPU",
                            description: "Walnut wood, adjustable height"
                        },
                        {
                            title: "CPU",
                            description: "Walnut wood, adjustable height"
                        }
                    ]
                },
                {
                    title: "Empty Space 1",
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
            title: "Essentials",
            sections: [
                {
                    title: "Skin Care",
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
          title: "Skin Care",
          sections: [
              {
                title: "Toner",
                items: [
                    {
                        title: "ISov",
                        description: "Hello",
                    },
                ]
              },
              {
                  title: "Moisturizer",
                  items: [
                      {
                          title: "ISov",
                          description: "Hello",
                      },
                  ]
              },
              {
                  title: "Sun Care",
                  items: [
                      {
                          title: "ISov",
                          description: "Hello",
                      },
                  ]
              },
              {
                  title: "Cleanser",
                  items: [
                      {
                          title: "ISov",
                          description: "Hello",
                      },
                  ]
              },
          ]
        },
        {
            title: "Other",
            sections: [
                {
                    title: "Everyday Carry",
                    items: [
                        {
                            title: "Backpack",
                            description: "Peak Design Backpack Everyday V2",
                        },
                    ]
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