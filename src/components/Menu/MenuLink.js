import React from "react";
import PropTypes from 'prop-types';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import { Button } from "components/Form";

const MenuLink = ({ to, isActive, children, icon }) => {
    return(
        <li>
            <a href={to}>
                <Button label={children} disabled={!isActive} icon={icon} textAlign={'left'} />
            </a>
        </li>
    );
};

MenuLink.propTypes = {
    icon: PropTypes.oneOf(SolidIcons)
};

export default MenuLink;
