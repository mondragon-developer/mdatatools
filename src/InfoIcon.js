import React, { useState } from "react";

const InfoIcon = ({ info }) => {
    const [hover, setHover] = useState(false);

    return(
        <div className="info-icon-container"
        // Set hover to true on mouse enter
        onMouseEnter={() => setHover(true)}
        // Set hover to false on mouse leave
        onMouseLeave={() => setHover(false)}
        >
        {/* Info icon */}
        <span className="info-icon">i</span>
        {/* Conditionally render the info popup on hover */}
        {hover && <div className="info-popup">{info}</div>}
        </div>
    );
};

export default InfoIcon;