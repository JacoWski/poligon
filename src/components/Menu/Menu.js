import React from "react";

import '../../App.css';

const Menu = ({ children }) => {
    return(
        <div className="menu">
            <ul style={{display: 'block'}}>
                {children}
            </ul>
        </div>
    );
};

export default Menu;
