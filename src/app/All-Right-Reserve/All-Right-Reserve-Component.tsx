import React from 'react';
import './All-Right-Reserve.css';

interface CopyrightFooterProps {
  // Optional props can be added here if needed in the future
  className?: string;
}

const CopyrightFooter: React.FC<CopyrightFooterProps> = ({ className = '' }) => {
  return (
    <div className={`copyright-footer ${className}`}>
      <p className="copyright-text">
        © {new Date().getFullYear()} Denny Zhou · All Rights Reserved
      </p>
    </div>
  );
};

export default CopyrightFooter;