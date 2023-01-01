import React from "react";

import Employees from "components/Employees";
import data from 'DataFactory/employeesData';

const Article = () => {
    return(
        <div className="article">
            {data.map((e) => (
                <Employees name={e.name}
                            familyName={e.familyName}
                            age={e.age}
                            wage={e.wage}
                            position={e.position}
                 />
            ))}
        </div>
    );
};

export default Article;
