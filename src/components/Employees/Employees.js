import React, { useState } from "react";

import 'components/Employees/Employees.css';
import { Caption } from 'components/Employees';

const Employees = (props) => {
    const { name, familyName, age, wage, position } = props;
    const [ showDetails, setShowDetails ] = useState(false);
    return(
        <div className="emp-body">
            <div id="left-side" onClick={() => setShowDetails(!showDetails)}>
                    <Caption label={'imię'} text={name} />
                    <Caption label={'nazwisko'} text={familyName} />
            </div>
            <div id="right-side">
                {showDetails && <>
                    <Caption label={'wiek'} text={age} />
                    <Caption label={'płaca'} text={wage} />
                    <Caption label={'stanowisko'} text={position} />
                </>}
            </div>
        </div>
    );
};

export default Employees;
