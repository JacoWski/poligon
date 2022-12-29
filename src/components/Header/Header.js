import React from "react";

import Logo from "./Logo";
import Button from "../Button";
import Menu from "./Menu";
import NavLink from "./NavLink";

const Header = () => {
    return(
        <div>
            <Logo/>
            <Menu>
                <NavLink to={'/'} label={'Link 1'}/>
                <NavLink to={'/'} label={'Link 2'}/>
                <NavLink to={'/'} label={'Link 3'}/>
            </Menu>
            <Button label={'Przycisk testowy'} bgColor={'pumpkin'} icon={'faUser'}/>
        </div>
    );
};

export default Header;
