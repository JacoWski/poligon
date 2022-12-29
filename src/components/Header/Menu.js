import React from "react";

const styles = {
    marginBottom: 10,
    display: 'inline'
};

const Menu = ({ children }) => {
    return(
        <nav style={styles}>
            {children}
        </nav>
    );
};

export default Menu;
