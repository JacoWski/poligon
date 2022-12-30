import React from "react";
import PropTypes from 'prop-types';

import { Colors } from "../../common";

const Textarea = ({ bgColor, color, borderSize, borderRadius, borderColor, children }) => {
    const styles = {
        backgroundColor: Colors[bgColor],
        color: Colors[color],
        border: `${borderSize}px Solid ${borderColor}`,
        radius: borderRadius
    };
    return <textarea style={styles} rows="4" cols="50">
        {children}
    </textarea>;
};

Textarea.propsType = {
    bgColor: PropTypes.oneOf(Colors),
    color: PropTypes.oneOf(Colors),
    borderSize: PropTypes.number,
    borderRadius: PropTypes.number,
    borderColor: PropTypes.oneOf(Colors)
};

export default Textarea;
