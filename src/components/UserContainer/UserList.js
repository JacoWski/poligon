import React from "react";

const UserList = React.forwardRef((props, ref) => {
    const { data } = props;
    return(
        <table ref={ref}>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((h, i) => (
                        <th key={`header-${i}`}>{h.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((u, i) => (
                    <tr key={`body-row-${i}`}>
                        <td>{u.name}</td>
                        <td>{u.surname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});

export default UserList;
