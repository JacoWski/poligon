import React from "react";

import 'components/Card/Card.css';
import { Title } from "components/Card";
import Content from "components/Card/Content";

const Card = ({ title, intro, showMore, content }) => {
    return(
        <div className="card">
            <Title title={title} />
            <Content intro={intro} content={content} showMore={showMore}>
                {content}
            </Content>
        </div>
    );
};

export default Card;
