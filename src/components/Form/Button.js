import React from "react";
import PropTypes from 'prop-types';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import Icon from "../Icons/Icon";
import { Colors } from "../../common";

const Button = ({ label, bgColor, color }) => {
    const styles = {
        backgroundColor: Colors[bgColor],
        color: Colors[color],
        border: 'none',
        padding: '10px 15px',
        borderRadius: 5,
        width: 'auto'
    };
    return <button style={styles}><Icon/><span>{label}</span></button>;
};

Button.propType = {
    label: PropTypes.string,
    bgColor: PropTypes.oneOf(Colors),
    color: PropTypes.oneOf(Colors),
    icon: PropTypes.oneOf(SolidIcons)
};

Button.defaultProps = {
    bgColor: 'wetAsphalt',
    color: 'clouds',
    icon: SolidIcons.faUser
};

export default Button;
