import React from 'react';
import {MapPin} from 'lucide-react';
import './Profile.css'; // Import the CSS file
import profilePic from './profile-pic.jpeg';

// Define interface for profile data
interface ProfileData {
    name: string;
    username: string;
    interests: string[];
    location: string;
}

// You can replace this with your actual information
const profileData: ProfileData = {
    name: "Denny Zhou",
    username: "@dzhou11",
    interests: ["Food", "Tech", "Travel", "Health"],
    location: "Seattle, WA"
};

const ProfileHeader: React.FC = () => {
    return (
        <div className="profile-container">
            {/* Profile Image */}
            <div className="profile-image-container">
                {/* Replace with your own image */}
                <div className="profile-image-wrapper">
                    <img
                        src={profilePic}
                        className="profile-image"
                        alt={'hi'}
                    />
                </div>
            </div>

            {/* Name */}
            <h1 className="profile-name">{profileData.name}</h1>

            {/* Username */}
            <p className="profile-username">{profileData.username}</p>

            {/* Interests */}
            <div className="interests-container">
                {profileData.interests.map((interest: string, index: number) => (
                    <span key={index} className="interest-item">
            {interest}
                        {index < profileData.interests.length - 1 &&
                            <span className="interest-separator">•</span>
                        }
          </span>
                ))}
            </div>
            {/* Location */}
            <div className="location-container">
                <MapPin size={16} className="location-icon"/>
                <span>{profileData.location}</span>
            </div>
        </div>
    );
};

export default ProfileHeader;