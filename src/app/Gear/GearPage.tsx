import React, {JSX, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './GearPage.css';

// Define interfaces outside the component for better readability
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

export const GearPage = (): JSX.Element => {
    const navigate = useNavigate();

    // Item Component with more compact styling
    const Item: React.FC<ItemProps> = ({title, description, imageUrl}) => {
        return (
            <div className="item">
                <div className="item-info">
                    <h4 className="item-title">{title}</h4>
                    <p className="item-description">{description}</p>
                </div>
                {/*<div className="item-image">*/}
                {/*    {imageUrl ? (*/}
                {/*        <img src={imageUrl} alt={title} />*/}
                {/*    ) : (*/}
                {/*        <img src="/api/placeholder/40/40" alt={title} />*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        );
    };

    // Section Component with improved toggle functionality
    const Section: React.FC<SectionProps> = ({title, items, defaultOpen = false}) => {
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
                {isOpen && (
                    <div className="section-content">
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <Item
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                />
                            ))
                        ) : (
                            <div className="empty-section">No items added yet</div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    // Clean up the duplicate and empty data
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
                            title: "Mouse",
                            description: "Logitech G502 Light Speed"
                        },
                    ]
                },
                {
                    title: "Desktop",
                    items: [
                        {
                            title: "Monitor 1",
                            description: "LG 34WP60C-B 34-Inch UltraWide QHD"
                        },
                        {
                            title: "Monitor 2",
                            description: "LG 27GN800-B UltraGear 27 inch QHD"
                        },
                    ]
                },
                {
                    title: "PC Specs",
                    items: [
                        {
                            title: "CPU",
                            description: "Intel I5-12400"
                        },
                        {
                            title: "GPU",
                            description: "NVIDIA RTX 3060 Ti"
                        },
                        {
                            title: "RAM",
                            description: "32GB DDR4 3600MHz"
                        },
                        {
                            title: "Motherboard",
                            description: "GIGABYTE B660 AORUS Master DDR4"
                        }
                    ]
                },
            ]
        },
        {
            title: "Sports",
            sections: [
                {
                    title: "Snowboarding",
                    items: [
                        {
                            title: "Snowboard",
                            description: "Capita"
                        },
                        {
                            title: "Helmet",
                            description: "Giro Grid MIPS Helmet"
                        },
                        {
                            title: "Goggles",
                            description: "Oakley Flight Tracker L Goggles"
                        },
                        {
                            title: "Boot",
                            "description": "Burton Ruler Step On Snowboard Boots"
                        }
                    ]
                },
                {
                    title: "Golf",
                    items: [
                        {
                            title: "Irons",
                            description: "Mizuno JPX925 Hot Metal High Launch Golf Club Set"
                        },
                        {
                            title: "Driver",
                            description: "Coming Soon!"
                        },
                        {
                            title: "Golf Bag",
                            description: "Vessel Golf Bag"
                        }
                    ]
                },

            ]
        },
        {
            title: "Skin Care",
            sections: [
                {
                    title: "Cleanser",
                    items: [
                        {
                            title: "Foam Cleanser",
                            description: "Roundlab 1025 Dokdo Cleanser"
                        },
                        {
                            title: "Oil Cleanser",
                            description: "Roundlab 1025 Dokdo Oil Cleanser"
                        },
                        {
                            title: "Foaming Cleanser",
                            description: "InnisFree Volcanic BHA Pore Cleansing Foam"
                        },
                        {
                            title: "Foaming Cleanser",
                            description: "Obagi Nu Derm 01 Foaming Cleanser"
                        },
                    ]
                },
                {
                    title: "Toner",
                    items: [
                        {
                            title: "Gel Toner",
                            description: "ISov Sorex Gel Moisturizing Toner"
                        }
                    ]
                },
                {
                    title: "Moisturizer",
                    items: [
                        {
                            title: "Gentle Moisturizer",
                            description: "Neutrogena Hydro Boost Water Gel"
                        },
                        {
                            title: "Oil-Free Moisturizer",
                            description: "CosRx Birch Sap Daily Acne Facial Moisturizer"
                        }
                    ]
                },
                {
                    title: "Sun Care",
                    items: [
                        {
                            title: "Sunscreen",
                            description: "La Roche-Posay Anthelios SPF 100"
                        },
                        {
                            title: "Sunscreen",
                            description: "Roundlab Birch Moisturizing Sunscreen SPF 50"
                        },
                    ]
                }
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
                            description: "Peak Design Everyday V2"
                        },
                        {
                            title: "Sunglasses",
                            description: "Gentle-Monster"
                        },
                        {
                            title: "Headphones",
                            description: "Sony WH-1000XM5"
                        },
                        {
                            title: "Earbuds",
                            description: "AirPods"
                        },
                        {
                            title: "Phone",
                            description: "IPhone 13 Pro"
                        },
                    ]
                }
            ]
        },
    ];

    // Grid-based Category Component for better space utilization
    const Category: React.FC<CategoryProps> = ({title, sections}) => {
        return (
            <div className="category">
                <h2 className="category-title">{title}</h2>
                <div className="sections-grid">
                    {sections.map((section, index) => (
                        <Section
                            key={index}
                            title={section.title}
                            items={section.items}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="gear-page-container">
            <div className="navbar">
                <button className="btn" onClick={() => navigate("/")}>Home</button>
                <button className="btn" onClick={() => navigate("/about")}>About</button>
                <button className="btn" onClick={() => navigate("/portfolio")}>Portfolio</button>
            </div>
            <div className="stuff-showcase">
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <Category
                            key={index}
                            title={category.title}
                            sections={category.sections}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};