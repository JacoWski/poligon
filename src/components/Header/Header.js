import React from "react";

import Logo from "components/Header/Logo";
import Menu from "components/Header/Menu";
import NavLink from "components/Header/NavLink";

const Header = () => {
    return(
        <div>
            <Logo/>
            <Menu>
                <NavLink to={'/'} label={'Link 1'}/>
                <NavLink to={'/'} label={'Link 2'}/>
                <NavLink to={'/'} label={'Link 3'}/>
            </Menu>
        </div>
    );
};

export default Header;
