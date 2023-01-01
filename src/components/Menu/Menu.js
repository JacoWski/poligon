import React from "react";

import '../../App.css';

const Menu = ({ children }) => {
    return(
        <div className="menu">
            <nav>
                {children}
            </nav>
        </div>
    );
};

export default Menu;
