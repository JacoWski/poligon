import React from "react";

const Caption = ({ label, text, orientation }) => {
    return(
        <>
            <p><strong>{label}:</strong></p>
            <p>{text}</p>
        </>
    );
};

export default Caption;
