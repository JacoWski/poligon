import React from "react";

import 'components/Card/Card.css';

const Title = ({ title }) => {
    return(
        <div className="title">
            <p id="card-title">{title}</p>
        </div>
    );
};

export default Title;
