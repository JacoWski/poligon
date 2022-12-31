import React from "react";
import PropTypes from 'prop-types';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

import Icon from "components/Icons";
import { Colors } from "common";

const Placements = ['left', 'right'];

const Button = ({ label, bgColor, color, icon, handler, placement }) => {
    const styles = {
        backgroundColor: bgColor,
        color: color,
        border: 'none',
        padding: '10px 15px',
        borderRadius: 5,
        width: 'auto',
        cursor: 'pointer',
        float: !placement ? 'left' : placement
    };
    return (
        <button style={styles} onClick={handler}>
            <Icon iconName={icon}/>
            <span>{label}</span>
        </button>
    );
};

Button.propType = {
    label: PropTypes.string,
    bgColor: PropTypes.oneOf(Colors),
    color: PropTypes.oneOf(Colors),
    icon: PropTypes.oneOf(SolidIcons),
    handler: PropTypes.func,
    placement: PropTypes.oneOf(Placements)
};

Button.defaultProps = {
    bgColor: Colors.inherit,
    color: Colors.black
};

export default Button;
