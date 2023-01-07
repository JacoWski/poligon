import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Icon = ({ iconName }) => {
    return(
        <FontAwesomeIcon icon={iconName} style={{marginRight: 0}} fixedWidth/>
    );
};

Icon.propsType = {
    iconName: PropTypes.oneOf(SolidIcons)
};

Icon.defaultProps = {
    iconName: SolidIcons.faUser
};

export default Icon;
