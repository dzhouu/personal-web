import React, { JSX, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './GearPage.css';
import AllRightReserveComponent from "../All-Right-Reserve/All-Right-Reserve-Component";

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
                        <img src="/api/placeholder/40/40" alt={title} />
                    )}
                </div>
            </div>
        );
    };

    // Section Component with improved toggle functionality
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
                        {
                            title: "Monitor 1",
                            description: "LG 34WP60C-B 34-Inch UltraWide QHD"
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
                            description: "AMD Ryzen 9 5900X"
                        },
                        {
                            title: "GPU",
                            description: "NVIDIA RTX 3080 Ti"
                        },
                        {
                            title: "RAM",
                            description: "32GB DDR4 3600MHz"
                        }
                    ]
                },
                {
                    title: "Office Furniture",
                    items: [
                        {
                            title: "Desk",
                            description: "Walnut wood, adjustable height"
                        },
                        {
                            title: "Chair",
                            description: "Ergonomic mesh office chair"
                        }
                    ]
                }
            ]
        },
        {
            title: "Essentials",
            sections: [
                {
                    title: "Lighting",
                    items: [
                        {
                            title: "Desk Lamp",
                            description: "Adjustable LED desk lamp"
                        },
                        {
                            title: "Key Light",
                            description: "Elgato Key Light Air"
                        }
                    ]
                },
                {
                    title: "Microphones",
                    items: [
                        {
                            title: "Mic",
                            description: "Blue Yeti X"
                        }
                    ]
                }
            ]
        },
        {
            title: "Skin Care",
            sections: [
                {
                    title: "Cleanser",
                    items: [
                        {
                            title: "Morning",
                            description: "CeraVe Hydrating Cleanser"
                        },
                        {
                            title: "Evening",
                            description: "La Roche-Posay Purifying Cleanser"
                        }
                    ]
                },
                {
                    title: "Toner",
                    items: [
                        {
                            title: "Daily",
                            description: "Thayers Witch Hazel Toner"
                        }
                    ]
                },
                {
                    title: "Moisturizer",
                    items: [
                        {
                            title: "Day",
                            description: "CeraVe Daily Moisturizing Lotion"
                        },
                        {
                            title: "Night",
                            description: "Neutrogena Hydro Boost"
                        }
                    ]
                },
                {
                    title: "Sun Care",
                    items: [
                        {
                            title: "Daily",
                            description: "La Roche-Posay Anthelios SPF 50"
                        }
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
                            title: "Wallet",
                            description: "Slim minimalist wallet"
                        }
                    ]
                }
            ]
        },
    ];

    // Grid-based Category Component for better space utilization
    const Category: React.FC<CategoryProps> = ({ title, sections }) => {
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