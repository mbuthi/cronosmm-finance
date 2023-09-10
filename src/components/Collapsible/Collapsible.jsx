import React, { useState } from "react";
import "./Collapsible.css";

const Collapsible = ({ children, headerContent, absolutePosition = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentStyle = {
        maxHeight: isOpen ? `${children.props.children.length * 200}px` : '0',
        position: absolutePosition ? 'absolute' : 'relative'
    };

    return (
        <div className="collapsible-container">
            <div
                className={`collapsible ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {headerContent}
            </div>
            <div className="content" style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

export default Collapsible;
