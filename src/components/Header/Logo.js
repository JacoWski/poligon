import React from "react";

import imgLogo from './jaco-logo.png';

const styles = {
    height: 'auto',
    width: 250
};

const Logo = () => {
    return <img src={imgLogo} alt={'logo'} {...styles}/>;
};

export default Logo;
