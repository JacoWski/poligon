import React from "react";
import PropTypes from 'prop-types';

import { Colors } from "common";

const Input = ({ bgColor, color, borderSize, borderRadius, borderColor }) => {
    const styles = {
        backgroundColor: Colors[bgColor],
        color: Colors[color],
        border: `${borderSize}px Solid ${borderColor}`,
        radius: borderRadius
    };
    return <input style={styles} type='text'/>;
};

Input.propsType = {
    bgColor: PropTypes.oneOf(Colors),
    color: PropTypes.oneOf(Colors),
    borderSize: PropTypes.number,
    borderRadius: PropTypes.number,
    borderColor: PropTypes.oneOf(Colors)
};

export default Input;
