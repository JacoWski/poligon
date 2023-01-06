import React from "react";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

import { Button } from "components/Form";

const Table = ({props}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Lp</th>
                    <th>Nazwa</th>
                    <th>Kwota</th>
                    <th>Kategoria</th>
                    <th>Usuń</th>
                </tr>
            </thead>
            <tbody>
                {props.map((p, i) => (
                    <tr key={`${p.name}-${p.id}`}>
                        <td>{i + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.amount}</td>
                        <td>{p.category}</td>
                        <td><Button icon={faTrashCan}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
