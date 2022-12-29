import React from "react";

const NavLink = ({ to, label }) => {
    return(
        <a href={to}>{label}</a>
    );
};

export default NavLink;
